import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/images/m2h-infotech-logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        business: [
            { label: 'AI', path: 'business/ai' },
            { label: 'Fintek', path: '/business/fintech' },
            { label: 'HRMS', path: '/business/hrms' },
            { label: 'Healthcare', path: '/business/healthcare' },
        ],
        company: [
            { label: 'About Us', path: '/about' },
            { label: 'Careers', path: '/about#careers' },
            { label: 'Blogs', path: '/about#blogs' },
            { label: 'Events', path: '/about#events' },
        ],
        products: [
            { label: 'Facekit AI', path: '/services#facekit' },
            { label: 'Pilot AI', path: '/services#pilot' },
            { label: 'Recruitment', path: '/services#recruitment' },
            { label: 'AlphaPay', path: '/services#alphapay' },
            { label: 'Tijori', path: '/services#tijori' },
            { label: 'WPS', path: '/services#wps' },
            { label: 'PayRoute', path: '/services#payroute' },
            { label: 'OfficeKit', path: '/services#officekit' },
        ]
    }

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        }
    ]

    return (
        <footer className="relative bg-white pt-32 pb-12 overflow-hidden border-t border-black/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-50/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10" />

            {/* Vertical Grid Lines - Matching Home Page */}
            <div className="absolute inset-0 vertical-grid pointer-events-none opacity-[0.03] -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-10">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
                    {/* Brand Meta Section */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <Link to="/" className="inline-block mb-10 group">
                                <motion.img
                                    whileHover={{ scale: 1.02 }}
                                    src={logo}
                                    alt="M2H Logo"
                                    className="h-14 w-auto "
                                />
                            </Link>
                            <h2 className="text-[2.5rem] leading-[1.1] font-medium tracking-tighter text-black mb-8">
                                Redefining digital<br />
                                <span className="text-[#f4aa38]">experiences</span> with precision.
                            </h2>
                            <p className="text-[1.1rem] leading-relaxed text-black/50 font-light mb-12 max-w-md">
                                At M2H Infotech, we grow our employees into extraordinary individuals by creating new ideas in human transformation.
                            </p>

                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href="#"
                                        whileHover={{ y: -4, backgroundColor: '#f4aa38', color: '#fff' }}
                                        className="w-11 h-11 flex items-center justify-center rounded-full border border-black/5 bg-transparent text-black/40 transition-all duration-300"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Contact Inline for Desktop */}
                        <div className="hidden lg:flex mt-20 gap-12 pt-12 border-t border-black/5">
                            <div>
                                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#f4aa38] mb-4">Start a Conversation</p>
                                <a href="mailto:info@m2hinfotech.com" className="text-[1.1rem] font-medium hover:text-[#f4aa38] transition-colors">
                                    info@m2hinfotech.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
                            {/* Office Section - High Visibility */}
                            <div className="md:col-span-3 pb-12 border-b border-black/5">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#f4aa38]/10 text-[#f4aa38] text-[0.7rem] font-bold uppercase tracking-wider mb-8">Our Presence</span>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                    <div className="space-y-2">
                                        <p className="text-[0.8rem] font-bold text-black opacity-30 uppercase tracking-widest">United States</p>
                                        <p className="text-[1.1rem] font-light text-black/80">+1 (626) 5456131</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[0.8rem] font-bold text-black opacity-30 uppercase tracking-widest">United Arab Emirates</p>
                                        <p className="text-[1.1rem] font-light text-black/80">+971 5519 97892</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[0.8rem] font-bold text-black opacity-30 uppercase tracking-widest">India (HQ)</p>
                                        <p className="text-[1.1rem] font-light text-black/80">+91 495 2998279</p>
                                    </div>
                                </div>
                            </div>

                            {/* Link Groups */}
                            <div className="space-y-8">
                                <h4 className="text-[0.9rem] font-bold text-black uppercase tracking-widest">Business</h4>
                                <ul className="space-y-4">
                                    {footerLinks.business.map((link) => (
                                        <li key={link.label}>
                                            <Link to={link.path} className="text-[1rem] text-black/40 hover:text-[#f4aa38] transition-all duration-300 block transform hover:translate-x-1">
                                                {link.label.toLowerCase()}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-8">
                                <h4 className="text-[0.9rem] font-bold text-black uppercase tracking-widest">Products</h4>
                                <ul className="space-y-4">
                                    {footerLinks.products.map((link) => (
                                        <li key={link.label}>
                                            <Link to={link.path} className="text-[1rem] text-black/40 hover:text-[#f4aa38] transition-all duration-300 block transform hover:translate-x-1">
                                                {link.label.toLowerCase()}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-8">
                                <h4 className="text-[0.9rem] font-bold text-black uppercase tracking-widest">Company</h4>
                                <ul className="space-y-4">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.label}>
                                            <Link to={link.path} className="text-[1rem] text-black/40 hover:text-[#f4aa38] transition-all duration-300 block transform hover:translate-x-1">
                                                {link.label.toLowerCase()}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern Location Banner */}
                <div className="relative group overflow-hidden bg-[#fafafa] border border-black/5 rounded-[2rem] p-10 md:p-16 mb-24">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                        <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#f4aa38]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h5 className="text-[1.2rem] font-medium text-black">Registered Office</h5>
                            <p className="text-[1rem] leading-relaxed text-black/50 font-light">
                                Ground Floor, Cyber Park,<br />Calicut - 673 016, Kerala, India
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#f4aa38]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <h5 className="text-[1.2rem] font-medium text-black">Quick Support</h5>
                            <a href="tel:+918891213016" className="text-[1.5rem] font-light text-black hover:text-[#f4aa38] transition-colors block">
                                +91 88912 13016
                            </a>
                        </div>
                        <div className="flex items-end lg:justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 h-11 flex items-center justify-center bg-black text-white rounded-full text-[0.9rem] font-bold uppercase tracking-widest hover:bg-[#f4aa38] transition-all duration-300 shadow-xl shadow-black/10"
                            >
                                Get in touch
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Final Copyright Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
                    <p className="text-[0.85rem] text-black/30 font-medium tracking-wide">
                        © {currentYear} M2H INFOTECH LLP. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-10">
                        <Link to="#" className="text-[0.75rem] font-bold text-black/30 hover:text-black transition-colors uppercase tracking-[0.2em]">Privacy & Policy</Link>
                        <Link to="#" className="text-[0.75rem] font-bold text-black/30 hover:text-black transition-colors uppercase tracking-[0.2em]">Terms & Conditions</Link>
                        <Link to="#" className="text-[0.75rem] font-bold text-black/30 hover:text-black transition-colors uppercase tracking-[0.2em]">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
