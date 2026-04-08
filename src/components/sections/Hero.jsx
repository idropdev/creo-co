import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import AnimatedCounter from '../ui/AnimatedCounter'

const STATS = [
  { key: 'years',      value: '15+',   suffix: '' },
  { key: 'bilingual',  value: 'EN/ES', suffix: '' },
  { key: 'regions',    value: 'Multi', suffix: '' },
  { key: 'strategic',  value: 'Yes',   suffix: '' },
]

export default function Hero() {
  const { t } = useLang()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#DCD1BA] via-[#DFDBCD] to-[#EAE6DA]"
      aria-label="Hero"
    >
      {/* Soft color overlay instead of neon blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] rounded-full bg-creo-khaki/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-creo-border/30 blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">


        {/* Headline */}
        <div className="max-w-4xl">
          <h1
            className={`font-heading font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-creo-dark mb-3
              transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {t.hero.tagline}
          </h1>
          <h1
            className={`font-heading font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-creo-dark mb-8
              transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {t.hero.tagline2}
          </h1>

          <p
            className={`font-body text-lg sm:text-xl text-creo-dark/80 max-w-2xl leading-relaxed mb-10
              transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {t.hero.sub}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[400ms]
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-creo-dark text-white font-body font-700 text-base px-8 py-4 rounded-full hover:bg-creo-dark/90 hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              {t.hero.cta1}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-creo-dark/20 text-creo-dark font-body font-600 text-base px-8 py-4 rounded-full hover:bg-black/5 hover:border-creo-dark/40 transition-all duration-200 cursor-pointer"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-10 border-t border-creo-dark/10
            transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {STATS.map(({ key, value, suffix }) => (
            <div key={key} className="text-center sm:text-left">
              <div className="font-heading font-800 text-4xl text-creo-dark/90">
                {value}
              </div>
              <div className="font-body text-sm text-creo-dark/60 mt-1">{t.stats[key]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-creo-dark/40 hover:text-creo-dark/80 transition-colors cursor-pointer"
        aria-label="Scroll to services"
      >
        <span className="font-body text-xs">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
