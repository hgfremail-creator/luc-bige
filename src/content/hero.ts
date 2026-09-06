/** NIVEAU 13 — Le chemin du héros. Modèle pédagogique original inspiré des
 * travaux comparatistes sur le « monomythe ». Plusieurs découpages existent ;
 * celui-ci en 11 étapes est un choix parmi d'autres. */

export interface HeroStage {
  numero: number
  titre: string
  description: string
  interieur: string
  signeParallele: string
  travailHercule?: string
  question: string
}

export const HERO_JOURNEY: HeroStage[] = [
  {
    numero: 1, titre: "L'appel",
    description: "Quelque chose vient troubler le monde ordinaire : une rencontre, une perte, un désir, une inquiétude sourde. Une aventure se propose.",
    interieur: "Un mécontentement diffus, une intuition que 'ce n'est pas tout', un rêve récurrent.",
    signeParallele: 'Bélier — le surgissement, la première impulsion.',
    question: "Quel appel est-ce que j'entends en ce moment et que je fais mine de ne pas entendre ?",
  },
  {
    numero: 2, titre: "Le refus",
    description: "La peur, le doute, les obligations font hésiter. On invoque de bonnes raisons pour ne pas bouger.",
    interieur: "« Plus tard », « je ne suis pas prêt », « ce n'est pas raisonnable ». Le confort du connu pèse lourd.",
    signeParallele: 'Taureau — l\'attachement à la sécurité, la résistance au mouvement.',
    question: "Quelles 'bonnes raisons' est-ce que j'utilise pour ne pas répondre à l'appel ?",
  },
  {
    numero: 3, titre: "Le départ",
    description: "Un déclic, un événement, ou simplement une décision : on franchit le seuil et l'on quitte le monde familier.",
    interieur: "Le moment où l'on dit oui, souvent sans se sentir prêt. Un mélange de peur et de soulagement.",
    signeParallele: 'Gémeaux — la curiosité qui l\'emporte, le pas de côté.',
    question: "Quel serait, concrètement, mon premier pas hors du connu ?",
  },
  {
    numero: 4, titre: "La rencontre avec les guides",
    description: "Des aides apparaissent : un mentor, un livre, une pratique, un compagnon, un outil. On reçoit ce dont on aura besoin.",
    interieur: "On se sent moins seul ; une transmission a lieu ; on apprend les premières règles du nouveau monde.",
    signeParallele: 'Cancer — le lien qui protège, la figure qui nourrit et abrite.',
    question: "Qui ou quoi me guide en ce moment — et est-ce que je l'écoute vraiment ?",
  },
  {
    numero: 5, titre: "Les épreuves",
    description: "Série de tests, d'alliés et d'ennemis. On apprend par l'action, on se trompe, on recommence, on se muscle.",
    interieur: "La zone d'inconfort devient familière ; des compétences se forment ; l'ancienne identité se fissure.",
    signeParallele: 'Lion puis Vierge — s\'affirmer, puis s\'affiner par le travail répété.',
    question: "Quelle épreuve actuelle est en train de me faire grandir, même si je la déteste ?",
  },
  {
    numero: 6, titre: "La confrontation à l'ombre",
    description: "On atteint le cœur du labyrinthe : la peur centrale, la blessure d'origine, la part de soi longtemps évitée.",
    interieur: "Ce qui avait été projeté sur les autres se révèle intérieur. Moment de vérité, souvent douloureux.",
    signeParallele: 'Scorpion — la descente, la mise à nu, la mort symbolique.',
    travailHercule: 'La capture de Cerbère : descendre au royaume des morts et en ramener le gardien à trois têtes.',
    question: "Quelle part de moi ai-je le plus soigneusement évité de regarder ?",
  },
  {
    numero: 7, titre: "La crise",
    description: "Le point le plus bas : une forme de défaite, de mort, d'effondrement. L'ancien monde ne peut plus tenir.",
    interieur: "Sentiment de perte totale ; les repères lâchent ; on ne sait plus qui l'on est.",
    signeParallele: 'Scorpion / Capricorne — le fond touché, l\'épreuve du dénuement.',
    question: "Qu'est-ce qui, en moi, doit finir pour que je puisse continuer autrement ?",
  },
  {
    numero: 8, titre: "La transformation",
    description: "De la crise émerge quelque chose de neuf : une compréhension, une force, un don. C'est la renaissance.",
    interieur: "On se relève différent ; ce qui semblait impossible devient évident ; une paix nouvelle, plus solide.",
    signeParallele: 'Sagittaire — le sens retrouvé, la vision qui relie l\'épreuve à un tout.',
    question: "Qu'est-ce que cette traversée m'a appris que je ne pouvais pas apprendre autrement ?",
  },
  {
    numero: 9, titre: "Le retour",
    description: "Il faut revenir dans le monde ordinaire avec ce qu'on a trouvé. Le chemin du retour a ses propres dangers.",
    interieur: "Tentation de rester dans le monde de l'aventure ; ou peur que le quotidien efface la transformation.",
    signeParallele: 'Capricorne — assumer, structurer, redescendre dans le concret.',
    question: "Comment est-ce que je ramène ce que j'ai compris dans ma vie de tous les jours ?",
  },
  {
    numero: 10, titre: "L'intégration",
    description: "Le nouveau et l'ancien monde se réconcilient. Ce qui a été acquis devient une manière d'être stable, non un souvenir d'exception.",
    interieur: "On habite les deux mondes ; la sagesse de l'aventure infuse le quotidien sans effort visible.",
    signeParallele: 'Verseau — relier son expérience à une vision plus large, plus libre.',
    question: "Qu'est-ce qui, dans ma vie ordinaire, porte désormais la marque de ce que j'ai traversé ?",
  },
  {
    numero: 11, titre: "La transmission",
    description: "Le héros devient à son tour un guide. Ce qui a été reçu se donne. L'aventure d'un autre peut commencer.",
    interieur: "Le besoin de partager, d'accompagner, de créer les conditions pour que d'autres franchissent leur seuil.",
    signeParallele: 'Poissons — rendre au collectif, offrir l\'élixir, puis un nouveau cycle s\'ouvre.',
    question: "Qu'est-ce que je pourrais transmettre précisément parce que je l'ai vécu ?",
  },
]

