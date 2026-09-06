import { useMemo, useState } from 'react'
import { COMPARABLES } from '@/content'
import { demanderAuMaitre } from '@/lib/maitre'
import { Card, Callout, Disclaimer, SectionTitle } from '@/components/ui'

const FLAT = COMPARABLES.flatMap((g) => g.items.map((it) => ({ ...it, group: g.group })))

const PRESETS: [string, string][] = [
  ['Mars', 'Vénus'], ['Soleil', 'Lune'], ['Bélier', 'Balance'], ['Scorpion', 'Taureau'],
  ['Saturne', 'Jupiter'], ['Sagittaire', 'Gémeaux'],
]

export function ComparePage() {
  const [a, setA] = useState(FLAT.find((x) => x.label === 'Mars')?.id ?? FLAT[0].id)
  const [b, setB] = useState(FLAT.find((x) => x.label === 'Vénus')?.id ?? FLAT[1].id)

  const la = FLAT.find((x) => x.id === a)?.label ?? ''
  const lb = FLAT.find((x) => x.id === b)?.label ?? ''
  const rep = useMemo(() => demanderAuMaitre(`différence entre ${la} et ${lb}`), [la, lb])

  return (
    <div className="space-y-6">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Mode comparatif</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Mettre deux symboles en regard</h1>
        <p className="mt-2 text-ink-300">Une comparaison éclaire des nuances ; elle ne hiérarchise pas.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map(([x, y]) => (
          <button key={x + y} onClick={() => {
            setA(FLAT.find((f) => f.label === x)?.id ?? a)
            setB(FLAT.find((f) => f.label === y)?.id ?? b)
          }} className="rounded-full border border-gold-500/15 px-3 py-1 font-sans text-[12px] text-ink-300 hover:border-gold-400/40">
            {x} · {y}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[[a, setA], [b, setB]].map(([val, setter], i) => (
          <label key={i} className="block">
            <span className="font-sans text-[12px] text-ink-400">Symbole {i === 0 ? 'A' : 'B'}</span>
            <select value={val as string} onChange={(e) => (setter as (s: string) => void)(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50">
              {COMPARABLES.map((g) => (
                <optgroup key={g.group} label={g.group}>
                  {g.items.map((it) => <option key={it.id} value={it.id}>{it.label}</option>)}
                </optgroup>
              ))}
            </select>
          </label>
        ))}
      </div>

      <Card>
        <SectionTitle kicker="Lecture du Maître symbolique">{la} et {lb}</SectionTitle>
        <p className="text-[14px] text-ink-300">{rep.intro}</p>
        <div className="mt-3 space-y-2">
          {rep.sections.map((s) => (
            <Callout key={s.titre} title={s.titre} tone={s.titre === 'Ombre' ? 'ombre' : s.titre === 'Question' ? 'note' : 'or'}>
              {s.corps.map((c, i) => <p key={i}>{c}</p>)}
            </Callout>
          ))}
        </div>
        <p className="mt-3 font-sans text-[11px] text-ink-400">{rep.rappel}</p>
      </Card>

      <Disclaimer />
    </div>
  )
}
