import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, Disclaimer } from '@/components/ui'
import { FIL_CONDUCTEUR } from '@/content/disclaimers'
import { useStore } from '@/lib/store'

export function Home() {
  const onboardingDone = useStore((s) => s.onboardingDone)

  return (
    <div className="starfield min-h-screen">
      <div className="mx-auto max-w-4xl px-5 pb-24 pt-16 md:pt-28 text-center">
        <motion.div
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 text-5xl text-gold-300">✦</div>
          <div className="font-sans text-[11px] uppercase tracking-[0.35em] text-gold-400/80">
            Une école initiatique numérique
          </div>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            L'École du Symbolisme<br />Astrologique
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-serif text-lg text-ink-200 md:text-xl">
            Lire le ciel. Comprendre les symboles. Explorer son propre mythe.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-ink-300">
            Comprendre le ciel comme un langage symbolique — un parcours en quinze étapes,
            du premier symbole jusqu'à la lecture d'un thème natal comme récit personnel.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to={onboardingDone ? '/tableau-de-bord' : '/onboarding'} variant="primary">
            Commencer le voyage
          </Button>
          <Button to="/zodiaque" variant="outline">Explorer le zodiaque</Button>
          <Button to="/theme" variant="outline">Calculer mon thème</Button>
          <Button to="/bibliotheque" variant="ghost">Apprendre le symbolisme</Button>
        </div>

        <Link to="/parcours" className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.2em] text-gold-400/70 hover:text-gold-300">
          Voir le parcours ↓
        </Link>

        <div className="mt-20">
          <div className="rule-gold mx-auto max-w-xs" />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-lg text-ink-300">
            {FIL_CONDUCTEUR.map((w, i) => (
              <span key={w} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold-500/60">→</span>}
                <span>{w}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-4 text-left md:grid-cols-3">
          {[
            { t: 'Un langage, pas un oracle', d: "Les signes comme étapes de la conscience, les planètes comme fonctions, les maisons comme domaines d'expérience. On apprend une grammaire." },
            { t: 'Treize facettes par symbole', d: 'Définition, image archétypale, mythologie, psychologie, ombre, potentiel, question, exercice, et parallèles Tarot / alchimie / hermétisme.' },
            { t: 'Transparence des sources', d: 'Chaque enseignement est étiqueté : traditionnel, interprétation symbolique, rapprochement moderne, hypothèse ou contenu pédagogique.' },
          ].map((c) => (
            <div key={c.t} className="parchment rounded-[var(--radius-card)] p-5">
              <h3 className="font-display text-xl text-gold-200">{c.t}</h3>
              <p className="mt-2 text-[14px] text-ink-300">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <Disclaimer />
        </div>
      </div>
    </div>
  )
}
