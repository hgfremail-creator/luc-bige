import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SIGNS } from '@/content/signs'
import { ZodiacWheel } from '@/components/ZodiacWheel'
import { Card, Callout, Pill, Disclaimer } from '@/components/ui'

const ELEMENT_TONE: Record<string, 'feu' | 'terre' | 'air' | 'eau'> = {
  feu: 'feu', terre: 'terre', air: 'air', eau: 'eau',
}

export function ZodiacPage() {
  const [sel, setSel] = useState(SIGNS[0])

  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Le zodiaque</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Douze étapes, un seul cycle</h1>
        <p className="mt-2 max-w-2xl text-ink-300">
          Le zodiaque peut s'étudier comme un processus continu : chaque signe résout une tension
          laissée par le précédent et en ouvre une nouvelle. Après les Poissons, un nouveau Bélier.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="parchment starfield rounded-[var(--radius-card)] p-4">
          <ZodiacWheel size={380} />
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {SIGNS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSel(s)}
                className={`h-9 w-9 rounded-full border text-lg transition-colors ${
                  sel.id === s.id ? 'border-gold-400 bg-gold-400/15 text-gold-200' : 'border-gold-500/20 text-ink-300 hover:border-gold-400/40'
                }`}
                title={s.nom}
              >
                {s.glyphe}
              </button>
            ))}
          </div>
        </div>

        <motion.div key={sel.id} initial={{ y: 8 }} animate={{ y: 0 }}>
          <Card>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-3xl">{sel.glyphe} {sel.nom}</h2>
              <span className="font-sans text-sm text-ink-400">Étape {sel.ordre}/12</span>
            </div>
            <p className="mt-1 font-serif text-lg italic text-gold-200">« {sel.motCle} »</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Pill tone={ELEMENT_TONE[sel.element]}>{sel.element}</Pill>
              <Pill>{sel.mode}</Pill>
              <Pill tone="or">Maître : {sel.maitre}</Pill>
            </div>
            <p className="mt-3 text-[15px] text-ink-200">{sel.dynamiquePsychologique}</p>
            <Callout title="Question initiatique" tone="note">« {sel.questionInitiatique} »</Callout>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <Callout title="Potentiel">{sel.potentiel}</Callout>
              <Callout title="Ombre" tone="ombre">{sel.ombre}</Callout>
            </div>
            <p className="mt-2 text-[14px] text-ink-300"><strong>Chemin du héros :</strong> {sel.etapeHeros}</p>
            <Link to={`/bibliotheque/signe/${sel.id}`} className="mt-3 inline-block font-sans text-sm text-gold-400/80 hover:text-gold-300">
              Fiche complète du {sel.nom} →
            </Link>
          </Card>
        </motion.div>
      </div>

      <div>
        <h2 className="mb-3 font-display text-2xl">Le cycle, signe après signe</h2>
        <div className="flex flex-wrap items-stretch gap-2">
          {SIGNS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <Link
                to={`/bibliotheque/signe/${s.id}`}
                className="block w-40 rounded-lg border border-gold-500/15 p-2 hover:border-gold-400/50"
              >
                <div className="text-gold-300">{s.glyphe} <span className="font-display text-ink-100">{s.nom}</span></div>
                <div className="font-sans text-[10px] text-ink-400">{s.motCle}</div>
              </Link>
              <span className="text-gold-500/60">{i === SIGNS.length - 1 ? '↺' : '→'}</span>
            </div>
          ))}
        </div>
      </div>

      <Disclaimer />
    </div>
  )
}
