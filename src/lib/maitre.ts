import { PLANETS } from '@/content/planets'
import { SIGNS } from '@/content/signs'
import { HOUSES } from '@/content/houses'
import { ASPECTS } from '@/content/aspects'
import { ELEMENTS } from '@/content/elements'
import { MYTHS } from '@/content/myths'
import { JUNG_CONCEPTS } from '@/content/jung'
import { ALCHEMY_CONCEPTS } from '@/content/alchemy'
import { HERMETIC_PRINCIPLES } from '@/content/hermetism'

export interface MaitreReponse {
  intro: string
  sections: { titre: string; corps: string[] }[]
  rappel: string
  suggestions: string[]
}

interface Entry {
  nom: string
  aliases: string[]
  kind: string
  data: unknown
}

const DIACRITICS = new RegExp('[\\u0300-\\u036f]', 'g')
const norm = (s: string) => s.normalize('NFD').replace(DIACRITICS, '').toLowerCase()

const ENTRIES: Entry[] = [
  ...PLANETS.map((p) => ({ nom: p.nom, aliases: [p.nom, p.id], kind: 'planete', data: p })),
  ...SIGNS.map((s) => ({ nom: s.nom, aliases: [s.nom, s.id], kind: 'signe', data: s })),
  ...HOUSES.map((h) => ({ nom: `Maison ${h.romain}`, aliases: [`maison ${h.numero}`, `maison ${h.romain}`, h.nom], kind: 'maison', data: h })),
  ...ASPECTS.map((a) => ({ nom: a.nom, aliases: [a.nom, a.id], kind: 'aspect', data: a })),
  ...ELEMENTS.map((e) => ({ nom: e.nom, aliases: [e.nom, e.id], kind: 'element', data: e })),
  ...MYTHS.map((m) => ({ nom: m.nom, aliases: [m.nom, m.id, m.nomRomain ?? ''], kind: 'mythe', data: m })),
  ...JUNG_CONCEPTS.map((c) => ({ nom: c.nom, aliases: [c.nom, c.id], kind: 'jung', data: c })),
  ...ALCHEMY_CONCEPTS.map((c) => ({ nom: c.nom, aliases: [c.nom, c.id], kind: 'alchimie', data: c })),
  ...HERMETIC_PRINCIPLES.map((c) => ({ nom: c.nom, aliases: [c.nom, c.id], kind: 'hermetisme', data: c })),
]

function match(question: string): Entry[] {
  const q = norm(question)
  const hits: { e: Entry; score: number }[] = []
  for (const e of ENTRIES) {
    let score = 0
    for (const a of e.aliases) {
      if (!a) continue
      const na = norm(a)
      if (q.includes(na) && na.length > 2) score += na.length
    }
    if (score) hits.push({ e, score })
  }
  return hits.sort((a, b) => b.score - a.score).map((h) => h.e)
}

function planeteSections(p: (typeof PLANETS)[number]) {
  return [
    { titre: 'Observation', corps: [`${p.nom} (${p.glyphe}) — ${p.categorie}. Fonction : ${p.fonction}`] },
    { titre: 'Interprétation', corps: [
      `Archétype : ${p.archetype}. Principe : ${p.principe}`,
      `Expression harmonieuse : ${p.expressionHarmonieuse}`,
      `Mythologie : ${p.mythologie}`,
      `Jung : ${p.jung}`,
    ] },
    { titre: 'Ombre', corps: [p.expressionDesequilibree, p.ombre] },
    { titre: 'Potentiel', corps: [p.potentielEvolutif] },
    { titre: 'Question', corps: [`« ${p.questionInitiatique} »`] },
    { titre: 'Exercice', corps: [p.exemplesTheme[0] ? `Observez dans une carte : ${p.exemplesTheme[0]}` : 'Repérez où cette fonction agit dans votre semaine.'] },
  ]
}

