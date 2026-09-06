export interface City {
  nom: string
  pays: string
  lat: number
  lon: number
  /** Décalage UTC standard en heures (hors heure d'été). Indicatif. */
  utc: number
}

/**
 * Liste indicative de villes pour faciliter la saisie.
 * Le décalage UTC est le décalage standard : l'utilisateur doit ajuster
 * si sa naissance a eu lieu pendant l'heure d'été.
 */
export const CITIES: City[] = [
  { nom: 'Paris', pays: 'France', lat: 48.8566, lon: 2.3522, utc: 1 },
  { nom: 'Marseille', pays: 'France', lat: 43.2965, lon: 5.3698, utc: 1 },
  { nom: 'Lyon', pays: 'France', lat: 45.764, lon: 4.8357, utc: 1 },
  { nom: 'Toulouse', pays: 'France', lat: 43.6047, lon: 1.4442, utc: 1 },
  { nom: 'Nice', pays: 'France', lat: 43.7102, lon: 7.262, utc: 1 },
  { nom: 'Nantes', pays: 'France', lat: 47.2184, lon: -1.5536, utc: 1 },
  { nom: 'Strasbourg', pays: 'France', lat: 48.5734, lon: 7.7521, utc: 1 },
  { nom: 'Bordeaux', pays: 'France', lat: 44.8378, lon: -0.5792, utc: 1 },
  { nom: 'Lille', pays: 'France', lat: 50.6292, lon: 3.0573, utc: 1 },
  { nom: 'Rennes', pays: 'France', lat: 48.1173, lon: -1.6778, utc: 1 },
  { nom: 'Montpellier', pays: 'France', lat: 43.6108, lon: 3.8767, utc: 1 },
  { nom: 'Grenoble', pays: 'France', lat: 45.1885, lon: 5.7245, utc: 1 },
  { nom: 'Dijon', pays: 'France', lat: 47.322, lon: 5.0415, utc: 1 },
  { nom: 'Brest', pays: 'France', lat: 48.3904, lon: -4.4861, utc: 1 },
  { nom: 'Bruxelles', pays: 'Belgique', lat: 50.8503, lon: 4.3517, utc: 1 },
  { nom: 'Genève', pays: 'Suisse', lat: 46.2044, lon: 6.1432, utc: 1 },
  { nom: 'Lausanne', pays: 'Suisse', lat: 46.5197, lon: 6.6323, utc: 1 },
  { nom: 'Luxembourg', pays: 'Luxembourg', lat: 49.6116, lon: 6.1319, utc: 1 },
  { nom: 'Montréal', pays: 'Canada', lat: 45.5019, lon: -73.5674, utc: -5 },
  { nom: 'Québec', pays: 'Canada', lat: 46.8139, lon: -71.208, utc: -5 },
  { nom: 'Dakar', pays: 'Sénégal', lat: 14.7167, lon: -17.4677, utc: 0 },
  { nom: 'Abidjan', pays: "Côte d'Ivoire", lat: 5.36, lon: -4.0083, utc: 0 },
  { nom: 'Casablanca', pays: 'Maroc', lat: 33.5731, lon: -7.5898, utc: 1 },
  { nom: 'Alger', pays: 'Algérie', lat: 36.7538, lon: 3.0588, utc: 1 },
  { nom: 'Tunis', pays: 'Tunisie', lat: 36.8065, lon: 10.1815, utc: 1 },
  { nom: 'Antananarivo', pays: 'Madagascar', lat: -18.8792, lon: 47.5079, utc: 3 },
  { nom: "Pointe-à-Pitre", pays: 'Guadeloupe', lat: 16.2415, lon: -61.5341, utc: -4 },
  { nom: 'Fort-de-France', pays: 'Martinique', lat: 14.6161, lon: -61.0588, utc: -4 },
  { nom: 'Saint-Denis', pays: 'La Réunion', lat: -20.8789, lon: 55.4481, utc: 4 },
  { nom: 'Cayenne', pays: 'Guyane', lat: 4.9227, lon: -52.3269, utc: -3 },
  { nom: 'Nouméa', pays: 'Nouvelle-Calédonie', lat: -22.2758, lon: 166.458, utc: 11 },
  { nom: 'Papeete', pays: 'Polynésie française', lat: -17.5516, lon: -149.5585, utc: -10 },
  { nom: 'Londres', pays: 'Royaume-Uni', lat: 51.5074, lon: -0.1278, utc: 0 },
  { nom: 'Madrid', pays: 'Espagne', lat: 40.4168, lon: -3.7038, utc: 1 },
  { nom: 'Rome', pays: 'Italie', lat: 41.9028, lon: 12.4964, utc: 1 },
  { nom: 'Berlin', pays: 'Allemagne', lat: 52.52, lon: 13.405, utc: 1 },
  { nom: 'Lisbonne', pays: 'Portugal', lat: 38.7223, lon: -9.1393, utc: 0 },
  { nom: 'New York', pays: 'États-Unis', lat: 40.7128, lon: -74.006, utc: -5 },
  { nom: 'Los Angeles', pays: 'États-Unis', lat: 34.0522, lon: -118.2437, utc: -8 },
  { nom: 'Tokyo', pays: 'Japon', lat: 35.6762, lon: 139.6503, utc: 9 },
  { nom: 'Sydney', pays: 'Australie', lat: -33.8688, lon: 151.2093, utc: 10 },
  { nom: 'Beyrouth', pays: 'Liban', lat: 33.8938, lon: 35.5018, utc: 2 },
]
