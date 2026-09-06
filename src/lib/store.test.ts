import { describe, it, expect, beforeEach } from 'vitest'
import { useStore, isLevelUnlocked, xpToUnlock } from './store'
import { masteryFor } from '@/content/curriculum'

beforeEach(() => useStore.getState().reset())

describe('progression', () => {
  it('completeLesson ajoute de l\'XP une seule fois par clé', () => {
    const s = useStore.getState()
    s.completeLesson('a:b', 20)
    s.completeLesson('a:b', 20)
    expect(useStore.getState().xp).toBe(20)
    expect(useStore.getState().completed).toEqual(['a:b'])
  })

  it('un palier de maîtrise franchi donne un badge', () => {
    useStore.getState().addXP(130)
    expect(masteryFor(useStore.getState().xp).current.niveau).toBe(2)
    expect(useStore.getState().badges.some((b) => b.id === 'maitrise-2')).toBe(true)
  })

  it('les niveaux au-delà du départ se débloquent avec l\'XP', () => {
    const start = 2
    expect(isLevelUnlocked(2, start, 0)).toBe(true)
    expect(isLevelUnlocked(3, start, 0)).toBe(false)
    expect(isLevelUnlocked(3, start, xpToUnlock(3, start))).toBe(true)
  })

  it('le journal ajoute et supprime des entrées', () => {
    useStore.getState().addJournal({ titre: 't', texte: 'x', tags: ['Mars'], type: 'reve' })
    const id = useStore.getState().journal[0].id
    expect(useStore.getState().journal).toHaveLength(1)
    useStore.getState().removeJournal(id)
    expect(useStore.getState().journal).toHaveLength(0)
  })

  it('recordQuiz : bonne réponse => +8 XP', () => {
    useStore.getState().recordQuiz({ quizId: 'q1', correct: true })
    expect(useStore.getState().xp).toBe(8)
    useStore.getState().recordQuiz({ quizId: 'q2', correct: false })
    expect(useStore.getState().xp).toBe(8)
  })

  it('advanceInitiation une seule fois par jour', () => {
    useStore.getState().advanceInitiation()
    useStore.getState().advanceInitiation()
    expect(useStore.getState().initiationDay).toBe(1)
  })
})
