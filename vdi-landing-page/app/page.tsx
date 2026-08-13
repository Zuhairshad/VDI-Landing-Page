import Nav from '@/components/Nav'
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
import BookDemo from '@/components/BookDemo'
import CtaFooter from '@/components/CtaFooter'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
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
        <BookDemo />
      </main>
      <CtaFooter />
    </>
  )
}
