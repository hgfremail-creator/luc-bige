import type { Facets } from '@/content/types'
import { Callout } from './ui'

const LABELS: { key: keyof Facets; label: string; tone?: 'or' | 'ombre' | 'note' }[] = [
  { key: 'definition', label: '1 · Définition' },
  { key: 'symbole', label: '2 · Symbole' },
  { key: 'imageArchetypale', label: '3 · Image archétypale' },
  { key: 'mythologie', label: '4 · Mythologie' },
  { key: 'psychologie', label: '5 · Psychologie' },
  { key: 'ombre', label: '6 · Ombre', tone: 'ombre' },
  { key: 'potentielEvolutif', label: '7 · Potentiel évolutif' },
  { key: 'questionReflexion', label: '8 · Question de réflexion', tone: 'note' },
  { key: 'exercice', label: '9 · Exercice', tone: 'note' },
  { key: 'paralleleTarot', label: '10 · Parallèle Tarot' },
  { key: 'paralleleAlchimique', label: '11 · Parallèle alchimique' },
  { key: 'paralleleHermetique', label: '12 · Parallèle hermétique' },
  { key: 'paralleleJungien', label: '13 · Parallèle jungien' },
]

export function FacetList({ facets }: { facets: Facets }) {
  const seen = new Set<string>()
  return (
    <div className="space-y-1">
      {LABELS.map(({ key, label, tone }) => {
        const value = facets[key]
        if (!value || value === '—') return null
        const norm = value.trim()
        if (seen.has(norm)) return null
        seen.add(norm)
        if (tone) {
          return (
            <Callout key={key} title={label} tone={tone}>
              {value}
            </Callout>
          )
        }
        return (
          <div key={key} className="py-2.5 border-b border-gold-500/10 last:border-0">
            <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-400/70 mb-1">{label}</div>
            <p className="text-[15px] text-ink-200 leading-relaxed">{value}</p>
          </div>
        )
      })}
    </div>
  )
}
