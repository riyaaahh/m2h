import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Business = () => {
    const sectors = [
        {
            id: 'ai',
            icon: '🤖',
            title: 'artificial intelligence',
            description: 'leveraging neural networks and machine learning to automate complex decision-making processes.',
            features: ['neural architectures', 'predictive modeling', 'nlp integration']
        },
        {
            id: 'fintek',
            icon: '💰',
            title: 'financial technology',
            description: 'modernizing global finance with secure, distributed ledger systems and real-time transaction engines.',
            features: ['blockchain core', 'smart contracts', 'payment gateways']
        },
        {
            id: 'hrms',
            icon: '👥',
            title: 'hr management',
            description: 'optimizing human capital with intelligent tracking and comprehensive performance analytics.',
            features: ['talent sourcing', 'yield analytics', 'workforce planning']
        },
        {
            id: 'healthcare',
            icon: '🏥',
            title: 'healthcare systems',
            description: 'engineering resilient digital foundations for patient care and medical data management.',
            features: ['ehr integration', 'telehealth hubs', 'vitals monitoring']
        }
    ]

    return (
        <div className="min-h-screen bg-black font-['Outfit'] selection:bg-[#FF5C00]/30 relative">
            {/* Background Vertical Grid Overlay */}
            <div className="fixed inset-0 vertical-grid pointer-events-none opacity-40 z-0"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-48 pb-32">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-32 max-w-[1000px]"
                >
                    <div className="flex items-center gap-2 text-[0.8rem] font-medium tracking-tight text-white/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        our sectors
                    </div>
                    <h1 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.9] lowercase">
                        strategic industry <span className="text-white/20">solutions</span> for the <span className="text-[#f4aa38]">modern</span> era
                    </h1>
                </motion.div>

                {/* Sectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-[2rem]">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.id}
                            id={sector.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-black/80 backdrop-blur-xl p-16 flex flex-col group hover:bg-black/60 transition-colors"
                        >
                            <span className="text-4xl mb-10 block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                                {sector.icon}
                            </span>

                            <h3 className="text-3xl font-bold text-white mb-6 lowercase tracking-tight group-hover:text-[#f4aa38] transition-colors">
                                {sector.title}
                            </h3>

                            <p className="text-xl font-light text-white/30 mb-10 leading-relaxed lowercase">
                                {sector.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {sector.features.map((feature) => (
                                    <span key={feature} className="px-5 py-2 rounded-full border border-white/10 text-[0.65rem] font-medium tracking-tight lowercase text-white/20 group-hover:text-white/40 group-hover:border-[#f4aa38]/20 transition-all duration-500">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-40"
                >
                    <Link
                        to="/contact"
                        className="text-[1.2rem] md:text-[2rem] font-medium tracking-tight lowercase hover:text-[#f4aa38] transition-colors flex items-center gap-4 group"
                    >
                        start a project <span className="translate-x-0 group-hover:translate-x-3 transition-transform text-[#f4aa38]">→</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Business
