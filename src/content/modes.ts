import type { Mode } from './types'

export const MODES: Mode[] = [
  {
    id: 'cardinal',
    nom: 'Cardinal',
    principe: 'Initiation',
    description:
      "Les signes cardinaux ouvrent les saisons. Leur geste est celui du commencement : lancer, décider, provoquer une direction. Ils créent de l'élan et posent une intention, mais ne sont pas faits pour entretenir ce qu'ils ont lancé.",
    saison: 'Chaque signe cardinal marque le début d’une saison (équinoxes et solstices).',
    signes: ['Bélier', 'Cancer', 'Balance', 'Capricorne'],
    ombre:
      "L'ombre du cardinal : multiplier les débuts sans jamais achever, s'agiter, imposer une direction aux autres, confondre décision et précipitation.",
    exercice:
      "Repérez une initiative que vous avez prise récemment. A-t-elle été suivie d'effets ? Qu'aurait-il fallu de fixe (constance) ou de mutable (ajustement) pour qu'elle aboutisse ?",
  },
  {
    id: 'fixe',
    nom: 'Fixe',
    principe: 'Stabilisation',
    description:
      "Les signes fixes occupent le cœur des saisons. Leur geste est celui de la consolidation : approfondir, tenir, rendre durable, résister aux perturbations. Ils donnent de la substance et de la loyauté à ce qui a été commencé.",
    saison: 'Chaque signe fixe correspond à la pleine maturité d’une saison.',
    signes: ['Taureau', 'Lion', 'Scorpion', 'Verseau'],
    ombre:
      "L'ombre du fixe : l'entêtement, le refus du changement même nécessaire, la crispation sur une position, la difficulté à lâcher.",
    exercice:
      "Identifiez une chose à laquelle vous tenez fermement. Distinguez : est-ce une fidélité qui vous construit, ou une rigidité qui vous protège de la peur ?",
  },
  {
    id: 'mutable',
    nom: 'Mutable',
    principe: 'Transformation',
    description:
      "Les signes mutables ferment les saisons et préparent la suivante. Leur geste est celui de l'adaptation : relier, nuancer, transmettre, dissoudre les formes devenues trop rigides pour permettre le passage.",
    saison: 'Chaque signe mutable correspond à la fin d’une saison, au seuil de la suivante.',
    signes: ['Gémeaux', 'Vierge', 'Sagittaire', 'Poissons'],
    ombre:
      "L'ombre du mutable : la dispersion, l'inconstance, l'absence de position propre, le fait de se fondre dans l'attente des autres jusqu'à se perdre.",
    exercice:
      "Repérez un moment où vous vous êtes adapté à une situation. Cette souplesse a-t-elle servi une intention claire, ou a-t-elle été une manière d'éviter de choisir ?",
  },
]

/** Grille Élément × Mode × Signe (croisement pédagogique). */
export const GRILLE: { element: string; cardinal: string; fixe: string; mutable: string }[] = [
  { element: 'Feu', cardinal: 'Bélier', fixe: 'Lion', mutable: 'Sagittaire' },
  { element: 'Terre', cardinal: 'Capricorne', fixe: 'Taureau', mutable: 'Vierge' },
  { element: 'Air', cardinal: 'Balance', fixe: 'Verseau', mutable: 'Gémeaux' },
  { element: 'Eau', cardinal: 'Cancer', fixe: 'Scorpion', mutable: 'Poissons' },
]
