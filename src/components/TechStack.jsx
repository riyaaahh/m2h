import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techCategories = [
    {
        id: "01",
        title: "backend engineering",
        description: "Robust architectures for scalable applications.",
        items: ["Node.js", "Python", "Go", "Java", "C# .NET", "Express", "Django"]
    },
    {
        id: "02",
        title: "frontend interface",
        description: "Pixel-perfect, responsive user experiences.",
        items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Three.js"]
    },
    {
        id: "03",
        title: "mobile solutions",
        description: "Native and cross-platform mobile dominance.",
        items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"]
    },
    {
        id: "04",
        title: "cloud & devops",
        description: "Automated pipelines and serverless infrastructure.",
        items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"]
    },
    {
        id: "05",
        title: "database & storage",
        description: "Secure, high-performance data management.",
        items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Firebase"]
    },
    {
        id: "06",
        title: "quality control (qc)",
        description: "Comprehensive testing and assurance protocols.",
        items: ["Selenium", "Cypress", "Jest", "Appium", "JUnit", "Postman", "SonarQube"]
    },
    {
        id: "07",
        title: "collaboration tools",
        description: "Seamless team communication and project tracking.",
        items: ["Jira", "Slack", "Trello", "Asana", "Confluence", "Microsoft Teams"]
    },
    {
        id: "08",
        title: "artificial intelligence",
        description: "Next-gen algorithms, ML models, and predictive analytics.",
        items: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "Keras", "Scikit-learn"]
    },
    {
        id: "09",
        title: "blockchain & web3",
        description: "Decentralized applications and smart contracts.",
        items: ["Ethereum", "Solidity", "Web3.js", "Polygon", "Hyperledger", "Hardhat"]
    },
    {
        id: "10",
        title: "ui/ux design",
        description: "User-centric prototyping and visual systems.",
        items: ["Figma", "Adobe XD", "Sketch", "Protopie", "Lottie", "InVision"]
    },
    {
        id: "11",
        title: "cms & integration",
        description: "Content management and API connectivity.",
        items: ["Strapi", "Contentful", "WordPress", "Shopify", "GraphQL", "REST API"]
    }
];

export default function TechStack() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="bg-white py-40 px-10 md:px-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#f4aa38] opacity-[0.02] rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1440px] w-full mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/5 pb-10">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 text-[0.8rem] font-medium tracking-[0.2em] text-[#f4aa38] mb-8 uppercase"
                        >
                            <span className="w-12 h-[1px] bg-[#f4aa38]"></span>
                            core capabilities
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[3rem] md:text-[5rem] font-medium leading-[0.9] tracking-tight  text-black max-w-[800px]"
                        >
                            The <span className="text-[#f4aa38] italic">Technologies </span><span className="whitespace-nowrap">Behind The Transformation</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="flex flex-col">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-black/5 last:border-0 overflow-hidden"
                        >
                            <div className="py-12 md:py-16 px-4 md:px-10 flex flex-col md:flex-row gap-10 md:gap-20 md:items-start relative z-10 transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-50/50 hover:via-orange-50/30 hover:to-transparent">
                                {/* Left Section - Index & Icon */}
                                <div className="flex items-start gap-6">
                                    {/* Index Number */}
                                    <span className="text-xl md:text-2xl font-light text-black/20 font-mono group-hover:text-[#f4aa38] transition-colors duration-300">
                                        /{category.id}
                                    </span>

                                    {/* Category Icon */}
                                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200/50 items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                                        <svg className="w-7 h-7 text-[#f4aa38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Middle Section - Title, Description & Stats */}
                                <div className="flex-1 space-y-4">
                                    {/* Title & Badge */}
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <h3 className="text-3xl md:text-5xl font-medium text-black lowercase group-hover:text-[#f4aa38] transition-colors duration-300">
                                            {category.title}
                                        </h3>

                                        {/* Tech Count Badge */}
                                        <span className="px-3 py-1 bg-black/5 group-hover:bg-[#f4aa38]/10 border border-black/5 group-hover:border-[#f4aa38]/20 rounded-full text-xs font-medium text-black/50 group-hover:text-[#f4aa38] transition-all duration-300">
                                            {category.items.length} technologies
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg text-black/40 font-light lowercase max-w-[500px] transition-all duration-500 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mb-6">
                                        {category.description}
                                    </p>

                                    {/* Expertise Level Bar (appears on hover) */}
                                    <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-black/40 font-medium uppercase tracking-wider">Expertise</span>
                                            <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden max-w-[200px]">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-[#f4aa38] to-orange-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: hoveredIndex === index ? "90%" : 0 }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                />
                                            </div>
                                            <span className="text-xs text-[#f4aa38] font-semibold">Expert</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Section - Tech Tags */}
                                <div className="flex-1 flex flex-wrap gap-2 md:justify-end">
                                    {category.items.map((item, i) => (
                                        <span
                                            key={item}
                                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-500 ${hoveredIndex === index
                                                ? "bg-white border-[#f4aa38]/20 text-black shadow-sm translate-y-0 opacity-100"
                                                : "bg-transparent border-transparent text-black/20 translate-y-4 opacity-0 md:translate-y-4 md:opacity-0 hidden md:block" // Hidden on desktop normally
                                                } md:block ${
                                                // Mobile styles: always visible but distinct
                                                "block md:hidden bg-slate-100 border-transparent text-black/50"
                                                }`}
                                            style={{ transitionDelay: `${i * 30}ms` }}
                                        >
                                            {item}
                                        </span>
                                    ))}

                                    {/* Mobile Only View of tags to avoid empty space if strictly hiding */}
                                    <div className="md:hidden flex flex-wrap gap-2 w-full">
                                        {category.items.map((item) => (
                                            <span key={item} className="px-3 py-1 bg-slate-100 rounded-full text-xs text-black/50">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow Icon */}
                                <div className="hidden md:block">
                                    <motion.span
                                        animate={{ rotate: hoveredIndex === index ? 45 : 0, scale: hoveredIndex === index ? 1.2 : 1 }}
                                        className="text-4xl text-black/10 group-hover:text-[#f4aa38] transition-colors duration-300 inline-block"
                                    >
                                        ↗
                                    </motion.span>
                                </div>
                            </div>

                            {/* Hover Background Reveal */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f4aa38]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            />

                            {/* Decorative Corner Element (appears on hover) */}
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{
                                    scale: hoveredIndex === index ? 1 : 0,
                                    rotate: hoveredIndex === index ? 45 : 0
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-full h-full bg-gradient-to-br from-[#f4aa38]/5 to-transparent rounded-full blur-2xl" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
