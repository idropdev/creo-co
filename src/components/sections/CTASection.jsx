import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTASection() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to backend / Formspree / EmailJS
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 sm:py-36 bg-white overflow-hidden">
      {/* Background accents */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-creo-border/20 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: headline + cal link */}
          <ScrollReveal>
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-creo-burgundy mb-6">
              Get Started
            </p>
            <h2 className="font-heading font-600 text-4xl sm:text-5xl lg:text-6xl text-creo-dark mb-6 tracking-tight">
              {t.cta.heading}
            </h2>
            <p className="font-body text-lg text-creo-dark/70 mb-10 leading-relaxed">
              {t.cta.sub}
            </p>

            <a
              href="https://calendly.com/creoandco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-creo-dark text-white font-body font-700 text-base px-8 py-4 rounded-full hover:bg-creo-dark/90 hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              {t.cta.primary} <ArrowRight size={18} aria-hidden="true" />
            </a>

            <p className="font-body text-creo-dark/50 text-sm mt-6 flex items-center gap-2">
              <Mail size={14} aria-hidden="true" />
              {t.cta.secondary}
            </p>
          </ScrollReveal>

          {/* Right: contact form */}
          <ScrollReveal delay={200}>
            <div className="bg-creo-muted rounded-3xl p-8 relative overflow-hidden shadow-xl">
              {/* Card texture/pattern overlay */}
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

              <div className="relative z-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight size={24} className="text-white" aria-hidden="true" />
                    </div>
                    <p className="font-heading font-700 text-white text-xl">{t.cta.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block font-body text-xs font-600 text-white/70 mb-1.5 uppercase tracking-wider">
                          {t.cta.form.name}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors duration-200 text-sm"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-body text-xs font-600 text-white/70 mb-1.5 uppercase tracking-wider">
                          {t.cta.form.email}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors duration-200 text-sm"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="org" className="block font-body text-xs font-600 text-white/70 mb-1.5 uppercase tracking-wider">
                        {t.cta.form.org}
                      </label>
                      <input
                        id="org"
                        name="org"
                        type="text"
                        value={form.org}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors duration-200 text-sm"
                        placeholder="Your Organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-body text-xs font-600 text-white/70 mb-1.5 uppercase tracking-wider">
                        {t.cta.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors duration-200 text-sm resize-none"
                        placeholder="Tell us about your goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-creo-dark text-white font-body font-700 py-4 rounded-xl hover:bg-creo-dark/90 transition-colors duration-200 cursor-pointer mt-2"
                    >
                      {t.cta.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
