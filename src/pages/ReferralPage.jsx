import { useState } from 'react'
import { Copy, Check, DollarSign, Share2, FileSignature } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTASection from '../components/sections/CTASection'

const STEP_ICONS = [Copy, Share2, DollarSign]

// Simulate a referral code — in production, generate server-side per user
function getReferralLink() {
  const code = 'REF-' + Math.random().toString(36).slice(2, 8).toUpperCase()
  return `https://creoandco.com/?ref=${code}`
}

export default function ReferralPage() {
  const { t } = useLang()
  const [link] = useState(getReferralLink)
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState('')
  const [signedUp, setSignedUp] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select text
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    // TODO: save to backend
    setSignedUp(true)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-creo-border/30 pt-28 pb-20 text-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-creo-khaki/20 blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-creo-burgundy/10 rounded-2xl mb-6">
            <DollarSign size={32} className="text-creo-burgundy" aria-hidden="true" />
          </div>
          <h1 className="font-heading font-800 text-5xl lg:text-6xl text-creo-dark mb-4">
            {t.referral.heading}
          </h1>
          <p className="font-body text-lg text-creo-dark/80 leading-relaxed">{t.referral.sub}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-creo-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-heading font-800 text-4xl text-creo-dark">{t.referral.howHeading}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {t.referral.steps.map((step, i) => {
              const Icon = STEP_ICONS[i]
              return (
                <ScrollReveal key={step} delay={i * 100}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-creo-primary/10 rounded-2xl mb-5">
                      <Icon size={24} className="text-creo-primary" aria-hidden="true" />
                    </div>
                    <div className="font-heading font-800 text-4xl text-creo-border mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="font-body text-creo-muted leading-relaxed">{step}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Referral link section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            {signedUp ? (
              <>
                <h2 className="font-heading font-800 text-3xl text-creo-dark mb-6">Your Referral Link</h2>
                <div className="flex items-center gap-2 bg-creo-light border border-creo-border rounded-2xl p-4 mb-4">
                  <input
                    readOnly
                    value={link}
                    className="flex-1 bg-transparent font-body text-sm text-creo-dark focus:outline-none"
                    aria-label="Referral link"
                  />
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1.5 font-body font-700 text-sm px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer ${
                      copied
                        ? 'bg-creo-teal text-white'
                        : 'bg-creo-primary text-white hover:bg-creo-primary/90'
                    }`}
                    aria-label={copied ? t.referral.copied : t.referral.copyLink}
                  >
                    {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                    {copied ? t.referral.copied : 'Copy'}
                  </button>
                </div>
                <p className="font-body text-xs text-creo-muted">{t.referral.terms}</p>
              </>
            ) : (
              <>
                <h2 className="font-heading font-800 text-3xl text-creo-dark mb-4">{t.referral.signUp}</h2>
                <p className="font-body text-creo-muted mb-8">Enter your email to get your unique referral link.</p>
                <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <label htmlFor="ref-email" className="sr-only">Email address</label>
                  <input
                    id="ref-email"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 border border-creo-border rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-creo-primary transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="bg-creo-primary text-white font-body font-700 text-sm px-8 py-3 rounded-xl hover:bg-creo-primary/90 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    {t.referral.signUp}
                  </button>
                </form>
                <p className="font-body text-xs text-creo-muted mt-6">{t.referral.terms}</p>
              </>
            )}
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
