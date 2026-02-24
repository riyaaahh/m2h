import { useState, useEffect, useRef } from 'react'

import Hero from '../components/Hero'
import AboutHome from '../components/abouthome'
import AboutShowcase from '../components/AboutShowcase'
import SuccessByNumbers from '../components/SuccessByNumbers'
import TechStack from '../components/TechStack'
import Partners from '../components/Partners'
import CTA from '../components/CTA'
import ScrollShowcase from '../components/scrollshowcase'
import StackingCards from '../components/stackingcards'

const Home = () => {


    return (
        <div className="min-h-screen bg-white text-black selection:bg-[#f4aa38]/10 relative overflow-x-hidden">



            {/* Cinematic Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[70%] rounded-full opacity-[0.05] animate-glow-orange blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.03] animate-glow-gold blur-[120px]" />
            </div>

            {/* HERO */}
            <Hero />
            <Partners />

            <AboutShowcase />
            <StackingCards />
            {/* <AboutHome /> */}
            <SuccessByNumbers />
            <TechStack />
            <CTA />
        </div>
    )
}

export default Home