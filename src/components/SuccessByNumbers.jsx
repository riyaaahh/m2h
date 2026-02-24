import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    {
        id: 1,
        value: 20,
        suffix: "+",
        label: "years of experience",
    },
    {
        id: 2,
        value: 200,
        suffix: "",
        label: "experienced professionals",

    },
    {
        id: 3,
        value: 80,
        suffix: "",
        label: "countries served",

    },
    {
        id: 4,
        value: 500,
        suffix: "+",
        label: "projects delivered",
    },
    {
        id: 5,
        value: 500,
        suffix: "+",
        label: "happy clients",
    }
];

const CountUp = ({ to, suffix }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const duration = 2000; // 2 seconds

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(to * ease));

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCount(to);
            }
        };

        requestAnimationFrame(animate);
    }, [to, isInView]);

    return (
        <span ref={nodeRef} className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

export default function SuccessByNumbers() {
    return (
        <section className="bg-white py-32 px-10 md:px-20 relative overflow-hidden">
            {/* Section Header Label */}
            <div className="max-w-[1440px] w-full mx-auto mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-[0.8rem] font-medium tracking-[0.2em] text-[#f4aa38] mb-10 uppercase"
                >
                    <span className="w-12 h-[1px] bg-[#f4aa38]"></span>
                    impact in numbers
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[3rem] md:text-[5rem] font-medium leading-[1.1] tracking-tighter  text-black max-w-none"
                >
                    Quantifying Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4aa38] to-yellow-500">Commitment</span> <br /> To <span className="bg-clip-text bg-gradient-to-r from-[#f4aa38] to-yellow-500">Excellence</span>
                </motion.h2>
            </div>

            <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.8 }}
                        className="flex flex-col gap-4 group cursor-default"
                    >
                        <div className="text-[4rem] md:text-[5rem] font-medium leading-none text-black flex items-baseline gap-1 group-hover:text-[#f4aa38] transition-colors duration-500">
                            <CountUp to={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="h-[1px] w-full bg-black/10 group-hover:bg-[#f4aa38]/30 transition-colors duration-500 origin-left"></div>
                        <div>
                            <h3 className="text-lg font-medium lowercase tracking-wide text-black mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-black/40 lowercase leading-relaxed font-light">
                                {stat.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
