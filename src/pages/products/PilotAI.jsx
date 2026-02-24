import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PilotAI = () => {
    const features = [
        { title: "Autonomous Navigation", description: "Real-time path planning and obstacle avoidance for industrial robots." },
        { title: "Fleet Management", description: "Coordinate hundreds of autonomous units with centralized AI command." },
        { title: "Predictive Maintenance", description: "Detect hardware wear and tear before failures occur." },
        { title: "Edge Processing", description: "Low-latency processing directly on board for split-second decisions." }
    ]

    const workflow = [
        { step: "01", title: "Scanning", description: "Continuous 360-degree environment mapping with LiDAR and vision." },
        { step: "02", title: "Pathfinding", description: "Real-time trajectory optimization for max efficiency and safety." },
        { step: "03", title: "Execution", description: "Precise control signals sent to mechanical actuators with millisecond latency." }
    ]

    const testimonials = [
        { quote: "Pilot AI's fleet management system is the best in class. We've seen a 30% increase in warehouse efficiency.", author: "Mark Thompson", role: "Logistics Manager at EuroShip" },
        { quote: "The edge processing capabilities are incredible. It handles complex obstacles effortlessly.", author: "Linda Reed", role: "Robotics Engineer at FutureBot" }
    ]

    const pricing = [
        { name: "Single Unit", price: "$499/mo", features: ["1 autonomous unit", "Basic cloud management", "OTA updates"] },
        { name: "Fleet", price: "$1,999/mo", features: ["Up to 10 autonomous units", "Advanced multi-unit coordination", "Priority support"], popular: true },
        { name: "Global", price: "Custom", features: ["Unlimited units", "On-premise deployment", "Dedicated engineering support"] }
    ]

    const faqs = [
        { q: "What hardware is required?", a: "Pilot AI is compatible with most modern LiDAR and depth camera systems. We provide a reference hardware spec manual." },
        { q: "Does it support 5G connectivity?", a: "Yes, Pilot AI is optimized for 5G to ensure ultra-low latency fleet coordination." },
        { q: "Can it operate in outdoor environments?", a: "Absolutely. Our vision models are trained for diverse weather and lighting conditions." }
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
                        Products / AI
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                    </div>
                    <h1 className="text-[4rem] md:text-[7rem] font-medium tracking-tighter leading-[0.95] lowercase mb-12">
                        Pilot <span className="text-[#f4aa38]">AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-black/60 max-w-[800px] leading-relaxed lowercase mb-16 mx-auto">
                        Intelligent autonomous systems designed to optimize industrial operations and decision-making.
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
                        Pilot AI provides the navigational intelligence and decision-making logic for autonomous vehicles and industrial robotics. It enables machines to operate safely and efficiently in dynamic, complex environments without human intervention.
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
                        <div className="w-full h-full bg-slate-900 p-10 flex items-center justify-center">
                            <div className="w-full aspect-square border border-[#f4aa38]/30 rounded-full relative">
                                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#f4aa38] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#f4aa38]"></div>
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#f4aa38]/50 rounded-full"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#f4aa38]/50 rounded-full"></div>
                                <div className="absolute inset-0 border border-[#f4aa38]/10 rounded-full animate-ping"></div>
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
                        <p className="text-black/40 lowercase font-light">powering the next generation of industrial robots</p>
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

export default PilotAI
