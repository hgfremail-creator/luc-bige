import type { ChartResult } from './ephemeris'
import type { FoundAspect, DominanteScore } from './aspects'
import { SIGN_BY_ID } from '@/content/signs'
import { PLANET_BY_ID } from '@/content/planets'
import { HOUSE_BY_NUM } from '@/content/houses'
import { ASPECT_BY_ID } from '@/content/aspects'
import { ELEMENT_BY_ID } from '@/content/elements'

export interface Layer {
  numero: number
  titre: string
  donnees: string[]
  lecture: string[]
}

const INVITE = (s: string) => `Cette configuration peut être explorée symboliquement comme : ${s}`

export interface ElementBalance {
  feu: number
  terre: number
  air: number
  eau: number
  dominant: string
  manquant: string | null
}

const ELEMENT_OF: Record<string, 'feu' | 'terre' | 'air' | 'eau'> = {
  belier: 'feu', lion: 'feu', sagittaire: 'feu',
  taureau: 'terre', vierge: 'terre', capricorne: 'terre',
  gemeaux: 'air', balance: 'air', verseau: 'air',
  cancer: 'eau', scorpion: 'eau', poissons: 'eau',
}

const WEIGHTS: Record<string, number> = {
  soleil: 3, lune: 3, mercure: 2, venus: 2, mars: 2,
  jupiter: 1.5, saturne: 1.5, uranus: 1, neptune: 1, pluton: 1,
}

export function elementBalance(chart: ChartResult): ElementBalance {
  const tally = { feu: 0, terre: 0, air: 0, eau: 0 }
  for (const b of chart.bodies) {
    if (b.id === 'noeud-nord') continue
    const el = ELEMENT_OF[b.signeId]
    if (el) tally[el] += WEIGHTS[b.id] ?? 1
  }
  if (chart.ascendant) {
    const el = ELEMENT_OF[chart.ascendant.signeId]
    if (el) tally[el] += 3
  }
  const entries = Object.entries(tally) as [keyof typeof tally, number][]
  const dominant = entries.reduce((a, b) => (b[1] > a[1] ? b : a))[0]
  const manquant = entries.find(([, v]) => v === 0)?.[0] ?? null
  return { ...tally, dominant, manquant }
}

