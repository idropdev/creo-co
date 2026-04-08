import { CheckCircle } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTASection from '../components/sections/CTASection'
import { useLang } from '../contexts/LanguageContext'



export default function AboutPage() {
  const { t } = useLang()

  return (
    <>
      {/* Header */}
      <section className="bg-creo-border/30 pt-28 pb-20 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-creo-khaki/20 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-sm font-700 text-creo-burgundy uppercase tracking-wider mb-4">{t.nav.about}</p>
          <h1 className="font-heading font-800 text-5xl lg:text-6xl text-creo-dark mb-6 max-w-3xl">
            {t.about.heading}
          </h1>
          <p className="font-body text-lg text-creo-dark/80 max-w-2xl leading-relaxed">
            {t.about.body1}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="font-body text-sm font-700 text-creo-primary uppercase tracking-wider mb-4">Our Approach</p>
              <h2 className="font-heading font-800 text-4xl lg:text-5xl text-creo-dark mb-6">
                {t.about.body2}
              </h2>
              <p className="font-body text-creo-muted leading-relaxed mb-6">
                {t.about.body3}
              </p>
              <p className="font-body text-creo-muted leading-relaxed mb-6">
                {t.about.body4}
              </p>
              <p className="font-body text-creo-muted leading-relaxed">
                {t.about.body5}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-creo-light border border-creo-border rounded-3xl p-8 h-full flex flex-col justify-center">
                <p className="font-heading font-700 text-xl text-creo-dark mb-6">
                  {t.borderplex.sub}
                </p>
                <div className="space-y-4">
                  {t.borderplex.points.map(point => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-creo-teal shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-body text-creo-dark font-500">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-creo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="font-body text-sm font-700 text-creo-primary uppercase tracking-wider mb-3">Values</p>
            <h2 className="font-heading font-800 text-4xl lg:text-5xl text-creo-dark">{t.about.valuesHeading}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.about.values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="bg-white border border-creo-border rounded-2xl p-8 h-full">
                  <div className="font-heading font-800 text-4xl text-creo-border mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-700 text-xl text-creo-dark mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-creo-muted leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
