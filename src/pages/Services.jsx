import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => {
    const services = [
        { icon: '🚀', title: 'web development', description: 'architecting high-performance digital ecosystems with cutting-edge stacks.' },
        { icon: '📱', title: 'mobile apps', description: 'fluid, cross-platform mobile experiences that feel native and fast.' },
        { icon: '☁️', title: 'cloud solutions', description: 'enterprise-grade cloud infrastructure engineered for massive scale.' },
        { icon: '💡', title: 'it consulting', description: 'strategic technical leadership to navigate complex digital transformations.' },
    ]

    return (
        <div className="min-h-screen bg-black font-['Outfit'] selection:bg-[#FF5C00]/30 relative overflow-hidden">
            {/* Background Vertical Grid Overlay */}
            <div className="fixed inset-0 vertical-grid pointer-events-none opacity-40 z-0"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-48 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-32 max-w-[1000px]"
                >
                    <div className="flex items-center gap-2 text-[0.8rem] font-medium tracking-tight text-white/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        solutions
                    </div>
                    <h1 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.9] lowercase">
                        engineering <span className="text-[#f4aa38]">massive</span> scale through digital <span className="text-white/20">innovation</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="p-16 border border-white/5 bg-white/[0.02] rounded-[2rem] group hover:bg-white/[0.04] transition-all duration-700"
                        >
                            <span className="text-5xl mb-12 block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                                {service.icon}
                            </span>
                            <h3 className="text-4xl font-bold text-white mb-6 lowercase tracking-tight group-hover:text-[#f4aa38] transition-colors">
                                {service.title}
                            </h3>
                            <p className="font-light leading-relaxed text-2xl text-white/30 group-hover:text-white/50 transition-colors lowercase">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

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
                        let's talk <span className="translate-x-0 group-hover:translate-x-3 transition-transform text-[#f4aa38]">→</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Services
