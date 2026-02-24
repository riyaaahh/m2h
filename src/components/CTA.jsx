import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function CTA() {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            ref={containerRef}
            className="bg-white py-24 md:py-32 px-10 md:px-20 relative overflow-hidden flex items-center justify-center min-h-[40vh]"
        >
            {/* Background Decoration - Premium Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#f4aa38] opacity-[0.04] rounded-full blur-[100px]"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-yellow-400 opacity-[0.02] rounded-full blur-[80px]"
                />
            </div>

            <div className="max-w-[1440px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-[0.7rem] font-bold tracking-[0.2em] text-[#f4aa38] mb-8 uppercase"
                >
                    <span className="w-10 h-[1px] bg-[#f4aa38]"></span>
                    let's innovate together
                    <span className="w-10 h-[1px] bg-[#f4aa38]"></span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] font-medium leading-[1] tracking-tighter text-black mb-12 max-w-[1000px] lowercase"
                >
                    ready to bring your <br />
                    <span className="text-black/20 italic">vision</span> to <span className="text-[#f4aa38]">life?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <Link
                        to="/contact"
                        className="relative group inline-block"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="relative z-10 px-10 py-5 md:px-14 md:py-6 bg-black text-white rounded-full overflow-hidden transition-all duration-700 group-hover:bg-[#f4aa38] group-hover:scale-105 shadow-xl">
                            <span className="relative z-10 flex items-center gap-4 text-lg md:text-xl font-medium tracking-tight lowercase">
                                start a project
                                <motion.span
                                    animate={{
                                        x: isHovered ? 8 : 0,
                                        scale: isHovered ? 1.1 : 1
                                    }}
                                    className="inline-block"
                                >
                                    →
                                </motion.span>
                            </span>

                            {/* Liquid Fill Effect */}
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: isHovered ? "0%" : "100%" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 bg-[#f4aa38] z-0"
                            />
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* Background Texture/Noise could be added here if needed */}
        </section>
    );
}
