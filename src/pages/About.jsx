import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className="min-h-screen bg-black font-['Outfit'] selection:bg-[#FF5C00]/30 relative overflow-hidden">
            {/* Background Vertical Grid Overlay */}
            <div className="fixed inset-0 vertical-grid pointer-events-none opacity-40 z-0"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-48 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[1100px]"
                >
                    <div className="flex items-center gap-2 text-[0.8rem] font-medium tracking-tight text-white/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        our vision
                    </div>

                    <h1 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.9] lowercase mb-20">
                        we bridge the <span className="text-white/20">gap</span> between <span className="text-[#f4aa38]">imagination</span> and execution
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-10">
                            <p className="text-2xl md:text-3xl leading-relaxed font-light text-white/40 lowercase">
                                at m2h infotech, our engineering dna is built on precision, scalability, and the relentless pursuit of digital excellence. we don't just build software; we architect futures.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {['web architecture', 'next-gen mobile', 'cloud intelligence', 'deep consulting'].map((item, i) => (
                                    <span key={i} className="px-6 py-3 rounded-full text-[0.7rem] font-medium tracking-tight lowercase border border-white/5 bg-white/[0.02] text-white/30 hover:text-white hover:border-[#f4aa38]/30 transition-all duration-500">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-end">
                            <Link
                                to="/contact"
                                className="text-[1.2rem] md:text-[2rem] font-medium tracking-tight lowercase hover:text-[#f4aa38] transition-colors flex items-center gap-4 group mt-10 md:mt-0"
                            >
                                start a project <span className="translate-x-0 group-hover:translate-x-3 transition-transform text-[#f4aa38]">→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
