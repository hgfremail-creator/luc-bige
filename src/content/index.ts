export * from './types'
export * from './disclaimers'
export { ELEMENTS, ELEMENT_BY_ID } from './elements'
export { MODES, GRILLE } from './modes'
export { SIGNS, SIGN_BY_ID, SIGN_BY_NAME } from './signs'
export { PLANETS, PLANET_BY_ID } from './planets'
export { HOUSES, HOUSE_BY_NUM } from './houses'
export { ASPECTS, ASPECT_BY_ID } from './aspects'
export { MYTHS, MYTH_BY_ID } from './myths'
export { TAROT, TAROT_BY_ID } from './tarot'
export { SYMBOLIC_LANGUAGE, SYMBOLIC_BY_ID } from './symbolic'
export { JUNG_CONCEPTS, JUNG_BY_ID } from './jung'
export { ALCHEMY_CONCEPTS, ALCHEMY_BY_ID, ALCHEMY_STAGES } from './alchemy'
export { HERMETIC_PRINCIPLES, HERMETIC_BY_ID } from './hermetism'
export { HERO_JOURNEY, TRAVAUX_HERCULE } from './hero'
export { CURRICULUM, LEVEL_BY_SLUG, MASTERY_LEVELS, masteryFor, ONBOARDING_PATHS } from './curriculum'
export { QUIZZES, QUIZ_THEMES, FICTIONAL_CHARTS } from './quizzes'

import { SIGNS } from './signs'
import { PLANETS } from './planets'
import { HOUSES } from './houses'
import { ASPECTS } from './aspects'
import { ELEMENTS } from './elements'
import { MYTHS } from './myths'
import { TAROT } from './tarot'
import { SYMBOLIC_LANGUAGE } from './symbolic'
import { JUNG_CONCEPTS } from './jung'
import { ALCHEMY_CONCEPTS } from './alchemy'
import { HERMETIC_PRINCIPLES } from './hermetism'

export interface SearchItem {
  id: string
  nom: string
  categorie: string
  glyphe?: string
  route: string
  resume: string
  kind: string
}

/** Index unifié pour la bibliothèque, la recherche et l'outil comparatif. */
export const LIBRARY: SearchItem[] = [
  ...SIGNS.map((s) => ({ id: s.id, nom: s.nom, categorie: 'Signe', glyphe: s.glyphe, route: `/bibliotheque/signe/${s.id}`, resume: `${s.element} · ${s.mode} · ${s.archetype}`, kind: 'signe' })),
  ...PLANETS.map((p) => ({ id: p.id, nom: p.nom, categorie: 'Planète', glyphe: p.glyphe, route: `/bibliotheque/planete/${p.id}`, resume: p.fonction, kind: 'planete' })),
  ...HOUSES.map((h) => ({ id: String(h.numero), nom: `Maison ${h.romain} — ${h.nom}`, categorie: 'Maison', route: `/bibliotheque/maison/${h.numero}`, resume: h.domaineTraditionnel, kind: 'maison' })),
  ...ASPECTS.map((a) => ({ id: a.id, nom: a.nom, categorie: 'Aspect', glyphe: a.glyphe, route: `/bibliotheque/aspect/${a.id}`, resume: a.nature, kind: 'aspect' })),
  ...ELEMENTS.map((e) => ({ id: e.id, nom: e.nom, categorie: 'Élément', glyphe: e.glyphe, route: `/bibliotheque/element/${e.id}`, resume: e.symbolisme.slice(0, 120) + '…', kind: 'element' })),
  ...MYTHS.map((m) => ({ id: m.id, nom: m.nom, categorie: 'Mythe', route: `/bibliotheque/mythe/${m.id}`, resume: m.domaine, kind: 'mythe' })),
  ...TAROT.map((c) => ({ id: c.id, nom: `${c.numero}. ${c.nom}`, categorie: 'Tarot', route: `/bibliotheque/tarot/${c.id}`, resume: c.archetype, kind: 'tarot' })),
  ...SYMBOLIC_LANGUAGE.map((c) => ({ id: c.id, nom: c.nom, categorie: 'Langage symbolique', glyphe: c.glyphe, route: `/bibliotheque/concept/symbolic/${c.id}`, resume: c.facets.definition.slice(0, 120) + '…', kind: 'concept' })),
  ...JUNG_CONCEPTS.map((c) => ({ id: c.id, nom: c.nom, categorie: 'Jung', route: `/bibliotheque/concept/jung/${c.id}`, resume: c.facets.definition.slice(0, 120) + '…', kind: 'concept' })),
  ...ALCHEMY_CONCEPTS.map((c) => ({ id: c.id, nom: c.nom, categorie: 'Alchimie', glyphe: c.glyphe, route: `/bibliotheque/concept/alchemy/${c.id}`, resume: c.facets.definition.slice(0, 120) + '…', kind: 'concept' })),
  ...HERMETIC_PRINCIPLES.map((c) => ({ id: c.id, nom: c.nom, categorie: 'Hermétisme', glyphe: c.glyphe, route: `/bibliotheque/concept/hermetism/${c.id}`, resume: c.facets.definition.slice(0, 120) + '…', kind: 'concept' })),
]

export const GENERIC_GROUPS: Record<string, import('./types').GenericConcept[]> = {
  symbolic: SYMBOLIC_LANGUAGE,
  jung: JUNG_CONCEPTS,
  alchemy: ALCHEMY_CONCEPTS,
  hermetism: HERMETIC_PRINCIPLES,
}

/** Éléments comparables dans l'outil « Mode comparatif ». */
export const COMPARABLES = [
  { group: 'Planètes', items: PLANETS.map((p) => ({ id: `planete:${p.id}`, label: p.nom })) },
  { group: 'Signes', items: SIGNS.map((s) => ({ id: `signe:${s.id}`, label: s.nom })) },
  { group: 'Éléments', items: ELEMENTS.map((e) => ({ id: `element:${e.id}`, label: e.nom })) },
  { group: 'Aspects', items: ASPECTS.map((a) => ({ id: `aspect:${a.id}`, label: a.nom })) },
  { group: 'Mythes', items: MYTHS.map((m) => ({ id: `mythe:${m.id}`, label: m.nom })) },
]