function signeSections(s: (typeof SIGNS)[number]) {
  return [
    { titre: 'Observation', corps: [`${s.nom} (${s.glyphe}) — ${s.element}, ${s.mode}, maître ${s.maitre}. Mot-clé : « ${s.motCle} ». Étape ${s.ordre} du cycle.`] },
    { titre: 'Interprétation', corps: [
      `Archétype : ${s.archetype}.`,
      `Dynamique : ${s.dynamiquePsychologique}`,
      `Besoin fondamental : ${s.besoinFondamental}`,
      `Mythologie : ${s.mythologie}`,
      `Chemin du héros : ${s.etapeHeros}`,
    ] },
    { titre: 'Ombre', corps: [s.ombre, `Excès : ${s.exces}`, `Manque : ${s.manque}`] },
    { titre: 'Potentiel', corps: [s.potentiel, `Niveau transpersonnel : ${s.niveaux.transpersonnel}`] },
    { titre: 'Question', corps: [`« ${s.questionInitiatique} »`] },
    { titre: 'Exercice', corps: [s.exercice] },
  ]
}

function genericSections(c: { facets: Record<string, string | undefined>; nom: string }) {
  const f = c.facets
  return [
    { titre: 'Observation', corps: [f.definition ?? c.nom] },
    { titre: 'Interprétation', corps: [f.psychologie, f.imageArchetypale, f.mythologie].filter(Boolean) as string[] },
    { titre: 'Ombre', corps: [f.ombre].filter(Boolean) as string[] },
    { titre: 'Potentiel', corps: [f.potentielEvolutif].filter(Boolean) as string[] },
    { titre: 'Question', corps: [`« ${f.questionReflexion ?? ''} »`] },
    { titre: 'Exercice', corps: [f.exercice].filter(Boolean) as string[] },
  ]
}

function sectionsFor(e: Entry) {
  switch (e.kind) {
    case 'planete': return planeteSections(e.data as (typeof PLANETS)[number])
    case 'signe': return signeSections(e.data as (typeof SIGNS)[number])
    case 'maison': {
      const h = e.data as (typeof HOUSES)[number]
      return [
        { titre: 'Observation', corps: [`Maison ${h.romain} — ${h.nom}. Domaine : ${h.domaineTraditionnel}`] },
        { titre: 'Interprétation', corps: [`Question existentielle : ${h.questionExistentielle}`, `Archétype : ${h.archetype}`, `Axe ${h.axe} : ${h.axeSens}`] },
        { titre: 'Ombre', corps: [h.ombre] },
        { titre: 'Potentiel', corps: [h.potentiel] },
        { titre: 'Question', corps: [`« ${h.questionExistentielle} »`] },
        { titre: 'Exercice', corps: [h.exercice] },
      ]
    }
    case 'aspect': {
      const a = e.data as (typeof ASPECTS)[number]
      return [
        { titre: 'Observation', corps: [`${a.nom} (${a.glyphe}) — ${a.angle}°, famille « ${a.famille} ». ${a.nature}`] },
        { titre: 'Interprétation', corps: a.processus },
        { titre: 'Ombre', corps: [`Malentendu fréquent : ${a.malentendu}`] },
        { titre: 'Potentiel', corps: [a.lecture] },
        { titre: 'Question', corps: ['Quelle compétence cette relation entre deux fonctions me demande-t-elle de développer ?'] },
        { titre: 'Exercice', corps: [a.exercice] },
      ]
    }
    case 'element': {
      const el = e.data as (typeof ELEMENTS)[number]
      return [
        { titre: 'Observation', corps: [`${el.nom} (${el.glyphe}). Signes : ${el.signes.join(', ')}.`] },
        { titre: 'Interprétation', corps: [el.symbolisme, el.psychologie, `Fonction dans le développement : ${el.fonctionDeveloppement}`] },
        { titre: 'Ombre', corps: [`Excès : ${el.exces}`, `Manque : ${el.manque}`] },
        { titre: 'Potentiel', corps: [`Qualités : ${el.qualites.join(', ')}.`] },
        { titre: 'Question', corps: ['Cet élément est-il chez moi en excès, en manque, ou à peu près juste ?'] },
        { titre: 'Exercice', corps: [el.exerciceInteractif] },
      ]
    }
    case 'mythe': {
      const m = e.data as (typeof MYTHS)[number]
      return [
        { titre: 'Observation', corps: [`${m.nom}${m.nomRomain ? ` / ${m.nomRomain}` : ''} — ${m.domaine}`] },
        { titre: 'Interprétation', corps: [m.histoire, `Symbolisme : ${m.symbolisme}`, `Archétype : ${m.archetype}`] },
        { titre: 'Ombre', corps: [`Thème psychologique : ${m.themePsychologique}`] },
        { titre: 'Potentiel', corps: [m.enseignementInitiatique] },
        { titre: 'Question', corps: [`En quoi cette figure me concerne-t-elle aujourd'hui ?`] },
        { titre: 'Exercice', corps: ['Écrivez ce mythe à la première personne, comme s\'il racontait un épisode de votre vie.'] },
      ]
    }
    default: return genericSections(e.data as { facets: Record<string, string | undefined>; nom: string })
  }
}

