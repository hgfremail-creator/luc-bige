import type { Aspect } from './types'

/** Les aspects : relations dynamiques entre fonctions psychologiques. */
export const ASPECTS: Aspect[] = [
  {
    id: 'conjonction', nom: 'Conjonction', glyphe: '☌', angle: 0, orbe: 8, famille: 'conjonction',
    nature: "Fusion : deux fonctions occupent le même espace et agissent ensemble, pour le meilleur et pour le plus confus.",
    processus: [
      "Les deux planètes se mélangent : difficile de les distinguer, elles fonctionnent comme un alliage.",
      "Selon les planètes, l'alliage est fluide (ex. Soleil–Vénus) ou explosif (ex. Mars–Pluton).",
      "Le travail consiste à apprendre à nommer chaque part pour ne pas la vivre en bloc.",
    ],
    malentendu: "« Conjonction = forcément bien. » Non : c'est une intensité concentrée, dont la qualité dépend des fonctions réunies.",
    lecture: "Une force majeure du thème, un point de concentration d'énergie où il faut apprendre à faire le tri.",
    exercice: "Repérez deux traits de votre caractère que vous vivez comme un seul bloc. Essayez de leur donner deux noms distincts.",
    correspondances: [
      { domaine: 'Alchimie', contenu: "La conjonction des principes ; le mariage chimique.", tag: 'interpretation-symbolique' },
    ],
  },
  {
    id: 'opposition', nom: 'Opposition', glyphe: '☍', angle: 180, orbe: 8, famille: 'tension',
    nature: "Face-à-face : deux fonctions se regardent d'un bout à l'autre d'un axe et demandent un équilibre.",
    processus: [
      "On tend d'abord à vivre un seul pôle et à projeter l'autre sur l'extérieur (les autres, les circonstances).",
      "Vient la prise de conscience : « ce qui m'agace dehors est aussi en moi ».",
      "Puis le travail d'équilibre, comme sur une balançoire : tenir les deux bouts.",
    ],
    malentendu: "« Opposition = blocage. » En réalité, c'est un axe de conscience : la tension rend visible une polarité à habiter.",
    lecture: "Un thème de vie récurrent où l'on oscille entre deux besoins, souvent rejoué dans les relations.",
    exercice: "Identifiez un conflit qui revient dans vos relations. Nommez les deux besoins légitimes qui s'y opposent.",
    correspondances: [
      { domaine: 'Hermétisme', contenu: "Principe de Polarité : les contraires sont les deux bouts d'une même chose.", tag: 'interpretation-symbolique' },
    ],
  },
  {
    id: 'carre', nom: 'Carré', glyphe: '□', angle: 90, orbe: 7, famille: 'tension',
    nature: "Friction : deux fonctions se gênent mutuellement et créent une tension qui pousse à agir.",
    processus: [
      "Sensation d'obstacle interne, de contradiction qui coince.",
      "La friction oblige à faire un effort, à développer une compétence pour dépasser le blocage.",
      "Bien travaillé, le carré devient un moteur : c'est souvent lui qui fait avancer une vie.",
    ],
    malentendu: "« Carré = mauvais aspect. » Non : c'est une tension féconde. Sans friction, pas de mouvement. Le carré est un chantier, pas une malédiction.",
    lecture: "Un point de travail actif : là où la vie met une résistance qui, relevée, produit de la force et de la maturité.",
    exercice: "Repérez un domaine où vous butez toujours sur le même obstacle. Quelle compétence cet obstacle vous demande-t-il de développer ?",
    correspondances: [
      { domaine: 'Alchimie', contenu: "Le feu sous le vase : la chaleur qui contraint la matière à se transformer.", tag: 'interpretation-symbolique' },
    ],
  },
  {
    id: 'trigone', nom: 'Trigone', glyphe: '△', angle: 120, orbe: 7, famille: 'harmonique',
    nature: "Fluidité : deux fonctions du même élément coopèrent sans effort ; un talent qui coule de source.",
    processus: [
      "L'énergie circule facilement entre les deux planètes : c'est un don, une facilité naturelle.",
      "Le risque est la paresse : ce qui vient sans effort est peu valorisé et peu développé.",
      "Le travail consiste à faire fructifier consciemment ce talent au lieu de le laisser dormir.",
    ],
    malentendu: "« Trigone = chance pure, rien à faire. » En réalité, un talent non cultivé s'atrophie. Le trigone demande d'être mis au travail.",
    lecture: "Une ressource disponible du thème, un appui sur lequel on peut compter pour traverser les carrés et oppositions.",
    exercice: "Nommez un talent qui vous vient si naturellement que vous n'y prêtez plus attention. Comment pourriez-vous le mettre au service d'un projet ?",
    correspondances: [
      { domaine: 'Hermétisme', contenu: "Principe de Correspondance : des plans qui s'accordent spontanément.", tag: 'interpretation-symbolique' },
    ],
  },
  {
    id: 'sextile', nom: 'Sextile', glyphe: '⚹', angle: 60, orbe: 5, famille: 'harmonique',
    nature: "Opportunité : deux fonctions d'éléments complémentaires (feu-air, terre-eau) peuvent collaborer si on le décide.",
    processus: [
      "Le potentiel est là, mais il ne s'active pas tout seul : il faut un petit geste volontaire.",
      "Une fois activé, le sextile ouvre des portes, des rencontres, des idées.",
      "C'est l'aspect de l'apprentissage : on peut développer la collaboration entre les deux fonctions.",
    ],
    malentendu: "« Sextile = trigone en plus faible. » Plutôt : le sextile est une invitation à agir, là où le trigone est un acquis.",
    lecture: "Une occasion à saisir : un pont possible entre deux domaines, à condition de faire le premier pas.",
    exercice: "Repérez deux domaines de votre vie qui pourraient se nourrir l'un l'autre mais restent séparés. Quel petit pont pourriez-vous bâtir cette semaine ?",
    correspondances: [
      { domaine: 'Alchimie', contenu: "La circulation entre deux principes complémentaires (solve et coagula).", tag: 'interpretation-symbolique' },
    ],
  },
  {
    id: 'quinconce', nom: 'Quinconce', glyphe: '⚻', angle: 150, orbe: 3, famille: 'ajustement',
    nature: "Décalage : deux fonctions qui n'ont rien en commun (ni élément, ni mode) et doivent trouver un bricolage.",
    processus: [
      "Sensation d'inconfort diffus : les deux planètes ne se comprennent pas et ne s'ignorent pas.",
      "Il faut inventer des ajustements successifs, accepter que ce ne soit jamais parfaitement fluide.",
      "Le quinconce enseigne la souplesse, l'humilité, l'art du compromis permanent.",
    ],
    malentendu: "« Il faut résoudre le quinconce une fois pour toutes. » Non : on l'ajuste en continu, comme on règle sans cesse un instrument.",
    lecture: "Un point d'ajustement chronique : un endroit où la vie demande de bricoler, de réviser, de s'adapter encore.",
    exercice: "Identifiez deux exigences de votre vie qui semblent inconciliables. Au lieu de choisir, cherchez le bricolage provisoire qui tient pour cette semaine.",
    correspondances: [
      { domaine: 'Hermétisme', contenu: "Principe de Rythme : ajuster sans cesse le pas au terrain.", tag: 'interpretation-symbolique' },
    ],
  },
]

export const ASPECT_BY_ID = Object.fromEntries(ASPECTS.map((a) => [a.id, a])) as Record<string, Aspect>
