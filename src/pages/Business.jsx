import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

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
            id: 'fintech',
            icon: '💰',
            title: 'fintech',
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
        <div className="min-h-screen bg-white font-['Outfit'] selection:bg-[#f4aa38]/10 relative overflow-hidden">
            {/* Background Vertical Grid Overlay */}
            <div className="fixed inset-0 vertical-grid pointer-events-none opacity-[0.03] z-0"></div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 -z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-50/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-0" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-48 pb-32">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-32 flex flex-col items-center text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-[0.8rem] font-medium tracking-tight text-black/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        our sectors
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                    </div>
                    <h1 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.9] lowercase text-black max-w-[1200px] mx-auto">
                        strategic industry <span className="text-black/20">solutions</span> for the <span className="text-[#f4aa38]">modern</span> era
                    </h1>
                </motion.div>

                {/* Sectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5 overflow-hidden rounded-[2rem] shadow-xl">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.id}
                            id={sector.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white flex flex-col group hover:bg-slate-50 transition-colors"
                        >
                            <Link
                                to={`/business/${sector.id}`}
                                className="p-16 flex flex-col flex-1 h-full"
                            >
                                <span className="text-4xl mb-10 block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" >
                                    {sector.icon}
                                </span>

                                <h3 className="text-3xl font-bold text-black mb-6 lowercase tracking-tight group-hover:text-[#f4aa38] transition-colors">
                                    {sector.title}
                                </h3>

                                <p className="text-xl font-light text-black/50 mb-10 leading-relaxed lowercase">
                                    {sector.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {sector.features.map((feature) => (
                                        <span key={feature} className="px-5 py-2 rounded-full border border-black/5 text-[0.65rem] font-medium tracking-tight lowercase text-black/40 group-hover:text-black group-hover:border-[#f4aa38]/20 transition-all duration-500">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium CTA Section */}
            <div className="mt-20">
                <CTA />
            </div>
        </div>
    )
}

export default Business