export function demanderAuMaitre(question: string): MaitreReponse {
  const found = match(question)
  const q = norm(question)
  const comparatif = /(diff[ée]rence|compare|comparer|versus|\bvs\b|plut[ôo]t que)/.test(q) && found.length >= 2

  if (found.length === 0) {
    return {
      intro:
        "Je n'ai pas reconnu de symbole précis dans votre question. Essayez de nommer une planète, un signe, une maison, un aspect, un mythe ou un concept (Jung, alchimie, hermétisme).",
      sections: [],
      rappel: 'Je ne donne jamais de prédiction : je propose des pistes de réflexion.',
      suggestions: ['Explique-moi Saturne.', 'Différence entre Mars et Vénus ?', 'Pourquoi le Scorpion est-il lié à la transformation ?'],
    }
  }

  if (comparatif) {
    const [a, b] = found
    const sa = sectionsFor(a)
    const sb = sectionsFor(b)
    return {
      intro: `Comparaison symbolique : ${a.nom} et ${b.nom}. Ce sont deux fonctions distinctes, ni opposées ni interchangeables.`,
      sections: [
        { titre: `${a.nom} — l'essentiel`, corps: sa[1].corps.slice(0, 2) },
        { titre: `${b.nom} — l'essentiel`, corps: sb[1].corps.slice(0, 2) },
        { titre: 'Ce qui les distingue', corps: [distinction(a, b)] },
        { titre: 'Question', corps: [`Dans ma vie, où est-ce que je confonds ${a.nom} et ${b.nom} ?`] },
      ],
      rappel: 'Une comparaison éclaire des nuances ; elle ne hiérarchise pas.',
      suggestions: [`Explique-moi ${a.nom}.`, `Explique-moi ${b.nom}.`],
    }
  }

  const e = found[0]
  return {
    intro: `Voici une lecture pédagogique de ${e.nom}. Structure : observation, interprétation, ombre, potentiel, question, exercice.`,
    sections: sectionsFor(e),
    rappel:
      "Ceci reste une interprétation symbolique, jamais une certitude ni une prédiction. À confronter à votre expérience.",
    suggestions: found.slice(1, 3).map((f) => `Explique-moi ${f.nom}.`),
  }
}

function distinction(a: Entry, b: Entry): string {
  if (a.kind === 'planete' && b.kind === 'planete') {
    const pa = a.data as (typeof PLANETS)[number]
    const pb = b.data as (typeof PLANETS)[number]
    return `${pa.nom} relève de « ${pa.principe} » ; ${pb.nom} relève de « ${pb.principe} ». Là où ${pa.nom} demande « ${pa.questionInitiatique} », ${pb.nom} demande « ${pb.questionInitiatique} ».`
  }
  if (a.kind === 'signe' && b.kind === 'signe') {
    const sa = a.data as (typeof SIGNS)[number]
    const sb = b.data as (typeof SIGNS)[number]
    return `${sa.nom} (${sa.element}/${sa.mode}, « ${sa.motCle} ») est l'étape ${sa.ordre} du cycle ; ${sb.nom} (${sb.element}/${sb.mode}, « ${sb.motCle} ») est l'étape ${sb.ordre}. Besoins : ${sa.besoinFondamental} / ${sb.besoinFondamental}`
  }
  return `${a.nom} et ${b.nom} appartiennent à des registres différents : on les met en regard pour mieux sentir ce qui est propre à chacun.`
}
