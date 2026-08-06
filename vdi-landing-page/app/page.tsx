import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Setup from '@/components/Setup'
import Features from '@/components/Features'
import Workflows from '@/components/Workflows'
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
        <Workflows />
        <UseCases />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <CtaFooter />
    </>
  )
}

