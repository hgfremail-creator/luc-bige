import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { AppShell } from './components/AppShell'
import { useStore } from './lib/store'
import { Home } from './pages/Home'
import { Onboarding } from './pages/Onboarding'
import { Dashboard } from './pages/Dashboard'
import { ParcoursMap } from './pages/ParcoursMap'
import { LevelPage } from './pages/LevelPage'
import { Library } from './pages/Library'
import { DetailPage } from './pages/DetailPage'
import { ZodiacPage } from './pages/ZodiacPage'
import { Journal } from './pages/Journal'
import { QuizPage } from './pages/QuizPage'
import { ComparePage } from './pages/ComparePage'
import { MaitrePage } from './pages/MaitrePage'
import { InitiationPage } from './pages/InitiationPage'
import { Profile } from './pages/Profile'
import { Sources } from './pages/Sources'
import { About } from './pages/About'

// Le calculateur embarque la bibliothèque astronomique : chargé à la demande.
const NatalChart = lazy(() => import('./pages/NatalChart').then((m) => ({ default: m.NatalChart })))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export function App() {
  const onboardingDone = useStore((s) => s.onboardingDone)

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/*"
          element={
            <AppShell>
              <Routes>
                <Route path="tableau-de-bord" element={<Dashboard />} />
                <Route path="parcours" element={<ParcoursMap />} />
                <Route path="parcours/:slug" element={<LevelPage />} />
                <Route path="bibliotheque" element={<Library />} />
                <Route path="bibliotheque/:kind/:id" element={<DetailPage />} />
                <Route path="bibliotheque/concept/:group/:id" element={<DetailPage />} />
                <Route path="zodiaque" element={<ZodiacPage />} />
                <Route
                  path="theme"
                  element={
                    <Suspense fallback={<p className="text-ink-400">Chargement du calculateur…</p>}>
                      <NatalChart />
                    </Suspense>
                  }
                />
                <Route path="journal" element={<Journal />} />
                <Route path="quiz" element={<QuizPage />} />
                <Route path="comparateur" element={<ComparePage />} />
                <Route path="maitre" element={<MaitrePage />} />
                <Route path="initiation" element={<InitiationPage />} />
                <Route path="profil" element={<Profile />} />
                <Route path="sources" element={<Sources />} />
                <Route path="a-propos" element={<About />} />
                <Route path="*" element={<Navigate to={onboardingDone ? '/tableau-de-bord' : '/'} replace />} />
              </Routes>
            </AppShell>
          }
        />
      </Routes>
    </>
  )
}