export function buildLayers(
  chart: ChartResult,
  aspects: FoundAspect[],
  dominantes: DominanteScore[],
): Layer[] {
  const layers: Layer[] = []
  const get = (id: string) => chart.bodies.find((b) => b.id === id)

  const bodyLayer = (num: number, id: string, titre: string, cadre: string): Layer => {
    const b = get(id)
    if (!b) return { numero: num, titre, donnees: ['Donnée indisponible.'], lecture: [] }
    const sign = SIGN_BY_ID[b.signeId]
    const planet = PLANET_BY_ID[id]
    const donnees = [
      `${b.nom} à ${b.degre.toFixed(1)}° du ${b.signe}${b.maison ? `, maison ${b.maison}` : ''}${b.retrograde ? ', rétrograde' : ''}.`,
    ]
    const lecture = [
      `${cadre} — ${planet?.fonction ?? ''}`,
      INVITE(
        `${planet?.archetype ?? b.nom} vécu « à la manière ${sign?.nom ?? b.signe} » : ${sign?.dynamiquePsychologique ?? ''}`,
      ),
    ]
    if (b.maison) {
      const h = HOUSE_BY_NUM[b.maison]
      lecture.push(`Domaine (maison ${b.maison} — ${h?.nom}) : ${h?.questionExistentielle}`)
    }
    if (planet?.ombre) lecture.push(`Point de vigilance (ombre) : ${planet.ombre}`)
    if (planet?.questionInitiatique) lecture.push(`Question à porter : « ${planet.questionInitiatique} »`)
    return { numero: num, titre, donnees, lecture }
  }

  layers.push(bodyLayer(1, 'soleil', 'Couche 1 — Le Soleil', 'Ce qui cherche à devenir soi et à rayonner'))
  layers.push(bodyLayer(2, 'lune', 'Couche 2 — La Lune', 'Ce qui ressent, se souvient et cherche à être rassuré'))

  // Couche 3 — Ascendant
  if (chart.ascendant) {
    const s = SIGN_BY_ID[chart.ascendant.signeId]
    layers.push({
      numero: 3,
      titre: "Couche 3 — L'Ascendant",
      donnees: [`Ascendant à ${chart.ascendant.degre.toFixed(1)}° du ${chart.ascendant.signe}.` +
        (chart.milieuCiel ? ` Milieu du Ciel en ${chart.milieuCiel.signe}.` : '')],
      lecture: [
        "L'Ascendant décrit la manière d'arriver dans une situation, le style d'entrée en relation avec le monde.",
        INVITE(`une porte d'entrée de type ${s?.nom} : ${s?.motCle}. ${s?.besoinFondamental}`),
        `Le maître de cet Ascendant (${s?.maitre}) mérite une attention particulière : voir où il se trouve dans la carte.`,
      ],
    })
  } else {
    layers.push({
      numero: 3,
      titre: "Couche 3 — L'Ascendant",
      donnees: ["Heure de naissance inconnue : l'Ascendant, le Milieu du Ciel et les maisons ne peuvent pas être établis."],
      lecture: [
        "On ne les invente pas. La lecture se concentre alors sur les signes des planètes et leurs aspects.",
        "Le signe de la Lune peut rester imprécis si la naissance est proche d'un changement de signe lunaire (la Lune parcourt ~12°–15° par jour).",
      ],
    })
  }

  // Couche 4 — planètes personnelles
  const perso = ['mercure', 'venus', 'mars'].map((id) => get(id)).filter(Boolean)
  layers.push({
    numero: 4,
    titre: 'Couche 4 — Les planètes personnelles',
    donnees: perso.map((b) => `${b!.nom} en ${b!.signe}${b!.maison ? ` (maison ${b!.maison})` : ''}${b!.retrograde ? ', R' : ''}.`),
    lecture: perso.map((b) => {
      const pl = PLANET_BY_ID[b!.id]
      const sg = SIGN_BY_ID[b!.signeId]
      return `${pl?.nom} (${pl?.fonction}) coloré ${sg?.nom} : ${INVITE(sg?.dynamiquePsychologique ?? '')}`
    }),
  })

  // Couche 5 — maisons
  if (chart.maisons) {
    const occupees = new Map<number, string[]>()
    for (const b of chart.bodies) {
      if (b.maison) {
        occupees.set(b.maison, [...(occupees.get(b.maison) ?? []), b.nom])
      }
    }
    layers.push({
      numero: 5,
      titre: 'Couche 5 — Les maisons (le « où »)',
      donnees: [...occupees.entries()].sort((a, b) => a[0] - b[0]).map(([m, names]) => `Maison ${m} : ${names.join(', ')}.`),
      lecture: [...occupees.entries()].sort((a, b) => a[0] - b[0]).map(([m]) => {
        const h = HOUSE_BY_NUM[m]
        return `Maison ${m} (${h?.nom}) fortement sollicitée : ${h?.questionExistentielle} — potentiel : ${h?.potentiel}`
      }),
    })
  } else {
    layers.push({
      numero: 5, titre: 'Couche 5 — Les maisons',
      donnees: ['Indisponible sans heure de naissance.'], lecture: [],
    })
  }

  // Couche 6 — aspects
  layers.push({
    numero: 6,
    titre: 'Couche 6 — Les aspects (comment les forces se relient)',
    donnees: aspects.slice(0, 8).map((a) => `${a.a} ${a.glyphe} ${a.b} — ${a.aspectNom} (écart ${a.ecart}°).`),
    lecture: aspects.slice(0, 6).map((a) => {
      const asp = ASPECT_BY_ID[a.aspectId]
      return `${a.a}–${a.b} en ${a.aspectNom} : ${asp?.lecture} ${asp?.malentendu ? '' : ''}`
    }),
  })

  // Couche 7 — dominantes
  layers.push({
    numero: 7,
    titre: 'Couche 7 — Les dominantes',
    donnees: dominantes.slice(0, 3).map((d) => `${d.nom} : score ${d.score}.`),
    lecture: [
      `La fonction qui ressort le plus de la pondération est ${dominantes[0]?.nom}. Ce n'est pas un verdict : c'est une hypothèse de hiérarchisation, dont le détail du calcul est affiché.`,
      dominantes[0] ? `Pistes pour ${dominantes[0].nom} : ${PLANET_BY_ID[dominantes[0].id]?.potentielEvolutif}` : '',
    ].filter(Boolean),
  })

  // Couche 8 — axes
  const axes: string[] = []
  if (chart.ascendant) axes.push(`Axe I–VII (${chart.ascendant.signe} / ${opposite(chart.ascendant.signe)}) : équilibre entre l'affirmation de soi et la relation.`)
  if (chart.milieuCiel) axes.push(`Axe X–IV (${chart.milieuCiel.signe} / ${opposite(chart.milieuCiel.signe)}) : équilibre entre la vocation publique et les racines privées.`)
  const noeud = get('noeud-nord')
  if (noeud) axes.push(`Nœud Nord en ${noeud.signe}${noeud.maison ? ` (maison ${noeud.maison})` : ''} : direction de croissance proposée — ${SIGN_BY_ID[noeud.signeId]?.besoinFondamental}`)
  layers.push({
    numero: 8, titre: 'Couche 8 — Les axes',
    donnees: axes.length ? axes : ['Axes des maisons indisponibles sans heure ; axe des Nœuds seul.'],
    lecture: ['Un axe se travaille en apprenant à tenir les deux bouts plutôt qu\'à choisir un camp.'],
  })

  // Couche 9 — éléments
  const eb = elementBalance(chart)
  layers.push({
    numero: 9,
    titre: 'Couche 9 — Les éléments',
    donnees: [`Feu ${eb.feu.toFixed(1)} · Terre ${eb.terre.toFixed(1)} · Air ${eb.air.toFixed(1)} · Eau ${eb.eau.toFixed(1)}.`],
    lecture: [
      `Élément le plus présent : ${cap(eb.dominant)}. ${ELEMENT_BY_ID[eb.dominant as 'feu']?.fonctionDeveloppement}`,
      eb.manquant
        ? `Élément absent ou discret : ${cap(eb.manquant)}. Non un défaut, mais une qualité à cultiver volontairement : ${ELEMENT_BY_ID[eb.manquant as 'feu']?.manque}`
        : 'Les quatre éléments sont représentés : une palette relativement équilibrée.',
    ],
  })

  // Couche 10 — synthèse
  const soleil = get('soleil')
  const lune = get('lune')
  layers.push({
    numero: 10,
    titre: 'Couche 10 — Synthèse',
    donnees: [],
    lecture: [
      `Trois repères pour commencer : identité ${soleil?.signe} (couche 1), monde affectif ${lune?.signe} (couche 2)${chart.ascendant ? `, entrée en relation ${chart.ascendant.signe} (couche 3)` : ''}.`,
      `Fil de tension le plus net : ${aspects[0] ? `${aspects[0].a}–${aspects[0].b} (${aspects[0].aspectNom})` : 'aucun aspect serré — thème plus diffus, à lire par les dominantes et les éléments'}.`,
      `Élément à cultiver : ${eb.manquant ? cap(eb.manquant) : 'aucun manque marqué'}. Fonction à observer en priorité : ${dominantes[0]?.nom}.`,
      "Rappel : tout ceci est un jeu de miroirs pour réfléchir, pas une description figée. La personne concernée reste seule juge de ce qui résonne.",
    ],
  })

  return layers
}

