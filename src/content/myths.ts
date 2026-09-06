import type { Myth } from './types'

/** Bibliothèque mythologique. Récits résumés avec nos propres mots, lecture symbolique. */
export const MYTHS: Myth[] = [
  {
    id: 'zeus', nom: 'Zeus', nomRomain: 'Jupiter', domaine: 'Roi des dieux, ciel, ordre, hospitalité, foudre',
    histoire:
      "Dernier-né de Cronos, sauvé par sa mère d'être dévoré, Zeus grandit caché, revient libérer ses frères et sœurs, renverse les Titans et instaure un nouvel ordre. Roi souvent contesté, séducteur infatigable, il garantit malgré tout le droit, le serment et l'accueil de l'étranger.",
    symbolisme: "L'autorité qui organise le chaos ; l'expansion ; le principe qui relie le multiple sous une loi commune.",
    archetype: "Le Roi / le Souverain",
    planete: 'jupiter', signe: 'sagittaire',
    themePsychologique: "Rapport au pouvoir légitime, à la confiance en la vie, à la tentation de l'abus quand on est au sommet.",
    enseignementInitiatique: "Grandir, c'est aussi apprendre à se limiter soi-même : une autorité qui ne se règle pas devient tyrannie.",
    tags: ['pouvoir', 'sens', 'expansion', 'ordre'],
  },
  {
    id: 'hera', nom: 'Héra', nomRomain: 'Junon', domaine: 'Mariage, souveraineté conjugale, fidélité, jalousie',
    histoire:
      "Épouse et sœur de Zeus, reine de l'Olympe, Héra veille sur le lien conjugal et la légitimité. Blessée par les infidélités répétées de son époux, elle poursuit ses rivales et leurs enfants d'une colère tenace.",
    symbolisme: "La dignité du lien engagé ; la puissance de l'alliance ; la souffrance de la loyauté trahie.",
    archetype: "L'Épouse souveraine",
    signe: 'balance',
    themePsychologique: "Rapport à l'engagement, à la fidélité, à la jalousie ; identité fondée sur le statut relationnel.",
    enseignementInitiatique: "Quand toute la valeur de soi repose sur un lien, la trahison de ce lien devient une blessure d'identité. Il s'agit de retrouver une souveraineté qui ne dépende pas de l'autre.",
    tags: ['lien', 'fidélité', 'jalousie', 'souveraineté'],
  },
  {
    id: 'athena', nom: 'Athéna', nomRomain: 'Minerve', domaine: 'Sagesse stratégique, artisanat, cité, guerre juste',
    histoire:
      "Née tout armée du crâne de Zeus, sans mère, Athéna incarne l'intelligence claire. Elle protège les héros qui réfléchissent, invente le métier à tisser et l'olivier, arbitre les cités.",
    symbolisme: "La pensée qui guide l'action ; la stratégie ; la maîtrise au service de la collectivité.",
    archetype: "La Conseillère / la Stratège",
    planete: 'mercure',
    themePsychologique: "Rapport à la raison comme protection ; force du mental, difficulté parfois à descendre dans le corps et l'émotion.",
    enseignementInitiatique: "L'intelligence est une arme noble tant qu'elle sert la cité ; coupée du sensible, elle devient froide.",
    tags: ['sagesse', 'stratégie', 'mental', 'artisanat'],
  },
  {
    id: 'aphrodite', nom: 'Aphrodite', nomRomain: 'Vénus', domaine: 'Amour, désir, beauté, séduction, liens',
    histoire:
      "Née de l'écume de la mer, Aphrodite est la force irrésistible de l'attraction. Elle unit et divise, provoque des guerres et des réconciliations, rappelle aux dieux comme aux hommes qu'ils ne se possèdent pas.",
    symbolisme: "L'attraction qui relie les êtres ; la valeur ; le plaisir comme voie de connaissance.",
    archetype: "L'Amante",
    planete: 'venus', signe: 'taureau',
    themePsychologique: "Rapport au désir, au plaisir, à l'estime de soi par le lien ; risque de dépendance au regard.",
    enseignementInitiatique: "Le désir n'est pas à nier ni à subir : c'est une énergie de reliance à orienter en conscience.",
    tags: ['amour', 'désir', 'beauté', 'valeur'],
  },
  {
    id: 'ares', nom: 'Arès', nomRomain: 'Mars', domaine: 'Guerre, fureur, courage brut, combat',
    histoire:
      "Fils de Zeus et Héra, Arès est la guerre vécue de l'intérieur : le tumulte, l'ivresse du combat, la violence sans calcul. Mal-aimé des autres dieux, il est pourtant nécessaire quand il faut se défendre.",
    symbolisme: "L'énergie de séparation et d'affirmation ; le courage ; la colère, utile ou destructrice.",
    archetype: "Le Guerrier",
    planete: 'mars', signe: 'belier',
    themePsychologique: "Rapport à la force, à la colère, à l'affirmation de soi ; impulsivité ou inhibition.",
    enseignementInitiatique: "La force brute doit être éduquée : le guerrier mûr choisit ses combats et sait déposer les armes.",
    tags: ['action', 'colère', 'courage', 'affirmation'],
  },
  {
    id: 'hermes', nom: 'Hermès', nomRomain: 'Mercure', domaine: 'Voyages, commerce, messages, ruse, passages',
    histoire:
      "À peine né, Hermès invente la lyre, vole les troupeaux d'Apollon et s'en tire par la parole. Messager des dieux, il est le seul à circuler librement entre l'Olympe, la terre et le monde des morts, qu'il guide comme psychopompe.",
    symbolisme: "La circulation ; le lien entre les mondes ; l'intelligence rapide, parfois roublarde.",
    archetype: "Le Messager / le Trickster",
    planete: 'mercure', signe: 'gemeaux',
    themePsychologique: "Rapport au langage, à l'adaptation, à la vérité arrangeante ; agilité mentale.",
    enseignementInitiatique: "Le passeur ne s'installe nulle part : sa liberté est aussi sa solitude. La parole peut relier ou manipuler ; tout dépend de l'intention.",
    tags: ['communication', 'passage', 'ruse', 'lien'],
  },
  {
    id: 'apollon', nom: 'Apollon', domaine: 'Lumière, musique, oracle, médecine, harmonie',
    histoire:
      "Dieu solaire, Apollon tue le serpent Python et fonde l'oracle de Delphes, où l'on lit « Connais-toi toi-même ». Maître des arts et de la mesure, il châtie durement la démesure (l'hybris) des mortels.",
    symbolisme: "La conscience claire ; la forme juste ; la connaissance de soi ; le danger de la perfection froide.",
    archetype: "L'Artiste solaire / le Devin",
    planete: 'soleil',
    themePsychologique: "Rapport à la clarté, à l'excellence, à l'image parfaite ; difficulté avec le désordre et l'ombre.",
    enseignementInitiatique: "Se connaître soi-même inclut de reconnaître sa part obscure, celle qu'Apollon seul ne veut pas voir.",
    tags: ['lumière', 'connaissance', 'mesure', 'art'],
  },
  {
    id: 'artemis', nom: 'Artémis', nomRomain: 'Diane', domaine: 'Nature sauvage, chasse, lune, autonomie, seuils de la vie',
    histoire:
      "Sœur jumelle d'Apollon, Artémis court les forêts avec ses nymphes, refuse le mariage, protège les animaux sauvages et les jeunes filles, mais punit qui viole son intimité.",
    symbolisme: "L'intégrité farouche ; l'appartenance à soi ; la vie instinctive préservée du regard.",
    archetype: "La Vierge sauvage",
    planete: 'lune',
    themePsychologique: "Besoin d'espace, de solitude, de ne pas être possédé ; méfiance envers l'intrusion.",
    enseignementInitiatique: "Il existe une part de soi qui ne doit se soumettre à personne. La protéger n'est pas fuir le lien, c'est y venir libre.",
    tags: ['autonomie', 'nature', 'lune', 'intégrité'],
  },
  {
    id: 'demeter', nom: 'Déméter', nomRomain: 'Cérès', domaine: 'Moissons, fécondité de la terre, maternité, cycle des saisons',
    histoire:
      "Quand sa fille Perséphone est enlevée par Hadès, Déméter, folle de douleur, laisse la terre devenir stérile. Un compromis est trouvé : Perséphone passera une partie de l'année sous terre, une partie à la lumière. Ainsi naissent les saisons.",
    symbolisme: "L'amour nourricier ; le deuil ; l'acceptation que ce qu'on aime nous échappe en partie.",
    archetype: "La Mère",
    planete: 'lune', signe: 'cancer',
    themePsychologique: "Rapport à la maternité, au lien fusionnel, à la difficulté de laisser partir.",
    enseignementInitiatique: "Aimer vraiment, c'est consentir au cycle : tenir et lâcher, chaque année, comme la terre.",
    tags: ['maternité', 'deuil', 'cycle', 'nourriture'],
  },
  {
    id: 'persephone', nom: 'Perséphone', nomRomain: 'Proserpine', domaine: 'Passage, monde souterrain, transformation, double royauté',
    histoire:
      "Jeune fille cueillant des fleurs, Perséphone est entraînée dans le monde d'en bas. Elle y goûte quelques grains de grenade, ce qui la lie pour toujours au royaume des morts. Elle devient reine des Enfers autant que fille du printemps.",
    symbolisme: "L'initiation par l'enlèvement ; la part de soi qui connaît l'ombre ; la maturité qui vient de la descente.",
    archetype: "L'Initiée",
    signe: 'scorpion',
    themePsychologique: "Passage de l'innocence à la connaissance ; intégration d'une expérience qui a fait basculer la vie.",
    enseignementInitiatique: "On ne revient jamais tout à fait d'une descente. Mais on peut en revenir souverain de ce qu'on a traversé.",
    tags: ['transformation', 'ombre', 'initiation', 'passage'],
  },
  {
    id: 'hades', nom: 'Hadès', nomRomain: 'Pluton', domaine: 'Monde souterrain, invisible, richesses cachées, mort',
    histoire:
      "Frère de Zeus et Poséidon, Hadès reçoit en partage le monde d'en bas. Rarement méchant mais inflexible, il règne sur ce qui est caché, enfoui, terminé. Son casque rend invisible.",
    symbolisme: "L'inconscient ; ce qui travaille en nous hors de la vue ; la valeur de ce qui est enfoui.",
    archetype: "Le Maître de l'invisible",
    planete: 'pluton',
    themePsychologique: "Rapport à ce qu'on ne veut pas voir, aux deuils, aux ressources profondes non exploitées.",
    enseignementInitiatique: "Ce que l'on refuse de regarder gouverne à notre place. Descendre volontairement, c'est reprendre la main.",
    tags: ['inconscient', 'mort', 'invisible', 'profondeur'],
  },
  {
    id: 'poseidon', nom: 'Poséidon', nomRomain: 'Neptune', domaine: 'Mer, séismes, chevaux, forces mouvantes',
    histoire:
      "Maître des océans, Poséidon est puissant et imprévisible : il calme ou déchaîne les flots, fait trembler la terre, poursuit longtemps ceux qui l'ont offensé, comme Ulysse.",
    symbolisme: "Les forces émotionnelles collectives ; l'inconscient océanique ; ce qui submerge quand on le nie.",
    archetype: "Le Souverain des profondeurs mouvantes",
    planete: 'neptune',
    themePsychologique: "Rapport aux émotions puissantes, aux ambiances collectives, au risque d'être débordé.",
    enseignementInitiatique: "On ne dompte pas l'océan. On apprend à naviguer : reconnaître les courants au lieu de lutter contre eux.",
    tags: ['émotion', 'inconscient', 'mer', 'collectif'],
  },
  {
    id: 'hephaistos', nom: 'Héphaïstos', nomRomain: 'Vulcain', domaine: 'Forge, feu créateur, artisanat, technique',
    histoire:
      "Rejeté par sa mère Héra à cause de sa laideur ou de sa boiterie, précipité de l'Olympe, Héphaïstos devient le forgeron des dieux. De sa forge sortent les armes, les bijoux, les automates. Sa disgrâce est devenue son génie.",
    symbolisme: "La création qui naît d'un manque ; le travail patient qui transmute une blessure en œuvre.",
    archetype: "L'Artisan blessé",
    themePsychologique: "Rapport au rejet, à la différence corporelle, à la valeur trouvée dans le faire.",
    enseignementInitiatique: "Ce qui nous a exclus peut devenir la source exacte de notre contribution unique.",
    tags: ['création', 'blessure', 'technique', 'transformation'],
  },
  {
    id: 'dionysos', nom: 'Dionysos', nomRomain: 'Bacchus', domaine: 'Vigne, ivresse, extase, théâtre, dissolution des limites',
    histoire:
      "Né deux fois (arraché au ventre de sa mère foudroyée, puis porté par la cuisse de Zeus), Dionysos apporte le vin, la transe et le théâtre. Il libère et il égare : ses fêtes peuvent guérir ou détruire.",
    symbolisme: "La force qui déborde le moi ; l'extase ; la nécessité et le danger de perdre le contrôle.",
    archetype: "Le Libérateur / le Dissolvant",
    planete: 'neptune', signe: 'poissons',
    themePsychologique: "Rapport au lâcher-prise, aux états modifiés, aux addictions, à la vie collective intense.",
    enseignementInitiatique: "Il y a une sagesse à sortir de soi ; il y a une folie à ne plus savoir y revenir. Le seuil se garde.",
    tags: ['extase', 'dissolution', 'renaissance', 'collectif'],
  },
  {
    id: 'hercule', nom: 'Héraclès', nomRomain: 'Hercule', domaine: 'Force, épreuves, expiation, héroïsme',
    histoire:
      "Fils de Zeus et d'une mortelle, doté d'une force surhumaine, Héraclès, dans un accès de folie envoyé par Héra, tue les siens. Pour expier, il accomplit douze travaux quasi impossibles. Au terme, il est admis parmi les dieux.",
    symbolisme: "Le parcours d'individuation par les épreuves ; la force mise au service d'une rédemption.",
    archetype: "Le Héros",
    themePsychologique: "Rapport à la faute, à la réparation, au dépassement de soi ; la puissance qui doit trouver un sens.",
    enseignementInitiatique: "Les douze travaux sont une carte : chaque épreuve développe une qualité d'âme que la précédente a rendue possible.",
    tags: ['héros', 'épreuves', 'transformation', 'travaux'],
  },
  {
    id: 'narcisse', nom: 'Narcisse', domaine: 'Image de soi, amour, reflet, isolement',
    histoire:
      "Beau jeune homme insensible à l'amour des autres, Narcisse tombe amoureux de son propre reflet dans l'eau et ne peut s'en détacher. Il dépérit sur la rive et se change en fleur.",
    symbolisme: "L'enfermement dans l'image ; l'amour qui ne peut pas circuler parce qu'il ne rencontre jamais un autre.",
    archetype: "Le Reflet",
    themePsychologique: "Rapport à l'image de soi, à la difficulté d'aimer vraiment un autre distinct de soi.",
    enseignementInitiatique: "Tant qu'on ne voit que son reflet, on ne rencontre personne — pas même soi.",
    tags: ['image', 'ombre', 'isolement', 'reflet'],
  },
  {
    id: 'icare', nom: 'Icare', domaine: 'Ascension, démesure, limites, chute',
    histoire:
      "Enfermé dans le Labyrinthe avec son père Dédale, Icare s'envole grâce à des ailes de plumes et de cire. Grisé par le vol, il ignore l'avertissement paternel, monte trop près du soleil : la cire fond, il tombe dans la mer.",
    symbolisme: "L'élan qui ignore les limites du réel ; l'enthousiasme sans ancrage ; la chute comme retour au sol.",
    archetype: "L'Envol imprudent",
    planete: 'uranus',
    themePsychologique: "Rapport à l'idéal, à l'euphorie des projets, au déni des contraintes matérielles.",
    enseignementInitiatique: "Voler est possible ; mais entre la mer (la fusion, Poséidon) et le soleil (l'inflation, Apollon), il existe une altitude juste.",
    tags: ['démesure', 'limites', 'élan', 'chute'],
  },
  {
    id: 'promethee', nom: 'Prométhée', domaine: 'Feu, savoir, transgression, don à l\'humanité',
    histoire:
      "Titan bienveillant envers les hommes, Prométhée dérobe le feu aux dieux pour le leur offrir, leur donnant technique et conscience. Zeus le condamne à être enchaîné, un aigle lui dévorant le foie chaque jour, qui repousse chaque nuit.",
    symbolisme: "La conscience arrachée aux dieux ; le progrès et son prix ; le bienfaiteur qui souffre pour avoir donné.",
    archetype: "Le Porteur de feu",
    planete: 'uranus', signe: 'verseau',
    themePsychologique: "Rapport à la révolte utile, au sacrifice pour une cause, au sentiment d'être puni d'avoir vu juste.",
    enseignementInitiatique: "Faire avancer le collectif se paie souvent d'un isolement. Le feu donné ne se reprend pas.",
    tags: ['savoir', 'transgression', 'don', 'progrès'],
  },
  {
    id: 'orphee', nom: 'Orphée', domaine: 'Musique, amour, deuil, descente et regard interdit',
    histoire:
      "Musicien capable de charmer les bêtes et les pierres, Orphée descend aux Enfers chercher son épouse Eurydice. On la lui rend, à condition qu'il ne se retourne pas avant la sortie. À un pas de la lumière, il se retourne : elle disparaît pour toujours.",
    symbolisme: "L'art qui traverse la mort ; la confiance ; le geste de doute qui défait ce qui était presque acquis.",
    archetype: "L'Artiste endeuillé",
    planete: 'neptune',
    themePsychologique: "Rapport au deuil, à la confiance, au besoin de vérifier qui fait perdre ce qu'on aime.",
    enseignementInitiatique: "Certaines remontées exigent de marcher sans se retourner : faire confiance au processus jusqu'au bout.",
    tags: ['art', 'deuil', 'confiance', 'descente'],
  },
  {
    id: 'pandore', nom: 'Pandore', domaine: 'Curiosité, don ambigu, ouverture de la boîte, espérance',
    histoire:
      "Première femme façonnée par les dieux, Pandore reçoit une jarre (ou boîte) avec l'interdiction de l'ouvrir. La curiosité l'emporte : tous les maux s'en échappent dans le monde. Au fond reste l'Espérance.",
    symbolisme: "Le passage de l'innocence à la condition humaine ; la connaissance qui coûte ; l'espérance comme dernier recours.",
    archetype: "Celle par qui la conscience entre dans le monde",
    themePsychologique: "Rapport à la curiosité, à la culpabilité, au sentiment d'avoir déclenché un processus irréversible.",
    enseignementInitiatique: "On ne referme pas la boîte. Mais tant que reste l'espérance, la conscience n'est pas une malédiction.",
    tags: ['curiosité', 'connaissance', 'espérance', 'seuil'],
  },
]

export const MYTH_BY_ID = Object.fromEntries(MYTHS.map((m) => [m.id, m])) as Record<string, Myth>
