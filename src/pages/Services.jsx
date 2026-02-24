import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CTA from '../components/CTA'

const Services = () => {
    const services = [
        { icon: '🚀', title: 'web development', description: 'architecting high-performance digital ecosystems with cutting-edge stacks.' },
        { icon: '📱', title: 'mobile apps', description: 'fluid, cross-platform mobile experiences that feel native and fast.' },
        { icon: '☁️', title: 'cloud solutions', description: 'enterprise-grade cloud infrastructure engineered for massive scale.' },
        { icon: '💡', title: 'it consulting', description: 'strategic technical leadership to navigate complex digital transformations.' },
    ]

    return (
        <div className="min-h-screen bg-white font-['Outfit'] selection:bg-[#f4aa38]/10 relative overflow-hidden">
            {/* Background Vertical Grid Overlay */}
            <div className="fixed inset-0 vertical-grid pointer-events-none opacity-[0.03] z-0"></div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/2 -z-0" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-50/15 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 -z-0" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-48 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-32 flex flex-col items-center text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-[0.8rem] font-medium tracking-tight text-black/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        solutions
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                    </div>
                    <h1 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.9] lowercase text-black max-w-[1200px] mx-auto">
                        engineering <span className="text-[#f4aa38]">massive</span> scale through digital <span className="text-black/20">innovation</span>
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
                            className="p-16 border border-black/5 bg-black/[0.01] rounded-[2rem] group hover:bg-slate-50 transition-all duration-700"
                        >
                            <span className="text-5xl mb-12 block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                                {service.icon}
                            </span>
                            <h3 className="text-4xl font-bold text-black mb-6 lowercase tracking-tight group-hover:text-[#f4aa38] transition-colors">
                                {service.title}
                            </h3>
                            <p className="font-light leading-relaxed text-2xl text-black/50 group-hover:text-black/70 transition-colors lowercase">
                                {service.description}
                            </p>
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

export default Services
