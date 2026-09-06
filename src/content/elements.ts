import type { ElementInfo } from './types'

export const ELEMENTS: ElementInfo[] = [
  {
    id: 'feu',
    nom: 'Feu',
    glyphe: '△',
    symbolisme:
      "Le Feu est l'élément de l'élan, de la lumière et de la volonté qui jaillit. Il ne conserve rien : il consume et transforme. Symboliquement, il représente l'esprit qui veut se manifester, l'étincelle de vie qui pousse un être à exister, à vouloir, à se projeter en avant. Là où le Feu passe, quelque chose est mis en mouvement.",
    psychologie:
      "Sur le plan psychologique, le Feu correspond à l'intuition, à l'enthousiasme, à la foi en soi et en l'avenir. C'est la fonction qui anticipe, qui imagine un possible et s'y jette. Une personnalité marquée par le Feu vit d'abord dans le futur et dans le désir ; elle a besoin de sentir que quelque chose brûle en elle.",
    qualites: ['élan', 'enthousiasme', 'courage', 'inspiration', 'spontanéité', 'foi'],
    exces:
      "Trop de Feu : impatience, agitation, égocentrisme, colère, incapacité à se poser, projets sans lendemain, brûlure des autres et de soi.",
    manque:
      "Pas assez de Feu : découragement, absence d'envie, difficulté à commencer, à oser, à croire qu'un avenir est possible ; la vie paraît éteinte.",
    signes: ['Bélier', 'Lion', 'Sagittaire'],
    fonctionDeveloppement:
      "Dans le développement d'un être, le Feu est ce qui donne l'impulsion initiale : vouloir naître, vouloir se lever, vouloir devenir soi. C'est la force qui affirme « je suis » avant même de savoir qui l'on est.",
    paralleleAlchimique: {
      domaine: 'Alchimie',
      contenu:
        "On rapproche souvent le Feu du principe actif de séparation (solve) et de la calcination, l'opération qui réduit la matière brute pour en libérer l'essence. C'est un rapprochement symbolique, non une équivalence historique fixe.",
      tag: 'rapprochement-moderne',
    },
    paralleleTarot: {
      domaine: 'Tarot',
      contenu:
        "Dans plusieurs traditions modernes, on associe le Feu à la couleur des Bâtons (ou Wands). Les correspondances varient selon les écoles ; il s'agit d'une lecture proposée, pas d'une règle universelle.",
      tag: 'rapprochement-moderne',
    },
    paralleleHermetique: {
      domaine: 'Hermétisme',
      contenu:
        "Le Feu illustre bien le principe de Vibration : rien n'est immobile, tout rayonne et se propage. Le Feu est le mouvement rendu visible.",
      tag: 'interpretation-symbolique',
    },
    exerciceInteractif:
      "Repérez un moment de la semaine où vous avez ressenti un véritable élan (envie de faire, de dire, de créer). Notez : qu'est-ce qui l'a allumé ? Qu'en avez-vous fait ? L'avez-vous laissé retomber ou l'avez-vous suivi ?",
  },
  {
    id: 'terre',
    nom: 'Terre',
    glyphe: '▽',
    symbolisme:
      "La Terre est l'élément de la matière, de la forme et de la durée. Elle donne un corps aux choses. Là où le Feu veut, la Terre construit ; là où l'Air pense, la Terre vérifie. Symboliquement, elle représente l'incarnation : l'esprit qui accepte de se limiter pour se rendre réel.",
    psychologie:
      "Psychologiquement, la Terre correspond à la sensation : le contact avec le concret, le corps, les faits, le temps qui passe. Une personnalité de Terre a besoin de résultats tangibles, de sécurité, de repères stables. Elle fait confiance à ce qu'elle peut toucher, mesurer, répéter.",
    qualites: ['patience', 'sens pratique', 'endurance', 'fiabilité', 'réalisme', 'ancrage'],
    exces:
      "Trop de Terre : rigidité, matérialisme, peur du changement, lenteur, attachement excessif aux possessions et aux habitudes, méfiance envers l'imaginaire.",
    manque:
      "Pas assez de Terre : difficulté à concrétiser, à gérer le quotidien, à tenir dans la durée ; sentiment d'être « hors-sol », instabilité matérielle.",
    signes: ['Taureau', 'Vierge', 'Capricorne'],
    fonctionDeveloppement:
      "La Terre est ce qui permet à une intention de devenir œuvre. Sans elle, tout reste projet. Elle enseigne la loi du réel : le temps, l'effort, la matière qui résiste et qu'il faut apprivoiser.",
    paralleleAlchimique: {
      domaine: 'Alchimie',
      contenu:
        "On rapproche la Terre du sel des philosophes, principe de fixité et de corps, et de l'opération coagula qui donne une forme stable à ce qui était volatil.",
      tag: 'rapprochement-moderne',
    },
    paralleleTarot: {
      domaine: 'Tarot',
      contenu:
        "Plusieurs écoles modernes associent la Terre à la couleur des Deniers (ou Pentacles), liée au corps, au travail et aux ressources. Correspondance proposée, variable selon les traditions.",
      tag: 'rapprochement-moderne',
    },
    paralleleHermetique: {
      domaine: 'Hermétisme',
      contenu:
        "La Terre illustre le principe de Cause et effet : toute graine plantée produit sa récolte. Elle rend visibles les conséquences des actes dans la durée.",
      tag: 'interpretation-symbolique',
    },
    exerciceInteractif:
      "Choisissez une petite tâche concrète que vous repoussez. Accomplissez-la en observant vos sensations : la résistance intérieure, puis la satisfaction du fait accompli. Notez ce que le passage à l'acte a changé.",
  },
  {
    id: 'air',
    nom: 'Air',
    glyphe: '△̸',
    symbolisme:
      "L'Air est l'élément du lien, de la distance et de la parole. Il circule entre les choses et les relie. Symboliquement, il représente la pensée qui nomme, compare, met en relation ; le souffle qui permet l'échange. L'Air introduit l'autre, le miroir, le point de vue extérieur.",
    psychologie:
      "Psychologiquement, l'Air correspond à la pensée : abstraire, conceptualiser, dialoguer, prendre du recul. Une personnalité d'Air a besoin de comprendre, de mettre des mots, d'échanger des idées, de garder une certaine liberté de mouvement mental.",
    qualites: ['clarté', 'curiosité', 'sociabilité', 'objectivité', 'adaptabilité', 'humour'],
    exces:
      "Trop d'Air : intellectualisation, dispersion, détachement froid, bavardage, difficulté à ressentir et à s'engager, vie « dans la tête ».",
    manque:
      "Pas assez d'Air : difficulté à prendre du recul, à relativiser, à dialoguer ; on reste enfermé dans son ressenti ou dans ses certitudes.",
    signes: ['Gémeaux', 'Balance', 'Verseau'],
    fonctionDeveloppement:
      "L'Air est ce qui permet de sortir de soi pour se voir de l'extérieur, à travers le regard d'autrui et le pouvoir des mots. Il rend possibles la relation, la culture, la transmission.",
    paralleleAlchimique: {
      domaine: 'Alchimie',
      contenu:
        "On rapproche l'Air du mercure des philosophes, principe volatil, médiateur entre les états, et des opérations de sublimation qui élèvent la matière en vapeur.",
      tag: 'rapprochement-moderne',
    },
    paralleleTarot: {
      domaine: 'Tarot',
      contenu:
        "De nombreuses écoles modernes associent l'Air à la couleur des Épées (ou Swords), liée au conflit d'idées, au discernement et parfois à la souffrance mentale. Correspondance proposée.",
      tag: 'rapprochement-moderne',
    },
    paralleleHermetique: {
      domaine: 'Hermétisme',
      contenu:
        "L'Air illustre le principe de Mentalisme : ce que nous vivons est d'abord filtré, nommé et organisé par la pensée. Changer le regard, c'est déjà changer l'expérience.",
      tag: 'interpretation-symbolique',
    },
    exerciceInteractif:
      "Prenez une situation qui vous pèse. Écrivez-en trois descriptions différentes, comme si trois personnes distinctes la racontaient. Observez comment le simple changement de point de vue déplace l'émotion.",
  },
  {
    id: 'eau',
    nom: 'Eau',
    glyphe: '▽̸',
    symbolisme:
      "L'Eau est l'élément de la profondeur, de la mémoire et du sentiment. Elle épouse la forme du récipient, dissout les frontières, relie ce qui semblait séparé. Symboliquement, elle représente la vie intérieure, l'inconscient, les liens invisibles entre les êtres.",
    psychologie:
      "Psychologiquement, l'Eau correspond au sentiment et à l'empathie : ressentir la qualité des choses, percevoir les climats émotionnels, se souvenir, s'attacher. Une personnalité d'Eau a besoin d'intimité, de résonance, d'un espace où l'émotion est reconnue.",
    qualites: ['sensibilité', 'empathie', 'imagination', 'mémoire', 'dévouement', 'intériorité'],
    exces:
      "Trop d'Eau : hypersensibilité, fusion, submersion émotionnelle, difficulté à distinguer ses émotions de celles des autres, repli, ressassement du passé.",
    manque:
      "Pas assez d'Eau : sécheresse affective, difficulté à ressentir, à compatir, à se laisser toucher ; les liens restent en surface.",
    signes: ['Cancer', 'Scorpion', 'Poissons'],
    fonctionDeveloppement:
      "L'Eau est ce qui donne aux expériences leur saveur et leur poids affectif. Elle relie le présent au passé, l'individu au collectif, le conscient à ce qui le dépasse. C'est l'élément de la vie intérieure et de la compassion.",
    paralleleAlchimique: {
      domaine: 'Alchimie',
      contenu:
        "On rapproche l'Eau de la dissolution (solve), de la putréfaction du nigredo où les formes anciennes se défont, et du bain qui prépare une renaissance.",
      tag: 'rapprochement-moderne',
    },
    paralleleTarot: {
      domaine: 'Tarot',
      contenu:
        "Beaucoup d'écoles modernes associent l'Eau à la couleur des Coupes (ou Cups), liée à l'amour, au rêve et à la vie affective. Correspondance proposée, non universelle.",
      tag: 'rapprochement-moderne',
    },
    paralleleHermetique: {
      domaine: 'Hermétisme',
      contenu:
        "L'Eau illustre le principe de Rythme : les émotions montent et descendent comme une marée. Reconnaître le rythme, c'est cesser de se croire submergé pour toujours.",
      tag: 'interpretation-symbolique',
    },
    exerciceInteractif:
      "Le soir, repérez l'émotion dominante de votre journée sans chercher à la justifier. Donnez-lui une image (une couleur, un paysage, une météo). Revenez-y le lendemain : a-t-elle changé de forme ?",
  },
]

export const ELEMENT_BY_ID = Object.fromEntries(ELEMENTS.map((e) => [e.id, e])) as Record<
  ElementInfo['id'],
  ElementInfo
>
