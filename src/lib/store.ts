import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CURRICULUM, masteryFor } from '@/content/curriculum'
import type { BirthData } from './astro/chart'

export interface JournalEntry {
  id: string
  date: string
  titre: string
  texte: string
  tags: string[]
  type: 'reve' | 'intuition' | 'synchronicite' | 'reflexion' | 'symbole' | 'tarot' | 'observation'
}

export interface Badge {
  id: string
  nom: string
  obtenuLe: string
}

export interface QuizResult {
  quizId: string
  correct: boolean
  date: string
}

interface State {
  onboardingDone: boolean
  pathId: string | null
  startLevel: number
  xp: number
  completed: string[] // clés de leçons "levelSlug:ref"
  levelProgress: Record<string, number> // slug -> 0..100
  badges: Badge[]
  journal: JournalEntry[]
  charts: (BirthData & { id: string; label: string })[]
  bookmarks: string[] // routes
  annotations: Record<string, string> // route -> note
  quizHistory: QuizResult[]
  initiationDay: number
  lastInitiation: string | null

  setOnboarding: (pathId: string, startLevel: number) => void
  addXP: (n: number, reason?: string) => void
  completeLesson: (key: string, xp?: number) => void
  setLevelProgress: (slug: string, pct: number) => void
  awardBadge: (id: string, nom: string) => void
  addJournal: (e: Omit<JournalEntry, 'id' | 'date'> & { date?: string }) => void
  updateJournal: (id: string, patch: Partial<JournalEntry>) => void
  removeJournal: (id: string) => void
  saveChart: (c: BirthData, label: string) => string
  removeChart: (id: string) => void
  toggleBookmark: (route: string) => void
  setAnnotation: (route: string, note: string) => void
  recordQuiz: (r: Omit<QuizResult, 'date'>) => void
  advanceInitiation: () => void
  reset: () => void
}

const LEVEL_UNLOCK_XP = 60 // xp requis par niveau franchi au-delà du niveau de départ

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      onboardingDone: false,
      pathId: null,
      startLevel: 1,
      xp: 0,
      completed: [],
      levelProgress: {},
      badges: [],
      journal: [],
      charts: [],
      bookmarks: [],
      annotations: {},
      quizHistory: [],
      initiationDay: 0,
      lastInitiation: null,

      setOnboarding: (pathId, startLevel) =>
        set({ onboardingDone: true, pathId, startLevel }),

      addXP: (n) => {
        const before = masteryFor(get().xp).current.niveau
        set({ xp: get().xp + n })
        const after = masteryFor(get().xp).current
        if (after.niveau > before) {
          get().awardBadge(`maitrise-${after.niveau}`, `Niveau de maîtrise : ${after.nom}`)
        }
      },

      completeLesson: (key, xp = 20) => {
        if (get().completed.includes(key)) return
        set({ completed: [...get().completed, key] })
        get().addXP(xp)
      },

      setLevelProgress: (slug, pct) =>
        set({ levelProgress: { ...get().levelProgress, [slug]: Math.max(get().levelProgress[slug] ?? 0, pct) } }),

      awardBadge: (id, nom) => {
        if (get().badges.some((b) => b.id === id)) return
        set({ badges: [...get().badges, { id, nom, obtenuLe: new Date().toISOString() }] })
      },

      addJournal: (e) =>
        set({
          journal: [
            { id: crypto.randomUUID(), date: e.date ?? new Date().toISOString(), titre: e.titre, texte: e.texte, tags: e.tags, type: e.type },
            ...get().journal,
          ],
        }),
      updateJournal: (id, patch) =>
        set({ journal: get().journal.map((j) => (j.id === id ? { ...j, ...patch } : j)) }),
      removeJournal: (id) => set({ journal: get().journal.filter((j) => j.id !== id) }),

      saveChart: (c, label) => {
        const id = crypto.randomUUID()
        set({ charts: [{ ...c, id, label }, ...get().charts] })
        get().awardBadge('premier-theme', 'Premier thème calculé')
        return id
      },
      removeChart: (id) => set({ charts: get().charts.filter((c) => c.id !== id) }),

      toggleBookmark: (route) =>
        set({
          bookmarks: get().bookmarks.includes(route)
            ? get().bookmarks.filter((r) => r !== route)
            : [...get().bookmarks, route],
        }),
      setAnnotation: (route, note) =>
        set({ annotations: { ...get().annotations, [route]: note } }),

      recordQuiz: (r) => {
        set({ quizHistory: [{ ...r, date: new Date().toISOString() }, ...get().quizHistory].slice(0, 500) })
        if (r.correct) get().addXP(8)
        const total = get().quizHistory.filter((q) => q.correct).length
        if (total >= 10) get().awardBadge('quiz-10', '10 bonnes réponses au quiz')
        if (total >= 50) get().awardBadge('quiz-50', '50 bonnes réponses au quiz')
      },

      advanceInitiation: () => {
        const today = new Date().toDateString()
        if (get().lastInitiation === today) return
        set({ initiationDay: get().initiationDay + 1, lastInitiation: today })
        get().addXP(10)
      },

      reset: () =>
        set({
          onboardingDone: false, pathId: null, startLevel: 1, xp: 0, completed: [],
          levelProgress: {}, badges: [], journal: [], charts: [], bookmarks: [],
          annotations: {}, quizHistory: [], initiationDay: 0, lastInitiation: null,
        }),
    }),
    { name: 'ecole-symbolisme-v1' },
  ),
)

/** Un niveau est débloqué si son numéro <= startLevel, ou si assez d'XP accumulés. */
export function isLevelUnlocked(numero: number, startLevel: number, xp: number): boolean {
  if (numero <= startLevel) return true
  const needed = (numero - startLevel) * LEVEL_UNLOCK_XP
  return xp >= needed
}

export function xpToUnlock(numero: number, startLevel: number): number {
  if (numero <= startLevel) return 0
  return (numero - startLevel) * LEVEL_UNLOCK_XP
}

export function nextLockedLevel(startLevel: number, xp: number) {
  return CURRICULUM.find((l) => !isLevelUnlocked(l.numero, startLevel, xp))
}
