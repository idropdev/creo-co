const ITEMS = [
  'Create',
  'Believe',
  'Strategy',
  'Authenticity',
  'Creativity',
  'Integrity',
  'Borderplex',
  'Bilingual',
]

export default function MarqueeBanner() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Diagonal band 1 */}
      <div
        className="absolute whitespace-nowrap"
        style={{
          top: '15%',
          left: '-10%',
          transform: 'rotate(-8deg)',
          width: '130%',
        }}
      >
        <div className="flex animate-marquee">
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center mx-6">
              <span className="font-heading font-600 text-5xl sm:text-6xl lg:text-7xl text-creo-dark/[0.04] uppercase tracking-wider">
                {item}
              </span>
              <span className="ml-6 text-creo-primary/[0.08] text-2xl">&#x2726;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Diagonal band 2 */}
      <div
        className="absolute whitespace-nowrap"
        style={{
          top: '55%',
          left: '-10%',
          transform: 'rotate(-8deg)',
          width: '130%',
        }}
      >
        <div className="flex animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center mx-6">
              <span className="font-heading font-600 text-5xl sm:text-6xl lg:text-7xl text-creo-dark/[0.04] uppercase tracking-wider">
                {item}
              </span>
              <span className="ml-6 text-creo-primary/[0.08] text-2xl">&#x2726;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
