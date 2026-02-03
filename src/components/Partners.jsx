import { motion } from 'framer-motion'
import logo1 from '../assets/images/logos/1.png'
import logo2 from '../assets/images/logos/2.png'
import logo3 from '../assets/images/logos/3.png'
import logo4 from '../assets/images/logos/4.png'
import logo5 from '../assets/images/logos/5.png'
import logo6 from '../assets/images/logos/6.png'
import logo7 from '../assets/images/logos/7.png'
import logo8 from '../assets/images/logos/8.png'
import logo9 from '../assets/images/logos/9.png'
import logo10 from '../assets/images/logos/10.png'
import logo11 from '../assets/images/logos/11.png'
import logo12 from '../assets/images/logos/12.png'
import logo13 from '../assets/images/logos/13.png'
import logo14 from '../assets/images/logos/14.png'
import logo15 from '../assets/images/logos/15.png'
import logo16 from '../assets/images/logos/16.png'
import logo17 from '../assets/images/logos/17.png'
import logo18 from '../assets/images/logos/18.png'

const Partners = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo5, logo6,
        logo7, logo8, logo9, logo10, logo11, logo12,
        logo13, logo14, logo15, logo16, logo17, logo18
    ]

    // Double the logos for seamless infinite carousel
    const duplicatedLogos = [...logos, ...logos]

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-10 md:px-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-4 text-[0.8rem] font-medium tracking-[0.2em] text-[#f4aa38] mb-8 uppercase">
                            <span className="w-12 h-[1px] bg-[#f4aa38]"></span>
                            our partners
                        </div>
                        <h2 className="text-[3rem] md:text-[5rem] font-medium leading-[0.9] tracking-tight lowercase text-black">
                            trusted by <span className="text-black/20">global</span> industry leaders
                        </h2>
                    </motion.div>
                </div>

                {/* Partners Logo Carousel */}
                <div className="relative group">
                    <div className="flex overflow-hidden relative">
                        {/* Gradient Masks for fade effect */}
                        <div className="absolute inset-y-0 left-0 w-32 "></div>
                        <div className="absolute inset-y-0 right-0 w-32 "></div>

                        <motion.div
                            className="flex gap-20 py-10"
                            animate={{
                                x: [0, -1920], // Adjust based on total width
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="w-32 md:w-40 h-20 flex-shrink-0 flex items-center justify-center hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                                >
                                    <img
                                        src={logo}
                                        alt={`Partner Logo ${index + 1}`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
