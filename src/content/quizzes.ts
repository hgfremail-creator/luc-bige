import type { QuizQuestion } from './types'

export const QUIZZES: QuizQuestion[] = [
  {
    id: 'q-planete-quoi', type: 'qcm', theme: 'Fondamentaux', niveau: 4,
    question: 'Dans la grille de lecture, une planète représente principalement :',
    options: ['Où ? (le domaine)', 'Quand ? (le moment)', 'Quelle fonction ? (le quoi)', 'Quel événement précis ?'],
    bonneReponse: 2,
    explication:
      "PLANÈTE = QUOI ? Une planète est une fonction psychologique (agir, aimer, penser, structurer…). Le « où » est donné par la maison, le « comment » par le signe. L'astrologie symbolique ne prétend pas désigner un événement précis.",
  },
  {
    id: 'q-signe-comment', type: 'qcm', theme: 'Fondamentaux', niveau: 4,
    question: 'Le signe dans lequel se trouve une planète indique surtout :',
    options: ['Le domaine de vie concerné', 'La manière, la couleur, le style de la fonction', "La date d'un événement", 'La qualité morale de la personne'],
    bonneReponse: 1,
    explication: "SIGNE = COMMENT ? Le signe colore la fonction : Mars en Bélier n'agit pas comme Mars en Cancer. Aucun signe n'est « meilleur » qu'un autre.",
  },
  {
    id: 'q-maison-ou', type: 'qcm', theme: 'Fondamentaux', niveau: 5,
    question: 'La maison précise :',
    options: ['La fonction en jeu', 'Le style de la fonction', "Le domaine concret où la fonction se déploie (le où)", "L'aspect entre deux planètes"],
    bonneReponse: 2,
    explication: "MAISON = OÙ ? Maison VII = les relations, Maison X = la vie publique, etc. C'est le terrain d'expérience.",
  },
  {
    id: 'q-carre', type: 'vrai-faux', theme: 'Aspects', niveau: 6,
    question: '« Un carré est un mauvais aspect qu\'il faut éviter dans un thème. »',
    options: ['Vrai', 'Faux'],
    bonneReponse: 1,
    explication:
      "Faux. Le carré est une tension féconde : une friction interne qui oblige à développer une compétence. C'est souvent lui qui fait avancer une vie. On parle de chantier, pas de malédiction.",
  },
  {
    id: 'q-observation', type: 'vrai-faux', theme: 'Épistémologie', niveau: 1,
    question: '« La position d\'une planète à la naissance est calculable et vérifiable, mais le sens qu\'on lui donne est une interprétation culturelle. »',
    options: ['Vrai', 'Faux'],
    bonneReponse: 0,
    explication:
      "Vrai. On distingue toujours la donnée astronomique (exacte) de l'interprétation symbolique (proposée par une tradition). Confondre les deux mène à la pensée magique.",
  },
  {
    id: 'q-element-eau', type: 'qcm', theme: 'Éléments', niveau: 2,
    question: 'Quels signes appartiennent à l\'élément Eau ?',
    options: ['Bélier, Lion, Sagittaire', 'Taureau, Vierge, Capricorne', 'Gémeaux, Balance, Verseau', 'Cancer, Scorpion, Poissons'],
    bonneReponse: 3,
    explication: "Cancer, Scorpion, Poissons. L'Eau symbolise la sensibilité, la mémoire, l'empathie, la vie intérieure.",
  },
  {
    id: 'q-modes', type: 'association', theme: 'Modes', niveau: 3,
    question: 'Associez chaque mode à son principe : (1) Cardinal (2) Fixe (3) Mutable',
    options: ['Initiation', 'Stabilisation', 'Transformation'],
    bonneReponse: [0, 1, 2],
    explication:
      "Cardinal = initiation (lancer), Fixe = stabilisation (consolider), Mutable = transformation (adapter, faire passer d'une saison à l'autre).",
  },
  {
    id: 'q-cycle-signes', type: 'classement', theme: 'Signes', niveau: 3,
    question: 'Remettez ces signes dans l\'ordre du cycle zodiacal :',
    options: ['Cancer', 'Bélier', 'Balance', 'Capricorne'],
    bonneReponse: [1, 0, 2, 3],
    explication:
      "Bélier (1) → Cancer (4) → Balance (7) → Capricorne (10) : ce sont les quatre signes cardinaux, qui ouvrent les quatre saisons.",
  },
  {
    id: 'q-mars', type: 'qcm', theme: 'Planètes', niveau: 4,
    question: "L'ombre de Mars s'exprime typiquement comme :",
    options: ['Rêverie et confusion', 'Colère, impulsivité, violence — ou au contraire inhibition', 'Rigidité et pessimisme', 'Dispersion mentale'],
    bonneReponse: 1,
    explication:
      "Mars est la fonction d'affirmation et d'action. Son ombre : la force déchargée sur autrui (colère, violence) ou retournée contre soi (inhibition, auto-sabotage). Question initiatique : « comment est-ce que j'utilise ma force ? »",
  },
  {
    id: 'q-scorpion-transfo', type: 'qcm', theme: 'Signes', niveau: 3,
    question: 'Pourquoi le Scorpion est-il associé à la transformation ?',
    options: [
      "Parce qu'il est gouverné par Vénus",
      "Parce que, symboliquement, il plonge sous la surface pour laisser mourir ce qui doit mourir et en extraire une force nouvelle",
      "Parce que c'est un signe d'air cardinal",
      "Parce qu'il gouverne la maison II",
    ],
    bonneReponse: 1,
    explication:
      "Le Scorpion (eau, fixe) est l'étape de la descente : sous la relation policée de la Balance, il explore les désirs, les peurs, les pouvoirs, traverse une mort symbolique et remonte transformé — d'où le rapprochement avec le nigredo alchimique et la lame de la Mort.",
  },
  {
    id: 'q-jung-ombre', type: 'qcm', theme: 'Jung', niveau: 9,
    question: "Selon Jung, on repère souvent sa propre Ombre :",
    options: [
      "Dans ses rêves de vol",
      "À l'intensité disproportionnée de ses jugements sur les autres (projection)",
      "Dans son signe solaire",
      "En consultant un oracle",
    ],
    bonneReponse: 1,
    explication:
      "L'Ombre, ce que le moi a rejeté de lui-même, est d'abord projetée : ce qui m'exaspère le plus chez autrui m'indique souvent une part non assumée de moi.",
  },
  {
    id: 'q-tarot-corresp', type: 'vrai-faux', theme: 'Tarot', niveau: 10,
    question: "« Il existe une correspondance unique et universellement reconnue entre chaque arcane du Tarot et un signe ou une planète. »",
    options: ['Vrai', 'Faux'],
    bonneReponse: 1,
    explication:
      "Faux. Les correspondances varient selon les écoles (Golden Dawn, tarot de Marseille symbolique, auteurs francophones…). On dit toujours « selon telle tradition », jamais « c'est la correspondance exacte ».",
  },
  {
    id: 'q-alchimie-nigredo', type: 'qcm', theme: 'Alchimie', niveau: 11,
    question: 'Le nigredo (œuvre au noir) correspond symboliquement à :',
    options: [
      "L'euphorie d'un nouveau départ",
      "La phase de décomposition, de crise, où les formes anciennes se défont",
      "L'accomplissement final de l'Œuvre",
      "La clarification lunaire et froide",
    ],
    bonneReponse: 1,
    explication:
      "Le nigredo est la putréfaction nécessaire : rien de neuf ne pousse sans que l'ancien pourrisse. On le rapproche du Scorpion, de Pluton, de la Maison VIII, de la lame de la Mort.",
  },
  {
    id: 'q-hermetisme-corresp', type: 'qcm', theme: 'Hermétisme', niveau: 12,
    question: 'Quel principe hermétique fonde l\'astrologie lue comme un langage analogique ?',
    options: ['Le Rythme', 'La Correspondance', 'Le Genre', 'La Cause et l\'effet'],
    bonneReponse: 1,
    explication:
      "La Correspondance (« ce qui est en haut est comme ce qui est en bas ») : on lit le ciel et la psyché comme deux niveaux d'un même motif. C'est une analogie, pas une causalité.",
  },
  {
    id: 'q-interpretation-formulation', type: 'qcm', theme: 'Méthode', niveau: 14,
    question: 'Quelle formulation est la plus juste pour une interprétation de thème ?',
    options: [
      "« Vous allez rencontrer l'amour cette année. »",
      "« Vous êtes quelqu'un de colérique. »",
      "« Cette configuration peut être explorée comme l'appel à apprendre à poser des limites ; quelle place cela a-t-il dans votre vie ? »",
      "« Votre destin est de réussir dans les affaires. »",
    ],
    bonneReponse: 2,
    explication:
      "L'interprétation symbolique invite à la réflexion, laisse place à l'expérience personnelle, et se termine souvent par une question plutôt que par une affirmation ou une prédiction.",
  },
  {
    id: 'q-asc-inconnu', type: 'vrai-faux', theme: 'Thème natal', niveau: 7,
    question: "« Si l'heure de naissance est inconnue, on peut quand même donner l'Ascendant et les maisons avec certitude. »",
    options: ['Vrai', 'Faux'],
    bonneReponse: 1,
    explication:
      "Faux. L'Ascendant et les maisons dépendent de l'heure et du lieu précis. Sans heure fiable, on ne les invente pas : on l'indique clairement et on se concentre sur Soleil, Lune (signe) et aspects planétaires.",
  },
  {
    id: 'q-dominante', type: 'vrai-faux', theme: 'La dominante', niveau: 14,
    question: "« La planète dominante d'un thème révèle une vérité absolue sur la personne. »",
    options: ['Vrai', 'Faux'],
    bonneReponse: 1,
    explication:
      "Faux. La dominante est le résultat d'une pondération transparente (angularité, maîtrises, aspects…), utile pour hiérarchiser l'information. C'est une hypothèse de lecture, pas un verdict.",
  },
  {
    id: 'q-heros-ombre', type: 'qcm', theme: 'Chemin du héros', niveau: 13,
    question: "Dans le chemin du héros, l'étape de « confrontation à l'ombre » correspond le mieux au signe :",
    options: ['Bélier', 'Balance', 'Scorpion', 'Gémeaux'],
    bonneReponse: 2,
    explication:
      "Le Scorpion : la descente, la mise à nu, la mort symbolique au cœur du labyrinthe, où ce qui était projeté sur les autres se révèle intérieur.",
  },
]

