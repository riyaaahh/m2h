import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/m2h-infotech-logo.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Update scrolled state
            setIsScrolled(currentScrollY > 20)

            // Hide/show navbar based on scroll direction
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                // Scrolling up or near top - show navbar
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past threshold - hide navbar
                setIsVisible(false)
                setActiveDropdown(null) // Close any open dropdowns
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

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
            label: 'BUSINESS',
            sublinks: [
                { label: 'Artificial Intelligence', path: '/business#ai' },
                { label: 'FinTech', path: '/business#fintek' },
                { label: 'HRMS', path: '/business#hrms' },
                { label: 'Healthcare', path: '/business#healthcare' },
            ]
        },
        {
            path: '/services',
            label: 'PRODUCTS',
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
        {
            path: '/about',
            label: 'COMPANY',
            sublinks: [
                { label: 'About Us', path: '/about' },
                { label: 'Careers', path: '/about#careers' },
                { label: 'Blogs', path: '/about#blogs' },
                { label: 'Events', path: '/about#events' },
            ]
        },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
                } ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-[auto_1fr_auto] items-center relative z-50">
                {/* Brand Logo */}
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

                {/* Centered Navigation Links */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showMenu ? 1 : 0 }}
                        className="hidden md:flex items-center gap-12"
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative py-2"
                                onMouseEnter={() => link.sublinks && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`text-[0.85rem] font-semibold tracking-wide transition-all duration-300 relative ${isActive(link.path) || activeDropdown === link.label ? 'text-[#f4aa38]' : 'text-black hover:text-[#f4aa38]'
                                        }`}
                                >
                                    {link.label}
                                    {(isActive(link.path) || activeDropdown === link.label) && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#f4aa38]"
                                        />
                                    )}
                                </Link>
                            </div>
                        ))}

                        <Link
                            to="/contact"
                            className="text-[0.85rem] font-semibold tracking-wide text-black hover:text-[#f4aa38] transition-colors uppercase"
                        >
                            CONTACT
                        </Link>
                    </motion.div>
                </div>

                {/* Right Aligned CTA */}
                <div className="justify-self-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showMenu ? 1 : 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="text-[0.85rem] font-bold tracking-tight text-[#f4aa38] hover:text-black transition-all duration-300 lowercase"
                        >
                            let's talk
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
                {activeDropdown && (
                    <>
                        {/* Backdrop - Blurs website content below */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-[8px] z-40"
                            onClick={() => setActiveDropdown(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scaleY: 0.95, y: -10 }}
                            animate={{ opacity: 1, scaleY: 1, y: 0 }}
                            exit={{ opacity: 0, scaleY: 0.95, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            style={{ originY: 0 }}
                            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden"
                            onMouseEnter={() => setActiveDropdown(activeDropdown)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <div className="max-w-[1440px] mx-auto px-10 py-12">
                                {/* Sublinks Grid */}
                                <div className="grid grid-cols-4 gap-x-12 gap-y-6">
                                    {navLinks.find(l => l.label === activeDropdown)?.sublinks.map((sub, idx) => (
                                        <motion.div
                                            key={sub.label}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <Link
                                                to={sub.path}
                                                className="group py-2 block border-b border-black/5 hover:border-[#f4aa38]/30 transition-all duration-300 flex items-center justify-between"
                                            >
                                                <span className="text-[1rem] text-black/60 group-hover:text-black group-hover:pl-2 transition-all duration-300 font-medium block capitalize">
                                                    {sub.label}
                                                </span>
                                                <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#f4aa38] text-sm">→</span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative bottom bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-[#f4aa38]/10 via-[#f4aa38] to-[#f4aa38]/10"></div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
