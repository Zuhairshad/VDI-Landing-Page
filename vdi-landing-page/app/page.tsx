import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Setup from '@/components/Setup'
import Features from '@/components/Features'
import BuiltFor from '@/components/BuiltFor'
import UseCases from '@/components/UseCases'
import HumanVerification from '@/components/HumanVerification'
import VerificationDemo from '@/components/VerificationDemo'
import WhySection from '@/components/WhySection'
import Faq from '@/components/Faq'
import Pricing from '@/components/Pricing'
import BookDemo from '@/components/BookDemo'

export default function Home() {
  return (
      <main id="main-content">
        <Hero />
        <Benefits />
        <Setup />
        <Features />
        <BuiltFor />
        <UseCases />
        <HumanVerification />
        <VerificationDemo />
        <WhySection />
        <Faq />
        <Pricing />
        <BookDemo />
      </main>
  )
}
