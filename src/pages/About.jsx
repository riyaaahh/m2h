import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CTA from '../components/CTA'

const About = () => {
    return (
        <div className="min-h-screen bg-white font-['Outfit'] selection:bg-[#f4aa38]/30 relative overflow-hidden">


            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-50/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-48 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-[0.8rem] font-medium tracking-tight text-black/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        our vision
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                    </div>

                    <h1 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.9] lowercase mb-20 text-black max-w-[1200px]">
                        we bridge the <span className="text-black/20">gap</span> between <span className="text-[#f4aa38]">imagination</span> and execution
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-10">
                            <p className="text-2xl md:text-3xl leading-relaxed font-light text-black/50 lowercase">
                                at m2h infotech, our engineering dna is built on precision, scalability, and the relentless pursuit of digital excellence. we don't just build software; we architect futures.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {['web architecture', 'next-gen mobile', 'cloud intelligence', 'deep consulting'].map((item, i) => (
                                    <span key={i} className="px-6 py-3 rounded-full text-[0.7rem] font-medium tracking-tight lowercase border border-black/5 bg-black/[0.02] text-black/40 hover:text-black hover:border-[#f4aa38]/30 transition-all duration-500">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Premium CTA Section */}
            <div className="mt-20">
                <CTA />
            </div>
        </div>
    )
}

export default About
