import { ArrowRight } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import ScrollReveal from '../ui/ScrollReveal'

const TAG_COLORS = [
  'bg-creo-primary/10 text-creo-primary',
  'bg-creo-accent/10 text-creo-accent',
  'bg-creo-teal/10 text-creo-teal',
]

export default function CaseStudies() {
  const { t } = useLang()

  return (
    <section id="case-studies" className="py-28 sm:py-36 bg-creo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-creo-burgundy mb-4">Experience</p>
          <h2 className="font-heading font-600 text-4xl sm:text-5xl lg:text-6xl text-creo-dark mb-5 tracking-tight">
            {t.caseStudies.heading}
          </h2>
          <p className="font-body text-lg text-creo-dark/70 max-w-2xl mx-auto leading-relaxed">
            {t.caseStudies.sub}
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.caseStudies.items.map((item, i) => (
            <ScrollReveal key={item.client} delay={i * 100}>
              <div className="group bg-white border border-creo-dark/10 hover:border-creo-primary/40 hover:shadow-lg rounded-2xl p-8 flex flex-col h-full transition-all duration-300 cursor-pointer">
                {/* Industry badge */}
                <span className="inline-block font-body text-xs font-700 text-creo-burgundy/80 uppercase tracking-wider mb-6">
                  {item.industry}
                </span>

                {/* Result */}
                <div className="mb-4">
                  <p className="font-heading font-800 text-2xl lg:text-3xl text-creo-primary leading-tight">
                    {item.result}
                  </p>
                </div>

                <h3 className="font-heading font-700 text-lg text-creo-dark mb-3">{item.client}</h3>
                <p className="font-body text-creo-dark/70 leading-relaxed text-sm flex-1">{item.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                  {item.tags.map((tag, j) => (
                    <span
                      key={tag}
                      className={`font-body text-xs font-600 px-3 py-1 rounded-full ${TAG_COLORS[j % TAG_COLORS.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-creo-dark/60 font-body text-sm font-600 group-hover:text-creo-primary group-hover:gap-3 transition-all duration-200 cursor-pointer mt-auto">
                  {t.caseStudies.cta} <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
