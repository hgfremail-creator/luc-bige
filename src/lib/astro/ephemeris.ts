import * as Astronomy from 'astronomy-engine'

export const ZODIAC = [
  'Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge',
  'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons',
] as const

export const SIGN_IDS = [
  'belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge',
  'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons',
] as const

export interface BodyPosition {
  id: string
  nom: string
  glyphe: string
  longitude: number // 0..360, écliptique tropicale
  signe: string
  signeId: string
  degre: number // 0..30 dans le signe
  retrograde: boolean
  maison?: number
}

export interface ChartInput {
  /** Date/heure en temps universel (UTC). */
  dateUTC: Date
  latitude: number
  longitude: number // est positif
  heureConnue: boolean
}

export interface ChartResult {
  input: ChartInput
  bodies: BodyPosition[]
  ascendant?: { longitude: number; signe: string; signeId: string; degre: number }
  milieuCiel?: { longitude: number; signe: string; signeId: string; degre: number }
  maisons?: { numero: number; cuspide: number; signe: string; signeId: string }[]
  systemeMaisons: 'signes-entiers' | 'aucun'
  obliquite: number
}

const norm360 = (x: number) => ((x % 360) + 360) % 360
const rad = (d: number) => (d * Math.PI) / 180
const deg = (r: number) => (r * 180) / Math.PI

export function signFromLongitude(lon: number) {
  const l = norm360(lon)
  const idx = Math.floor(l / 30) % 12
  return { signe: ZODIAC[idx], signeId: SIGN_IDS[idx], degre: l - idx * 30, index: idx }
}

/** Obliquité moyenne de l'écliptique (degrés) pour la date. */
export function meanObliquity(date: Date): number {
  const jd = date.getTime() / 86400000 + 2440587.5
  const T = (jd - 2451545.0) / 36525
  return (
    23.4392911111 -
    (46.815 * T + 0.00059 * T * T - 0.001813 * T * T * T) / 3600
  )
}

const BODY_DEFS: { id: string; nom: string; glyphe: string; body: Astronomy.Body | 'Sun' }[] = [
  { id: 'soleil', nom: 'Soleil', glyphe: '☉', body: 'Sun' },
  { id: 'lune', nom: 'Lune', glyphe: '☽', body: Astronomy.Body.Moon },
  { id: 'mercure', nom: 'Mercure', glyphe: '☿', body: Astronomy.Body.Mercury },
  { id: 'venus', nom: 'Vénus', glyphe: '♀', body: Astronomy.Body.Venus },
  { id: 'mars', nom: 'Mars', glyphe: '♂', body: Astronomy.Body.Mars },
  { id: 'jupiter', nom: 'Jupiter', glyphe: '♃', body: Astronomy.Body.Jupiter },
  { id: 'saturne', nom: 'Saturne', glyphe: '♄', body: Astronomy.Body.Saturn },
  { id: 'uranus', nom: 'Uranus', glyphe: '♅', body: Astronomy.Body.Uranus },
  { id: 'neptune', nom: 'Neptune', glyphe: '♆', body: Astronomy.Body.Neptune },
  { id: 'pluton', nom: 'Pluton', glyphe: '♇', body: Astronomy.Body.Pluto },
]

function eclipticLongitude(body: Astronomy.Body | 'Sun', date: Date): number {
  if (body === 'Sun') {
    return norm360(Astronomy.SunPosition(date).elon)
  }
  return norm360(Astronomy.EclipticLongitude(body, date))
}

/** Longitude ~24h plus tard pour détecter la rétrogradation apparente. */
function isRetrograde(body: Astronomy.Body | 'Sun', date: Date): boolean {
  if (body === 'Sun' || body === Astronomy.Body.Moon) return false
  const before = eclipticLongitude(body, new Date(date.getTime() - 43200000))
  const after = eclipticLongitude(body, new Date(date.getTime() + 43200000))
  let d = after - before
  if (d > 180) d -= 360
  if (d < -180) d += 360
  return d < 0
}