export const QUIZ_THEMES = [...new Set(QUIZZES.map((q) => q.theme))]

export interface FictionalChart {
  id: string
  nom: string
  placements: string[]
  aspects: string[]
  pistes: {
    fonctions: string
    tensions: string
    hypothese: string
    ombre: string
    potentiel: string
    question: string
  }
}

/** Thèmes fictifs pour les exercices d'interprétation. */
export const FICTIONAL_CHARTS: FictionalChart[] = [
  {
    id: 'fictif-1', nom: 'Thème fictif — « La flèche et le port »',
    placements: ['Soleil en Scorpion (Maison IX)', 'Lune en Gémeaux (Maison IV)', 'Ascendant Vierge', 'Mars en Maison X (Cancer)', 'Saturne en Poissons (Maison VII)'],
    aspects: ['Soleil carré Lune', 'Mars opposé Saturne', 'Vénus trigone Neptune'],
    pistes: {
      fonctions:
        "Identité (Soleil) intense et en quête de sens, à l'aise dans la profondeur et le lointain (IX). Besoin affectif (Lune) mobile, curieux, qui se rassure par les mots — mais logé dans le domaine des racines (IV), ce qui crée un écart. Façon d'apparaître (Asc Vierge) réservée, précise. Énergie d'action (Mars) tournée vers la carrière (X) mais colorée de sensibilité familiale (Cancer). Fonction de structure (Saturne) qui s'apprend dans la relation (VII), sur un mode flou, idéaliste (Poissons).",
      tensions:
        "Soleil carré Lune : un écart entre ce que la personne veut devenir (aller au fond, chercher le sens) et ce dont elle a besoin pour se sentir en sécurité (bouger, parler, rester en surface). Mars opposé Saturne : l'élan (ambition, X) se heurte à une exigence relationnelle et à la peur (VII, Poissons) — avancer / se retenir.",
      hypothese:
        "On peut explorer ce thème comme le récit d'une personne appelée à réconcilier la profondeur et la légèreté : apprendre à plonger sans se couper du besoin d'air, et à porter une ambition sans sacrifier ni fuir le lien.",
      ombre:
        "Ombre possible : utiliser l'analyse et les mots (Lune Gémeaux, Asc Vierge) pour ne pas ressentir la charge du Soleil Scorpion ; ou saboter ses avancées (Mars-Saturne) par peur de décevoir un partenaire.",
      potentiel:
        "Potentiel : une capacité rare à accompagner les autres dans leurs passages difficiles (Soleil IX Scorpion) tout en gardant de l'humour et de la clarté (Lune Gémeaux, Asc Vierge).",
      question:
        "Question à se poser plutôt qu'à trancher : « Où est-ce que je choisis la surface pour ne pas descendre — et où est-ce que je descends pour ne pas avoir à vivre légèrement ? »",
    },
  },
  {
    id: 'fictif-2', nom: 'Thème fictif — « Le feu sous la montagne »',
    placements: ['Soleil en Lion (Maison XII)', 'Lune en Capricorne (Maison IV)', 'Ascendant Cancer', 'Vénus en Vierge (Maison III)', 'Jupiter en Bélier (Maison X)'],
    aspects: ['Soleil trigone Jupiter', 'Lune carré Vénus', 'Soleil quinconce Lune'],
    pistes: {
      fonctions:
        "Identité solaire (Lion : créer, rayonner) mais placée en Maison XII (l'ombre, le retrait, l'invisible) : une flamme qui ne se montre pas facilement. Besoin affectif (Lune Capricorne) sobre, pudique, tourné vers le foyer (IV). Façon d'apparaître (Asc Cancer) douce, protectrice. Valeurs et goûts (Vénus Vierge, III) discrets, utiles, dans l'échange quotidien. Fonction d'expansion (Jupiter Bélier) qui vise haut et vite, dans la vie publique (X).",
      tensions:
        "Soleil quinconce Lune : un décalage chronique entre l'envie de briller et le besoin de discrétion sécurisante — jamais tout à fait réglé, à réajuster sans cesse. Lune carré Vénus : friction entre le besoin de sécurité affective (Capricorne) et la manière d'aimer et de plaire (Vierge) — se sentir jamais « assez ».",
      hypothese:
        "On peut lire ce thème comme le parcours de quelqu'un dont le feu créatif s'est d'abord vécu caché, et qui est invité à le sortir de l'ombre progressivement, en s'appuyant sur une ambition franche (Jupiter X Bélier) sans renier son besoin d'intimité.",
      ombre:
        "Ombre possible : rester dans les coulisses en se disant « je ne suis pas fait pour la lumière » (Soleil XII), ou compenser par une ambition impatiente (Jupiter Bélier X) déconnectée du rythme intérieur (Lune Capricorne).",
      potentiel:
        "Potentiel : une créativité qui sait travailler dans le secret et au service des autres (Soleil Lion en XII), avec une autorité tranquille (Lune Capricorne) — utile pour porter des projets de fond.",
      question:
        "« Qu'est-ce qui, en moi, veut rayonner — et de quoi ai-je besoin pour oser le montrer sans me sentir en danger ? »",
    },
  },
]
