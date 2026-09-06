import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { SOURCE_LABELS, type SourceTag } from '@/content/types'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('parchment rounded-[var(--radius-card)] p-5 md:p-6', className)}>{children}</div>
}

export function SectionTitle({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="mb-4">
      {kicker && (
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">{kicker}</div>
      )}
      <h2 className="text-2xl md:text-3xl text-ink-100">{children}</h2>
    </div>
  )
}

export function Glyph({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center rounded-full border border-gold-500/30 bg-night-900/60 text-gold-300',
        className ?? 'h-12 w-12 text-2xl',
      )}
    >
      {children}
    </span>
  )
}

export function Pill({ children, tone = 'neutre' }: { children: ReactNode; tone?: 'neutre' | 'feu' | 'terre' | 'air' | 'eau' | 'or' }) {
  const tones: Record<string, string> = {
    neutre: 'border-ink-400/30 text-ink-200',
    feu: 'border-ember/40 text-ember',
    terre: 'border-verdigris/40 text-verdigris',
    air: 'border-gold-300/40 text-gold-300',
    eau: 'border-lapis/50 text-[#7fa8e0]',
    or: 'border-gold-400/50 text-gold-300',
  }
  return (
    <span className={clsx('inline-block rounded-full border px-2.5 py-0.5 font-sans text-[11px] uppercase tracking-wider', tones[tone])}>
      {children}
    </span>
  )
}

const SOURCE_TONE: Record<SourceTag, string> = {
  traditionnel: 'border-verdigris/50 text-verdigris',
  'interpretation-symbolique': 'border-amethyst/50 text-amethyst',
  'rapprochement-moderne': 'border-lapis/50 text-[#7fa8e0]',
  hypothese: 'border-ember/50 text-ember',
  'contenu-pedagogique': 'border-ink-400/40 text-ink-300',
}

export function SourceBadge({ tag }: { tag: SourceTag }) {
  return (
    <span
      className={clsx('inline-flex items-center gap-1 rounded border px-2 py-0.5 font-sans text-[10px] uppercase tracking-wider', SOURCE_TONE[tag])}
      title="Nature de la source (voir « Sources et traditions »)"
    >
      ✦ {SOURCE_LABELS[tag]}
    </span>
  )
}

export function Callout({ title, children, tone = 'or' }: { title?: string; children: ReactNode; tone?: 'or' | 'ombre' | 'note' }) {
  const tones = {
    or: 'border-l-gold-400 bg-gold-400/5',
    ombre: 'border-l-ember bg-ember/5',
    note: 'border-l-lapis bg-lapis/5',
  }
  return (
    <div className={clsx('border-l-2 rounded-r-lg px-4 py-3 my-3', tones[tone])}>
      {title && <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink-300 mb-1">{title}</div>}
      <div className="text-[15px] text-ink-200 leading-relaxed">{children}</div>
    </div>
  )
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={clsx('h-1.5 w-full overflow-hidden rounded-full bg-night-700', className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  )
}

interface ButtonProps {
  children: ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ children, to, onClick, variant = 'primary', className, type = 'button', disabled }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-sans text-sm tracking-wide transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-gold-400 text-night-950 hover:bg-gold-300',
    ghost: 'text-ink-200 hover:bg-night-700/60',
    outline: 'border border-gold-500/40 text-gold-300 hover:bg-gold-400/10',
  }
  const cls = clsx(base, variants[variant], className)
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}

export function Disclaimer({ compact }: { compact?: boolean }) {
  return (
    <p className={clsx('font-sans text-ink-400', compact ? 'text-[11px]' : 'text-xs leading-relaxed')}>
      L'astrologie présentée ici est étudiée comme un <em>langage symbolique</em> et une tradition
      culturelle et psychologique. Les interprétations proposées ne constituent ni des faits
      scientifiques établis ni des prédictions certaines. Aucun diagnostic médical, conseil financier
      ou prédiction d'événement grave n'est donné.
    </p>
  )
}
