import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const items = [
    {
        title: "Redefining Boundaries",
        desc: "Innovative digital solutions crafted with precision.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
        title: "Visionary Technology",
        desc: "Building scalable and future-ready platforms.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    {
        title: "Seamless Experiences",
        desc: "Design-driven engineering for modern brands.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
]

export default function ScrollShowcase() {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-black text-white">
            <div className="sticky top-0 h-screen flex items-center">
                {/* LEFT */}
                <div className="w-1/2 px-20 space-y-20">
                    {items.map((item, i) => {
                        const start = i / items.length
                        const end = (i + 1) / items.length

                        const opacity = useTransform(
                            scrollYProgress,
                            [start, end],
                            [0, 1]
                        )

                        const y = useTransform(
                            scrollYProgress,
                            [start, end],
                            [40, 0]
                        )

                        return (
                            <motion.div
                                key={i}
                                style={{ opacity, y }}
                                className="absolute"
                            >
                                <h2 className="text-5xl font-semibold mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-lg text-gray-300 max-w-md">
                                    {item.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* RIGHT */}
                <div className="w-1/2 flex justify-center items-center">
                    <div className="relative w-[420px] h-[520px]">
                        {items.map((item, i) => {
                            const start = i / items.length
                            const end = (i + 1) / items.length

                            const opacity = useTransform(
                                scrollYProgress,
                                [start, end],
                                [0, 1]
                            )

                            const scale = useTransform(
                                scrollYProgress,
                                [start, end],
                                [0.95, 1]
                            )

                            return (
                                <motion.img
                                    key={i}
                                    src={item.image}
                                    style={{ opacity, scale }}
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}