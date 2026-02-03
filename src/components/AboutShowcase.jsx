import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section
            ref={containerRef}
            className="bg-black text-white py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
        >
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-80 z-0"></div>

            {/* Rotating Circle Background */}
            <motion.div
                style={{ rotate }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 z-0"
            />
            <motion.div
                style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 z-0"
            />

            <div className="relative z-10 max-w-[1240px] px-10 text-center">
                <motion.div
                    style={{ y }}
                    className="mb-12"
                >
                    <p className="text-[#f4aa38] tracking-[0.2em] font-medium uppercase mb-6 text-sm">
                        Redefining Boundaries
                    </p>
                    <h2 className="text-5xl md:text-8xl font-bold leading-tight tracking-tighter mb-8">
                        Innovating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4aa38] to-yellow-200">Beyond</span> <br />
                        the Ordinary.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        { title: "Visionary Tech", text: "We leverage cutting-edge AI and seamless architectures to build platforms that don't just work—they evolve." },
                        { title: "Global Impact", text: "From local startups to international enterprises, our digital footprints span continents, connecting people through code." },
                        { title: "Human First", text: "Technology is powerful, but empathy is transformative. We design with the user at the heart of every pixel." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 group"
                        >
                            <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#f4aa38] transition-colors">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed font-light">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutShowcase;
