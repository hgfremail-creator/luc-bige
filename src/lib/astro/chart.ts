import { computeChart, type ChartResult } from './ephemeris'
import { findAspects, computeDominantes, type FoundAspect, type DominanteScore } from './aspects'
import { buildLayers, elementBalance, personalMyth, type Layer, type ElementBalance } from './interpretation'

export interface BirthData {
  /** AAAA-MM-JJ */
  date: string
  /** HH:MM en heure locale (ignoré si heureConnue = false) */
  heure: string
  heureConnue: boolean
  lieu: string
  latitude: number
  longitude: number
  /** décalage UTC en heures au moment de la naissance (heure d'été comprise) */
  utcOffset: number
}

export interface FullChart {
  birth: BirthData
  chart: ChartResult
  aspects: FoundAspect[]
  dominantes: DominanteScore[]
  elements: ElementBalance
  layers: Layer[]
  myth: string[]
  avertissements: string[]
}

export function toUTC(birth: BirthData): Date {
  const [y, m, d] = birth.date.split('-').map(Number)
  let hh = 12
  let mm = 0
  if (birth.heureConnue && birth.heure) {
    ;[hh, mm] = birth.heure.split(':').map(Number)
  }
  // Local → UTC : on retire le décalage.
  const utcMillis = Date.UTC(y, (m ?? 1) - 1, d ?? 1, hh, mm) - birth.utcOffset * 3600000
  return new Date(utcMillis)
}

export function buildFullChart(birth: BirthData): FullChart {
  const dateUTC = toUTC(birth)
  const chart = computeChart({
    dateUTC,
    latitude: birth.latitude,
    longitude: birth.longitude,
    heureConnue: birth.heureConnue,
  })
  const aspects = findAspects(chart.bodies)
  const dominantes = computeDominantes(chart.bodies, aspects, chart.ascendant?.signeId)
  const elements = elementBalance(chart)
  const layers = buildLayers(chart, aspects, dominantes)
  const myth = personalMyth(chart, aspects, dominantes)

  const avertissements: string[] = []
  if (!birth.heureConnue) {
    avertissements.push(
      "Heure de naissance inconnue : l'Ascendant, le Milieu du Ciel et les maisons ne sont pas calculés (on ne les invente pas).",
    )
    avertissements.push(
      "La position de la Lune peut être imprécise de quelques degrés — elle avance d'environ 12° à 15° par jour.",
    )
  }
  avertissements.push(
    "Calculs : positions écliptiques tropicales géocentriques (bibliothèque astronomy-engine) ; maisons en signes entiers ; obliquité moyenne. Suffisant pour un usage pédagogique, non pour un travail professionnel de précision.",
  )
  avertissements.push(
    "Vérifiez le décalage UTC : il doit tenir compte de l'heure d'été éventuelle au moment et au lieu de la naissance.",
  )

  return { birth, chart, aspects, dominantes, elements, layers, myth, avertissements }
}
