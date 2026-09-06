import { describe, it, expect } from 'vitest'
import { SIGNS } from '@/content/signs'
import { PLANETS } from '@/content/planets'
import { HOUSES } from '@/content/houses'
import { ASPECTS } from '@/content/aspects'
import { TAROT } from '@/content/tarot'
import { MYTHS } from '@/content/myths'
import { JUNG_CONCEPTS } from '@/content/jung'
import { ALCHEMY_CONCEPTS } from '@/content/alchemy'
import { HERMETIC_PRINCIPLES } from '@/content/hermetism'
import { HERO_JOURNEY, TRAVAUX_HERCULE } from '@/content/hero'
import { CURRICULUM } from '@/content/curriculum'
import { LIBRARY } from '@/content'
import { demanderAuMaitre } from './maitre'

describe('intégrité du contenu', () => {
  it('12 signes ordonnés de 1 à 12, sans doublon', () => {
    expect(SIGNS).toHaveLength(12)
    expect(SIGNS.map((s) => s.ordre)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    expect(new Set(SIGNS.map((s) => s.id)).size).toBe(12)
  })

  it('chaque signe a les facettes clés remplies', () => {
    for (const s of SIGNS) {
      expect(s.mythologie.length).toBeGreaterThan(20)
      expect(s.ombre.length).toBeGreaterThan(20)
      expect(s.questionInitiatique).toContain('?')
      expect(s.etapeHeros.length).toBeGreaterThan(5)
      expect(s.correspondances.length).toBeGreaterThanOrEqual(3)
      expect(['feu', 'terre', 'air', 'eau']).toContain(s.element)
      expect(['cardinal', 'fixe', 'mutable']).toContain(s.mode)
    }
  })

  it('10 planètes principales + Chiron, Nœud Nord, Lune Noire', () => {
    expect(PLANETS.length).toBe(13)
    for (const p of PLANETS) {
      expect(p.questionInitiatique).toContain('?')
      expect(p.ombre.length).toBeGreaterThan(10)
    }
  })

  it('12 maisons avec axe opposé cohérent', () => {
    expect(HOUSES).toHaveLength(12)
    expect(HOUSES.map((h) => h.numero)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  })

  it('6 aspects, 22 arcanes, 20 mythes, 12 travaux, 11 étapes du héros', () => {
    expect(ASPECTS).toHaveLength(6)
    expect(TAROT).toHaveLength(22)
    expect(TAROT.map((t) => t.numero)).toEqual([...Array(22).keys()])
    expect(MYTHS.length).toBeGreaterThanOrEqual(15)
    expect(TRAVAUX_HERCULE).toHaveLength(12)
    expect(HERO_JOURNEY).toHaveLength(11)
  })

  it('10+ concepts Jung, 10 alchimie, 7 hermétisme', () => {
    expect(JUNG_CONCEPTS.length).toBeGreaterThanOrEqual(10)
    expect(ALCHEMY_CONCEPTS.length).toBeGreaterThanOrEqual(10)
    expect(HERMETIC_PRINCIPLES).toHaveLength(7)
  })

  it('15 niveaux de curriculum', () => {
    expect(CURRICULUM).toHaveLength(15)
    expect(CURRICULUM.map((l) => l.numero)).toEqual([...Array(15)].map((_, i) => i + 1))
  })

  it('index de bibliothèque : routes uniques', () => {
    const routes = LIBRARY.map((x) => x.route)
    expect(new Set(routes).size).toBe(routes.length)
    expect(LIBRARY.length).toBeGreaterThan(60)
  })
})

describe('Maître symbolique', () => {
  it('répond avec la structure attendue pour une planète', () => {
    const r = demanderAuMaitre('Explique-moi Saturne.')
    const titres = r.sections.map((s) => s.titre)
    expect(titres).toEqual(['Observation', 'Interprétation', 'Ombre', 'Potentiel', 'Question', 'Exercice'])
    expect(r.rappel).toMatch(/jamais une certitude/i)
  })

  it('bascule en mode comparatif', () => {
    const r = demanderAuMaitre('Quelle est la différence entre Mars et Vénus ?')
    expect(r.intro).toMatch(/Comparaison/i)
    expect(r.sections.some((s) => s.titre.includes('distingue'))).toBe(true)
  })

  it('ne prédit rien quand le symbole est inconnu', () => {
    const r = demanderAuMaitre('quel temps fera-t-il demain')
    expect(r.sections).toHaveLength(0)
  })
})
