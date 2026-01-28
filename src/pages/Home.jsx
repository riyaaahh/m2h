import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Home = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9])

    const cards = [
        {
            to: "/business",
            icon: "📖",
            title: "Business",
            description: "Strategic vision and innovative growth paradigms for the digital-first era.",
            gradient: "from-[#FF5C00] to-[#FBB03B]"
        },
        {
            to: "/about",
            icon: "🏢",
            title: "Company",
            description: "A collective of visionary minds committed to engineering excellence as a standard.",
            gradient: "from-[#FF5C00] to-[#FBB03B]"
        },
        {
            to: "/services",
            icon: "⚡",
            title: "Products",
            description: "High-performance digital assets architected for scale and uncompromising speed.",
            gradient: "from-[#FF5C00] to-[#FBB03B]"
        }
    ]

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-[#FF5C00]/30 relative overflow-hidden">
            {/* Background Vertical Grid Overlay */}
            <div className="fixed inset-0 vertical-grid pointer-events-none opacity-40 z-0"></div>

            {/* Cinematic Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[70%] rounded-full opacity-10 animate-glow-orange blur-[140px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.08] animate-glow-gold blur-[120px]"></div>
            </div>

            {/* Hero Section - Nitro Style */}
            <section className="relative h-screen flex flex-col justify-center px-10 md:px-20 z-20">
                <div className="flex justify-between items-start w-full mb-2 max-w-[1340px] mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[0.8rem] font-medium tracking-tight text-[#f4aa38]"
                    >
                        hey, we're m2h.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-2 text-[0.8rem] font-medium tracking-tight text-white/40"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#f4aa38] animate-pulse"></span>
                        available for new projects
                    </motion.div>
                </div>

                <motion.div
                    style={{ opacity, scale }}
                    className="max-w-[1400px] mx-auto w-full"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[9rem] font-medium leading-[0.9] tracking-[-0.04em] lowercase"
                    >
                        a software agency
                        <br />
                        <span className="text-white/20">redefining</span> digital
                        <br />
                        experiences with <span className="text-[#FF5C00]">precision</span>
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-20 hidden md:block"
                >
                    <div className="flex flex-col gap-2">
                        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#f4aa38]/40 to-transparent"></div>
                        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-white/20 -rotate-90 origin-left mt-24">scroll to explore</span>
                    </div>
                </motion.div>
            </section>

            {/* Features Feed Style Section */}
            <section className="relative z-20 max-w-[1440px] mx-auto px-10 md:px-20 pb-40 grid grid-cols-1 md:grid-cols-3 gap-10">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link
                            to={card.to}
                            className="group relative block aspect-[4/5] rounded-[2rem] p-10 overflow-hidden border border-white/5 bg-[#080808] hover:border-[#f4aa38]/30 transition-all duration-700 shadow-2xl"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                <span className="text-4xl mb-6 block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {card.icon}
                                </span>
                                <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-[#f4aa38] transition-colors">{card.title}</h3>
                                <p className="text-lg text-white/30 leading-relaxed font-light line-clamp-3 group-hover:text-white/60 transition-colors">
                                    {card.description}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-[0.7rem] font-bold tracking-widest uppercase text-white/20 group-hover:text-[#f4aa38] transition-all">
                                    explore project <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-br from-[#f4aa38]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </Link>
                    </motion.div>
                ))}
            </section>
        </div >
    )
}

export default Home
