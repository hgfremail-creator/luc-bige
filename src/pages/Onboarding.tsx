import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ONBOARDING_PATHS, CURRICULUM } from '@/content/curriculum'
import { useStore } from '@/lib/store'
import { Button, Disclaimer } from '@/components/ui'

export function Onboarding() {
  const [choice, setChoice] = useState<string | null>(null)
  const setOnboarding = useStore((s) => s.setOnboarding)
  const nav = useNavigate()

  const selected = ONBOARDING_PATHS.find((p) => p.id === choice)
  const startLevel = selected?.start ?? 1

  return (
    <div className="starfield min-h-screen">
      <div className="mx-auto max-w-2xl px-5 py-16">
        <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
          <div className="text-4xl text-gold-300">✦</div>
          <h1 className="mt-4 font-display text-3xl md:text-4xl">Bienvenue dans l'École du Symbolisme.</h1>
          <p className="mt-3 text-ink-300">
            Ce parcours s'adapte à vous. Dites-nous d'où vous partez : nous ouvrirons la carte à la
            bonne étape (vous pourrez toujours revenir en arrière ou tout explorer librement).
          </p>
        </motion.div>

        <fieldset className="mt-8 space-y-2">
          <legend className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-gold-400/80">
            Que souhaitez-vous découvrir ?
          </legend>
          {ONBOARDING_PATHS.map((p) => (
            <label
              key={p.id}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-[15px] transition-colors ${
                choice === p.id
                  ? 'border-gold-400/60 bg-gold-400/10 text-ink-100'
                  : 'border-gold-500/15 text-ink-300 hover:border-gold-500/30'
              }`}
            >
              <input
                type="radio"
                name="path"
                value={p.id}
                checked={choice === p.id}
                onChange={() => setChoice(p.id)}
                className="accent-gold-400"
              />
              {p.label}
            </label>
          ))}
        </fieldset>

        {selected && (
          <motion.div
            initial={{ y: 6 }}
            animate={{ y: 0 }}
            className="mt-6 parchment rounded-[var(--radius-card)] p-4 text-[14px] text-ink-200"
          >
            Votre carte s'ouvrira au <strong>Niveau {startLevel}</strong> —{' '}
            {CURRICULUM[startLevel - 1].titre}. Les niveaux suivants se débloqueront à mesure que
            vous gagnerez de l'expérience (cours suivis, quiz, exercices).
          </motion.div>
        )}

        <div className="mt-8 flex gap-3">
          <Button
            variant="primary"
            disabled={!selected}
            onClick={() => {
              if (!selected) return
              setOnboarding(selected.id, startLevel)
              nav('/tableau-de-bord')
            }}
          >
            Ouvrir la carte du parcours
          </Button>
          <Button variant="ghost" onClick={() => nav('/')}>Retour</Button>
        </div>

        <div className="mt-12">
          <Disclaimer />
        </div>
      </div>
    </div>
  )
}
