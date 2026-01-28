import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './Navbar'

const Layout = () => {
    const location = useLocation()

    useEffect(() => {
        // Initialize Lenis smooth scrolling
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        // Animation frame loop
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Cleanup on unmount
        return () => {
            lenis.destroy()
        }
    }, [])

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
