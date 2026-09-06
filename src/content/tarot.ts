import type { TarotCard } from './types'

/**
 * Les 22 arcanes majeurs comme parcours initiatique.
 * Les correspondances astrologiques varient fortement selon les traditions
 * (Golden Dawn, tarot de Marseille symbolique, écoles francophones...).
 * Nous les présentons comme « une lecture possible », jamais comme LA règle.
 */
export const TAROT: TarotCard[] = [
  {
    id: 'mat', numero: 0, nom: 'Le Mat / Le Fou',
    archetype: "Le voyageur sans bagage, l'élan pur",
    symbolisme: "Personnage en marche, baluchon léger, regard ailleurs. L'énergie de départ, avant toute forme.",
    cheminInitiatique: "Le point zéro : la disponibilité totale, la folie sacrée qui ose partir sans savoir où.",
    lumiere: "Liberté, spontanéité, confiance, capacité de recommencer.",
    ombre: "Irresponsabilité, fuite, dispersion, refus de tout ancrage.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Souvent rattaché à Uranus (liberté, rupture) ; d'autres écoles y voient l'Air ou Neptune.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'bateleur', numero: 1, nom: 'Le Bateleur / Le Magicien',
    archetype: "L'artisan des débuts, celui qui a tous les outils",
    symbolisme: "Un jeune homme devant une table couverte d'objets des quatre couleurs. Le pouvoir de commencer, de manier les éléments.",
    cheminInitiatique: "Prendre conscience de ses moyens ; oser la première manipulation consciente du réel.",
    lumiere: "Habileté, initiative, présence, communication.",
    ombre: "Manipulation, esbroufe, éparpillement, amateurisme.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Fréquemment associé à Mercure. Lecture proposée.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'papesse', numero: 2, nom: 'La Papesse / La Grande Prêtresse',
    archetype: "La gardienne du savoir intérieur",
    symbolisme: "Femme assise, livre entrouvert, voile. Le savoir qui ne se dit pas, la patience, la gestation.",
    cheminInitiatique: "Apprendre à écouter le dedans ; laisser mûrir avant d'agir.",
    lumiere: "Intuition, étude, intériorité, discrétion féconde.",
    ombre: "Passivité, rétention, coupure du monde, froideur.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Souvent reliée à la Lune. Lecture proposée.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'imperatrice', numero: 3, nom: "L'Impératrice",
    archetype: "La force créatrice, l'abondance",
    symbolisme: "Femme couronnée, sceptre, bouclier. La fécondité, la nature généreuse, l'imagination qui met au monde.",
    cheminInitiatique: "Laisser la vie créer à travers soi ; passer de l'intériorité à la production.",
    lumiere: "Créativité, sensualité, générosité, croissance.",
    ombre: "Débordement, possessivité maternelle, superficialité, excès.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Souvent reliée à Vénus. Lecture proposée.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'empereur', numero: 4, nom: "L'Empereur",
    archetype: "La structure, l'autorité, le père",
    symbolisme: "Homme assis de profil, aigle, sceptre. La loi, le cadre, la stabilité construite.",
    cheminInitiatique: "Bâtir un ordre, poser des limites, assumer une responsabilité.",
    lumiere: "Fermeté juste, protection, sens de l'organisation.",
    ombre: "Rigidité, autoritarisme, contrôle, froideur du pouvoir.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Selon les écoles : Bélier (Golden Dawn) ou principe saturnien/solaire.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'pape', numero: 5, nom: 'Le Pape / Le Hiérophante',
    archetype: "Le passeur de sens, le maître, la tradition",
    symbolisme: "Figure bénissante devant deux disciples. La transmission, le lien entre le haut et le bas, l'enseignement.",
    cheminInitiatique: "Recevoir un enseignement ; puis discerner ce qui, dans la tradition, est vivant pour soi.",
    lumiere: "Sagesse transmise, éthique, guidance, appartenance.",
    ombre: "Dogmatisme, conformisme, abus d'autorité spirituelle.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Souvent relié à Jupiter (sens) ou au Taureau (Golden Dawn).", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'amoureux', numero: 6, nom: "L'Amoureux",
    archetype: "Le choix, la rencontre, l'engagement du cœur",
    symbolisme: "Un personnage entre deux figures, une flèche au-dessus. Le carrefour affectif, la nécessité de choisir.",
    cheminInitiatique: "Sortir de l'indifférenciation : choisir un lien, une voie, et en répondre.",
    lumiere: "Amour, choix conscient, alliance, valeurs incarnées.",
    ombre: "Indécision, dépendance, choix par défaut, tiraillement.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Gémeaux (Golden Dawn) ; d'autres y lisent Vénus ou la Balance.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'chariot', numero: 7, nom: 'Le Chariot',
    archetype: "La victoire, l'élan maîtrisé, le départ",
    symbolisme: "Un conducteur, deux chevaux ou sphinx tirant dans des sens différents. Avancer malgré les forces contraires.",
    cheminInitiatique: "Rassembler ses forces divergentes et prendre la route ; première autonomie conquérante.",
    lumiere: "Détermination, maîtrise, succès, mouvement.",
    ombre: "Fuite en avant, orgueil du vainqueur, forçage, perte de direction.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Cancer (Golden Dawn, la carapace) ; d'autres y lisent une énergie martienne.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'justice', numero: 8, nom: 'La Justice',
    archetype: "L'équilibre, la juste mesure, la responsabilité",
    symbolisme: "Femme frontale, glaive et balance. Peser, trancher, assumer les conséquences de ses actes.",
    cheminInitiatique: "Regarder ses actes en face ; ajuster ; accepter la loi de cause à effet.",
    lumiere: "Équité, clarté, honnêteté, décision juste.",
    ombre: "Rigidité, jugement, culpabilité, froideur légaliste.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Balance (Golden Dawn) ; parfois Saturne.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'ermite', numero: 9, nom: "L'Ermite",
    archetype: "La quête solitaire, la lampe intérieure",
    symbolisme: "Vieil homme, lanterne, bâton. Le retrait volontaire pour chercher, éclairer un pas à la fois.",
    cheminInitiatique: "Se retirer du bruit pour trouver sa propre lumière ; devenir capable de guider.",
    lumiere: "Sagesse, discernement, autonomie intérieure, patience.",
    ombre: "Isolement, avarice affective, rumination, fuite du monde.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Vierge (Golden Dawn) ; parfois Saturne.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'roue', numero: 10, nom: 'La Roue de Fortune',
    archetype: "Le cycle, le retournement, le destin en mouvement",
    symbolisme: "Une roue avec des figures qui montent et descendent. Rien ne dure, ni le haut ni le bas.",
    cheminInitiatique: "Comprendre les cycles ; cesser de s'identifier à une position ; trouver le centre immobile.",
    lumiere: "Opportunité, retournement favorable, sens du timing, acceptation.",
    ombre: "Fatalisme, dépendance à la chance, refus de la responsabilité.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Jupiter (Golden Dawn) — expansion, cycles.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'force', numero: 11, nom: 'La Force',
    archetype: "La maîtrise douce de l'instinct",
    symbolisme: "Une femme ouvre (ou ferme) sans effort la gueule d'un lion. Le courage tranquille, la force du cœur.",
    cheminInitiatique: "Apprivoiser sa propre animalité au lieu de la combattre ; puissance sans violence.",
    lumiere: "Courage, douceur, patience, intégration de la pulsion.",
    ombre: "Répression, dureté envers soi, ou au contraire pulsions non tenues.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Lion (Golden Dawn).", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'pendu', numero: 12, nom: 'Le Pendu',
    archetype: "Le renversement du point de vue, l'attente féconde",
    symbolisme: "Un homme suspendu par un pied, tête en bas, visage serein. Voir le monde autrement, lâcher prise.",
    cheminInitiatique: "Accepter une suspension, un sacrifice, un temps où l'on ne peut rien forcer.",
    lumiere: "Lâcher-prise, nouvelle perspective, don, patience initiatique.",
    ombre: "Blocage, victimisation, sacrifice stérile, immobilisme.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Souvent relié à Neptune ou à l'Eau. Lecture proposée.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'mort', numero: 13, nom: "L'arcane sans nom / La Mort",
    archetype: "La fin nécessaire, le nettoyage, la mue",
    symbolisme: "Un squelette fauche ; des membres repoussent du sol. Ce qui est mort est coupé pour que la vie reprenne.",
    cheminInitiatique: "Consentir à une fin ; laisser mourir ce qui doit mourir ; faire de la place.",
    lumiere: "Transformation, libération, renouveau, vérité.",
    ombre: "Déni du deuil, destruction gratuite, nostalgie paralysante.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Scorpion (Golden Dawn) ; principe plutonien.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'temperance', numero: 14, nom: 'La Tempérance',
    archetype: "La circulation, l'alchimie du juste mélange",
    symbolisme: "Une figure ailée verse un liquide d'un vase à l'autre. Le flux, la mesure, la guérison lente.",
    cheminInitiatique: "Après la mort symbolique, recomposer : mélanger les eaux, retrouver la fluidité.",
    lumiere: "Modération, harmonisation, patience, guérison.",
    ombre: "Tiédeur, évitement des extrêmes par peur, lenteur excessive.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Sagittaire (Golden Dawn) ; principe de circulation.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'diable', numero: 15, nom: 'Le Diable',
    archetype: "L'attachement, le désir, l'ombre matérielle",
    symbolisme: "Une figure cornue, deux personnages enchaînés à son socle — mais les chaînes sont lâches.",
    cheminInitiatique: "Regarder ses dépendances et ses désirs en face ; voir que la chaîne peut s'ôter.",
    lumiere: "Vitalité, incarnation, reconnaissance du désir, humour sur soi.",
    ombre: "Emprise, addiction, manipulation, matérialisme, fascination.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Capricorne (Golden Dawn) ; parfois Pluton ou Saturne.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'tour', numero: 16, nom: 'La Maison Dieu / La Tour',
    archetype: "La rupture libératrice, la foudre",
    symbolisme: "Une tour frappée par la foudre, une couronne qui saute, deux personnages qui tombent.",
    cheminInitiatique: "Voir s'effondrer une structure devenue fausse ; la chute qui libère.",
    lumiere: "Libération soudaine, vérité qui éclate, sortie de prison.",
    ombre: "Choc traumatique, orgueil puni, destruction subie sans conscience.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Mars (Golden Dawn) ; lecture moderne fréquente : Uranus.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'etoile', numero: 17, nom: "L'Étoile",
    archetype: "L'espérance, le don, la vérité nue",
    symbolisme: "Une femme nue verse deux cruches d'eau, une sur la terre, une dans le fleuve, sous les étoiles.",
    cheminInitiatique: "Après l'effondrement, retrouver la confiance ; se relier à une source plus vaste ; donner sans retenir.",
    lumiere: "Espérance, générosité, inspiration, authenticité.",
    ombre: "Idéalisme naïf, se donner jusqu'à se vider, rêverie sans acte.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Verseau (Golden Dawn).", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'lune', numero: 18, nom: 'La Lune',
    archetype: "L'inconscient, les peurs, l'imaginaire nocturne",
    symbolisme: "Une lune pleure des gouttes, deux chiens hurlent, un écrevisse sort de l'eau, un chemin file au loin.",
    cheminInitiatique: "Traverser la nuit intérieure ; affronter ses illusions et ses peurs anciennes sans s'y noyer.",
    lumiere: "Sensibilité profonde, imagination, rêve, contact avec l'inconscient.",
    ombre: "Confusion, illusions, angoisses, tromperie, égarement.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Poissons (Golden Dawn) ; principe neptunien / lunaire.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'soleil', numero: 19, nom: 'Le Soleil',
    archetype: "La clarté retrouvée, la joie, la relation simple",
    symbolisme: "Un grand soleil, deux enfants qui jouent près d'un mur. La lumière partagée, l'évidence, la vitalité.",
    cheminInitiatique: "Après la nuit, la clarté : se montrer tel qu'on est, jouer, être en lien sans masque.",
    lumiere: "Joie, confiance, réussite, chaleur, amitié.",
    ombre: "Aveuglement de l'ego, naïveté, dépendance à la reconnaissance.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Le Soleil (toutes traditions ou presque).", tag: 'traditionnel' },
    ],
  },
  {
    id: 'jugement', numero: 20, nom: 'Le Jugement',
    archetype: "L'appel, le réveil, la renaissance",
    symbolisme: "Un ange sonne de la trompette ; des personnages sortent d'un tombeau. Un appel auquel on répond.",
    cheminInitiatique: "Entendre un appel intérieur et y répondre ; renaître à une identité plus vaste.",
    lumiere: "Vocation, pardon, résurrection, libération du passé.",
    ombre: "Auto-jugement sévère, refus de l'appel, culpabilité, blocage sur le passé.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Souvent relié à Pluton (renaissance) ou au Feu primordial.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'monde', numero: 21, nom: 'Le Monde',
    archetype: "L'accomplissement, l'intégration, la danse cosmique",
    symbolisme: "Une figure dans une couronne ovale, entourée des quatre vivants (taureau, lion, aigle, ange).",
    cheminInitiatique: "Réunir les quatre éléments en soi ; achever un cycle et se tenir, entier, au centre.",
    lumiere: "Réalisation, plénitude, unité, liberté de mouvement.",
    ombre: "Clôture, refus du cycle suivant, satisfaction qui fige.",
    correspondances: [
      { domaine: 'Astrologie', contenu: "Saturne (Golden Dawn — l'achèvement) ; parfois le Soleil ou l'ensemble du zodiaque.", tag: 'rapprochement-moderne' },
    ],
  },
]

export const TAROT_BY_ID = Object.fromEntries(TAROT.map((c) => [c.id, c])) as Record<string, TarotCard>
