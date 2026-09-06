import { SIGNS } from '@/content/signs'
import type { BodyPosition } from '@/lib/astro/ephemeris'
import type { FoundAspect } from '@/lib/astro/aspects'

const ELEMENT_COLOR: Record<string, string> = {
  feu: '#c8623c',
  terre: '#4f9d8f',
  air: '#e8cf92',
  eau: '#5b82c4',
}

const ASPECT_COLOR: Record<string, string> = {
  conjonction: '#d4af65',
  harmonique: '#4f9d8f',
  tension: '#c8623c',
  ajustement: '#8b6db0',
}

interface Props {
  bodies?: BodyPosition[]
  aspects?: FoundAspect[]
  ascendantLon?: number
  size?: number
  /** true : le zodiaque est fixe (0° Bélier à gauche). false : Ascendant à gauche. */
  fixedZodiac?: boolean
  onSignClick?: (signId: string) => void
}

export function ZodiacWheel({ bodies = [], aspects = [], ascendantLon, size = 440, fixedZodiac = true }: Props) {
  const cx = size / 2
  const cy = size / 2
  const rOuter = size / 2 - 4
  const rSign = rOuter - 34
  const rPlanet = rSign - 26
  const rAspect = rPlanet - 14

  // rotation : longitude 0 => angle. On place 0° à gauche, sens antihoraire.
  const rot = fixedZodiac || ascendantLon == null ? 0 : ascendantLon
  const toXY = (lon: number, r: number) => {
    const a = ((lon - rot) * Math.PI) / 180
    return [cx - r * Math.cos(a), cy - r * Math.sin(a)] as const
  }

  const sectors = SIGNS.map((s, i) => {
    const start = i * 30
    const [x1, y1] = toXY(start, rOuter)
    const [x2, y2] = toXY(start + 30, rOuter)
    const [x3, y3] = toXY(start + 30, rSign)
    const [x4, y4] = toXY(start, rSign)
    const large = 0
    const [gx, gy] = toXY(start + 15, (rOuter + rSign) / 2)
    return (
      <g key={s.id}>
        <path
          d={`M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${large} 0 ${x2} ${y2} L ${x3} ${y3} A ${rSign} ${rSign} 0 ${large} 1 ${x4} ${y4} Z`}
          fill={ELEMENT_COLOR[s.element]}
          fillOpacity={0.14}
          stroke="rgba(212,175,101,0.25)"
          strokeWidth={0.75}
        />
        <text x={gx} y={gy} textAnchor="middle" dominantBaseline="central" fontSize={17} fill={ELEMENT_COLOR[s.element]}>
          {s.glyphe}
        </text>
      </g>
    )
  })

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: size }} role="img" aria-label="Roue du zodiaque">
      <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke="rgba(212,175,101,0.35)" />
      <circle cx={cx} cy={cy} r={rSign} fill="none" stroke="rgba(212,175,101,0.2)" />
      <circle cx={cx} cy={cy} r={rPlanet} fill="none" stroke="rgba(212,175,101,0.12)" />
      {sectors}

      {/* Ascendant */}
      {ascendantLon != null && (() => {
        const [ax, ay] = toXY(ascendantLon, rOuter)
        return (
          <g>
            <line x1={cx} y1={cy} x2={ax} y2={ay} stroke="#e8cf92" strokeWidth={1.5} strokeDasharray="3 3" />
            <text x={toXY(ascendantLon, rOuter + 2)[0]} y={toXY(ascendantLon, rOuter + 2)[1]} fontSize={10} fill="#e8cf92" textAnchor="middle">AS</text>
          </g>
        )
      })()}

      {/* Aspects */}
      {aspects.slice(0, 14).map((asp, i) => {
        const b1 = bodies.find((b) => b.id === asp.aId)
        const b2 = bodies.find((b) => b.id === asp.bId)
        if (!b1 || !b2) return null
        const [x1, y1] = toXY(b1.longitude, rAspect)
        const [x2, y2] = toXY(b2.longitude, rAspect)
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={ASPECT_COLOR[asp.famille] ?? '#888'}
            strokeOpacity={0.5}
            strokeWidth={asp.ecart < 2 ? 1.4 : 0.8}
          />
        )
      })}

      {/* Planètes */}
      {bodies.map((b) => {
        const [x, y] = toXY(b.longitude, rPlanet)
        return (
          <g key={b.id}>
            <circle cx={x} cy={y} r={11} fill="#10101f" stroke="rgba(212,175,101,0.4)" />
            <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={13} fill="#e8e3d6">
              {b.glyphe}
            </text>
            {b.retrograde && <text x={x + 10} y={y - 8} fontSize={8} fill="#c8623c">℞</text>}
          </g>
        )
      })}
    </svg>
  )
}
