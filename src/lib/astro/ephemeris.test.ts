import { describe, it, expect } from 'vitest'
import { computeChart, signFromLongitude, meanObliquity, ascendantLongitude, ZODIAC } from './ephemeris'

describe('signFromLongitude', () => {
  it('mappe les longitudes aux signes', () => {
    expect(signFromLongitude(0).signe).toBe('Bélier')
    expect(signFromLongitude(45).signe).toBe('Taureau')
    expect(signFromLongitude(200).signe).toBe('Balance')
    expect(signFromLongitude(359.9).signe).toBe('Poissons')
    expect(signFromLongitude(-1).signe).toBe('Poissons')
  })
  it('donne un degré dans [0, 30[', () => {
    for (const l of [0, 12.3, 100, 271.8, 359.99]) {
      const d = signFromLongitude(l).degre
      expect(d).toBeGreaterThanOrEqual(0)
      expect(d).toBeLessThan(30)
    }
  })
})

describe('meanObliquity', () => {
  it('vaut ~23.44° à notre époque', () => {
    const eps = meanObliquity(new Date('2000-01-01T12:00:00Z'))
    expect(eps).toBeGreaterThan(23.43)
    expect(eps).toBeLessThan(23.45)
  })
})

describe('ascendantLongitude', () => {
  it('reste dans [0,360[', () => {
    for (let ramc = 0; ramc < 360; ramc += 37) {
      const asc = ascendantLongitude(ramc, 48.85, 23.44)
      expect(asc).toBeGreaterThanOrEqual(0)
      expect(asc).toBeLessThan(360)
    }
  })
})

describe('computeChart', () => {
  // Repère externe : 2000-01-01 12:00 UTC, le Soleil est ~à 10° du Capricorne.
  const chart = computeChart({
    dateUTC: new Date('2000-01-01T12:00:00Z'),
    latitude: 48.8566,
    longitude: 2.3522,
    heureConnue: true,
  })

  it('place le Soleil en Capricorne le 1er janvier', () => {
    const soleil = chart.bodies.find((b) => b.id === 'soleil')!
    expect(soleil.signe).toBe('Capricorne')
    expect(soleil.degre).toBeGreaterThan(8)
    expect(soleil.degre).toBeLessThan(13)
  })

  it('calcule les 10 planètes + le Nœud Nord', () => {
    expect(chart.bodies).toHaveLength(11)
    expect(chart.bodies.map((b) => b.id)).toContain('pluton')
    expect(chart.bodies.map((b) => b.id)).toContain('noeud-nord')
  })

  it('fournit un Ascendant et 12 maisons quand l\'heure est connue', () => {
    expect(chart.ascendant).toBeDefined()
    expect(ZODIAC).toContain(chart.ascendant!.signe)
    expect(chart.maisons).toHaveLength(12)
    expect(chart.maisons![0].numero).toBe(1)
    // toutes les planètes ont une maison
    for (const b of chart.bodies) expect(b.maison).toBeGreaterThanOrEqual(1)
  })

  it('n\'invente pas l\'Ascendant si l\'heure est inconnue', () => {
    const c = computeChart({
      dateUTC: new Date('2000-01-01T12:00:00Z'),
      latitude: 48.85,
      longitude: 2.35,
      heureConnue: false,
    })
    expect(c.ascendant).toBeUndefined()
    expect(c.maisons).toBeUndefined()
    expect(c.systemeMaisons).toBe('aucun')
  })

  it('detecte au moins une planète rétrograde sur une longue période cumulée', () => {
    // Sur ~40 échantillons dans l'année, il doit y avoir des rétrogradations.
    let retro = 0
    for (let m = 0; m < 12; m++) {
      const c = computeChart({
        dateUTC: new Date(Date.UTC(2020, m, 1, 12)),
        latitude: 0,
        longitude: 0,
        heureConnue: false,
      })
      retro += c.bodies.filter((b) => b.retrograde).length
    }
    expect(retro).toBeGreaterThan(0)
  })
})
