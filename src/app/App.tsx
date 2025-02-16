/**
 * Project Structure Reference:
 * /src
 * ├── App.tsx       # [current] Application root
 * ├── core/         # Business logic layer
 * ├── data/        # Data management layer
 * ├── ui/          # Presentation layer
 * ├── hooks/       # Custom React hooks
 * ├── test/        # Testing utilities
 * ├── types/       # Type definitions
 * └── utils/       # Shared utilities
 */

import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layouts } from '@ui/layouts'
import { ErrorBoundary } from '@ui/ErrorBoundary'
import { useError } from '../hooks/useError'  // Use relative path for now
import './App.css'

const HomePage = lazy(() => import('../pages/home').then(m => ({ default: m.HomePage })))
const InitiativesPage = lazy(() => import('../pages/initiatives').then(m => ({ default: m.InitiativesPage })))

function App() {
  const { error, handleError } = useError()

  return (
    <ErrorBoundary onError={handleError}>
      <Layouts.Main>
        <Suspense fallback={<div>Loading...</div>}>
          {error ? (
            <div role="alert" className="p-4 bg-red-100 text-red-700 rounded">
              {error.message}
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/initiatives" element={<InitiativesPage />} />
            </Routes>
          )}
        </Suspense>
      </Layouts.Main>
    </ErrorBoundary>
  )
}

export default App
