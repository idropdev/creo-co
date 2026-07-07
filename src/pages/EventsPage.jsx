import { useState } from 'react'
import { Calendar, MapPin, Filter } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { SAMPLE_EVENTS } from '../components/sections/Events'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTASection from '../components/sections/CTASection'

const CATEGORIES = ['All', 'Concert', 'Aviation', 'Networking', 'Air Show']

function formatDate(dateStr, endDateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const day = d.getDate()

  if (endDateStr) {
    const end = new Date(endDateStr + 'T00:00:00')
    const endDay = end.getDate()
    const endMonth = end.toLocaleString('en-US', { month: 'short' }).toUpperCase()
    return {
      month,
      day: endMonth === month ? `${day}-${endDay}` : `${day}`,
      full: `${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} – ${end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
    }
  }

  return {
    month,
    day,
    full: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  }
}

const CAT_COLORS = {
  Concert:    'bg-creo-primary/10 text-creo-primary border-creo-primary/20',
  Aviation:   'bg-creo-teal/10 text-creo-teal border-creo-teal/20',
  Networking: 'bg-creo-accent/10 text-creo-accent border-creo-accent/20',
  'Air Show': 'bg-creo-primary/10 text-creo-primary border-creo-primary/20',
}

export default function EventsPage() {
  const { t } = useLang()
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? SAMPLE_EVENTS
    : SAMPLE_EVENTS.filter(e => e.category === filter)

  return (
    <>
      {/* Page header */}
      <section className="bg-creo-dark pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-creo-khaki mb-6">Calendar</p>
          <h1 className="font-heading font-600 text-5xl sm:text-6xl lg:text-7xl text-white mb-5 tracking-tight">
            {t.events.heading}
          </h1>
          <p className="font-body text-xl text-white/60 max-w-2xl leading-relaxed">{t.events.sub}</p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-creo-border py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter size={16} className="text-creo-muted shrink-0" aria-hidden="true" />
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-body text-sm font-600 px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  filter === cat
                    ? 'bg-creo-primary text-white'
                    : 'bg-creo-light text-creo-muted hover:text-creo-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="py-16 bg-creo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-creo-muted font-body py-20">{t.events.noEvents}</p>
          ) : (
            <div className="space-y-4">
              {filtered.map((event, i) => {
                const date = formatDate(event.date, event.endDate)
                const catColor = CAT_COLORS[event.category] || 'bg-creo-border text-creo-muted border-creo-border'

                return (
                  <ScrollReveal key={event.id} delay={i * 60}>
                    <div className="bg-white border border-creo-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6 hover:border-creo-primary/40 hover:shadow-md transition-all duration-300">
                      {/* Date */}
                      <div className="flex-shrink-0 w-20 text-center bg-creo-primary/5 border border-creo-primary/20 rounded-2xl py-4 px-3">
                        <span className="block font-body text-xs font-700 text-creo-primary uppercase">{date.month}</span>
                        <span className="block font-heading font-800 text-3xl text-creo-dark leading-none">{date.day}</span>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h2 className="font-heading font-700 text-xl text-creo-dark">{event.title}</h2>
                          <span className={`font-body text-xs font-600 px-3 py-0.5 rounded-full border ${catColor}`}>
                            {event.category}
                          </span>
                        </div>
                        <p className="font-body text-sm text-creo-muted flex items-center gap-1.5 mb-2">
                          <MapPin size={13} aria-hidden="true" /> {event.location}
                        </p>
                        <p className="font-body text-sm text-creo-muted">{event.description}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex-shrink-0 flex flex-col gap-2">
                        <a
                          href={event.registerUrl}
                          className="inline-flex items-center justify-center bg-creo-primary text-white font-body font-600 text-sm px-6 py-2.5 rounded-full hover:bg-creo-primary/90 transition-colors duration-200 cursor-pointer"
                        >
                          {t.events.register}
                        </a>
                        <button className="inline-flex items-center justify-center border border-creo-border text-creo-muted font-body font-600 text-sm px-6 py-2.5 rounded-full hover:border-creo-primary hover:text-creo-primary transition-colors duration-200 cursor-pointer">
                          {t.events.learnMore}
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
