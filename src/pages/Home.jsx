import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import Services from '../components/sections/Services'
import Industries from '../components/sections/Industries'
import CaseStudies from '../components/sections/CaseStudies'
import Borderplex from '../components/sections/Borderplex'
import Testimonials from '../components/sections/Testimonials'
import Events from '../components/sections/Events'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Industries />
      <CaseStudies />
      <Borderplex />
      <Testimonials />
      <Events limit={3} />
      <CTASection />
    </main>
  )
}
