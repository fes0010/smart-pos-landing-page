import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import TrustStack from '@/components/sections/TrustStack'
import Services from '@/components/sections/Services'
import ProductShowcase from '@/components/sections/ProductShowcase'
import AIFeatures from '@/components/sections/AIFeatures'
import Benefits from '@/components/sections/Benefits'
import POSFeatures from '@/components/sections/POSFeatures'
import Advantages from '@/components/sections/Advantages'
import PricingPlans from '@/components/sections/PricingPlans'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div id="hero">
          <Hero />
        </div>
        <TrustStack />
        <div id="services">
          <Services />
        </div>
        <div id="product-demo">
          <ProductShowcase />
        </div>
        <div id="features">
          <AIFeatures />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="pos-features">
          <POSFeatures />
        </div>
        <div id="advantages">
          <Advantages />
        </div>
        <div id="pricing">
          <PricingPlans />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <FinalCTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
