import Hero from '@/components/Hero'
import VideoEmbed from '@/components/VideoEmbed'
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
        <section style={{ background: 'rgb(10,10,10)', padding: '72px 0' }}>
          <div className="section-inner">
            <VideoEmbed
              videoId="xNJvs8C-lzo"
              title="Why You Can't Trust ChatGPT With Data"
            />
          </div>
        </section>
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
