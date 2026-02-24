import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/m2h-infotech-logo.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const location = useLocation()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [expandedMobileLink, setExpandedMobileLink] = useState(null)

    useEffect(() => {
        let prevScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Update scrolled state
            setIsScrolled(currentScrollY > 20)

            // Hide/show navbar based on scroll direction
            if (currentScrollY < prevScrollY || currentScrollY < 100) {
                // Scrolling up or near top - show navbar
                setIsVisible(true)
            } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
                // Scrolling down and past threshold - hide navbar
                setIsVisible(false)
                setActiveDropdown(null) // Close any open dropdowns
            }

            prevScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setShowMenu(false)
        setIsMobileMenuOpen(false)
        const timer = setTimeout(() => {
            setShowMenu(true)
        }, 1500)
        return () => clearTimeout(timer)
    }, [location.pathname])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        {

            label: 'BUSINESS',
            sublinks: [
                { label: 'Artificial Intelligence', desc: 'Predictive analytics and automation.', path: '/business/ai' },
                { label: 'FinTech', desc: 'Secure digital payment ecosystems.', path: '/business/fintech' },
                { label: 'HRMS', desc: 'Modern human resource management.', path: '/business/hrms' },
                { label: 'Healthcare', desc: 'Digital foundations for care.', path: '/business/healthcare' },
            ]
        },
        {

            label: 'PRODUCTS',
            sublinks: [
                { label: 'Facekit AI', desc: 'Cutting-edge biometric solutions.', path: '/products/facekit-ai' },
                { label: 'Pilot AI', desc: 'Autonomous intelligence systems.', path: '/products/pilot-ai' },
                { label: 'Recruitment', desc: 'Next-gen talent acquisition.', path: '/products/recruitment' },
                { label: 'AlphaPay', desc: 'Seamless global payments.', path: '/products/alphapay' },
                { label: 'Tijori', desc: 'Intelligent asset management.', path: '/products/tijori' },
                { label: 'OfficeKit HR', desc: 'Complete enterprise HR suite.', path: '/products/officekit-hr' },
            ]
        },
        {

            label: 'COMPANY',
            sublinks: [
                { label: 'About Us', desc: 'Our journey and mission.', path: '/about' },
                { label: 'Careers', desc: 'Join our visionary team.', path: '/about#careers' },
                { label: 'Blogs', desc: 'Insights from our experts.', path: '/about#blogs' },
                { label: 'Events', desc: 'Connecting with the community.', path: '/about#events' },
            ]
        },
    ]

    const isActive = (path) => location.pathname === path

    const toggleMobileSublink = (label) => {
        setExpandedMobileLink(expandedMobileLink === label ? null : label)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
                } ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-[auto_1fr_auto] items-center relative z-50">
                {/* Brand Logo */}
                <Link to="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="transition-all duration-500"
                    >
                        <img
                            src={logo}
                            alt="M2H Logo"
                            className="h-8 md:h-14 w-auto object-contain transition-all duration-500"
                        />
                    </motion.div>
                </Link>

                {/* Centered Navigation Links - Desktop */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showMenu ? 1 : 0 }}
                        className="hidden md:flex items-center gap-12"
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative py-2 group/navitem"
                                onMouseEnter={() => link.sublinks && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`text-[0.85rem] font-semibold tracking-wide transition-all duration-300 relative flex items-center gap-1.5 ${isActive(link.path) || activeDropdown === link.label ? 'text-[#f4aa38]' : 'text-black hover:text-[#f4aa38]'
                                        }`}
                                >
                                    {link.label}
                                    {link.sublinks && (
                                        <motion.svg
                                            animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                                            className="w-3 h-3 opacity-40 transition-transform duration-300"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                    )}
                                    {(isActive(link.path) || activeDropdown === link.label) && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#f4aa38]"
                                        />
                                    )}
                                </Link>

                                {/* Floating Card Dropdown */}
                                <AnimatePresence>
                                    {activeDropdown === link.label && link.sublinks && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-white border border-black/5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 z-50 overflow-hidden"
                                        >
                                            {/* Decorative Background Accent */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4aa38]/5 blur-3xl -z-10 rounded-2xl" />

                                            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                                                {link.sublinks.map((sub, idx) => (
                                                    <motion.div
                                                        key={sub.label}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                    >
                                                        <Link
                                                            to={sub.path}
                                                            className="group/sub relative block p-2 -m-2 rounded-2xl hover:bg-slate-50 transition-all duration-300"
                                                        >
                                                            <div className="flex flex-col">
                                                                <span className="text-[1rem] font-semibold text-black group-hover/sub:text-[#f4aa38] transition-colors duration-300  tracking-tight">
                                                                    {sub.label}
                                                                </span>
                                                                {sub.desc && (
                                                                    <span className="text-[0.8rem] text-black/40 font-light lowercase leading-tight mt-1 group-hover/sub:text-black/60 transition-colors">
                                                                        {sub.desc}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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

                {/* Right Aligned Actions */}
                <div className="flex items-center gap-4 justify-self-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showMenu ? 1 : 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <Link
                            to="/contact"
                            className="px-6 h-11 flex items-center justify-center bg-black text-white rounded-full text-[0.85rem] font-bold tracking-tight hover:bg-[#f4aa38] transition-all duration-300 lowercase shadow-lg shadow-black/5 hover:shadow-[#f4aa38]/20 inline-flex"
                        >
                            let's talk
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 relative"
                    >
                        <motion.span
                            animate={{
                                rotate: isMobileMenuOpen ? 45 : 0,
                                y: isMobileMenuOpen ? 8 : 0,
                                width: isMobileMenuOpen ? "24px" : "20px"
                            }}
                            className="h-[2px] bg-black block rounded-full"
                        />
                        <motion.span
                            animate={{
                                opacity: isMobileMenuOpen ? 0 : 1,
                                x: isMobileMenuOpen ? -10 : 0
                            }}
                            className="h-[2px] w-6 bg-black block rounded-full"
                        />
                        <motion.span
                            animate={{
                                rotate: isMobileMenuOpen ? -45 : 0,
                                y: isMobileMenuOpen ? -8 : 0,
                                width: isMobileMenuOpen ? "24px" : "16px"
                            }}
                            className="h-[2px] bg-black block rounded-full"
                        />
                    </button>
                </div>
            </div>
            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 top-0 left-0 right-0 bg-white z-40 flex flex-col px-6 pt-24 pb-10 overflow-hidden md:hidden"
                    >
                        {/* Background Accent Glow */}
                        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[40%] bg-[#f4aa38]/5 blur-[120px] rounded-full -z-10" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[40%] bg-[#f4aa38]/5 blur-[120px] rounded-full -z-10" />

                        <div className="flex flex-col gap-6 overflow-y-auto pb-20 relative z-10">
                            {navLinks.map((link, idx) => (
                                <div key={link.label} className="border-b border-black/5 pb-4">
                                    <div
                                        className="flex items-center justify-between"
                                        onClick={() => toggleMobileSublink(link.label)}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${expandedMobileLink === link.label ? 'text-[#f4aa38]' : 'text-black'}`}
                                            onClick={(e) => {
                                                if (link.sublinks) {
                                                    e.preventDefault()
                                                    toggleMobileSublink(link.label)
                                                } else {
                                                    setIsMobileMenuOpen(false)
                                                }
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                        {link.sublinks && (
                                            <motion.span
                                                animate={{
                                                    rotate: expandedMobileLink === link.label ? 180 : 0,
                                                    color: expandedMobileLink === link.label ? '#f4aa38' : 'rgba(0,0,0,0.2)'
                                                }}
                                                className="text-2xl"
                                            >
                                                ↓
                                            </motion.span>
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {expandedMobileLink === link.label && link.sublinks && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden mt-4 pl-4 flex flex-col gap-4"
                                            >
                                                {link.sublinks.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        to={sub.path}
                                                        className="text-lg text-black/60 font-medium hover:text-[#f4aa38] transition-colors flex items-center gap-3"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#f4aa38]/30" />
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            <Link
                                to="/contact"
                                className="text-2xl font-bold tracking-tight text-black border-b border-black/5 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CONTACT
                            </Link>
                        </div>

                        <div className="mt-auto relative z-10">
                            <Link
                                to="/contact"
                                className="w-full h-11 flex items-center justify-center bg-black text-white rounded-2xl text-lg font-bold tracking-tight text-center block shadow-lg shadow-black/10 hover:bg-[#f4aa38] transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Let's Talk
                            </Link>
                        </div>

                        {/* Decorative bottom bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f4aa38]/10 via-[#f4aa38] to-[#f4aa38]/10" />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
