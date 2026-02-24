import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../../components/CTA'

const Fintech = () => {
    const challenges = [
        "Security vulnerabilities",
        "Regulatory hurdles",
        "Transaction latency",
        "User trust issues",
        "Cross-border complexities"
    ]

    const products = [
        {
            name: "LedgeMaster",
            description: "Distributed ledger core for immutable financial record-keeping.",
            link: "/products/ledgemaster"
        },
        {
            name: "PaySphere",
            description: "Omni-channel payment gateway supporting global currencies.",
            link: "/products/paysphere"
        },
        {
            name: "BlockAudit",
            description: "Automated compliance and auditing tool for blockchain assets.",
            link: "/products/blockaudit"
        }
    ]

    const highlights = [
        "Blockchain security",
        "Real-time payments",
        "Fraud detection",
        "Regulatory automation",
        "Open banking APIs",
        "Biometric auth"
    ]

    return (
        <div className="min-h-screen bg-white font-['Outfit'] selection:bg-[#f4aa38]/10 text-black">
            {/* Header / Hero Section */}
            <section className="relative pt-48 pb-32 px-10 max-w-[1440px] mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f4aa38]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-[0.8rem] font-medium tracking-tight text-black/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        Business Solutions
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                    </div>
                    <h1 className="text-[4rem] md:text-[6rem] font-medium tracking-tighter leading-[0.95] lowercase mb-12 max-w-[1000px]">
                        Financial <span className="text-[#f4aa38]">Technology</span> Solutions
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-black/60 max-w-[800px] leading-relaxed lowercase mb-16 mx-auto">
                        Modernizing global finance with secure, distributed ledger systems and real-time transaction engines.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 h-11 flex items-center justify-center bg-black text-white rounded-full text-lg font-medium tracking-tight lowercase hover:bg-[#f4aa38] transition-colors"
                        >
                            Let's Talk
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            {/* Category Explanation Section */}
            <section className="py-32 px-10 bg-black/2 border-y border-black/5">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-20"
                    >
                        <div>
                            <p className="text-2xl font-light leading-relaxed text-black/80 lowercase">
                                our fintech solutions empower institutions to navigate the rapidly evolving digital landscape. we combine robust security protocols with seamless user experiences to build the next generation of financial services.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[0.9rem] text-black/50 uppercase tracking-widest font-medium">
                            <div className="space-y-4">
                                <p className="text-[#f4aa38]">Key Focus Areas</p>
                                <ul className="space-y-2">
                                    <li>Blockchain Core</li>
                                    <li>Digital Payments</li>
                                    <li>Asset Management</li>
                                    <li>RegTech</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[#f4aa38]">Key Business Impact</p>
                                <ul className="space-y-2">
                                    <li>Transaction Trust</li>
                                    <li>global Reach</li>
                                    <li>Regulatory Clarity</li>
                                    <li>Process Automation</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Challenges we Solve */}
            <section className="py-40 px-10 max-w-[1440px] mx-auto overflow-hidden">
                <div className="flex flex-col md:flex-row gap-20 items-start">
                    <div className="md:w-1/3 sticky top-32">
                        <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase mb-8">
                            Key Challenges <br /> <span className="text-black/20">We Solve</span>
                        </h2>
                        <p className="text-black/50 lowercase text-lg">
                            bridging the gap between legacy banking and the digital economy.
                        </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 gap-px bg-black/5 border border-black/5 rounded-[2rem] overflow-hidden">
                        {challenges.map((challenge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 flex items-center justify-between group hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-xl lowercase font-light text-black/60 group-hover:text-black group-hover:pl-4 transition-all duration-500">
                                    {challenge}
                                </span>
                                <span className="text-2xl text-[#f4aa38] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products We Offer */}
            <section className="py-40 px-10 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase mb-6">
                            Products <span className="text-[#f4aa38]">We Offer</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-[#f4aa38] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl mb-10 flex items-center justify-center text-2xl">
                                    {index === 0 ? "🔒" : index === 1 ? "🌐" : "📈"}
                                </div>
                                <h3 className="text-2xl font-bold mb-6 lowercase tracking-tight">{product.name}</h3>
                                <p className="text-black/50 mb-10 lowercase leading-relaxed italic border-y border-black/5 py-6">
                                    {product.description}
                                </p>
                                <Link
                                    to={product.link}
                                    className="mt-auto px-8 h-11 flex items-center justify-center bg-blue-400 text-white rounded-full text-[0.75rem] font-bold uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-400/20"
                                >
                                    Know More
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="py-48 px-10">
                <div className="max-w-[1440px] mx-auto text-center">
                    <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase mb-20">
                        Product <span className="text-black/20">Highlights</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#f4aa38]/10 flex items-center justify-center text-[#f4aa38]">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-lg font-medium lowercase tracking-tight text-black/70">
                                    {highlight}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <div className="mt-20">
                <CTA />
            </div>
        </div>
    )
}

export default Fintech
