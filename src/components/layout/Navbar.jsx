import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'

const NAV_LINKS = [
  { key: 'services',    href: '/#services' },
  { key: 'industries',  href: '/#industries' },
  { key: 'caseStudies', href: '/#case-studies' },
  { key: 'borderplex',  href: '/#borderplex' },
  { key: 'events',      href: '/events' },
  { key: 'about',       href: '/about' },
]

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const handleHashLink = (e, href) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault()
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-heading font-bold text-xl text-creo-dark cursor-pointer"
            aria-label="Creo & Co home"
          >
            <span className="text-creo-primary">Creo</span>
            <span className="text-creo-muted font-normal">&</span>
            <span>Co.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6" role="list">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <Link
                  to={href}
                  onClick={(e) => handleHashLink(e, href)}
                  className="font-body text-sm font-600 text-creo-dark hover:text-creo-primary transition-colors duration-200 cursor-pointer"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 text-sm font-body font-600 text-creo-muted hover:text-creo-primary transition-colors duration-200 cursor-pointer"
              aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
            >
              <Globe size={16} aria-hidden="true" />
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            <Link
              to="/contact"
              className="bg-creo-primary text-white font-body font-600 text-sm px-5 py-2.5 rounded-full hover:bg-creo-primary/90 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggle}
              className="text-creo-muted hover:text-creo-primary transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => setOpen(prev => !prev)}
              className="text-creo-dark hover:text-creo-primary transition-colors cursor-pointer p-1"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <ul className="px-4 pb-4 pt-2 flex flex-col gap-1" role="list">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <Link
                to={href}
                onClick={(e) => { handleHashLink(e, href); setOpen(false) }}
                className="block py-2.5 font-body font-600 text-creo-dark hover:text-creo-primary transition-colors cursor-pointer"
              >
                {t.nav[key]}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/contact"
              className="block text-center bg-creo-primary text-white font-body font-600 text-sm px-5 py-3 rounded-full hover:bg-creo-primary/90 transition-colors cursor-pointer"
            >
              {t.nav.cta}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
