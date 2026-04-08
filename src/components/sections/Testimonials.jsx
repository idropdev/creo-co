import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import ScrollReveal from '../ui/ScrollReveal'

export default function Testimonials() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const items = t.testimonials.items

  const prev = () => setCurrent(i => (i === 0 ? items.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === items.length - 1 ? 0 : i + 1))

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="font-body text-sm font-700 text-creo-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="font-heading font-800 text-4xl lg:text-5xl text-creo-dark">
            {t.testimonials.heading}
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {/* Active testimonial */}
          <div className="relative bg-creo-light border border-creo-border rounded-3xl p-10 lg:p-14 text-center">
            <Quote
              size={40}
              className="text-creo-primary/20 mx-auto mb-6"
              aria-hidden="true"
            />
            <blockquote>
              <p className="font-heading font-500 text-xl lg:text-2xl text-creo-dark leading-relaxed mb-8 text-balance">
                "{items[current].quote}"
              </p>
              <footer>
                <p className="font-heading font-700 text-creo-dark">{items[current].name}</p>
                <p className="font-body text-sm text-creo-muted mt-1">{items[current].role}</p>
              </footer>
            </blockquote>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-creo-border flex items-center justify-center text-creo-muted hover:text-creo-primary hover:border-creo-primary transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    i === current ? 'bg-creo-primary w-6' : 'bg-creo-border'
                  }`}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-creo-border flex items-center justify-center text-creo-muted hover:text-creo-primary hover:border-creo-primary transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
