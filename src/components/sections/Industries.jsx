import { TrendingUp, Heart, Stethoscope, MapPin, Briefcase } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import ScrollReveal from '../ui/ScrollReveal'

const ICON_MAP = { TrendingUp, Heart, Stethoscope, MapPin, Briefcase }

const COLORS = [
  { bg: 'bg-creo-primary/10', icon: 'text-creo-primary', border: 'border-creo-primary/20', hover: 'hover:border-creo-primary/60' },
  { bg: 'bg-creo-accent/10',  icon: 'text-creo-accent',  border: 'border-creo-accent/20',  hover: 'hover:border-creo-accent/60' },
  { bg: 'bg-creo-teal/10',    icon: 'text-creo-teal',    border: 'border-creo-teal/20',    hover: 'hover:border-creo-teal/60' },
  { bg: 'bg-creo-primary/10', icon: 'text-creo-primary', border: 'border-creo-primary/20', hover: 'hover:border-creo-primary/60' },
  { bg: 'bg-creo-accent/10',  icon: 'text-creo-accent',  border: 'border-creo-accent/20',  hover: 'hover:border-creo-accent/60' },
]

export default function Industries() {
  const { t } = useLang()

  return (
    <section id="industries" className="py-24 bg-creo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-body text-sm font-700 text-creo-primary uppercase tracking-wider mb-3">Industries</p>
          <h2 className="font-heading font-800 text-4xl lg:text-5xl text-creo-dark mb-4">
            {t.industries.heading}
          </h2>
          <p className="font-body text-lg text-creo-muted max-w-2xl mx-auto">
            {t.industries.sub}
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.industries.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            const color = COLORS[i % COLORS.length]

            return (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div
                  className={`group relative bg-white border ${color.border} ${color.hover} rounded-2xl p-8
                    hover:shadow-lg transition-all duration-300 cursor-pointer h-full`}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${color.bg} rounded-xl mb-5`}>
                    {Icon && <Icon size={22} className={color.icon} aria-hidden="true" />}
                  </div>

                  <h3 className="font-heading font-700 text-xl text-creo-dark mb-3 group-hover:text-creo-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-body text-creo-muted leading-relaxed">{item.desc}</p>

                  {/* Hover accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${color.bg.replace('/10', '')} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </ScrollReveal>
            )
          })}

          {/* Fifth card full-width on lg when 5 items */}
        </div>
      </div>
    </section>
  )
}
