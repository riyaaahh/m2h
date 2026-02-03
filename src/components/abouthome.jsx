import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const text =
    "M2H Infotech LLP is a technology-driven IT solutions company based in Kozhikode, Kerala, India. Founded in 2005, it delivers customized, high-quality software solutions for businesses across industries. With a strong focus on innovation, quality, and customer satisfaction, M2H helps organizations build scalable digital solutions that drive growth.";

export default function AboutHome() {
    const ref = useRef(null);
    const words = text.split(" ");

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"],
    });

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white px-10 md:px-20 py-32 relative overflow-hidden">
            <div className="max-w-[1440px] w-full mx-auto relative z-10">
                {/* Section Header Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-[0.8rem] font-medium tracking-[0.2em] text-[#f4aa38] mb-16 uppercase"
                >
                    <span className="w-12 h-[1px] bg-[#f4aa38]"></span>
                    who we are
                </motion.div>

                {/* Main Reveal Text */}
                <p
                    ref={ref}
                    className="max-w-[1200px] text-3xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight flex flex-wrap gap-x-4 gap-y-1 lowercase text-black"
                >
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + 1 / words.length;

                        const opacity = useTransform(
                            scrollYProgress,
                            [start, end],
                            [0.1, 1]
                        );

                        const color = useTransform(
                            scrollYProgress,
                            [start, end],
                            ["#e5e7eb", "#111111"]
                        );

                        return (
                            <motion.span
                                key={index}
                                style={{ opacity, color }}
                                className="transition-all duration-150"
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </p>

                {/* Footer Link */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24"
                >
                    <Link
                        to="/about"
                        className="group flex items-center gap-6 text-[1.2rem] md:text-[2rem] font-medium lowercase hover:text-[#f4aa38] transition-all duration-500"
                    >
                        discover our story
                        <span className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#f4aa38] group-hover:border-[#f4aa38] transition-all duration-500">
                            <span className="translate-x-0 group-hover:translate-x-1 group-hover:text-white transition-transform">→</span>
                        </span>
                    </Link>
                </motion.div>
            </div>

            {/* Subtle background text as seen in Nitro styles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] -z-10 whitespace-nowrap text-[20vw] font-bold select-none uppercase">
                about m2h
            </div>
        </section>
    );
}