export interface TravailHercule {
  numero: number
  nom: string
  recit: string
  sens: string
  correspondanceZodiacale: string
  note: string
}

export const TRAVAUX_HERCULE: TravailHercule[] = [
  { numero: 1, nom: "Le lion de Némée", recit: "Un lion à la peau invulnérable ravage la région. Héraclès, ses armes inutiles, l'étrangle de ses mains et se revêt de sa peau.", sens: "Affronter et intégrer sa propre puissance instinctive au lieu d'en être dévoré. Revêtir la peau : faire de la force brute une protection.", correspondanceZodiacale: "Lion", note: "Dans certains systèmes ésotériques du XXᵉ s., les travaux sont mis en regard des signes ; l'ordre et les attributions varient selon les auteurs." },
  { numero: 2, nom: "L'hydre de Lerne", recit: "Un serpent d'eau à multiples têtes : chaque tête coupée repousse en double. Héraclès la vainc en cautérisant les plaies avec l'aide de son neveu.", sens: "Certains problèmes s'aggravent quand on les attaque frontalement. Il faut changer de méthode, accepter de l'aide, traiter la racine.", correspondanceZodiacale: "Scorpion", note: "Correspondance proposée par certaines écoles (transformation, marécage, régénération)." },
  { numero: 3, nom: "La biche de Cérynie", recit: "Une biche aux sabots d'airain et aux cornes d'or, consacrée à Artémis, insaisissable. Héraclès la poursuit un an sans la blesser, puis la capture avec douceur.", sens: "Poursuivre un idéal fuyant demande patience et respect ; la prise se fait sans violence, sinon on abîme ce qu'on cherchait.", correspondanceZodiacale: "Sagittaire", note: "Correspondance proposée (quête, flèche, animal à demi sauvage)." },
  { numero: 4, nom: "Le sanglier d'Érymanthe", recit: "Une bête féroce dévaste les cultures. Héraclès la débusque, l'épuise dans la neige et la ramène vivante.", sens: "Épuiser une pulsion destructrice en la faisant courir jusqu'au bout, plutôt que la nier ; la ramener 'vivante' : ne pas la tuer, la maîtriser.", correspondanceZodiacale: "Capricorne", note: "Correspondance proposée (montagne, discipline, la bête et le sommet)." },
  { numero: 5, nom: "Les écuries d'Augias", recit: "Des écuries immenses jamais nettoyées depuis des années. Héraclès détourne deux fleuves pour les laver en un jour.", sens: "Le grand nettoyage intérieur ne se fait pas à la petite cuillère : il faut faire entrer un courant plus grand que soi (une aide, une pratique, un principe).", correspondanceZodiacale: "Verseau", note: "Correspondance proposée (l'eau versée, le service à l'humanité)." },
  { numero: 6, nom: "Les oiseaux du lac Stymphale", recit: "Des oiseaux aux plumes de bronze, en nuées, obscurcissent le ciel. Héraclès les effraie avec des cymbales et les abat un à un.", sens: "Les pensées obsédantes forment une nuée : il faut d'abord faire du bruit (rompre le silence, nommer), puis les traiter une par une.", correspondanceZodiacale: "Gémeaux", note: "Correspondance proposée (l'air, la multiplicité, le mental)." },
  { numero: 7, nom: "Le taureau de Crète", recit: "Un taureau magnifique et furieux, sorti de la mer, terrorise l'île. Héraclès le dompte et le ramène.", sens: "Maîtriser un désir puissant venu des profondeurs (la mer) sans le briser ; le faire servir.", correspondanceZodiacale: "Taureau", note: "Correspondance proposée (le taureau lui-même)." },
  { numero: 8, nom: "Les juments de Diomède", recit: "Des chevaux nourris de chair humaine. Héraclès les capture et, selon les versions, leur donne leur maître pour pâture, ce qui les apaise.", sens: "Une énergie 'carnivore' (qui se nourrit des autres) doit être retournée et pacifiée ; on ne l'apaise qu'en cessant de l'alimenter.", correspondanceZodiacale: "Bélier", note: "Correspondance proposée (chevaux, fougue, Mars)." },
  { numero: 9, nom: "La ceinture d'Hippolyte", recit: "Héraclès doit rapporter la ceinture de la reine des Amazones. Elle la lui offre ; mais Héra sème la discorde et le combat éclate.", sens: "Obtenir par la relation ce qu'on croyait devoir prendre par la force ; se méfier de ce qui, en nous, transforme un don en guerre.", correspondanceZodiacale: "Cancer", note: "Correspondance proposée (le lien, la mère, l'appartenance)." },
  { numero: 10, nom: "Les bœufs de Géryon", recit: "Un géant à trois corps garde un troupeau au bout du monde connu. Héraclès traverse l'océan dans une coupe d'or, tue le géant et ramène les bœufs.", sens: "Aller chercher une ressource aux confins de soi ; la coupe d'or : se laisser porter par un principe supérieur pour franchir l'infranchissable.", correspondanceZodiacale: "Balance", note: "Correspondance proposée (l'équilibre, le lointain, l'autre)." },
  { numero: 11, nom: "Les pommes d'or des Hespérides", recit: "Des pommes d'immortalité gardées par un dragon, au jardin des nymphes. Héraclès demande à Atlas d'aller les chercher pendant qu'il porte le ciel à sa place, puis le berne pour lui rendre son fardeau.", sens: "Le fruit le plus précieux ne se prend pas directement : il passe par le détour, la ruse, l'acceptation temporaire d'un poids énorme.", correspondanceZodiacale: "Vierge", note: "Correspondance proposée (le jardin, le service, la récolte)." },
  { numero: 12, nom: "Cerbère, gardien des Enfers", recit: "Ramener vivant, sans arme, le chien à trois têtes qui garde le royaume des morts. Héraclès y parvient par la seule force de ses bras, puis le relâche.", sens: "L'épreuve ultime : descendre au plus profond, saisir ce qui garde le seuil de la mort, le regarder en face, puis le laisser à sa place.", correspondanceZodiacale: "Poissons", note: "Correspondance proposée (la fin du cycle, la dissolution, le retour)." },
]
