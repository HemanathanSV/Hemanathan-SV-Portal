import NavHeader from '../components/landing/NavHeader'
import HeroSection from '../components/landing/HeroSection'
import WhyBuiltSection from '../components/landing/WhyBuiltSection'
import FeedbackSection from '../components/landing/FeedbackSection'
import PillarsSection from '../components/landing/PillarsSection'
import FAQSection from '../components/landing/FAQSection'
import CTABanner from '../components/landing/CTABanner'
import SiteFooter from '../components/landing/SiteFooter'
import StickyMobileCTA from '../components/landing/StickyMobileCTA'

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroSection />
        <WhyBuiltSection />
        <FeedbackSection />
        <PillarsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  )
}
