import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    const location = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
