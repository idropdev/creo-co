import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../contexts/LanguageContext'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <ScrollReveal>
            <p className="font-body text-sm font-700 text-creo-primary uppercase tracking-wider mb-3">Services</p>
            <h2 className="font-heading font-800 text-4xl lg:text-5xl text-creo-dark">
              {t.services.heading}
            </h2>
            <p className="font-body text-lg text-creo-muted mt-4 max-w-xl">
              {t.services.sub}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-creo-primary font-body font-700 hover:gap-3 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              {t.nav.cta} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-creo-border rounded-2xl overflow-hidden">
          {t.services.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 60}>
              <div className="bg-white p-8 h-full hover:bg-creo-light transition-colors duration-200 group">
                <span className="block font-heading font-800 text-3xl text-creo-border mb-4 group-hover:text-creo-primary/20 transition-colors duration-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading font-700 text-lg text-creo-dark mb-3 group-hover:text-creo-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-creo-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
