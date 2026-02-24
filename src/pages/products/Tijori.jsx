import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Tijori = () => {
    const features = [
        { title: "Digital Vault", description: "Ultra-secure storage for digital assets protected by multi-factor biometrics." },
        { title: "Smart Asset Tracking", description: "Real-time monitoring and reporting of asset movements and valuations." },
        { title: "Transaction Auditing", description: "Full transparency with an immutable audit trail for every single action." },
        { title: "Heir Management", description: "Secure succession planning for digital legacy and asset transfer." }
    ]

    const workflow = [
        { step: "01", title: "Verification", description: "Multi-biometric authentication to confirm user identity." },
        { step: "02", title: "Deposit", description: "Secure encryption and sharding of digital assets across distributed nodes." },
        { step: "03", title: "Monitoring", description: "24/7 AI-driven surveillance and instant alerts for any access attempts." }
    ]

    const testimonials = [
        { quote: "Tijori gives me peace of mind. Knowing my digital assets are protected by biometrics is a relief.", author: "Alex Rivera", role: "Crypto Asset Manager" },
        { quote: "The heir management feature is revolutionary. It's the only tool that handles digital legacy properly.", author: "Maria Garcia", role: "Wealth Consultant" }
    ]

    const pricing = [
        { name: "Personal", price: "$19/mo", features: ["Up to 10GB storage", "Standard biometrics", "Single heir"] },
        { name: "Pro", price: "$49/mo", features: ["Up to 100GB storage", "Advanced multi-factor", "Multiple heirs"], popular: true },
        { name: "Family/Vault", price: "Custom", features: ["Unlimited storage", "On-site backup options", "Priority legal support"] }
    ]

    const faqs = [
        { q: "What happens if I lose my biometric data?", a: "We have multiple recovery paths including trusted contact verify and physical identity verification." },
        { q: "Is the data encrypted?", a: "Yes, using AES-256-GCM encryption with keys stored in hardware security modules (HSM)." },
        { q: "Can I store legal documents?", a: "Absolutely. Tijori is designed for any sensitive digital file, including IDs and contracts." }
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
                    className="relative z-10 text-center flex flex-col items-center"
                >
                    <div className="flex items-center justify-center gap-2 text-[0.8rem] font-medium tracking-tight text-black/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        Products / Fintech
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                    </div>
                    <h1 className="text-[4rem] md:text-[7rem] font-medium tracking-tighter leading-[0.95] lowercase mb-12">
                        Tijori <span className="text-[#f4aa38]">Digital</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-black/60 max-w-[800px] leading-relaxed lowercase mb-16 mx-auto">
                        A highly secure digital vault and asset management system for individuals and institutions.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 h-11 flex items-center justify-center bg-black text-white rounded-full text-xl font-medium tracking-tight lowercase hover:bg-[#f4aa38] transition-colors"
                        >
                            Let's Talk
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            {/* What the Product Does */}
            <section className="py-32 px-10 bg-black/2 border-y border-black/5">
                <div className="max-w-[1440px] mx-auto text-center">
                    <h2 className="text-3xl md:text-[5rem] font-medium tracking-tighter lowercase mb-12">What the Product <span className="text-[#f4aa38]">Does</span></h2>
                    <p className="text-xl md:text-2xl font-light text-black/70 max-w-[1000px] mx-auto leading-relaxed lowercase">
                        Tijori provides military-grade protection for digital assets, documents, and credentials. It combines advanced cryptography with a user-friendly interface to ensure that only you—and those you designate—can ever access your digital wealth.
                    </p>
                </div>
            </section>

            {/* Product Features & Benefits */}
            <section className="py-40 px-10 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-12 shrink-0">
                        <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase">Features & <br /> <span className="text-black/20">Benefits</span></h2>
                        <div className="grid grid-cols-1 gap-8">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-[#f4aa38]/10 flex items-center justify-center text-[#f4aa38] shrink-0 font-bold">{i + 1}</div>
                                    <div>
                                        <h3 className="text-xl font-bold lowercase mb-2">{f.title}</h3>
                                        <p className="text-black/50 lowercase font-light">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-[3rem] h-full min-h-[400px] flex items-center justify-center border border-black/5 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-[#f4aa38]/20 to-transparent p-20 flex items-center justify-center">
                            <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl relative p-8 flex flex-col items-center">
                                <div className="w-16 h-4 bg-slate-100 rounded mb-10"></div>
                                <div className="w-24 h-24 rounded-full border-4 border-[#f4aa38] flex items-center justify-center mb-8">
                                    <div className="w-12 h-12 bg-[#f4aa38]/10 rounded-full"></div>
                                </div>
                                <div className="w-full space-y-2">
                                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                                    <div className="h-2 w-4/5 bg-slate-100 rounded"></div>
                                </div>
                                <div className="mt-auto w-full h-10 bg-black rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works / Workflow */}
            <section className="py-40 px-10 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase mb-6">How it <span className="text-[#f4aa38]">Works</span></h2>
                        <div className="w-20 h-[2px] bg-[#f4aa38] mx-auto"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-12 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/5 hidden md:block -translate-y-1/2 -z-0"></div>
                        {workflow.map((w, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-12 rounded-[2.5rem] flex-1 relative z-10 border border-black/5 text-center shadow-lg shadow-black/5"
                            >
                                <span className="text-6xl font-black text-black/5 absolute -top-10 left-1/2 -translate-x-1/2">{w.step}</span>
                                <h3 className="text-2xl font-bold mb-4 lowercase mt-4">{w.title}</h3>
                                <p className="text-black/50 font-light lowercase leading-relaxed">{w.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-40 px-10 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase mb-6">Success <span className="text-[#f4aa38]">Stories</span></h2>
                        <p className="text-black/40 lowercase font-light">securing digital wealth for thousands</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 p-16 rounded-[3rem] border border-black/5 flex flex-col justify-between"
                            >
                                <p className="text-2xl font-light italic text-black/70 mb-12 leading-relaxed">"{t.quote}"</p>
                                <div>
                                    <div className="font-bold lowercase text-xl mb-1">{t.author}</div>
                                    <div className="text-black/30 lowercase text-sm">{t.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing / Plans */}
            <section className="py-40 px-10 max-w-[1440px] mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase mb-6">Pricing <span className="text-black/20">& Plans</span></h2>
                    <div className="w-20 h-[2px] bg-[#f4aa38] mx-auto mb-10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricing.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-12 rounded-[3rem] border ${p.popular ? 'border-[#f4aa38] bg-white shadow-2xl shadow-[#f4aa38]/10' : 'border-black/5 bg-slate-50'} flex flex-col relative`}
                        >
                            {p.popular && <span className="absolute top-0 right-10 -translate-y-1/2 bg-[#f4aa38] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</span>}
                            <h3 className="text-2xl font-bold lowercase mb-4">{p.name}</h3>
                            <div className="text-5xl font-medium tracking-tighter lowercase mb-10">{p.price}</div>
                            <div className="space-y-4 mb-12 flex-1">
                                {p.features.map((f, fi) => (
                                    <div key={fi} className="flex items-center gap-3 text-sm text-black/60 lowercase">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#f4aa38]"></div>
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <button className={`w-full h-11 flex items-center justify-center rounded-full font-bold lowercase transition-all ${p.popular ? 'bg-black text-white hover:bg-[#f4aa38]' : 'bg-black/5 hover:bg-black hover:text-white'}`}>Get Started</button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className="py-40 px-10 bg-black text-white">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-4xl md:text-[5rem] font-medium tracking-tighter lowercase text-center mb-24">
                        Common <span className="text-[#f4aa38]">Questions</span>
                    </h2>
                    <div className="space-y-8">
                        {faqs.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="border-b border-white/10 pb-8"
                            >
                                <h3 className="text-xl font-bold mb-4 text-[#f4aa38] lowercase tracking-tight">Q: {f.q}</h3>
                                <p className="text-white/60 font-light lowercase leading-relaxed">A: {f.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 px-10">
                <motion.div whileHover={{ scale: 1.01 }} className="max-w-[1240px] mx-auto bg-[#f4aa38] rounded-[3rem] p-20 relative overflow-hidden text-center group shadow-2xl shadow-[#f4aa38]/20">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                    <h2 className="text-[3rem] md:text-[5rem] font-medium text-black tracking-tighter leading-none lowercase mb-12 relative z-10">Final CTA - <br /> <span className="text-white">Let's Talk</span></h2>
                    <Link to="/contact" className="inline-flex items-center justify-center px-12 h-11 bg-black text-white rounded-full text-xl font-medium tracking-tight hover:bg-white hover:text-black transition-all relative z-10">Let's Talk</Link>
                </motion.div>
            </section>
        </div>
    )
}

export default Tijori
