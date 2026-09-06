import type { BodyPosition } from './ephemeris'
import { ASPECTS } from '@/content/aspects'

export interface FoundAspect {
  a: string
  b: string
  aId: string
  bId: string
  aspectId: string
  aspectNom: string
  glyphe: string
  angleExact: number
  ecart: number
  famille: string
}

const norm = (x: number) => ((x % 360) + 360) % 360

export function angularDistance(l1: number, l2: number): number {
  const d = Math.abs(norm(l1 - l2))
  return d > 180 ? 360 - d : d
}

/** Poids relatif d'un corps pour resserrer les orbes des points mineurs. */
const ORBE_FACTOR: Record<string, number> = {
  soleil: 1, lune: 1, mercure: 0.9, venus: 0.9, mars: 0.9,
  jupiter: 0.85, saturne: 0.85, uranus: 0.8, neptune: 0.8, pluton: 0.8,
  'noeud-nord': 0.5,
}

export function findAspects(bodies: BodyPosition[]): FoundAspect[] {
  const out: FoundAspect[] = []
  for (let i = 0; i < bodies.length; i++) {
    for (let j = i + 1; j < bodies.length; j++) {
      const b1 = bodies[i]
      const b2 = bodies[j]
      const dist = angularDistance(b1.longitude, b2.longitude)
      for (const asp of ASPECTS) {
        const orbe = asp.orbe * Math.min(ORBE_FACTOR[b1.id] ?? 0.7, ORBE_FACTOR[b2.id] ?? 0.7) * 1.1
        const ecart = Math.abs(dist - asp.angle)
        if (ecart <= orbe) {
          out.push({
            a: b1.nom, b: b2.nom, aId: b1.id, bId: b2.id,
            aspectId: asp.id, aspectNom: asp.nom, glyphe: asp.glyphe,
            angleExact: asp.angle, ecart: Math.round(ecart * 100) / 100, famille: asp.famille,
          })
          break
        }
      }
    }
  }
  return out.sort((x, y) => x.ecart - y.ecart)
}

export interface DominanteScore {
  id: string
  nom: string
  score: number
  raisons: string[]
}

/**
 * Pondération TRANSPARENTE d'une dominante planétaire.
 * Aucune prétention à la vérité : c'est un outil de hiérarchisation.
 */
export function computeDominantes(
  bodies: BodyPosition[],
  aspects: FoundAspect[],
  ascendantSigneId?: string,
): DominanteScore[] {
  const planets = bodies.filter((b) => b.id !== 'noeud-nord')
  const scores = new Map<string, DominanteScore>()
  for (const p of planets) scores.set(p.id, { id: p.id, nom: p.nom, score: 0, raisons: [] })

  const add = (id: string, pts: number, raison: string) => {
    const s = scores.get(id)
    if (!s) return
    s.score += pts
    s.raisons.push(`${pts > 0 ? '+' : ''}${pts} — ${raison}`)
  }

  // 1. Angularité (planète proche de l'Ascendant ou du MC → maisons I, IV, VII, X)
  for (const p of planets) {
    if (p.maison && [1, 10, 7, 4].includes(p.maison)) {
      const pts = p.maison === 1 || p.maison === 10 ? 5 : 3
      add(p.id, pts, `en maison ${p.maison} (angulaire)`)
    }
  }

  // 2. Luminaires : bonus de base
  add('soleil', 3, 'luminaire (Soleil)')
  add('lune', 3, 'luminaire (Lune)')

  // 3. Maîtrise de l'Ascendant
  const RULERS: Record<string, string> = {
    belier: 'mars', taureau: 'venus', gemeaux: 'mercure', cancer: 'lune', lion: 'soleil',
    vierge: 'mercure', balance: 'venus', scorpion: 'pluton', sagittaire: 'jupiter',
    capricorne: 'saturne', verseau: 'uranus', poissons: 'neptune',
  }
  if (ascendantSigneId && RULERS[ascendantSigneId]) {
    add(RULERS[ascendantSigneId], 4, `maître de l'Ascendant (${ascendantSigneId})`)
  }

  // 4. Planète dans son propre signe (dignité)
  for (const p of planets) {
    if (RULERS[p.signeId] === p.id) add(p.id, 3, `dans son signe (${p.signe})`)
  }

  // 5. Nombre et serrage des aspects
  for (const asp of aspects) {
    const pts = asp.ecart < 2 ? 1.5 : 0.8
    add(asp.aId, pts, `aspect ${asp.aspectNom} avec ${asp.b} (écart ${asp.ecart}°)`)
    add(asp.bId, pts, `aspect ${asp.aspectNom} avec ${asp.a} (écart ${asp.ecart}°)`)
  }

  return [...scores.values()]
    .map((s) => ({ ...s, score: Math.round(s.score * 10) / 10 }))
    .sort((a, b) => b.score - a.score)
}
