import type { Level } from './types'

/** Les 15 niveaux du parcours initiatique. */
export const CURRICULUM: Level[] = [
  {
    numero: 1, slug: 'langage-symbolique', titre: 'Découvrir le langage symbolique', glyphe: '✦',
    sousTitre: 'Symbole, signe, archétype', etape: 'Le seuil',
    intention: "Apprendre à lire une image sans la réduire à un seul sens. Distinguer observation astronomique et interprétation symbolique.",
    contenuRefs: [{ type: 'symbolic', label: 'Le symbole' }, { type: 'symbolic', label: "L'archétype" }, { type: 'symbolic', label: "L'astrologie comme langage" }, { type: 'symbolic', label: "Observer n'est pas interpréter" }],
  },
  {
    numero: 2, slug: 'elements', titre: 'Les quatre éléments', glyphe: '△',
    sousTitre: 'Feu, Terre, Air, Eau', etape: 'Les matières premières',
    intention: "Reconnaître les quatre grandes qualités de l'énergie psychique et repérer leurs excès et leurs manques.",
    contenuRefs: [{ type: 'element', label: 'Feu' }, { type: 'element', label: 'Terre' }, { type: 'element', label: 'Air' }, { type: 'element', label: 'Eau' }],
  },
  {
    numero: 3, slug: 'signes', titre: 'Les douze signes', glyphe: '♈',
    sousTitre: 'Le zodiaque comme cycle', etape: 'La roue',
    intention: "Étudier les signes comme douze étapes successives d'un même processus de conscience, du Bélier aux Poissons.",
    contenuRefs: [{ type: 'signs', label: 'Cycle des 12 signes' }, { type: 'modes', label: 'Cardinal, Fixe, Mutable' }],
  },
  {
    numero: 4, slug: 'planetes', titre: 'Les planètes', glyphe: '☉',
    sousTitre: 'Les fonctions de la psyché', etape: 'Les acteurs',
    intention: "Comprendre chaque planète comme une fonction psychologique et un archétype. PLANÈTE = QUOI ?",
    contenuRefs: [{ type: 'planets', label: 'Les 10 planètes + Chiron, Nœuds, Lune Noire' }],
  },
  {
    numero: 5, slug: 'maisons', titre: 'Les douze maisons', glyphe: '⌂',
    sousTitre: 'Les domaines de la vie', etape: 'Les lieux',
    intention: "Situer où, dans l'expérience concrète, les fonctions se déploient. MAISON = OÙ ?",
    contenuRefs: [{ type: 'houses', label: 'Les 12 maisons et leurs axes' }],
  },
  {
    numero: 6, slug: 'aspects', titre: 'Les aspects', glyphe: '△',
    sousTitre: 'Les relations entre forces', etape: 'Les tensions',
    intention: "Lire les angles entre planètes comme des relations dynamiques : tension, fluidité, ajustement. Jamais 'bon' ou 'mauvais'.",
    contenuRefs: [{ type: 'aspects', label: 'Conjonction, opposition, carré, trigone, sextile, quinconce' }],
  },
  {
    numero: 7, slug: 'theme-natal', titre: 'Le thème natal', glyphe: '❂',
    sousTitre: 'La carte du ciel de naissance', etape: 'La carte',
    intention: "Calculer et lire une carte : Soleil, Lune, Ascendant, planètes, maisons, aspects. Séparer données et interprétation.",
    contenuRefs: [{ type: 'tool', label: 'Calculateur de thème' }, { type: 'tool', label: 'Lecture en 10 couches' }],
  },
  {
    numero: 8, slug: 'mythologie', titre: 'Mythologie et archétypes', glyphe: '𓁿',
    sousTitre: 'Les dieux comme carte de la psyché', etape: 'Les récits',
    intention: "Explorer les grandes figures mythiques et ce qu'elles enseignent des dynamiques intérieures.",
    contenuRefs: [{ type: 'myths', label: 'Bibliothèque mythologique (20 figures)' }],
  },
  {
    numero: 9, slug: 'jung', titre: 'Jung et la psychologie des profondeurs', glyphe: '☯',
    sousTitre: 'Archétype, Ombre, Soi, individuation', etape: 'La psyché',
    intention: "Situer les concepts de Jung et distinguer ce qui vient de lui, des interprétations astrologiques, des rapprochements d'auteurs.",
    contenuRefs: [{ type: 'jung', label: '10 concepts junguiens' }],
  },
  {
    numero: 10, slug: 'tarot', titre: 'Le Tarot', glyphe: '🃏',
    sousTitre: 'Les 22 arcanes comme parcours', etape: 'Les lames',
    intention: "Parcourir les arcanes majeurs et comparer, avec prudence, leurs correspondances astrologiques selon les traditions.",
    contenuRefs: [{ type: 'tarot', label: 'Les 22 arcanes majeurs' }, { type: 'tool', label: 'Comparer Tarot et Zodiaque' }],
  },
  {
    numero: 11, slug: 'alchimie', titre: "L'alchimie", glyphe: '🜛',
    sousTitre: "L'Œuvre comme métaphore de transformation", etape: 'Le creuset',
    intention: "Suivre les phases de l'Œuvre (nigredo, albedo, citrinitas, rubedo) comme carte d'un processus intérieur.",
    contenuRefs: [{ type: 'alchemy', label: '10 concepts alchimiques' }],
  },
  {
    numero: 12, slug: 'hermetisme', titre: "L'hermétisme", glyphe: '☿',
    sousTitre: 'Les sept principes', etape: 'Les lois',
    intention: "Étudier les sept principes hermétiques (formulation moderne) et les utiliser comme grilles de lecture symbolique.",
    contenuRefs: [{ type: 'hermetism', label: 'Les 7 principes' }, { type: 'module', label: 'La langue des oiseaux' }],
  },
  {
    numero: 13, slug: 'heros', titre: 'Le chemin du héros', glyphe: '⚔',
    sousTitre: "Le récit de la transformation", etape: 'Le voyage',
    intention: "Parcourir les 11 étapes du voyage héroïque, les mettre en regard des 12 signes et des 12 travaux d'Hercule.",
    contenuRefs: [{ type: 'hero', label: 'Les 11 étapes' }, { type: 'hero', label: "Les 12 travaux d'Hercule" }],
  },
  {
    numero: 14, slug: 'lire-un-theme', titre: 'Lire un thème complet', glyphe: '❖',
    sousTitre: "Méthode et entraînement", etape: "L'atelier",
    intention: "Assembler toutes les couches sur des thèmes fictifs : dominantes, axes, éléments, tensions, synthèse. Formuler des questions, pas des prédictions.",
    contenuRefs: [{ type: 'tool', label: 'Mode Apprenti astrologue' }, { type: 'tool', label: "Exercices d'interprétation" }, { type: 'module', label: 'La dominante' }],
  },
  {
    numero: 15, slug: 'mythe-personnel', titre: 'Construire son propre mythe astrologique', glyphe: '✵',
    sousTitre: "Le thème natal comme récit personnel", etape: 'Le miroir',
    intention: "À partir de sa propre carte, composer un récit symbolique — une invitation à la réflexion, jamais un destin fixé.",
    contenuRefs: [{ type: 'tool', label: 'Atelier du mythe personnel' }, { type: 'tool', label: 'Journal symbolique' }],
  },
]

