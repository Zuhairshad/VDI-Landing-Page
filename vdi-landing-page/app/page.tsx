import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Setup from '@/components/Setup'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
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
        <UseCases />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <CtaFooter />
    </>
  )
}
