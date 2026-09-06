import type { GenericConcept } from './types'

/** NIVEAU 1 — Comprendre le langage symbolique. */
export const SYMBOLIC_LANGUAGE: GenericConcept[] = [
  {
    id: 'symbole',
    nom: 'Le symbole',
    glyphe: '✦',
    categorie: 'Langage symbolique',
    sources: ['contenu-pedagogique', 'interpretation-symbolique'],
    facets: {
      definition:
        "Un symbole est une image concrète qui donne à penser plus qu'elle ne dit. Contrairement au signe (qui renvoie à une seule chose : le feu rouge = « stop »), le symbole ouvre : une balance évoque la justice, l'équilibre, le choix, le jugement, le commerce… sans se réduire à aucun de ces sens.",
      symbole:
        "Le mot vient du grec sumbolon : un objet brisé en deux dont chaque moitié permettait à deux personnes de se reconnaître. Le symbole relie deux moitiés : le visible et l'invisible, le fait et le sens.",
      imageArchetypale: "Le pont, le seuil, la clé : ce qui fait passer d'un monde à un autre.",
      mythologie:
        "Dans presque toutes les traditions, les récits de création utilisent des images (l'œuf, l'eau primordiale, le souffle) parce que ce qui précède le langage ne peut être dit que par symboles.",
      psychologie:
        "Pour Jung, le symbole est la meilleure formulation possible d'une réalité encore inconnue de la conscience. Le rêve, l'art, le mythe parlent cette langue.",
      ombre:
        "Prendre le symbole au pied de la lettre (littéralisme) ou le vider de toute réalité (« ce n'est qu'une image »). Les deux excès font manquer ce qu'il transporte.",
      potentielEvolutif:
        "Apprendre à lire symboliquement, c'est gagner une seconde langue : celle des rêves, des contes, des œuvres, et — dans cette école — du ciel.",
      questionReflexion: "Quel objet, lieu ou animal revient souvent dans mes rêves ou m'attire sans que je sache pourquoi ?",
      exercice:
        "Choisissez un objet de votre quotidien (une porte, une clé, un miroir). Écrivez dix choses différentes qu'il pourrait « vouloir dire ». Observez comment le sens s'ouvre.",
      paralleleTarot: "Chaque lame du Tarot est un condensé de symboles ; on ne la « traduit » pas, on la médite.",
      paralleleAlchimique: "Les traités d'alchimie sont volontairement écrits en images (le roi, le crapaud, le dragon) pour protéger un savoir d'expérience.",
      paralleleHermetique: "Principe de Correspondance : le symbole relie les plans (« ce qui est en haut est comme ce qui est en bas »).",
    },
  },
  {
    id: 'archetype',
    nom: "L'archétype",
    glyphe: '☖',
    categorie: 'Langage symbolique',
    sources: ['rapprochement-moderne', 'contenu-pedagogique'],
    facets: {
      definition:
        "Un archétype est un schéma d'expérience universel : la Mère, le Héros, l'Ombre, le Vieux Sage, l'Enfant. On ne le rencontre jamais « pur », seulement à travers des figures concrètes (ma mère, tel personnage, telle planète dans mon thème).",
      symbole: "Le moule invisible qui donne sa forme à mille objets différents.",
      imageArchetypale: "La source unique d'où sortent d'innombrables ruisseaux qui ne se ressemblent pas.",
      mythologie:
        "Les dieux d'un panthéon sont une manière ancienne de cartographier les grands archétypes : chacun règne sur un domaine de l'expérience humaine.",
      psychologie:
        "Jung situe les archétypes dans l'inconscient collectif : une couche de psyché commune à l'humanité, faite de dispositions à ressentir et à imaginer de certaines façons.",
      ombre:
        "S'identifier à un archétype (« je suis le sauveur », « je suis la victime ») : la personne se rigidifie et perd sa nuance propre. C'est l'inflation.",
      potentielEvolutif:
        "Reconnaître quels archétypes m'habitent me permet de dialoguer avec eux plutôt que d'être agi par eux.",
      questionReflexion: "Quelle grande figure (le Sauveur, le Rebelle, l'Orphelin, le Roi…) est-ce que je rejoue le plus souvent dans ma vie ?",
      exercice:
        "Repérez un film ou un conte qui vous a marqué enfant. Nommez le personnage auquel vous vous identifiiez. Que dit-il de vos attentes actuelles ?",
      paralleleJungien: "C'est le concept central : archétype, Ombre, Persona, anima/animus, Soi sont tous des noms d'archétypes ou d'instances.",
      paralleleTarot: "Les 22 arcanes majeurs forment une galerie d'archétypes disposés en parcours.",
    },
  },
  {
    id: 'astro-langage',
    nom: "L'astrologie comme langage",
    glyphe: '♁',
    categorie: 'Langage symbolique',
    sources: ['interpretation-symbolique', 'contenu-pedagogique'],
    facets: {
      definition:
        "Dans cette école, l'astrologie n'est pas étudiée comme une science qui prédirait des événements, mais comme un langage : un alphabet de symboles (planètes, signes, maisons, aspects) permettant de décrire des dynamiques intérieures et d'en parler.",
      symbole: "Le ciel comme page ; les astres comme lettres ; le thème natal comme phrase unique.",
      imageArchetypale: "La carte : elle n'est pas le territoire, mais elle aide à s'y orienter.",
      mythologie:
        "Les noms des planètes sont ceux de divinités : les astronomes anciens ont projeté sur le ciel la carte de la psyché collective. Nous héritons de ce vocabulaire.",
      psychologie:
        "Le thème fonctionne comme un test projectif ouvert : il propose des images à partir desquelles une personne peut réfléchir à sa vie, ses tensions, ses ressources.",
      ombre:
        "Le fatalisme (« c'est écrit »), la déresponsabilisation (« c'est la faute de Saturne »), la prédiction anxiogène. Autant de manières de mal parler la langue.",
      potentielEvolutif:
        "Bien utilisée, cette langue aide à mettre des mots sur ce qui se vivait en silence, et à transformer une plainte en question.",
      questionReflexion: "Est-ce que je cherche dans l'astrologie une réponse toute faite, ou un miroir pour mieux me questionner ?",
      exercice:
        "Notez une phrase que vous aimeriez que « les astres » vous disent. Puis reformulez-la en question ouverte que vous pourriez explorer vous-même.",
      paralleleHermetique: "Principe de Correspondance : le mouvement du ciel et celui de la psyché sont lus comme deux expressions d'un même ordre — analogie, non causalité.",
    },
  },
  {
    id: 'observation-interpretation',
    nom: "Observer n'est pas interpréter",
    glyphe: '⊙',
    categorie: 'Langage symbolique',
    sources: ['contenu-pedagogique', 'traditionnel'],
    facets: {
      definition:
        "Il faut distinguer deux gestes : (1) l'observation astronomique — la position réelle des astres, calculable, vérifiable ; (2) l'interprétation symbolique — le sens qu'une tradition attribue à ces positions. Le premier relève de la science, le second d'une lecture culturelle.",
      symbole: "Deux colonnes : à gauche les faits, à droite le sens. On ne mélange pas les colonnes.",
      imageArchetypale: "Le traducteur : il connaît la langue de départ (le ciel calculé) et la langue d'arrivée (les images), et ne confond pas les deux.",
      mythologie: "Longtemps astronomie et astrologie furent le même métier ; leur séparation moderne est un progrès de clarté, pas une trahison.",
      psychologie:
        "Cette distinction protège de la pensée magique : elle rappelle que le sens est ajouté par nous, ce qui nous en rend responsables.",
      ombre: "Faire passer une interprétation pour un fait (« la science le prouve ») ; ou nier que les calculs, eux, sont exacts.",
      potentielEvolutif: "Tenir les deux : rigueur sur les données, liberté et prudence sur le sens.",
      questionReflexion: "Dans ce que je lis sur l'astrologie, qu'est-ce qui est vérifiable, et qu'est-ce qui est une lecture proposée ?",
      exercice:
        "Pour votre propre thème (plus tard dans le parcours), entraînez-vous à toujours énoncer d'abord la donnée (« Mars est à tel degré du Bélier »), puis, séparément, l'interprétation (« on peut l'explorer comme… »).",
      paralleleHermetique: "Principe de Mentalisme : le sens naît dans l'esprit qui regarde ; il n'est pas « dans » l'astre.",
    },
  },
]

export const SYMBOLIC_BY_ID = Object.fromEntries(SYMBOLIC_LANGUAGE.map((c) => [c.id, c])) as Record<string, GenericConcept>
