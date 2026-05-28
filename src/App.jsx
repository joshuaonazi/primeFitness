import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Services from './sections/Services'
import HowItWorks from './sections/HowItWorks'
import Trainers from './sections/Trainers'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTABanner from './sections/CTABanner'
import Footer from './components/Footer'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <HowItWorks />
      <Trainers />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}

export default App