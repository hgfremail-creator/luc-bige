import { useMemo, useState } from 'react'
import { useStore, type JournalEntry } from '@/lib/store'
import { Card, Button, Pill, Disclaimer, SectionTitle } from '@/components/ui'

const TYPES: { id: JournalEntry['type']; label: string }[] = [
  { id: 'reve', label: 'Rêve' },
  { id: 'intuition', label: 'Intuition' },
  { id: 'synchronicite', label: 'Synchronicité' },
  { id: 'reflexion', label: 'Réflexion' },
  { id: 'symbole', label: 'Symbole rencontré' },
  { id: 'tarot', label: 'Tirage de Tarot' },
  { id: 'observation', label: 'Observation astrologique' },
]

const TAGS = ['Soleil', 'Lune', 'Mercure', 'Vénus', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune', 'Pluton', 'Ombre', 'Transformation', 'Mythe', 'Anima', 'Persona', 'Nigredo']

export function Journal() {
  const { journal, addJournal, removeJournal } = useStore()
  const [titre, setTitre] = useState('')
  const [texte, setTexte] = useState('')
  const [type, setType] = useState<JournalEntry['type']>('reflexion')
  const [tags, setTags] = useState<string[]>([])
  const [filter, setFilter] = useState<string | null>(null)

  const filtered = useMemo(
    () => (filter ? journal.filter((j) => j.tags.includes(filter) || j.type === filter) : journal),
    [journal, filter],
  )

  function submit() {
    if (!texte.trim()) return
    addJournal({ titre: titre.trim() || 'Sans titre', texte: texte.trim(), type, tags })
    setTitre('')
    setTexte('')
    setTags([])
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Journal symbolique</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Ce que le symbole me dit</h1>
        <p className="mt-2 max-w-2xl text-ink-300">
          Rêves, intuitions, synchronicités, mythes qui vous touchent, tirages, expériences liées à
          votre thème. Un lieu pour observer les motifs qui reviennent.
        </p>
      </div>

      <Card>
        <SectionTitle kicker="Nouvelle entrée">Écrire</SectionTitle>
        <input value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre"
          className="w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50" />
        <textarea value={texte} onChange={(e) => setTexte(e.target.value)} rows={5} placeholder="Que s'est-il passé ? Quelle image, quelle émotion, quel symbole ?"
          className="mt-2 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50" />
        <div className="mt-3 flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <button key={t.id} onClick={() => setType(t.id)}
              className={`rounded-full border px-3 py-1 font-sans text-[12px] ${type === t.id ? 'border-gold-400/60 bg-gold-400/10 text-gold-200' : 'border-gold-500/15 text-ink-300'}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {TAGS.map((tg) => (
            <button key={tg} onClick={() => setTags((s) => (s.includes(tg) ? s.filter((x) => x !== tg) : [...s, tg]))}
              className={`rounded border px-2 py-0.5 font-sans text-[11px] ${tags.includes(tg) ? 'border-gold-400/60 text-gold-200' : 'border-gold-500/15 text-ink-400'}`}>
              {tg}
            </button>
          ))}
        </div>
        <div className="mt-4"><Button variant="primary" onClick={submit}>Enregistrer l'entrée</Button></div>
      </Card>

      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          <button onClick={() => setFilter(null)} className={`rounded-full border px-3 py-1 font-sans text-[12px] ${!filter ? 'border-gold-400/60 text-gold-200' : 'border-gold-500/15 text-ink-300'}`}>Tout ({journal.length})</button>
          {[...new Set(journal.flatMap((j) => j.tags))].map((tg) => (
            <button key={tg} onClick={() => setFilter(tg)} className={`rounded-full border px-3 py-1 font-sans text-[12px] ${filter === tg ? 'border-gold-400/60 text-gold-200' : 'border-gold-500/15 text-ink-300'}`}>{tg}</button>
          ))}
        </div>
        <div className="space-y-3">
          {filtered.map((j) => (
            <Card key={j.id}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg text-ink-100">{j.titre}</h3>
                  <div className="font-sans text-[11px] text-ink-400">
                    {new Date(j.date).toLocaleDateString('fr-FR')} · {TYPES.find((t) => t.id === j.type)?.label}
                  </div>
                </div>
                <button onClick={() => removeJournal(j.id)} className="font-sans text-[11px] text-ink-500 hover:text-ember">supprimer</button>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-[14px] text-ink-200">{j.texte}</p>
              {j.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">{j.tags.map((t) => <Pill key={t}>{t}</Pill>)}</div>
              )}
            </Card>
          ))}
          {filtered.length === 0 && <p className="text-ink-400">Aucune entrée pour l'instant.</p>}
        </div>
      </div>

      <Disclaimer />
    </div>
  )
}
