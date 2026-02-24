import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Message sent! (Demo)')
    }

    return (
        <div className="min-h-screen bg-white font-['Outfit'] selection:bg-[#f4aa38]/30 relative overflow-hidden">


            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-50/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-48 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[700px]"
                >
                    <div className="flex items-center gap-2 text-[0.8rem] font-medium tracking-tight text-black/40 mb-10 uppercase">
                        <span className="w-8 h-[1px] bg-[#f4aa38]"></span>
                        contact
                    </div>
                    <h1 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-[0.9] lowercase mb-12 text-black">
                        let's start <span className="text-[#f4aa38]">something</span> meaningful <span className="text-black/20">together</span>
                    </h1>
                    <p className="text-2xl font-light text-black/50 lowercase mb-10">
                        we're always looking for new challenges and visionary partners. drop us a line below or reach out directly at <span className="text-black/80 underline decoration-[#f4aa38]/40">hello@m2h.com</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <label className="text-[0.7rem] font-bold tracking-widest uppercase text-black/30">name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-black focus:outline-none focus:border-[#f4aa38] transition-colors placeholder:text-black/30"
                                    placeholder="john doe"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[0.7rem] font-bold tracking-widest uppercase text-black/30">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-black/10 py-4 text-black focus:outline-none focus:border-[#f4aa38] transition-colors placeholder:text-black/30"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[0.7rem] font-bold tracking-widest uppercase text-black/30">message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-transparent border-b border-black/10 py-4 text-black focus:outline-none focus:border-[#f4aa38] transition-colors resize-none placeholder:text-black/30"
                                placeholder="tell us about your project..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-[1.2rem] md:text-[2rem] font-medium tracking-tight lowercase text-black hover:text-[#f4aa38] transition-colors flex items-center gap-4 group pt-10"
                        >
                            send message <span className="translate-x-0 group-hover:translate-x-3 transition-transform text-[#f4aa38]">→</span>
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
