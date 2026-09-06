import { describe, it, expect } from 'vitest'
import { buildFullChart, toUTC, type BirthData } from './chart'
import { findAspects, angularDistance, computeDominantes } from './aspects'

const BIRTH: BirthData = {
  date: '1988-07-15',
  heure: '09:30',
  heureConnue: true,
  lieu: 'Paris',
  latitude: 48.8566,
  longitude: 2.3522,
  utcOffset: 2,
}

describe('toUTC', () => {
  it('convertit l\'heure locale en UTC via le décalage', () => {
    const d = toUTC(BIRTH)
    // 09:30 locale, UTC+2 => 07:30 UTC
    expect(d.getUTCHours()).toBe(7)
    expect(d.getUTCMinutes()).toBe(30)
  })
  it('utilise midi quand l\'heure est inconnue', () => {
    const d = toUTC({ ...BIRTH, heureConnue: false })
    expect(d.getUTCHours()).toBe(12 - 2)
  })
})

describe('angularDistance', () => {
  it('donne la plus courte distance angulaire', () => {
    expect(angularDistance(10, 20)).toBeCloseTo(10)
    expect(angularDistance(350, 10)).toBeCloseTo(20)
    expect(angularDistance(0, 180)).toBeCloseTo(180)
  })
})

describe('findAspects', () => {
  it('trouve une conjonction pour deux corps proches', () => {
    const bodies = [
      { id: 'soleil', nom: 'Soleil', glyphe: '☉', longitude: 100, signe: 'Cancer', signeId: 'cancer', degre: 10, retrograde: false },
      { id: 'venus', nom: 'Vénus', glyphe: '♀', longitude: 103, signe: 'Cancer', signeId: 'cancer', degre: 13, retrograde: false },
    ]
    const asp = findAspects(bodies)
    expect(asp.some((a) => a.aspectId === 'conjonction')).toBe(true)
  })
  it('trouve une opposition à ~180°', () => {
    const bodies = [
      { id: 'mars', nom: 'Mars', glyphe: '♂', longitude: 20, signe: 'Bélier', signeId: 'belier', degre: 20, retrograde: false },
      { id: 'saturne', nom: 'Saturne', glyphe: '♄', longitude: 201, signe: 'Balance', signeId: 'balance', degre: 21, retrograde: false },
    ]
    expect(findAspects(bodies).some((a) => a.aspectId === 'opposition')).toBe(true)
  })
})

describe('computeDominantes', () => {
  it('classe les planètes avec un raisonnement transparent', () => {
    const full = buildFullChart(BIRTH)
    const dom = computeDominantes(full.chart.bodies, full.aspects, full.chart.ascendant?.signeId)
    expect(dom.length).toBeGreaterThan(0)
    expect(dom[0].score).toBeGreaterThanOrEqual(dom[dom.length - 1].score)
    expect(dom[0].raisons.length).toBeGreaterThan(0)
  })
})

describe('buildFullChart', () => {
  const full = buildFullChart(BIRTH)

  it('produit 10 couches d\'interprétation', () => {
    expect(full.layers).toHaveLength(10)
    expect(full.layers[0].titre).toContain('Soleil')
    expect(full.layers[9].titre).toContain('Synthèse')
  })

  it('produit un brouillon de mythe personnel non prédictif', () => {
    const txt = full.myth.join(' ')
    expect(txt.length).toBeGreaterThan(200)
    expect(txt).toMatch(/n'est pas un destin/i)
  })

  it('avertit quand l\'heure est inconnue', () => {
    const f = buildFullChart({ ...BIRTH, heureConnue: false })
    expect(f.avertissements.join(' ')).toMatch(/Ascendant/)
    expect(f.chart.ascendant).toBeUndefined()
  })

  it('équilibre des éléments : total cohérent', () => {
    const { feu, terre, air, eau } = full.elements
    expect(feu + terre + air + eau).toBeGreaterThan(0)
    expect(['feu', 'terre', 'air', 'eau']).toContain(full.elements.dominant)
  })
})
