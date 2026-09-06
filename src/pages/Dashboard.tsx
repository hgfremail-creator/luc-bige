import { Link } from 'react-router-dom'
import { CURRICULUM, masteryFor } from '@/content/curriculum'
import { REGLE_PEDAGOGIQUE } from '@/content/disclaimers'
import { useStore, isLevelUnlocked, nextLockedLevel, xpToUnlock } from '@/lib/store'
import { Card, SectionTitle, ProgressBar, Button, Pill } from '@/components/ui'

export function Dashboard() {
  const { xp, startLevel, levelProgress, completed, badges, journal, initiationDay } = useStore()
  const { current, next } = masteryFor(xp)
  const locked = nextLockedLevel(startLevel, xp)
  const currentLevel =
    [...CURRICULUM].reverse().find((l) => isLevelUnlocked(l.numero, startLevel, xp) && (levelProgress[l.slug] ?? 0) < 100) ??
    CURRICULUM[startLevel - 1]

  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Tableau de bord</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Votre chemin d'aujourd'hui</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <div className="font-sans text-[11px] uppercase tracking-wider text-ink-400">Maîtrise</div>
          <div className="mt-1 font-display text-2xl text-gold-200">Niv. {current.niveau}</div>
          <div className="text-sm text-ink-300">{current.nom}</div>
          <div className="mt-3"><ProgressBar value={next ? ((xp - current.seuilXP) / (next.seuilXP - current.seuilXP)) * 100 : 100} /></div>
          <div className="mt-1 font-sans text-[10px] text-ink-400">{xp} XP{next ? ` · ${next.seuilXP - xp} → ${next.nom}` : ' · maîtrise maximale'}</div>
        </Card>
        <Card>
          <div className="font-sans text-[11px] uppercase tracking-wider text-ink-400">Progression</div>
          <div className="mt-1 font-display text-2xl text-gold-200">{completed.length}</div>
          <div className="text-sm text-ink-300">unités d'étude complétées</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Pill tone="or">{badges.length} badges</Pill>
            <Pill>{journal.length} notes</Pill>
            <Pill>Jour {initiationDay} d'initiation</Pill>
          </div>
        </Card>
        <Card>
          <div className="font-sans text-[11px] uppercase tracking-wider text-ink-400">Reprendre</div>
          <div className="mt-1 font-display text-xl text-gold-200">Niveau {currentLevel.numero}</div>
          <div className="text-sm text-ink-300">{currentLevel.titre}</div>
          <div className="mt-3"><Button to={`/parcours/${currentLevel.slug}`} variant="outline">Continuer</Button></div>
        </Card>
      </div>

      <Card className="border-gold-400/25">
        <SectionTitle kicker="La règle qui revient toujours">Quatre questions, quatre outils</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          {REGLE_PEDAGOGIQUE.map((r) => (
            <div key={r.cle} className="rounded-lg border border-gold-500/15 px-4 py-3">
              <span className="font-display text-lg text-gold-200">{r.cle}</span>
              <span className="mx-2 text-gold-500">=</span>
              <span className="font-display text-lg text-ink-100">{r.valeur}</span>
              <p className="mt-1 text-[13px] text-ink-400">{r.detail}</p>
            </div>
          ))}
        </div>
      </Card>

      <div>
        <SectionTitle kicker="Les 15 niveaux">Aperçu du parcours</SectionTitle>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CURRICULUM.map((l) => {
            const unlocked = isLevelUnlocked(l.numero, startLevel, xp)
            const pct = levelProgress[l.slug] ?? 0
            return (
              <Link
                key={l.slug}
                to={unlocked ? `/parcours/${l.slug}` : '/parcours'}
                className={`block rounded-lg border p-3 transition-colors ${
                  unlocked ? 'border-gold-500/20 hover:border-gold-400/50' : 'border-night-700 opacity-55'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] text-ink-400">Niveau {l.numero}</span>
                  <span className="text-gold-400/70">{unlocked ? l.glyphe : '🔒'}</span>
                </div>
                <div className="mt-0.5 font-display text-[15px] leading-tight text-ink-100">{l.titre}</div>
                {unlocked ? (
                  <div className="mt-2"><ProgressBar value={pct} /></div>
                ) : (
                  <div className="mt-1 font-sans text-[10px] text-ink-500">
                    {xpToUnlock(l.numero, startLevel)} XP requis
                  </div>
                )}
              </Link>
            )
          })}
        </div>
        {locked && (
          <p className="mt-3 font-sans text-xs text-ink-400">
            Prochain palier : <strong>{locked.titre}</strong> se débloque à {xpToUnlock(locked.numero, startLevel)} XP
            (vous en avez {xp}).
          </p>
        )}
      </div>
    </div>
  )
}
