import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../contexts/LanguageContext'
import ScrollReveal from '../ui/ScrollReveal'

// TODO: replace with real events data / API
export const SAMPLE_EVENTS = [
  {
    id: 1,
    title: 'Borderplex Business Summit',
    date: '2025-09-15',
    location: 'El Paso Convention Center',
    category: 'Summit',
    description: 'Annual gathering of regional business leaders and investors.',
    registerUrl: '#',
  },
  {
    id: 2,
    title: 'Marketing for Nonprofits Workshop',
    date: '2025-10-03',
    location: 'Virtual / Zoom',
    category: 'Workshop',
    description: 'Free workshop on digital strategy for nonprofit organizations.',
    registerUrl: '#',
  },
  {
    id: 3,
    title: 'Tourism & Destination Marketing Forum',
    date: '2025-10-22',
    location: 'Ciudad Juárez, Chih.',
    category: 'Forum',
    description: 'Binational forum for tourism professionals and destination marketers.',
    registerUrl: '#',
  },
]

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return {
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    day: d.getDate(),
    full: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  }
}

const CAT_COLORS = {
  Summit:   'bg-creo-primary/10 text-creo-primary',
  Workshop: 'bg-creo-teal/10 text-creo-teal',
  Forum:    'bg-creo-accent/10 text-creo-accent',
}

export default function Events({ limit = 3 }) {
  const { t } = useLang()
  const events = SAMPLE_EVENTS.slice(0, limit)

  return (
    <section id="events" className="py-24 bg-creo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <ScrollReveal>
            <p className="font-body text-sm font-700 text-creo-primary uppercase tracking-wider mb-3">Events</p>
            <h2 className="font-heading font-800 text-4xl lg:text-5xl text-creo-dark">
              {t.events.heading}
            </h2>
            <p className="font-body text-lg text-creo-muted mt-4 max-w-xl">{t.events.sub}</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-creo-primary font-body font-700 hover:gap-3 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              View all events <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        {events.length === 0 ? (
          <p className="text-creo-muted font-body text-center py-12">{t.events.noEvents}</p>
        ) : (
          <div className="space-y-4">
            {events.map((event, i) => {
              const date = formatDate(event.date)
              const catColor = CAT_COLORS[event.category] || 'bg-creo-border text-creo-muted'

              return (
                <ScrollReveal key={event.id} delay={i * 80}>
                  <div className="group bg-white border border-creo-border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-creo-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer">
                    {/* Date block */}
                    <div className="flex-shrink-0 w-16 text-center bg-creo-primary/5 border border-creo-primary/20 rounded-xl py-3 px-2">
                      <span className="block font-body text-xs font-700 text-creo-primary uppercase">{date.month}</span>
                      <span className="block font-heading font-800 text-2xl text-creo-dark leading-none">{date.day}</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="font-heading font-700 text-lg text-creo-dark group-hover:text-creo-primary transition-colors duration-200">
                          {event.title}
                        </h3>
                        <span className={`font-body text-xs font-600 px-2.5 py-0.5 rounded-full ${catColor}`}>
                          {event.category}
                        </span>
                      </div>
                      <p className="font-body text-sm text-creo-muted flex items-center gap-1.5">
                        <MapPin size={13} aria-hidden="true" />
                        {event.location}
                      </p>
                      <p className="font-body text-sm text-creo-muted mt-1">{event.description}</p>
                    </div>

                    {/* CTA */}
                    <a
                      href={event.registerUrl}
                      className="flex-shrink-0 inline-flex items-center gap-1.5 bg-creo-primary text-white font-body font-600 text-sm px-5 py-2.5 rounded-full hover:bg-creo-primary/90 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                      aria-label={`Register for ${event.title}`}
                    >
                      {t.events.register}
                    </a>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
