import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/m2h-infotech-logo.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setShowMenu(false)
        const timer = setTimeout(() => {
            setShowMenu(true)
        }, 1500)
        return () => clearTimeout(timer)
    }, [location.pathname])

    const navLinks = [
        {
            path: '/business',
            label: 'business',
            sublinks: [
                { label: 'AI', path: '/business#ai' },
                { label: 'Fintek', path: '/business#fintek' },
                { label: 'HRMS', path: '/business#hrms' },
                { label: 'Healthcare', path: '/business#healthcare' },
            ]
        },
        {
            path: '/about',
            label: 'company',
            sublinks: [
                { label: 'About Us', path: '/about' },
                { label: 'Careers', path: '/about#careers' },
                { label: 'Blogs', path: '/about#blogs' },
                { label: 'Events', path: '/about#events' },
            ]
        },
        {
            path: '/services',
            label: 'products',
            sublinks: [
                { label: 'Facekit AI', path: '/services#facekit' },
                { label: 'Pilot AI', path: '/services#pilot' },
                { label: 'Recruitment', path: '/services#recruitment' },
                { label: 'AlphaPay', path: '/services#alphapay' },
                { label: 'Tijori', path: '/services#tijori' },
                { label: 'WPS', path: '/services#wps' },
                { label: 'PayRoute', path: '/services#payroute' },
                { label: 'OfficeKit', path: '/services#officekit' },
            ]
        },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
                {/* Brand Logo - Refined Nitro Style */}
                <Link to="/" className="flex items-center group">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="transition-all duration-500"
                    >
                        <img
                            src={logo}
                            alt="M2H Logo"
                            className="h-10 md:h-12 w-auto object-contain transition-all duration-500"
                        />
                    </motion.div>
                </Link>

                <div className="flex items-center gap-12">
                    {/* Minimal Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showMenu ? 1 : 0 }}
                        className="hidden md:flex items-center gap-10"
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`text-[0.85rem] font-medium tracking-tight transition-all duration-300 ${isActive(link.path) ? 'text-white' : 'text-white hover:text-[#f4aa38]'
                                        }`}
                                >
                                    {link.label}
                                </Link>

                                <AnimatePresence>
                                    {activeDropdown === link.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            className="absolute top-full right-0 pt-6 min-w-[200px]"
                                        >
                                            <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                                <div className="flex flex-col">
                                                    {link.sublinks.map((sub) => (
                                                        <Link
                                                            key={sub.label}
                                                            to={sub.path}
                                                            className="px-6 py-4 text-[0.75rem] text-white/40 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                                        >
                                                            {sub.label.toLowerCase()}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <Link
                            to="/contact"
                            className="text-[0.85rem] font-medium tracking-tight text-white hover:text-[#f4aa38] transition-colors"
                        >
                            contact
                        </Link>
                    </motion.div>

                    {/* Minimal CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showMenu ? 1 : 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="text-[0.85rem] font-bold tracking-tight text-[#FF5C00] hover:text-[#f4aa38] transition-all duration-300"
                        >
                            let's talk
                        </Link>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
