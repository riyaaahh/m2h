import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
    const heroRef = useRef(null)
    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(heroProgress, [0, 0.5], [1, 0])
    const scale = useTransform(heroProgress, [0, 0.5], [1, 0.9])
    const y = useTransform(heroProgress, [0, 0.5], [0, 100])

    return (
        <section ref={heroRef} className="relative h-screen flex flex-col gap-20 justify-center px-10 md:px-20 overflow-hidden">
            {/* Background Vertical Grid Overlay - Section specific */}
            {/* <div className="absolute inset-0 vertical-grid pointer-events-none opacity-100 z-0" /> */}
            <div className="flex justify-between items-start w-full mb-2 max-w-[1340px] mx-auto  ">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[1rem] font-medium tracking-tight text-[#f4aa38]"
                >
                    hey, we're m2h.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2 text-[1 rem] font-medium tracking-tight text-black/40"
                >
                    <span className="w-2 h-2 rounded-full bg-[#f4aa38] animate-pulse"></span>
                    available for new projects
                </motion.div>
            </div>

            <motion.div
                style={{ opacity, scale, y }}
                className="max-w-[1400px] mx-auto w-full"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[6.7rem]  font-medium leading-[1.0] tracking-[-0.04em]  text-black"
                >
                    A Software Agency
                    <br />
                    <span className="text-[#f4aa38]">Redefining</span> <span className="text-black">Digital</span>
                    <br />
                    Experiences With <span className="text-[#f4aa38]"> <br></br>Precision</span>
                </motion.h1>
            </motion.div>

            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-20 hidden md:block"
            >
                <div className="flex flex-col gap-2">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#f4aa38]/80 to-transparent"></div>
                    <span className="text-[0.6rem] uppercase tracking-[0.4em] text-black/40 -rotate-90 origin-left mt-24">scroll to explore</span>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
