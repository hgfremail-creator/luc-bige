# L'École du Symbolisme Astrologique

**« Comprendre le ciel comme un langage symbolique »**

Une école initiatique numérique : un parcours en 15 niveaux qui mène de la découverte
du langage symbolique jusqu'à la lecture d'un thème natal comme récit personnel.

Contenu **original et pédagogique**, inspiré de grands thèmes publics de l'astrologie
symbolique et archétypale (astrologie comme langage, signes comme étapes de la
conscience, planètes comme fonctions, thème comme mythe personnel, liens avec Jung, le
Tarot, l'alchimie et l'hermétisme). Aucun texte protégé n'est reproduit ; l'application
ne représente l'enseignement d'aucun auteur en particulier.

L'astrologie y est étudiée comme **langage symbolique et tradition culturelle**, jamais
comme science démontrée ni comme moyen de prédiction. Distinction systématique entre
**donnée astronomique calculée** et **interprétation symbolique**.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # 36 tests (Vitest)
npm run build    # build de production
```

## Stack

- **React 19 + TypeScript**, Vite 8
- **Tailwind CSS v4** (design « manuscrit nocturne »), **Framer Motion**
- **astronomy-engine** pour les calculs (positions écliptiques tropicales géocentriques,
  Ascendant / MC, maisons en signes entiers)
- **Zustand** + persistance `localStorage` (aucun compte, aucun serveur, aucun envoi)
- Visualisations en **SVG natif** (roue du zodiaque, carte du parcours)

## Architecture

```
src/
  content/        Données typées, séparées du code (facilement extensibles)
    signs, planets, houses, aspects, elements, modes,
    myths, tarot, jung, alchemy, hermetism, hero,
    symbolic (niveau 1), curriculum (15 niveaux), quizzes
  lib/
    astro/        ephemeris · aspects · interpretation (10 couches) · chart · cities
    store.ts      progression, XP, badges, journal, thèmes, favoris
    maitre.ts     « Maître symbolique » : réponses pédagogiques hors-ligne
  components/     ui · AppShell · ZodiacWheel · FacetList
  pages/          Home · Onboarding · Dashboard · ParcoursMap · LevelPage ·
                  Library · DetailPage · ZodiacPage · NatalChart · Journal ·
                  QuizPage · ComparePage · MaitrePage · InitiationPage ·
                  Profile · Sources · About
```

### Modèle de contenu

Chaque concept suit une structure de **13 facettes** (`Facets` dans `content/types.ts`) :
définition, symbole, image archétypale, mythologie, psychologie, ombre, potentiel
évolutif, question de réflexion, exercice, et parallèles Tarot / alchimie / hermétisme /
jungien. Chaque enseignement porte un **badge de source** : traditionnel, interprétation
symbolique, rapprochement moderne, hypothèse, contenu pédagogique.

## État d'avancement

| Phase | Contenu | État |
|------|---------|------|
| 1 | Architecture, design system, navigation, accueil, carte du parcours | ✅ |
| 2 | 4 éléments · 3 modes · 12 signes (riches) · cycle zodiacal | ✅ |
| 3 | 10 planètes + Chiron, Nœud Nord, Lune Noire | ✅ |
| 4 | 12 maisons + axes | ✅ |
| 5 | 6 aspects (relations dynamiques, jamais « bon/mauvais ») | ✅ |
| 6 | Thème natal : calcul + lecture en 10 couches + dominante pondérée | ✅ |
| 7 | Mythologie : 20 figures | ✅ |
| 8 | Jung (10) · Tarot (22 arcanes) · Alchimie (10) · Hermétisme (7) | ✅ |
| 9 | Parcours pédagogique (15 niveaux) · quiz · exercices · apprenti astrologue | ✅ |
| 10 | Journal symbolique · progression · badges · 10 niveaux de maîtrise | ✅ |
| 11 | « Maître symbolique » (pédagogique, hors-ligne) · mode comparatif | ✅ |
| 12 | Chemin du héros (11 étapes + 12 travaux d'Hercule) · initiation quotidienne · responsive · tests | ✅ |

### Pistes d'extension

- Système de maisons Placidus/Koch en option (actuellement : signes entiers)
- Transits et progressions
- Backend optionnel (l'architecture data-layer le permet ; PostgreSQL-compatible)
- Enrichissement continu du contenu via les modules `src/content/*`
