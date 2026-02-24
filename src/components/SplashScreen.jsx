import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import logo from '../assets/images/m2h-white.png'

const SplashScreen = ({ finishLoading }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false)
            setTimeout(finishLoading, 600)
        }, 1200)

        return () => clearTimeout(timeout)
    }, [finishLoading])

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        transition: { duration: 2.6, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
                >
                    {/* Animated background shapes */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.03, 0.05, 0.03]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-[#f4aa38] blur-[120px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.03, 0.06, 0.03]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-[#f4aa38] blur-[120px]"
                        />
                    </div>

                    <div className="relative flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                            }}
                            className="relative"
                        >
                            <img
                                src={logo}
                                alt="M2H Logo"
                                className="h-20 md:h-28 w-auto object-contain relative z-10"
                            />

                            {/* Reflection effect */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                                className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] z-20 pointer-events-none"
                            />

                            {/* Loading bar container */}
                            <div className="absolute -bottom-10 left-0 right-0 h-[1.5px] bg-black/[0.03] overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ width: "0%", left: "0%" }}
                                    animate={{
                                        width: ["0%", "50%", "100%"],
                                        left: ["0%", "0%", "0%"],
                                        transition: { duration: 2, ease: "easeInOut" }
                                    }}
                                    className="h-full bg-[#f4aa38] relative"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.8, duration: 1 }
                            }}
                            className="absolute -bottom-24 whitespace-nowrap"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-[0.65rem] tracking-[0.4em] font-medium text-black/30 uppercase">
                                    Strategic Technology Partner
                                </p>
                                <div className="flex gap-1">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                            className="w-1 h-1 rounded-full bg-[#f4aa38]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SplashScreen
