import { CURRICULUM, MASTERY_LEVELS, masteryFor } from '@/content/curriculum'
import { QUIZZES } from '@/content/quizzes'
import { useStore, isLevelUnlocked } from '@/lib/store'
import { Card, ProgressBar, Pill, Button, SectionTitle, Disclaimer } from '@/components/ui'

export function Profile() {
  const { xp, startLevel, levelProgress, badges, completed, journal, charts, quizHistory, reset } = useStore()
  const { current, next } = masteryFor(xp)
  const quizOk = quizHistory.filter((q) => q.correct).length

  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Progression</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Où j'en suis</h1>
      </div>

      <Card>
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-display text-2xl text-gold-200">Niveau {current.niveau} — {current.nom}</div>
            <div className="font-sans text-[12px] text-ink-400">{xp} XP{next ? ` · ${next.seuilXP - xp} pour « ${next.nom} »` : ' · maîtrise maximale atteinte'}</div>
          </div>
        </div>
        <div className="mt-3"><ProgressBar value={next ? ((xp - current.seuilXP) / (next.seuilXP - current.seuilXP)) * 100 : 100} /></div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {MASTERY_LEVELS.map((m) => (
            <div key={m.niveau} className={`rounded-lg border p-2 text-center ${xp >= m.seuilXP ? 'border-gold-400/40 text-gold-200' : 'border-gold-500/12 text-ink-500'}`}>
              <div className="font-sans text-[10px]">Niv. {m.niveau}</div>
              <div className="font-display text-[13px] leading-tight">{m.nom}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-4">
        <Stat n={completed.length} label="unités étudiées" />
        <Stat n={quizOk} label={`bonnes réponses / ${QUIZZES.length} questions`} />
        <Stat n={journal.length} label="notes de journal" />
        <Stat n={charts.length} label="thèmes enregistrés" />
      </div>

      <div>
        <SectionTitle kicker="Badges">{badges.length} obtenus</SectionTitle>
        {badges.length === 0 ? (
          <p className="text-ink-400">Aucun badge pour l'instant. Étudiez des unités, réussissez des quiz, calculez un thème…</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <div key={b.id} className="rounded-lg border border-gold-400/30 bg-gold-400/5 px-3 py-2">
                <div className="font-display text-[14px] text-gold-200">✦ {b.nom}</div>
                <div className="font-sans text-[10px] text-ink-400">{new Date(b.obtenuLe).toLocaleDateString('fr-FR')}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <SectionTitle kicker="Les 15 niveaux">Avancement détaillé</SectionTitle>
        <div className="space-y-1.5">
          {CURRICULUM.map((l) => {
            const unlocked = isLevelUnlocked(l.numero, startLevel, xp)
            const pct = levelProgress[l.slug] ?? 0
            return (
              <div key={l.slug} className="flex items-center gap-3">
                <span className="w-6 text-center text-gold-400/70">{unlocked ? l.glyphe : '🔒'}</span>
                <span className="w-48 shrink-0 text-[13px] text-ink-200">{l.numero}. {l.titre}</span>
                <div className="flex-1"><ProgressBar value={unlocked ? pct : 0} /></div>
                <span className="w-10 text-right font-sans text-[11px] text-ink-400">{unlocked ? `${pct}%` : '—'}</span>
              </div>
            )
          })}
        </div>
      </div>

      <Card>
        <SectionTitle>Réinitialiser</SectionTitle>
        <p className="text-[14px] text-ink-300">Efface toute la progression, le journal et les thèmes enregistrés (stockés uniquement dans ce navigateur).</p>
        <div className="mt-3">
          <Button variant="outline" onClick={() => { if (confirm('Effacer toute la progression ?')) reset() }}>Tout réinitialiser</Button>
        </div>
        <div className="mt-2 flex gap-2">
          <Pill>Données locales</Pill><Pill>Aucun compte</Pill><Pill>Aucun envoi externe</Pill>
        </div>
      </Card>

      <Disclaimer />
    </div>
  )
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <Card>
      <div className="font-display text-3xl text-gold-200">{n}</div>
      <div className="font-sans text-[12px] text-ink-400">{label}</div>
    </Card>
  )
}
