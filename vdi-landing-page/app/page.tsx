import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Setup from '@/components/Setup'
import Features from '@/components/Features'
import DataVerification from '@/components/DataVerification'
import TrustIndex from '@/components/TrustIndex'
import BusinessAnalytics from '@/components/BusinessAnalytics'
import BuiltFor from '@/components/BuiltFor'
import UseCases from '@/components/UseCases'
import HumanVerification from '@/components/HumanVerification'
import SecurityData from '@/components/SecurityData'
import VerificationDemo from '@/components/VerificationDemo'
import WhySection from '@/components/WhySection'
import SeoHub from '@/components/SeoHub'
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
        <DataVerification />
        <TrustIndex />
        <BusinessAnalytics />
        <BuiltFor />
        <UseCases />
        <HumanVerification />
        <SecurityData />
        <VerificationDemo />
        <WhySection />
        <SeoHub />
        <Faq />
        <BookDemo />
      </main>
      <CtaFooter />
    </>
  )
}
