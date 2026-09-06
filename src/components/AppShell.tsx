import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { useStore } from '@/lib/store'
import { masteryFor } from '@/content/curriculum'
import { ProgressBar } from './ui'

const NAV = [
  { to: '/tableau-de-bord', label: 'Tableau de bord', glyph: '❂' },
  { to: '/parcours', label: 'Carte du parcours', glyph: '🗺' },
  { to: '/bibliotheque', label: 'Bibliothèque', glyph: '📖' },
  { to: '/zodiaque', label: 'Le zodiaque', glyph: '♒' },
  { to: '/theme', label: 'Mon thème', glyph: '❖' },
  { to: '/maitre', label: 'Le Maître symbolique', glyph: '☿' },
  { to: '/comparateur', label: 'Comparateur', glyph: '⚖' },
  { to: '/quiz', label: 'Quiz & exercices', glyph: '✎' },
  { to: '/initiation', label: 'Initiation quotidienne', glyph: '✵' },
  { to: '/journal', label: 'Journal symbolique', glyph: '✥' },
  { to: '/profil', label: 'Progression', glyph: '☖' },
  { to: '/sources', label: 'Sources & traditions', glyph: '✦' },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const { xp } = useStore()
  const { current, next } = masteryFor(xp)
  const pct = next ? ((xp - current.seuilXP) / (next.seuilXP - current.seuilXP)) * 100 : 100

  return (
    <div className="min-h-full md:grid md:grid-cols-[268px_1fr]">
      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-40 w-[268px] border-r border-gold-500/15 bg-night-900/95 backdrop-blur transition-transform md:static md:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-full flex-col">
          <Link to="/" className="block px-5 py-5" onClick={() => setOpen(false)}>
            <div className="font-display text-lg leading-tight text-ink-100">L'École du<br />Symbolisme Astrologique</div>
            <div className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-gold-400/70">
              Le ciel comme langage
            </div>
          </Link>
          <nav className="scrollbar-thin flex-1 overflow-y-auto px-3 pb-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'mb-0.5 flex items-center gap-3 rounded-lg px-3 py-2 font-sans text-[13px] transition-colors',
                    isActive ? 'bg-gold-400/12 text-gold-200' : 'text-ink-300 hover:bg-night-700/50 hover:text-ink-100',
                  )
                }
              >
                <span className="w-4 text-center text-gold-400/70">{n.glyph}</span>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="border-t border-gold-500/15 px-5 py-4">
            <div className="flex items-baseline justify-between font-sans text-[11px] text-ink-300">
              <span className="text-gold-300">Niv. {current.niveau} · {current.nom}</span>
              <span>{xp} XP</span>
            </div>
            <div className="mt-2">
              <ProgressBar value={pct} />
            </div>
            {next && (
              <div className="mt-1 font-sans text-[10px] text-ink-400">
                {next.seuilXP - xp} XP → {next.nom}
              </div>
            )}
          </div>
        </div>
      </aside>

      {open && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setOpen(false)} />}

      {/* Main */}
      <div className="flex min-h-full flex-col">
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-gold-500/15 bg-night-950/80 px-4 py-3 backdrop-blur md:hidden">
          <button onClick={() => setOpen(true)} className="rounded-lg border border-gold-500/30 px-3 py-1.5 text-gold-300" aria-label="Ouvrir le menu">
            ☰
          </button>
          <span className="font-display text-lg">L'École du Symbolisme</span>
        </header>
        <main key={loc.pathname} className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 md:px-10 md:py-12">
          {children}
        </main>
        <footer className="border-t border-gold-500/15 px-4 py-6 md:px-10">
          <p className="mx-auto max-w-5xl font-sans text-[11px] leading-relaxed text-ink-400">
            Contenu original et pédagogique, inspiré de thèmes publics de l'astrologie symbolique et
            archétypale. Étudié comme langage symbolique et tradition culturelle — ni science
            démontrée, ni prédiction. ·{' '}
            <Link to="/sources" className="link-underline">Sources & traditions</Link> ·{' '}
            <Link to="/a-propos" className="link-underline">À propos & positionnement</Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
