import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../contexts/LanguageContext'
import ScrollReveal from '../ui/ScrollReveal'

export default function Borderplex() {
  const { t } = useLang()

  return (
    <section id="borderplex" className="py-24 bg-creo-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Map/graphic placeholder */}
              <div className="relative bg-creo-border/30 rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 border border-creo-dark/5">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-creo-khaki/20 to-creo-border/40" />

                {/* US side */}
                <div className="absolute top-1/4 left-1/4 bg-creo-primary/90 rounded-2xl px-6 py-4 shadow-xl">
                  <p className="font-heading font-800 text-white text-lg">United States</p>
                  <p className="font-body text-white/70 text-sm">El Paso, TX</p>
                </div>

                {/* MX side */}
                <div className="absolute bottom-1/4 right-1/4 bg-creo-accent/90 rounded-2xl px-6 py-4 shadow-xl">
                  <p className="font-heading font-800 text-white text-lg">México</p>
                  <p className="font-body text-white/70 text-sm">Ciudad Juárez, Chih.</p>
                </div>

                {/* Connection line */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-px h-32 bg-gradient-to-b from-creo-primary/50 to-creo-accent/50 rotate-45" aria-hidden="true" />
                </div>

                {/* Creo badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl">
                    <span className="font-heading font-900 text-creo-primary text-lg">C&</span>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4 border border-creo-border">
                <p className="font-heading font-800 text-3xl text-creo-primary">2.7M+</p>
                <p className="font-body text-xs text-creo-muted mt-0.5">Binational Population</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: content */}
          <ScrollReveal direction="left" delay={150}>
            <p className="font-body text-sm font-700 text-creo-teal uppercase tracking-wider mb-4">
              Borderplex Advantage
            </p>
            <h2 className="font-heading font-800 text-4xl lg:text-5xl text-creo-dark mb-3">
              {t.borderplex.heading}
            </h2>
            <p className="font-heading font-500 text-xl text-creo-primary italic mb-6">
              {t.borderplex.sub}
            </p>
            <p className="font-body text-creo-muted leading-relaxed mb-8">
              {t.borderplex.body}
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-10" role="list">
              {t.borderplex.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-creo-teal shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-body text-creo-dark font-500">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-creo-teal text-white font-body font-700 px-8 py-4 rounded-full hover:bg-creo-teal/90 hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              {t.borderplex.cta} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
