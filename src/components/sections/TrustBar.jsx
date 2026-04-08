import { useLang } from '../../contexts/LanguageContext'

const LOGOS = [
  'City of El Paso',
  'UTEP',
  'Borderplex Alliance',
  'Visit El Paso',
  'Sun Metro',
  'El Paso Children\'s Hospital',
  'GECU',
  'Workforce Solutions',
  'El Paso Electric',
  'EPISD',
]

export default function TrustBar() {
  const { t } = useLang()

  return (
    <section className="bg-white border-y border-creo-border py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="font-body text-sm font-600 text-creo-muted uppercase tracking-wider">
          {t.trust.heading}
        </p>
      </div>

      {/* Ticker */}
      <div className="relative" aria-hidden="true">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 px-6 py-2 bg-creo-light border border-creo-border rounded-lg min-w-[160px]"
            >
              <span className="font-body font-600 text-creo-muted text-sm text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
