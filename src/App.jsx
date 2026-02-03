import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './index.css'

// Lazy load pages for code splitting
const Landing = lazy(() => import('./pages/Landing'))
const Flowchart = lazy(() => import('./pages/Flowchart'))
const Chapter = lazy(() => import('./pages/Chapter'))
const Completion = lazy(() => import('./pages/Completion'))
const Review = lazy(() => import('./pages/Review'))

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background-light">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      <p className="text-slate font-medium">Đang tải...</p>
    </div>
  </div>
)

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/flowchart" element={<Flowchart />} />
          <Route path="/chapter/:id" element={<Chapter />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
