/**
 * Modèle de contenu de « L'École du Symbolisme Astrologique ».
 * Tout le contenu est original et pédagogique. Il s'inspire de thèmes publics
 * de l'astrologie symbolique (approche archétypale, Jung, mythologie, alchimie,
 * hermétisme) sans reproduire de texte protégé.
 */

export type SourceTag =
  | 'traditionnel'
  | 'interpretation-symbolique'
  | 'rapprochement-moderne'
  | 'hypothese'
  | 'contenu-pedagogique'

export const SOURCE_LABELS: Record<SourceTag, string> = {
  traditionnel: 'Traditionnel',
  'interpretation-symbolique': 'Interprétation symbolique',
  'rapprochement-moderne': 'Rapprochement moderne',
  hypothese: 'Hypothèse',
  'contenu-pedagogique': 'Contenu pédagogique',
}

/** Les 13 facettes systématiques d'un concept. */
export interface Facets {
  definition: string
  symbole: string
  imageArchetypale: string
  mythologie: string
  psychologie: string
  ombre: string
  potentielEvolutif: string
  questionReflexion: string
  exercice: string
  paralleleTarot?: string
  paralleleAlchimique?: string
  paralleleHermetique?: string
  paralleleJungien?: string
}

export interface Correspondance {
  domaine: string
  contenu: string
  tag: SourceTag
}

export interface Sign {
  id: string
  ordre: number
  nom: string
  glyphe: string
  dates: string
  element: 'feu' | 'terre' | 'air' | 'eau'
  mode: 'cardinal' | 'fixe' | 'mutable'
  polarite: 'diurne' | 'nocturne'
  maitre: string
  motCle: string
  archetype: string
  besoinFondamental: string
  dynamiquePsychologique: string
  potentiel: string
  ombre: string
  exces: string
  manque: string
  niveaux: {
    instinctif: string
    psychologique: string
    conscient: string
    transpersonnel: string
  }
  mythologie: string
  conteSymbolique: string
  questionInitiatique: string
  exercice: string
  etapeHeros: string
  correspondances: Correspondance[]
}

export interface Planet {
  id: string
  nom: string
  glyphe: string
  categorie: 'luminaire' | 'personnelle' | 'sociale' | 'transpersonnelle' | 'point'
  fonction: string
  archetype: string
  principe: string
  expressionHarmonieuse: string
  expressionDesequilibree: string
  ombre: string
  potentielEvolutif: string
  questionInitiatique: string
  mythologie: string
  jung: string
  tarot: string
  alchimie: string
  hermetisme: string
  exemplesTheme: string[]
  correspondances: Correspondance[]
}

export interface House {
  id: string
  numero: number
  romain: string
  nom: string
  domaineTraditionnel: string
  questionExistentielle: string
  archetype: string
  psychologie: string
  ombre: string
  potentiel: string
  planeteNaturelle?: string
  signeNaturel?: string
  axe: string
  axeSens: string
  exercice: string
  exempleInterpretation: string
  categorie: 'angulaire' | 'succedente' | 'cadente'
}

export interface Aspect {
  id: string
  nom: string
  glyphe: string
  angle: number
  orbe: number
  famille: 'conjonction' | 'harmonique' | 'tension' | 'ajustement'
  nature: string
  processus: string[]
  malentendu: string
  lecture: string
  exercice: string
  correspondances: Correspondance[]
}

export interface ElementInfo {
  id: 'feu' | 'terre' | 'air' | 'eau'
  nom: string
  glyphe: string
  symbolisme: string
  psychologie: string
  qualites: string[]
  exces: string
  manque: string
  signes: string[]
  fonctionDeveloppement: string
  paralleleAlchimique: Correspondance
  paralleleTarot: Correspondance
  paralleleHermetique: Correspondance
  exerciceInteractif: string
}

export interface Mode {
  id: 'cardinal' | 'fixe' | 'mutable'
  nom: string
  principe: string
  description: string
  saison: string
  signes: string[]
  ombre: string
  exercice: string
}

export interface Myth {
  id: string
  nom: string
  nomRomain?: string
  domaine: string
  histoire: string
  symbolisme: string
  archetype: string
  planete?: string
  signe?: string
  themePsychologique: string
  enseignementInitiatique: string
  tags: string[]
}

export interface TarotCard {
  id: string
  numero: number
  nom: string
  archetype: string
  symbolisme: string
  cheminInitiatique: string
  lumiere: string
  ombre: string
  correspondances: Correspondance[]
}

export interface GenericConcept {
  id: string
  nom: string
  glyphe?: string
  categorie: string
  facets: Facets
  sources: SourceTag[]
}

export interface QuizQuestion {
  id: string
  type: 'qcm' | 'vrai-faux' | 'association' | 'classement'
  theme: string
  niveau: number
  question: string
  options: string[]
  bonneReponse: number | number[]
  explication: string
}

export interface Level {
  numero: number
  slug: string
  titre: string
  sousTitre: string
  intention: string
  glyphe: string
  etape: string
  contenuRefs: { type: string; label: string }[]
}