export const LEVEL_BY_SLUG = Object.fromEntries(CURRICULUM.map((l) => [l.slug, l])) as Record<string, Level>

/** Niveaux de maîtrise (progression transversale). */
export const MASTERY_LEVELS = [
  { niveau: 1, nom: 'Observateur', seuilXP: 0 },
  { niveau: 2, nom: 'Lecteur', seuilXP: 120 },
  { niveau: 3, nom: 'Symboliste', seuilXP: 300 },
  { niveau: 4, nom: 'Astrologue débutant', seuilXP: 560 },
  { niveau: 5, nom: 'Interprète', seuilXP: 900 },
  { niveau: 6, nom: 'Mythologue', seuilXP: 1320 },
  { niveau: 7, nom: 'Alchimiste', seuilXP: 1820 },
  { niveau: 8, nom: 'Hermétiste', seuilXP: 2400 },
  { niveau: 9, nom: 'Chercheur du symbole', seuilXP: 3100 },
  { niveau: 10, nom: "Cartographe de l'âme", seuilXP: 4000 },
]

export function masteryFor(xp: number) {
  let current = MASTERY_LEVELS[0]
  for (const m of MASTERY_LEVELS) if (xp >= m.seuilXP) current = m
  const next = MASTERY_LEVELS.find((m) => m.seuilXP > xp)
  return { current, next }
}

export const ONBOARDING_PATHS = [
  { id: 'debutant', label: 'Je ne connais rien à l\'astrologie', start: 1 },
  { id: 'signes', label: 'Je connais les signes', start: 2 },
  { id: 'planetes', label: 'Je connais déjà les planètes', start: 4 },
  { id: 'theme', label: 'Je veux apprendre à lire mon thème', start: 4 },
  { id: 'symbolique', label: 'Je veux explorer l\'astrologie symbolique', start: 1 },
  { id: 'tarot', label: 'Je veux explorer les liens avec le Tarot', start: 10 },
  { id: 'alchimie', label: 'Je veux explorer l\'alchimie', start: 11 },
  { id: 'jung', label: 'Je veux explorer Jung', start: 9 },
  { id: 'complet', label: 'Je veux suivre le parcours complet', start: 1 },
]
