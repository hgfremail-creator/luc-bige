import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LIBRARY } from '@/content'
import { useStore } from '@/lib/store'
import { Disclaimer } from '@/components/ui'

const CATS = ['Tout', 'Signe', 'Planète', 'Maison', 'Aspect', 'Élément', 'Mythe', 'Tarot', 'Langage symbolique', 'Jung', 'Alchimie', 'Hermétisme']

export function Library() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('Tout')
  const bookmarks = useStore((s) => s.bookmarks)

  const results = useMemo(() => {
    const nq = q.trim().toLowerCase()
    return LIBRARY.filter(
      (it) =>
        (cat === 'Tout' || it.categorie === cat) &&
        (!nq || it.nom.toLowerCase().includes(nq) || it.resume.toLowerCase().includes(nq)),
    )
  }, [q, cat])

  return (
    <div className="space-y-6">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Ma bibliothèque symbolique</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Toutes les fiches</h1>
        <p className="mt-2 text-ink-300">
          {LIBRARY.length} entrées : signes, planètes, maisons, aspects, éléments, mythes, arcanes du
          Tarot et concepts (Jung, alchimie, hermétisme). Chaque fiche suit la même structure de facettes.
        </p>
      </div>

      {bookmarks.length > 0 && (
        <div className="parchment rounded-lg p-3 text-[13px]">
          <span className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70">Favoris — </span>
          {bookmarks.map((r, i) => (
            <span key={r}>
              {i > 0 && ' · '}
              <Link to={r} className="link-underline">{r.split('/').slice(-1)[0]}</Link>
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un symbole, un mot…"
          className="w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-4 py-2 text-[15px] outline-none placeholder:text-ink-500 focus:border-gold-400/50"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-3 py-1 font-sans text-[12px] transition-colors ${
              cat === c ? 'border-gold-400/60 bg-gold-400/10 text-gold-200' : 'border-gold-500/15 text-ink-300 hover:border-gold-500/30'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((it) => (
          <Link
            key={it.route}
            to={it.route}
            className="group rounded-lg border border-gold-500/15 p-3 transition-colors hover:border-gold-400/50"
          >
            <div className="flex items-center gap-2">
              {it.glyphe && <span className="text-lg text-gold-300">{it.glyphe}</span>}
              <span className="font-display text-[15px] text-ink-100 group-hover:text-gold-200">{it.nom}</span>
            </div>
            <div className="mt-0.5 font-sans text-[10px] uppercase tracking-wider text-ink-500">{it.categorie}</div>
            <p className="mt-1 line-clamp-2 text-[13px] text-ink-400">{it.resume}</p>
          </Link>
        ))}
        {results.length === 0 && <p className="text-ink-400">Aucun résultat.</p>}
      </div>

      <Disclaimer />
    </div>
  )
}
