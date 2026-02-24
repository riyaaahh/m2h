import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'

// Layout
import Layout from './components/Layout'
import SplashScreen from './components/SplashScreen'

// Pages
import Home from './pages/Home'
import Business from './pages/Business'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import HRMS from './pages/business/HRMS'
import AI from './pages/business/AI'
import Fintech from './pages/business/Fintech'
import Healthcare from './pages/business/Healthcare'
import OfficeKitHR from './pages/products/OfficeKitHR'
import AlphaPay from './pages/products/AlphaPay'
import FacekitAI from './pages/products/FacekitAI'
import Recruitment from './pages/products/Recruitment'
import PilotAI from './pages/products/PilotAI'
import Tijori from './pages/products/Tijori'
import NotFound from './pages/NotFound'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PremiumCursor from './components/premiumcursor'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) return

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      lerp: 0.15,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Add Lenis class to html
    document.documentElement.classList.add('lenis')

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Animation frame loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis')
    }
  }, [isLoading])

  return (
    <>
      <PremiumCursor />

      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="business" element={<Business />} />
              <Route path="business/hrms" element={<HRMS />} />
              <Route path="business/ai" element={<AI />} />
              <Route path="business/fintech" element={<Fintech />} />
              <Route path="business/healthcare" element={<Healthcare />} />
              <Route path="products/officekit-hr" element={<OfficeKitHR />} />
              <Route path="products/alphapay" element={<AlphaPay />} />
              <Route path="products/facekit-ai" element={<FacekitAI />} />
              <Route path="products/recruitment" element={<Recruitment />} />
              <Route path="products/pilot-ai" element={<PilotAI />} />
              <Route path="products/tijori" element={<Tijori />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
