import { Card, Callout, Disclaimer, SectionTitle } from '@/components/ui'
import { INTERDITS, FIL_CONDUCTEUR, REGLE_PEDAGOGIQUE } from '@/content/disclaimers'

export function About() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">À propos & positionnement</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Ce que cette école est — et n'est pas</h1>
      </div>

      <Callout title="Positionnement intellectuel">
        L'astrologie présentée ici est étudiée comme un <strong>langage symbolique</strong> et une
        tradition culturelle et psychologique. Les interprétations proposées ne constituent ni des
        faits scientifiques établis ni des prédictions certaines. On distingue toujours la{' '}
        <strong>donnée astronomique</strong> (calculable, vérifiable) de l'<strong>interprétation
        symbolique</strong> (proposée par une tradition).
      </Callout>

      <Card>
        <SectionTitle>Ce qui n'est jamais fait ici</SectionTitle>
        <ul className="list-disc space-y-1 pl-5 text-[14px] text-ink-200">
          {INTERDITS.map((x) => <li key={x}>{x}</li>)}
          <li>aucune affirmation du type « vous êtes… » ou « votre destin est… » — on explore, on questionne</li>
        </ul>
      </Card>

      <Card>
        <SectionTitle kicker="Le fil conducteur">De quoi parle vraiment le parcours</SectionTitle>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-lg text-ink-300">
          {FIL_CONDUCTEUR.map((w, i) => (
            <span key={w} className="flex items-center gap-2">{i > 0 && <span className="text-gold-500/60">→</span>}{w}</span>
          ))}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {REGLE_PEDAGOGIQUE.map((r) => (
            <div key={r.cle} className="rounded-lg border border-gold-500/15 px-3 py-2 text-[14px]">
              <strong className="text-gold-200">{r.cle}</strong> = {r.valeur} <span className="text-ink-400">— {r.detail}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionTitle>Vie privée</SectionTitle>
        <p className="text-[14px] text-ink-300">
          Tout est stocké localement dans votre navigateur (progression, journal, thèmes). Aucun
          compte, aucun serveur, aucun envoi de données. Les calculs astronomiques sont faits sur
          votre appareil.
        </p>
      </Card>

      <Card>
        <SectionTitle>Technique & extensibilité</SectionTitle>
        <p className="text-[14px] text-ink-300">
          React + TypeScript, Vite, Tailwind, Framer Motion ; calculs via la bibliothèque
          astronomy-engine ; contenu séparé du code dans des modules de données typés, pour ajouter
          facilement de nouveaux signes, planètes, mythes, arcanes ou concepts.
        </p>
      </Card>

      <Disclaimer />
    </div>
  )
}
