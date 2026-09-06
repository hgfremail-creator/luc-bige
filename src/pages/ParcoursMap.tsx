import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CURRICULUM } from '@/content/curriculum'
import { useStore, isLevelUnlocked, xpToUnlock } from '@/lib/store'
import { Disclaimer } from '@/components/ui'

export function ParcoursMap() {
  const nav = useNavigate()
  const { xp, startLevel, levelProgress } = useStore()

  const COLS = 3
  const ROW_H = 150
  const W = 720
  const nodes = CURRICULUM.map((l, i) => {
    const row = Math.floor(i / COLS)
    const col = row % 2 === 0 ? i % COLS : COLS - 1 - (i % COLS)
    return { l, x: 120 + col * 240, y: 90 + row * ROW_H }
  })
  const H = 90 + Math.ceil(CURRICULUM.length / COLS) * ROW_H

  const pathD = nodes
    .map((n, i) => (i === 0 ? `M ${n.x} ${n.y}` : `L ${n.x} ${n.y}`))
    .join(' ')

  return (
    <div className="space-y-6">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Carte du parcours initiatique</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Le chemin des quinze seuils</h1>
        <p className="mt-2 max-w-2xl text-ink-300">
          Du Cosmos au mythe personnel. Chaque module s'ouvre quand le précédent a nourri assez
          d'expérience. Les niveaux verrouillés restent visibles : la carte entière est votre horizon.
        </p>
      </div>

      <div className="parchment starfield overflow-x-auto rounded-[var(--radius-card)] p-2">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ minWidth: 560 }} role="img" aria-label="Carte du parcours">
          <path d={pathD} fill="none" stroke="rgba(212,175,101,0.35)" strokeWidth={2} strokeDasharray="2 7" strokeLinecap="round" />
          {nodes.map(({ l, x, y }, i) => {
            const unlocked = isLevelUnlocked(l.numero, startLevel, xp)
            const pct = levelProgress[l.slug] ?? 0
            const done = pct >= 100
            return (
              <motion.g
                key={l.slug}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.03 }}
                style={{ cursor: unlocked ? 'pointer' : 'not-allowed' }}
                onClick={() => unlocked && nav(`/parcours/${l.slug}`)}
              >
                <circle cx={x} cy={y} r={30} fill={done ? '#b98f3e' : unlocked ? '#171730' : '#101018'} stroke={unlocked ? 'rgba(212,175,101,0.7)' : 'rgba(125,117,96,0.35)'} strokeWidth={1.5} />
                <text x={x} y={y - 2} textAnchor="middle" dominantBaseline="central" fontSize={20} fill={unlocked ? '#e8cf92' : '#5b5646'}>
                  {unlocked ? l.glyphe : '🔒'}
                </text>
                <text x={x} y={y + 44} textAnchor="middle" fontSize={10} fill="#a99f86" className="font-sans">
                  {l.numero}. {truncate(l.titre, 22)}
                </text>
                <text x={x} y={y + 57} textAnchor="middle" fontSize={8.5} fill="#7d7560" className="font-sans uppercase tracking-wider">
                  {unlocked ? l.etape : `${xpToUnlock(l.numero, startLevel)} XP`}
                </text>
                {unlocked && pct > 0 && pct < 100 && (
                  <circle cx={x} cy={y} r={30} fill="none" stroke="#e8cf92" strokeWidth={2.5}
                    strokeDasharray={`${(pct / 100) * 188} 188`} transform={`rotate(-90 ${x} ${y})`} />
                )}
              </motion.g>
            )
          })}
        </svg>
      </div>

      <div className="flex flex-wrap gap-4 font-sans text-[11px] text-ink-400">
        <span>◯ Verrouillé — XP requis</span>
        <span className="text-gold-300">◑ En cours</span>
        <span className="text-gold-200">● Achevé</span>
      </div>

      <Disclaimer />
    </div>
  )
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n - 1) + '…' : s
}