export function computeChart(input: ChartInput): ChartResult {
  const { dateUTC, latitude, longitude, heureConnue } = input
  const eps = meanObliquity(dateUTC)

  const bodies: BodyPosition[] = BODY_DEFS.map((def) => {
    const lon = eclipticLongitude(def.body, dateUTC)
    const s = signFromLongitude(lon)
    return {
      id: def.id,
      nom: def.nom,
      glyphe: def.glyphe,
      longitude: lon,
      signe: s.signe,
      signeId: s.signeId,
      degre: s.degre,
      retrograde: isRetrograde(def.body, dateUTC),
    }
  })

  // Nœud Nord moyen (approx) — point orbital, pas un corps.
  const node = meanLunarNode(dateUTC)
  const ns = signFromLongitude(node)
  bodies.push({
    id: 'noeud-nord', nom: 'Nœud Nord', glyphe: '☊',
    longitude: node, signe: ns.signe, signeId: ns.signeId, degre: ns.degre, retrograde: true,
  })

  if (!heureConnue) {
    return { input, bodies, systemeMaisons: 'aucun', obliquite: eps }
  }

  // Temps sidéral apparent de Greenwich (heures) → RAMC local (degrés)
  const gast = Astronomy.SiderealTime(dateUTC) // heures
  const lst = norm360(gast * 15 + longitude)
  const ramc = lst

  const ascLon = ascendantLongitude(ramc, latitude, eps)
  const mcLon = norm360(deg(Math.atan2(Math.sin(rad(ramc)), Math.cos(rad(ramc)) * Math.cos(rad(eps)))))

  const ascS = signFromLongitude(ascLon)
  const mcS = signFromLongitude(mcLon)

  // Maisons en signes entiers : maison 1 = signe de l'Ascendant.
  const startIdx = ascS.index
  const maisons = Array.from({ length: 12 }, (_, i) => {
    const idx = (startIdx + i) % 12
    return { numero: i + 1, cuspide: idx * 30, signe: ZODIAC[idx], signeId: SIGN_IDS[idx] }
  })

  for (const b of bodies) {
    const idx = signFromLongitude(b.longitude).index
    b.maison = ((idx - startIdx + 12) % 12) + 1
  }

  return {
    input,
    bodies,
    ascendant: { longitude: ascLon, signe: ascS.signe, signeId: ascS.signeId, degre: ascS.degre },
    milieuCiel: { longitude: mcLon, signe: mcS.signe, signeId: mcS.signeId, degre: mcS.degre },
    maisons,
    systemeMaisons: 'signes-entiers',
    obliquite: eps,
  }
}

/** Ascendant : longitude écliptique du point est de l'horizon. */
export function ascendantLongitude(ramcDeg: number, latDeg: number, epsDeg: number): number {
  const ramc = rad(ramcDeg)
  const eps = rad(epsDeg)
  const lat = rad(latDeg)
  const asc = Math.atan2(
    Math.cos(ramc),
    -(Math.sin(ramc) * Math.cos(eps) + Math.tan(lat) * Math.sin(eps)),
  )
  let ascDeg = norm360(deg(asc))
  // L'Ascendant doit se situer dans le demi-cercle oriental (RAMC + 90°..+270°).
  const lower = norm360(ramcDeg + 90)
  const span = norm360(ascDeg - lower)
  if (span > 180) ascDeg = norm360(ascDeg + 180)
  return ascDeg
}

/** Longitude du Nœud lunaire nord moyen (degrés). */
export function meanLunarNode(date: Date): number {
  const jd = date.getTime() / 86400000 + 2440587.5
  const T = (jd - 2451545.0) / 36525
  const omega =
    125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + (T * T * T) / 467441 - (T * T * T * T) / 60616000
  return norm360(omega)
}
