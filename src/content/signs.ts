import type { Sign } from './types'

/**
 * Les douze signes présentés comme les étapes successives d'un même processus
 * de conscience : de l'affirmation initiale (Bélier) au retour au tout (Poissons),
 * puis reprise du cycle. Contenu original et pédagogique.
 */
export const SIGNS: Sign[] = [
  {
    id: 'belier',
    ordre: 1,
    nom: 'Bélier',
    glyphe: '♈',
    dates: '21 mars – 19 avril',
    element: 'feu',
    mode: 'cardinal',
    polarite: 'diurne',
    maitre: 'Mars',
    motCle: 'Je surgis',
    archetype: "Le pionnier, l'étincelle, le nouveau-né du zodiaque",
    besoinFondamental: "Éprouver qu'il existe par lui-même, séparé, capable d'agir de sa propre initiative.",
    dynamiquePsychologique:
      "Le Bélier est le geste de la séparation première : sortir de l'indistinction, dire « moi » pour la première fois. Toute son énergie va vers l'avant, vers l'acte immédiat. Il n'anticipe pas les conséquences ; il a besoin de sentir sa force en la dépensant. C'est l'instant du départ, avant toute réflexion sur le chemin.",
    potentiel:
      "Courage d'initier, capacité à commencer là où d'autres hésitent, franchise, présence directe, aptitude à réveiller l'énergie d'un groupe.",
    ombre:
      "L'affirmation qui ne reconnaît pas l'autre : la brusquerie, l'impatience, l'agressivité, le besoin permanent de conflit pour se sentir vivant, l'incapacité à finir ce qui est commencé.",
    exces: "Impulsivité, colère, imposition de soi, guerre pour la guerre.",
    manque: "Timidité paralysante, incapacité à dire non, à défendre son territoire, à démarrer.",
    niveaux: {
      instinctif: "Réflexe de survie, réaction de combat, décharge motrice immédiate.",
      psychologique: "Affirmation du moi, construction de l'autonomie, apprentissage de la juste colère.",
      conscient: "Choisir ses combats, initier avec discernement, mettre son courage au service d'une cause.",
      transpersonnel: "Être un éveilleur : celui par qui un cycle nouveau commence pour d'autres que soi.",
    },
    mythologie:
      "On peut l'associer à la Toison d'or, objet d'une quête qui exige de partir seul vers l'inconnu, et plus largement à toutes les figures du héros au tout début de son aventure, quand il ne sait encore rien mais décide d'y aller.",
    conteSymbolique:
      "Un enfant pousse la porte de la maison pour la première fois sans tenir la main de personne. Dehors, tout est immense et inconnu. Il ne réfléchit pas : il court. C'est la course qui lui apprend qu'il a des jambes.",
    questionInitiatique: "De quoi ai-je besoin de me séparer pour commencer à exister pleinement ?",
    exercice:
      "Cette semaine, engagez une action que vous repoussez depuis longtemps, dans les 24 heures, sans la préparer parfaitement. Notez ce que la peur annonçait et ce qui s'est réellement passé.",
    etapeHeros: "1. L'appel de l'aventure et le premier pas hors du monde ordinaire.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché parfois de l'Empereur (autorité, décision) ou du Mat en mouvement. Selon les écoles ; interprétation proposée.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "La première mise au feu de la matière brute : la calcination qui ouvre l'Œuvre.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Vibration : la mise en mouvement d'une énergie jusque-là latente.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Émergence du moi (ego) hors de la participation inconsciente au tout.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'taureau',
    ordre: 2,
    nom: 'Taureau',
    glyphe: '♉',
    dates: '20 avril – 20 mai',
    element: 'terre',
    mode: 'fixe',
    polarite: 'nocturne',
    maitre: 'Vénus',
    motCle: "J'ai et je goûte",
    archetype: "Le jardinier, le bâtisseur, le gardien du vivant",
    besoinFondamental: "Se sentir en sécurité dans un corps, une matière, un territoire ; jouir de ce qui est là.",
    dynamiquePsychologique:
      "Après l'élan du Bélier, le Taureau demande : « et maintenant, comment durer ? » Il enracine l'énergie dans un corps et un patrimoine. Il apprend la lenteur, la valeur des choses, le plaisir des sens. Il consolide, possède, savoure. Son temps n'est pas celui de l'instant mais celui de la saison qui mûrit.",
    potentiel:
      "Stabilité, patience, sens du concret, capacité à faire pousser et durer, présence apaisante, rapport sain au plaisir et au corps.",
    ombre:
      "La possessivité : confondre avoir et être, s'accrocher aux objets, aux personnes, aux habitudes ; refuser tout changement par peur de perdre ; s'alourdir.",
    exces: "Matérialisme, entêtement, gourmandise, inertie, jalousie.",
    manque: "Instabilité matérielle, incapacité à jouir, à se poser, à faire confiance à la durée.",
    niveaux: {
      instinctif: "Besoin de nourriture, de chaleur, de territoire ; réflexe d'accumulation.",
      psychologique: "Construction du sentiment de sécurité intérieure, estime de soi liée à la valeur.",
      conscient: "Distinguer les vrais besoins des attachements ; posséder sans être possédé.",
      transpersonnel: "Devenir gardien : prendre soin du vivant, de la terre, de ce qui a été confié.",
    },
    mythologie:
      "On peut l'associer aux figures de la déesse de la nature et de l'abondance, ainsi qu'aux taureaux sacrés des cultes anciens, symboles de fécondité et de puissance tranquille de la vie.",
    conteSymbolique:
      "Un homme reçoit un lopin de terre pierreuse. Plutôt que de partir chercher mieux, il enlève les pierres une à une, plante, arrose, attend. Des années plus tard, à l'ombre de ses arbres, il comprend que la richesse n'était pas la terre, mais sa fidélité à elle.",
    questionInitiatique: "À quoi suis-je vraiment attaché, et qu'est-ce que cet attachement protège ou empêche ?",
    exercice:
      "Pendant un repas, mangez en silence, lentement, en portant toute votre attention aux saveurs et aux textures. Notez ce que cela change à votre rapport au plaisir et à la satiété.",
    etapeHeros: "2. Rassembler ses ressources et ses appuis avant la traversée.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché du Pape / Hiérophante (transmission, valeurs) ou de l'Impératrice (fécondité). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "Le sel, principe de corps et de fixité ; la coagula qui donne une forme stable.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Cause et effet : ce que l'on cultive avec constance finit par porter fruit.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Fonction sensation : le réel éprouvé par le corps et les sens.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'gemeaux',
    ordre: 3,
    nom: 'Gémeaux',
    glyphe: '♊',
    dates: '21 mai – 20 juin',
    element: 'air',
    mode: 'mutable',
    polarite: 'diurne',
    maitre: 'Mercure',
    motCle: 'Je nomme et je relie',
    archetype: "Le messager, l'enfant curieux, le passeur",
    besoinFondamental: "Comprendre en nommant, multiplier les contacts, garder l'esprit libre et mobile.",
    dynamiquePsychologique:
      "Le Gémeaux découvre que le monde est double : soi et l'autre, le mot et la chose, cette rue et celle d'à côté. Il collecte, compare, relie, transmet. Il ne cherche pas encore la profondeur mais l'étendue : voir combien il existe de possibles. C'est l'âge des questions qui commencent par « pourquoi ? ».",
    potentiel:
      "Vivacité d'esprit, aisance verbale, curiosité, capacité à faire dialoguer des mondes différents, humour, adaptabilité.",
    ombre:
      "La dispersion : papillonner sans jamais approfondir, parler pour ne pas ressentir, dire une chose et son contraire, rester en surface de tout et de tous.",
    exces: "Bavardage, superficialité, inconstance, mensonge par jeu, agitation mentale.",
    manque: "Difficulté à s'exprimer, à apprendre, à établir des liens légers, à voir plusieurs points de vue.",
    niveaux: {
      instinctif: "Réflexe d'exploration, imitation, babillage.",
      psychologique: "Construction du langage intérieur, de la pensée qui relie les expériences.",
      conscient: "Choisir ce que l'on apprend et transmet ; relier au lieu d'éparpiller.",
      transpersonnel: "Être un passeur d'idées : traduire entre des mondes qui ne se parlaient pas.",
    },
    mythologie:
      "On peut l'associer au messager des dieux, qui circule entre l'Olympe, la terre et le monde d'en bas, et aussi aux couples de jumeaux mythiques, dont l'un est mortel et l'autre immortel.",
    conteSymbolique:
      "Deux jumeaux se partagent un royaume. L'un veut tout garder, l'autre veut tout montrer aux voisins. Le royaume ne grandit que le jour où ils comprennent que montrer et garder sont le même geste vu de deux côtés.",
    questionInitiatique: "Qu'est-ce que je fais dire à mes mots pour ne pas avoir à le ressentir ?",
    exercice:
      "Choisissez une idée à laquelle vous croyez. Écrivez l'argumentaire le plus honnête possible en faveur de l'idée opposée. Observez ce qui résiste en vous.",
    etapeHeros: "3. Rencontrer le monde intermédiaire : messagers, indices, cartes du territoire.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché des Amoureux (le choix entre deux voies) ou du Bateleur (habileté, parole). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "Le mercure volatil, médiateur entre les états de la matière.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Mentalisme : nommer, c'est déjà donner forme à l'expérience.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Fonction pensée dans son versant associatif ; début du travail de différenciation.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'cancer',
    ordre: 4,
    nom: 'Cancer',
    glyphe: '♋',
    dates: '21 juin – 22 juillet',
    element: 'eau',
    mode: 'cardinal',
    polarite: 'nocturne',
    maitre: 'Lune',
    motCle: "J'abrite et je ressens",
    archetype: "La mère, le foyer, le gardien de la mémoire",
    besoinFondamental: "Se sentir appartenir, être relié à une origine, avoir un lieu et des liens où l'on est accueilli tel qu'on est.",
    dynamiquePsychologique:
      "Après l'exploration des Gémeaux, le Cancer revient vers l'intérieur. Il découvre le monde des émotions, de la famille, du passé. Il construit une coquille : un espace protégé d'où éprouver le monde sans être submergé. Il apprend à sentir, à se souvenir, à prendre soin.",
    potentiel:
      "Tendresse, sens du soin, mémoire fidèle, capacité à créer un foyer, intuition des besoins d'autrui, loyauté affective.",
    ombre:
      "Le repli : se cacher dans la coquille, retenir les autres par la culpabilité, materner pour ne pas être quitté, vivre au passé, confondre protéger et posséder.",
    exces: "Susceptibilité, dépendance affective, chantage émotionnel, nostalgie envahissante.",
    manque: "Difficulté à ressentir, à s'attacher, à demander de l'aide, à créer un chez-soi.",
    niveaux: {
      instinctif: "Besoin de nid, de contact peau à peau, réflexe de retrait devant la menace.",
      psychologique: "Construction de la sécurité affective, rapport à la mère et au lignage.",
      conscient: "Se donner soi-même le foyer intérieur que l'on attendait de l'extérieur.",
      transpersonnel: "Prendre soin du collectif, porter la mémoire d'un groupe, d'une lignée, d'un peuple.",
    },
    mythologie:
      "On peut l'associer aux déesses des moissons et de la maternité, et au mythe de la mère qui descend chercher son enfant dans le monde souterrain : l'amour qui traverse les saisons de perte et de retour.",
    conteSymbolique:
      "Un ermite bâtit une cabane si parfaite qu'il n'en sort plus. Un jour, un voyageur perdu frappe à sa porte. En l'abritant, l'ermite comprend enfin à quoi servait sa maison.",
    questionInitiatique: "Quel foyer est-ce que j'attends encore de quelqu'un d'autre, et que je pourrais m'offrir ?",
    exercice:
      "Écrivez le souvenir d'enfance qui vous revient le plus souvent. Demandez-vous : quel besoin actuel ce souvenir désigne-t-il ?",
    etapeHeros: "4. Le seuil intérieur : affronter ses racines, ses peurs anciennes, avant de plonger.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché du Chariot (protection, carapace) ou de la Papesse (intériorité, mémoire). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "Le bain, l'eau maternelle où la matière est dissoute pour renaître.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Rythme : les marées de l'émotion montent et se retirent.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Archétype de la Mère et rapport au monde matriciel de l'enfance.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'lion',
    ordre: 5,
    nom: 'Lion',
    glyphe: '♌',
    dates: '23 juillet – 22 août',
    element: 'feu',
    mode: 'fixe',
    polarite: 'diurne',
    maitre: 'Soleil',
    motCle: 'Je crée et je rayonne',
    archetype: "Le roi, l'artiste, l'enfant royal",
    besoinFondamental: "Se sentir vu, reconnu dans sa singularité, pouvoir exprimer et offrir ce qui est unique en soi.",
    dynamiquePsychologique:
      "Sorti de la coquille du Cancer, le Lion se met debout et se montre. Il découvre qu'il a un centre, une identité, une flamme à faire briller. Il crée, il joue, il aime, il donne. Il a besoin d'un public, non par vanité première, mais parce que la reconnaissance confirme qu'il existe vraiment.",
    potentiel:
      "Générosité, chaleur, sens de la fête et du jeu, courage du cœur, capacité à inspirer et à mettre en lumière les autres, créativité.",
    ombre:
      "L'orgueil : exiger d'être le centre, confondre reconnaissance et amour, mépriser ce qui n'est pas royal, ne pas supporter d'être ordinaire ou dans l'ombre.",
    exces: "Vanité, autoritarisme, théâtralité, besoin d'admiration, susceptibilité de l'ego.",
    manque: "Manque de confiance, effacement, peur d'être vu, difficulté à créer et à s'affirmer joyeusement.",
    niveaux: {
      instinctif: "Besoin de dominer, de marquer son rang, de parader.",
      psychologique: "Construction de l'identité, de l'estime de soi, du droit d'occuper une place.",
      conscient: "Rayonner sans écraser ; mettre son autorité au service de la vie des autres.",
      transpersonnel: "Devenir un soleil pour un groupe : réchauffer, unifier, faire grandir chacun.",
    },
    mythologie:
      "On peut l'associer aux dieux solaires qui traversent le ciel chaque jour, et au premier des travaux du héros : affronter le lion invincible et revêtir sa peau, c'est-à-dire intégrer sa propre puissance sans en être dévoré.",
    conteSymbolique:
      "Un roi ordonne qu'on l'applaudisse. Les applaudissements sonnent creux. Le jour où il descend danser avec ses sujets, sans couronne, la joie qui monte est enfin réelle — et c'est celle-là qui le fait roi.",
    questionInitiatique: "Qu'est-ce qui, en moi, veut absolument être vu — et qu'est-ce que je crée seulement pour l'applaudissement ?",
    exercice:
      "Réalisez un acte créatif (dessin, texte, plat, chanson) que vous ne montrerez à personne. Observez ce que la création elle-même vous apporte, sans regard extérieur.",
    etapeHeros: "5. L'épreuve du seuil : affronter le gardien, revendiquer sa force propre.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché de la Force (maîtrise douce de l'instinct) ou du Soleil (rayonnement, joie). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "L'or philosophal, le principe solaire fixe ; le cœur de l'Œuvre.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Vibration à son point le plus lumineux : le centre qui irradie.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Rapport au Soi comme centre, distinct de l'ego ; l'axe autour duquel la personne s'organise.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'vierge',
    ordre: 6,
    nom: 'Vierge',
    glyphe: '♍',
    dates: '23 août – 22 septembre',
    element: 'terre',
    mode: 'mutable',
    polarite: 'nocturne',
    maitre: 'Mercure',
    motCle: "J'affine et je sers",
    archetype: "L'artisan, le guérisseur, celui qui trie le bon grain",
    besoinFondamental: "Se sentir utile, contribuer par un travail juste, mettre de l'ordre dans le réel et en soi.",
    dynamiquePsychologique:
      "Après l'expansion du Lion, la Vierge revient à l'humilité du détail. Elle examine ce qui a été créé et demande : « qu'est-ce qui peut être amélioré, purifié, rendu vraiment utile ? » Elle apprend le discernement, la mesure, le service. C'est la fin du premier cycle : l'individu, avant de se tourner vers l'autre, fait le ménage en lui.",
    potentiel:
      "Précision, sens du service, capacité d'analyse, humilité active, art de réparer et de prendre soin des détails, éthique du travail bien fait.",
    ombre:
      "La critique : voir partout ce qui cloche, en soi surtout ; l'anxiété du contrôle, le perfectionnisme qui empêche d'agir, le dévouement qui s'oublie jusqu'à l'épuisement.",
    exces: "Perfectionnisme, hypocondrie, tatillonnage, servitude, rumination.",
    manque: "Négligence, incapacité à s'organiser, à terminer, à voir les conséquences pratiques.",
    niveaux: {
      instinctif: "Réflexe de tri, de nettoyage, de mise à distance du dangereux.",
      psychologique: "Construction du sens critique et du rapport au corps et à la santé.",
      conscient: "Servir sans se nier ; viser le mieux sans exiger le parfait.",
      transpersonnel: "Devenir un artisan du vivant : soigner, transmettre un savoir-faire, réparer le monde à sa mesure.",
    },
    mythologie:
      "On peut l'associer aux figures des jeunes déesses liées aux moissons et aux mystères, et à l'épreuve du tri : séparer en une nuit un immense tas de graines mélangées, image du discernement patient.",
    conteSymbolique:
      "Une couturière refait dix fois la même robe, jamais contente. Une enfant lui demande de réparer sa poupée déchirée. En trois points de couture maladroits mais donnés de bon cœur, la couturière retrouve à quoi sert son aiguille.",
    questionInitiatique: "Mon exigence sert-elle la vie, ou me protège-t-elle de la peur d'être insuffisant ?",
    exercice:
      "Choisissez une tâche et accomplissez-la volontairement « à 80 % » : correcte, pas parfaite. Observez l'inconfort, puis ce qui se libère comme temps et énergie.",
    etapeHeros: "6. Les épreuves et l'apprentissage : acquérir la maîtrise par la répétition.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché de l'Ermite (retrait, discernement) ou de la Justice (mesure, ajustement). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "La séparation et la purification : distinguer le subtil de l'épais.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Cause et effet appliqué au détail : de petites corrections changent le résultat.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Fonction pensée dans son versant analytique et différenciateur.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'balance',
    ordre: 7,
    nom: 'Balance',
    glyphe: '♎',
    dates: '23 septembre – 22 octobre',
    element: 'air',
    mode: 'cardinal',
    polarite: 'diurne',
    maitre: 'Vénus',
    motCle: "Je rencontre l'autre",
    archetype: "Le diplomate, l'artiste des accords, le miroir",
    besoinFondamental: "Être en relation, éprouver l'harmonie, se découvrir à travers le regard et la différence d'autrui.",
    dynamiquePsychologique:
      "La Balance ouvre la seconde moitié du zodiaque : celle de l'autre. Après avoir construit un moi (Bélier à Vierge), l'être découvre le tu. Il apprend l'écoute, le compromis, la justice, l'esthétique de la relation. Sa question n'est plus « qui suis-je ? » mais « qui suis-je avec toi ? ».",
    potentiel:
      "Sens de la relation, diplomatie, goût de la justice et de la beauté, capacité à créer du lien et de la paix, écoute véritable.",
    ombre:
      "La dépendance au regard : ne plus savoir ce que l'on veut, dire oui pour être aimé, éviter tout conflit jusqu'à la trahison de soi, rester indécis pour ne mécontenter personne.",
    exces: "Complaisance, indécision, fuite du conflit, séduction constante, esthétisme superficiel.",
    manque: "Brutalité relationnelle, incapacité au compromis, à percevoir l'autre comme un égal.",
    niveaux: {
      instinctif: "Ajustement mimétique au groupe, recherche de l'approbation.",
      psychologique: "Construction de la capacité de relation, apprentissage de l'altérité.",
      conscient: "Être en lien sans se perdre ; poser des limites justes, dire non par respect de soi et de l'autre.",
      transpersonnel: "Devenir un artisan de paix : tenir la juste mesure entre des forces opposées.",
    },
    mythologie:
      "On peut l'associer aux figures de la justice qui pèsent les âmes ou les actes, et aux récits d'union où deux êtres, en se liant, deviennent chacun plus grand qu'ils n'étaient seuls.",
    conteSymbolique:
      "Un juge si soucieux d'être juste qu'il ne rend jamais de verdict. Le village dépérit dans l'attente. Le jour où il tranche enfin, imparfaitement, la vie reprend : la justice n'était pas la balance immobile, mais le geste de trancher.",
    questionInitiatique: "Où est-ce que je m'efface au nom de l'harmonie, et à qui cela profite-t-il vraiment ?",
    exercice:
      "Dans une conversation cette semaine, exprimez calmement un désaccord que vous auriez tu. Observez si la relation se rompt réellement, ou si elle se précise.",
    etapeHeros: "7. La rencontre décisive : l'allié, l'amour, l'adversaire qui révèle.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché de la Justice (équilibre, décision juste) ou des Amoureux (l'union, le choix relationnel). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "La conjonction : l'union mesurée de deux principes opposés.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Polarité : les contraires sont les deux extrémités d'une même chose.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Rencontre de l'anima / animus : la part contrasexuée projetée sur le partenaire.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'scorpion',
    ordre: 8,
    nom: 'Scorpion',
    glyphe: '♏',
    dates: '23 octobre – 21 novembre',
    element: 'eau',
    mode: 'fixe',
    polarite: 'nocturne',
    maitre: 'Pluton (traditionnellement Mars)',
    motCle: 'Je traverse et je transmute',
    archetype: "L'alchimiste, le fossoyeur, le phénix",
    besoinFondamental: "Aller au fond des choses, éprouver l'intensité, mourir à ce qui doit mourir pour renaître transformé.",
    dynamiquePsychologique:
      "Après la rencontre policée de la Balance, le Scorpion plonge sous la surface de la relation : les désirs cachés, les pouvoirs, les peurs, ce que l'on partage vraiment quand on se lie. Il ne supporte pas le mensonge tiède. Il descend dans l'ombre — la sienne, celle du lien — pour en extraire une vérité et une force nouvelle.",
    potentiel:
      "Profondeur, lucidité, courage face à la crise, capacité de régénération, présence intense, aptitude à accompagner d'autres dans leurs passages difficiles.",
    ombre:
      "Le pouvoir et la destruction : manipuler, contrôler, punir, retenir par le secret ou la fascination ; s'enfermer dans la rancune ; se détruire pour ne pas dépendre.",
    exces: "Jalousie, vengeance, obsession, manipulation, autodestruction.",
    manque: "Superficialité anxieuse, peur de l'intime, incapacité à traverser les crises et à lâcher le passé.",
    niveaux: {
      instinctif: "Pulsions de vie et de mort, sexualité, réflexe de survie par élimination.",
      psychologique: "Confrontation à l'ombre, aux deuils, aux jeux de pouvoir dans les liens.",
      conscient: "Utiliser l'intensité pour transformer plutôt que pour détruire ; pardonner sans nier.",
      transpersonnel: "Devenir passeur : aider les autres à traverser leurs seuils, leurs pertes, leurs renaissances.",
    },
    mythologie:
      "On peut l'associer aux récits de descente aux enfers, où un être doit tout abandonner à chaque porte pour atteindre le fond, y mourir, puis remonter changé ; et aux figures du monde souterrain qui règnent sur ce qui est caché.",
    conteSymbolique:
      "Une femme jette au feu, une à une, toutes les lettres d'un amour fini. À la dernière, elle pleure enfin vraiment. Des cendres, le lendemain, elle sème des graines dans un pot. Quelque chose de vert finit par sortir.",
    questionInitiatique: "Qu'est-ce qui, en moi, refuse de mourir alors que sa saison est passée ?",
    exercice:
      "Identifiez une chose (objet, habitude, croyance, lien symbolique) qui appartient à un passé révolu. Accomplissez un petit rituel de fin la concernant. Notez ce qui se libère.",
    etapeHeros: "8. La descente et l'épreuve suprême : la confrontation à l'ombre et à la mort symbolique.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché de la Mort (transformation, fin de cycle) ou du Diable (désir, emprise). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "Le nigredo : la putréfaction, l'œuvre au noir où la forme ancienne se décompose.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Genre et de régénération : toute création nouvelle passe par une gestation obscure.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Travail sur l'Ombre : reconnaître et intégrer ce qui a été refoulé.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'sagittaire',
    ordre: 9,
    nom: 'Sagittaire',
    glyphe: '♐',
    dates: '22 novembre – 21 décembre',
    element: 'feu',
    mode: 'mutable',
    polarite: 'diurne',
    maitre: 'Jupiter',
    motCle: "Je cherche le sens",
    archetype: "L'explorateur, le pèlerin, le maître de sagesse",
    besoinFondamental: "Donner un sens à l'expérience, relier les faits à une vision plus large, croître et se dépasser.",
    dynamiquePsychologique:
      "Après la traversée du Scorpion, le Sagittaire remonte à la lumière avec une question : « qu'est-ce que tout cela veut dire ? » Il cherche une vision, une philosophie, une foi. Il voyage — dans l'espace, dans les livres, dans les cultures — pour élargir son horizon et relier ce qu'il a vécu à quelque chose de plus grand.",
    potentiel:
      "Enthousiasme, sens du sens, générosité de vision, goût de l'aventure et de l'apprentissage, capacité à inspirer confiance en l'avenir, honnêteté directe.",
    ombre:
      "Le dogmatisme : croire détenir la vérité, prêcher, généraliser, promettre plus qu'on ne tient, fuir en avant pour ne pas affronter le concret ou l'intime.",
    exces: "Prosélytisme, exagération, imprudence, fuite dans les projets et les voyages, moralisme.",
    manque: "Absence de sens, cynisme, étroitesse d'esprit, peur de l'inconnu et de l'étranger.",
    niveaux: {
      instinctif: "Besoin d'espace, de mouvement, de territoire élargi.",
      psychologique: "Construction d'une vision du monde, d'un système de valeurs, d'un rapport au futur.",
      conscient: "Chercher le sens sans l'imposer ; incarner sa foi dans des actes concrets.",
      transpersonnel: "Devenir passeur de sens : enseigner, relier les cultures, ouvrir des horizons.",
    },
    mythologie:
      "On peut l'associer au centaure sage, mi-animal mi-humain, qui éduque les héros ; et aux figures de la fortune et de l'abondance qui élargissent ce qu'elles touchent.",
    conteSymbolique:
      "Un archer tire toujours plus loin, jamais content de sa portée. Un vieil homme lui dit : « Vise le mur, à trois pas. » L'archer, vexé, obéit — et découvre que même à trois pas, il ne touchait pas le centre.",
    questionInitiatique: "Quelle vérité est-ce que je proclame pour ne pas avoir à la vivre en détail ?",
    exercice:
      "Repérez une conviction que vous défendez souvent. Cette semaine, incarnez-la dans un seul acte concret et modeste, ici, aujourd'hui, plutôt que d'en parler.",
    etapeHeros: "9. La récompense : recevoir la vision, le savoir, l'élixir qui donne sens à l'épreuve.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché de la Tempérance (circulation, alchimie du sens) ou de la Roue de Fortune (cycles, expansion). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "La citrinitas naissante : la lumière jaune qui annonce l'aube après l'œuvre au blanc.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Correspondance : « ce qui est en haut est comme ce qui est en bas » ; relier les plans.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Fonction intuition tournée vers le sens et les possibles d'ensemble.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'capricorne',
    ordre: 10,
    nom: 'Capricorne',
    glyphe: '♑',
    dates: '22 décembre – 19 janvier',
    element: 'terre',
    mode: 'cardinal',
    polarite: 'nocturne',
    maitre: 'Saturne',
    motCle: "Je construis et j'assume",
    archetype: "Le bâtisseur, le vieux sage, celui qui gravit la montagne",
    besoinFondamental: "Accomplir quelque chose de durable, prendre sa place et sa responsabilité dans le monde, éprouver sa maîtrise.",
    dynamiquePsychologique:
      "Le Capricorne transforme la vision du Sagittaire en structure. Il demande : « qu'est-ce que je peux bâtir qui tienne, et dont je réponds ? » Il accepte la contrainte, le temps long, la solitude du sommet. Il apprend l'autorité, la patience, la responsabilité. C'est la maturité qui assume.",
    potentiel:
      "Rigueur, sens des responsabilités, endurance, autorité juste, capacité à structurer et à durer, sobriété, fiabilité dans la durée.",
    ombre:
      "Le dessèchement : réduire la vie au devoir et au résultat, se couper de ses émotions, mépriser la faiblesse, chercher le statut pour combler un manque de reconnaissance ancien.",
    exces: "Ambition froide, dureté, pessimisme, contrôle, workaholisme.",
    manque: "Difficulté à s'engager dans la durée, à assumer une autorité, à se structurer, à finir.",
    niveaux: {
      instinctif: "Réflexe de hiérarchie, de survie par la prudence et l'économie.",
      psychologique: "Construction de la responsabilité, du rapport à l'autorité et au père.",
      conscient: "Exercer l'autorité au service du collectif ; réussir sans se durcir.",
      transpersonnel: "Devenir un pilier : porter une structure qui abrite et fait grandir les autres.",
    },
    mythologie:
      "On peut l'associer aux figures du temps et de la limite, ainsi qu'à la chèvre-poisson, être hybride qui unit la montagne et l'abîme : celui qui gravit sait aussi d'où il vient.",
    conteSymbolique:
      "Un homme grimpe une montagne toute sa vie pour planter un drapeau au sommet. Arrivé en haut, épuisé, il voit d'autres sommets, et en bas, la vallée où vivent les siens. Il redescend, le drapeau à la main, pour le planter au milieu du village.",
    questionInitiatique: "À qui, ou à quoi, est-ce que je cherche encore à prouver que je vaux quelque chose ?",
    exercice:
      "Identifiez une responsabilité que vous portez seul par principe. Déléguez-en une part cette semaine, ou demandez de l'aide. Observez la résistance intérieure.",
    etapeHeros: "10. Le chemin du retour : assumer ce qui a été trouvé, en répondre devant le monde.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché du Diable (matière, contrainte, ambition) ou du Monde (accomplissement). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "Le plomb de Saturne, matière lourde à transmuter ; l'épreuve du temps.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Cause et effet dans le temps long : rien de durable sans patience.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Archétype du Père et confrontation au Senex (le vieux, la loi, la limite).", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'verseau',
    ordre: 11,
    nom: 'Verseau',
    glyphe: '♒',
    dates: '20 janvier – 18 février',
    element: 'air',
    mode: 'fixe',
    polarite: 'diurne',
    maitre: 'Uranus (traditionnellement Saturne)',
    motCle: "Je me libère et je relie autrement",
    archetype: "Le réformateur, l'ami, celui qui vient du futur",
    besoinFondamental: "Être libre d'être différent, appartenir à une communauté d'idées choisie, contribuer à un progrès collectif.",
    dynamiquePsychologique:
      "Après la structure du Capricorne, le Verseau prend du recul sur l'ordre établi et demande : « et si c'était autrement ? » Il se détache des rôles pour penser en termes de systèmes, de réseaux, d'humanité. Il cultive son originalité, mais la met au service d'un groupe et d'une vision d'avenir.",
    potentiel:
      "Indépendance d'esprit, sens de l'égalité et de l'amitié, créativité conceptuelle, capacité à fédérer autour d'une idée, altruisme lucide.",
    ombre:
      "Le détachement froid : se croire au-dessus, rompre pour ne pas dépendre, préférer l'humanité abstraite aux personnes réelles, être rebelle par réflexe plutôt que par choix.",
    exces: "Provocation, dogmatisme du non-conformisme, froideur, dispersion militante.",
    manque: "Conformisme anxieux, peur de se distinguer, difficulté à penser hors du cadre, isolement.",
    niveaux: {
      instinctif: "Réflexe grégaire retourné : besoin de se démarquer du troupeau.",
      psychologique: "Construction de l'individualité assumée au sein d'un collectif.",
      conscient: "Être singulier et relié ; servir un idéal sans mépriser les personnes.",
      transpersonnel: "Devenir un éclaireur : porter une intuition du futur au bénéfice de la communauté.",
    },
    mythologie:
      "On peut l'associer au voleur de feu qui dérobe aux dieux une puissance pour la donner aux humains, et en paie le prix ; et au porteur d'eau qui verse à tous, sans distinction, le contenu de sa cruche.",
    conteSymbolique:
      "Un inventeur construit une lampe qui n'a besoin d'aucune huile. Les marchands d'huile le chassent de la ville. Il s'installe sur la colline et allume sa lampe chaque nuit. Peu à peu, des maisons s'éclairent en bas, une à une.",
    questionInitiatique: "Ma différence est-elle un chemin vers les autres, ou un mur pour ne pas les laisser m'atteindre ?",
    exercice:
      "Repérez une règle sociale que vous suivez sans y croire. Choisissez consciemment : la garder pour une raison assumée, ou la transgresser ouvertement et sans agressivité.",
    etapeHeros: "11. La résurrection : renaître avec une conscience élargie, tournée vers le collectif.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché de l'Étoile (espérance, don, futur) ou du Pendu (renversement du point de vue). Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "L'éclair qui fend le vase : la rupture soudaine qui libère une énergie nouvelle.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Vibration à haute fréquence : l'intuition qui devance le présent.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Rapport à l'inconscient collectif et aux archétypes partagés par toute l'humanité.", tag: 'rapprochement-moderne' },
    ],
  },
  {
    id: 'poissons',
    ordre: 12,
    nom: 'Poissons',
    glyphe: '♓',
    dates: '19 février – 20 mars',
    element: 'eau',
    mode: 'mutable',
    polarite: 'nocturne',
    maitre: 'Neptune (traditionnellement Jupiter)',
    motCle: "Je me dissous et je relie tout",
    archetype: "Le mystique, l'artiste, celui qui rend au tout",
    besoinFondamental: "Éprouver l'unité, se relier à plus grand que soi, dissoudre les frontières du moi, compatir sans limite.",
    dynamiquePsychologique:
      "Dernier signe, les Poissons défont ce que le Bélier avait séparé. L'être accepte de ne plus être seulement lui : il se relie au collectif, à l'invisible, au rêve, à la souffrance du monde. C'est le moment du lâcher-prise, du pardon, de la compassion — et aussi le risque de se perdre dans le brouillard. Puis le cycle recommence : un nouveau Bélier surgira de cette mer.",
    potentiel:
      "Compassion, imagination créatrice, foi, capacité de pardon et de consolation, sensibilité au sacré et à la beauté, don de soi.",
    ombre:
      "La fuite : se noyer dans le rêve, l'addiction, le sacrifice inutile, le rôle de victime ou de sauveur ; refuser les limites du réel ; se dissoudre pour ne pas avoir à choisir.",
    exces: "Confusion, dépendances, illusions, martyre, passivité, fuite du monde.",
    manque: "Sécheresse spirituelle, incapacité à lâcher prise, à imaginer, à pardonner, à s'abandonner.",
    niveaux: {
      instinctif: "Retour au sein, désir de fusion, sommeil, dissolution des tensions.",
      psychologique: "Rapport à l'imaginaire, au deuil, au sacrifice, aux limites du moi.",
      conscient: "Se relier au tout sans se perdre ; servir et compatir en gardant un centre.",
      transpersonnel: "Devenir un canal : laisser passer à travers soi la compassion, l'art, le sacré.",
    },
    mythologie:
      "On peut l'associer aux figures divines qui acceptent la souffrance ou le sacrifice pour relier les mondes, et aux récits de déluge où tout est dissous avant qu'un monde nouveau ne recommence.",
    conteSymbolique:
      "Une goutte de pluie a peur de tomber dans la mer : elle croit qu'elle va disparaître. Elle tombe. Elle ne disparaît pas — elle devient la mer, et bientôt, portée par le soleil, elle remonte former un nuage, et une nouvelle pluie.",
    questionInitiatique: "Où est-ce que je confonds me relier au tout et me fuir moi-même ?",
    exercice:
      "Accordez-vous vingt minutes sans écran, sans but, sans musique : rêverie pure. Puis notez une image, une phrase ou une émotion qui a émergé du silence.",
    etapeHeros: "12. Le retour avec l'élixir : offrir au collectif ce que le voyage a transformé, et se préparer à un nouveau départ.",
    correspondances: [
      { domaine: 'Tarot', contenu: "Rapproché de la Lune (imaginaire, illusions, inconscient) ou du Monde qui se referme et se rouvre. Selon les écoles.", tag: 'rapprochement-moderne' },
      { domaine: 'Alchimie', contenu: "La dissolution finale et le retour à l'eau primordiale, matrice de l'œuvre suivante.", tag: 'interpretation-symbolique' },
      { domaine: 'Hermétisme', contenu: "Principe de Mentalisme à son terme : tout est relié dans un même champ ; les séparations sont des points de vue.", tag: 'interpretation-symbolique' },
      { domaine: 'Jung', contenu: "Approche du Soi comme totalité, au-delà des oppositions ; expérience du numineux.", tag: 'rapprochement-moderne' },
    ],
  },
]

export const SIGN_BY_ID = Object.fromEntries(SIGNS.map((s) => [s.id, s])) as Record<string, Sign>
export const SIGN_BY_NAME = Object.fromEntries(SIGNS.map((s) => [s.nom, s])) as Record<string, Sign>
