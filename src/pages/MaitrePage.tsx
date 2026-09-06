import { useState } from 'react'
import { demanderAuMaitre, type MaitreReponse } from '@/lib/maitre'
import { Card, Callout, Button, Disclaimer } from '@/components/ui'

const EXEMPLES = [
  'Explique-moi Saturne.',
  'Quelle est la différence entre Mars et Saturne ?',
  'Pourquoi le Scorpion est-il associé à la transformation ?',
  'Compare le Soleil en Lion et le Soleil en Verseau.',
  'Explique-moi l\'Ombre selon Jung.',
  'Différence entre Hermès et Mercure ?',
]

export function MaitrePage() {
  const [q, setQ] = useState('')
  const [rep, setRep] = useState<MaitreReponse | null>(null)

  function ask(text: string) {
    setQ(text)
    setRep(demanderAuMaitre(text))
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Le Maître symbolique</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Poser une question sur un symbole</h1>
        <p className="mt-2 max-w-2xl text-ink-300">
          Nommez une planète, un signe, une maison, un aspect, un mythe ou un concept. La réponse suit
          toujours la même structure : observation, interprétation, ombre, potentiel, question,
          exercice. Aucune prédiction — seulement des pistes.
        </p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); if (q.trim()) setRep(demanderAuMaitre(q)) }}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ex. : Explique-moi Neptune."
          className="w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-4 py-2 outline-none focus:border-gold-400/50" />
        <Button type="submit" variant="primary">Demander</Button>
      </form>

      <div className="flex flex-wrap gap-2">
        {EXEMPLES.map((e) => (
          <button key={e} onClick={() => ask(e)} className="rounded-full border border-gold-500/15 px-3 py-1 font-sans text-[12px] text-ink-300 hover:border-gold-400/40">
            {e}
          </button>
        ))}
      </div>

      {rep && (
        <Card>
          <p className="text-[15px] text-ink-100">{rep.intro}</p>
          <div className="mt-3 space-y-2">
            {rep.sections.map((s) => (
              <Callout key={s.titre} title={s.titre} tone={s.titre === 'Ombre' ? 'ombre' : s.titre === 'Question' || s.titre === 'Exercice' ? 'note' : 'or'}>
                {s.corps.map((c, i) => <p key={i}>{c}</p>)}
              </Callout>
            ))}
          </div>
          <p className="mt-3 font-sans text-[11px] text-ink-400">{rep.rappel}</p>
          {rep.suggestions.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {rep.suggestions.map((s) => (
                <button key={s} onClick={() => ask(s)} className="font-sans text-[12px] text-gold-400/80 hover:text-gold-300">{s} →</button>
              ))}
            </div>
          )}
        </Card>
      )}

      <Disclaimer />
    </div>
  )
}