const OPP: Record<string, string> = {
  Bélier: 'Balance', Taureau: 'Scorpion', Gémeaux: 'Sagittaire', Cancer: 'Capricorne',
  Lion: 'Verseau', Vierge: 'Poissons', Balance: 'Bélier', Scorpion: 'Taureau',
  Sagittaire: 'Gémeaux', Capricorne: 'Cancer', Verseau: 'Lion', Poissons: 'Vierge',
}
const opposite = (s: string) => OPP[s] ?? s
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

/** NIVEAU 15 — brouillon de « mythe personnel » : une invitation, jamais un destin. */
export function personalMyth(
  chart: ChartResult,
  aspects: FoundAspect[],
  dominantes: DominanteScore[],
): string[] {
  const get = (id: string) => chart.bodies.find((b) => b.id === id)
  const soleil = get('soleil')
  const lune = get('lune')
  const eb = elementBalance(chart)
  const s = soleil ? SIGN_BY_ID[soleil.signeId] : undefined
  const l = lune ? SIGN_BY_ID[lune.signeId] : undefined
  const asc = chart.ascendant ? SIGN_BY_ID[chart.ascendant.signeId] : undefined
  const dom = dominantes[0] ? PLANET_BY_ID[dominantes[0].id] : undefined
  const tension = aspects.find((a) => a.famille === 'tension')

  const paras: string[] = []
  paras.push(
    `Votre carte peut être lue comme le récit d'une personne dont le centre a la couleur du ${s?.nom} ` +
      `(${s?.archetype?.toLowerCase()}), et dont la part sensible, de couleur ${l?.nom}, cherche à ${besoin(l?.besoinFondamental)}` +
      (asc ? `, tandis qu'elle se présente au monde à la manière ${asc.nom}.` : '.'),
  )
  if (dom) {
    paras.push(
      `La fonction qui revient le plus souvent dans son histoire semble être celle de ${dom.archetype.toLowerCase()} (${dom.nom}) : ` +
        `${dom.principe} Il y a là une force à assumer plutôt qu'à subir.`,
    )
  }
  if (tension) {
    paras.push(
      `Un nœud de l'intrigue : la rencontre entre ${tension.a} et ${tension.b} (${tension.aspectNom}). ` +
        `Non pas un obstacle à supprimer, mais le moteur du récit — le lieu où la personne est appelée à développer une compétence d'âme.`,
    )
  }
  paras.push(
    `L'élément ${cap(eb.dominant)} donne le climat général de l'histoire. ` +
      (eb.manquant
        ? `L'élément ${cap(eb.manquant)}, presque absent, désigne le territoire encore à explorer : une part de l'aventure qui reste à écrire.`
        : `Les quatre climats sont présents : l'histoire dispose d'une palette large.`),
  )
  paras.push(
    `Ce récit n'est pas un destin. C'est une proposition de lecture, à confronter à votre expérience réelle. ` +
      `La bonne question n'est pas « est-ce vrai ? » mais « qu'est-ce que cela m'aide à voir de ma vie ? »`,
  )
  return paras
}

const besoin = (b?: string) => {
  if (!b) return 'se sentir en sécurité et relié'
  return (b.charAt(0).toLowerCase() + b.slice(1)).replace(/\.$/, '')
}
