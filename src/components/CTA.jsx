import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CTA() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="bg-white py-24 px-10 md:px-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#f4aa38] opacity-[0.03] rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-[1440px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-[0.7rem] font-medium tracking-[0.2em] text-[#f4aa38] mb-8 uppercase"
                >
                    <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                    start your journey
                    <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-medium leading-[0.95] tracking-tight lowercase text-black mb-10 max-w-[1000px]"
                >
                    we would love to <br /> hear about your <span className="text-[#f4aa38] italic">next project</span>.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link
                        to="/contact"
                        className="relative group inline-block"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span className="relative z-10 block px-10 py-5 md:px-12 md:py-6 text-xl md:text-2xl font-medium tracking-tight lowercase bg-[#111] text-white rounded-full overflow-hidden transition-all duration-500 group-hover:bg-[#f4aa38]">
                            <span className="relative z-10 flex items-center gap-4">
                                get in touch
                                <motion.span
                                    animate={{ x: isHovered ? 5 : 0 }}
                                    className="inline-block"
                                >
                                    →
                                </motion.span>
                            </span>

                            {/* Fill Effect */}
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: isHovered ? "0%" : "100%" }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#f4aa38] z-0"
                            />
                        </span>

                        {/* Outer Ring Animation */}
                        <span className="absolute inset-0 rounded-full border border-black/10 scale-105 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"></span>
                        <span className="absolute inset-0 rounded-full border border-black/5 scale-110 opacity-0 group-hover:scale-120 group-hover:opacity-100 transition-all duration-700 delay-75"></span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
