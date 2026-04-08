import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import ReferralPage from './pages/ReferralPage'

function ScrollToTop() {
  const { pathname } = window.location
  // Handled by React Router's default behavior
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/about"    element={<AboutPage />} />
              <Route path="/events"   element={<EventsPage />} />
              <Route path="/contact"  element={<ContactPage />} />
              <Route path="/referral" element={<ReferralPage />} />
              {/* Fallback */}
              <Route path="*"         element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
