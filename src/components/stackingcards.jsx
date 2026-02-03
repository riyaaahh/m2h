import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import ProductsHeader from "./ProductsHeader";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        title: "Facekit AI",
        desc: "Advanced facial recognition SDK for secure and seamless identity verification.",
        image: "",
    },
    {
        title: "Pilot AI",
        desc: "Autonomous navigation systems powering the next generation of robotics.",
        image: "/products/pilotai.png",
    },
    {
        title: "Tijori",
        desc: "Secure digital vault and comprehensive finance management for modern businesses.",
        image: "/products/tijori.png",
    },
    {
        title: "WPS",
        desc: "Wages Production System (WPS) is a comprehensive data production system designed to manage and process employee salary-related information. The system streamlines payroll data preparation, generates required files, and ensures accurate and timely salary payments. WPS handles large volumes of salary data securely and efficiently while adhering to standard payroll and banking requirements. Our main clients include United Arab Bank and Mashraf Bank, both located in the United Arab Emirates (UAE), supporting their payroll data processing needs and ensuring smooth, reliable salary transactions.",
        image: "/products/wps.png",
    },
    {
        title: "Recruitment",
        desc: "Streamlined applicant tracking and hiring platform for enterprise teams.",
        image: "/products/recruitment.png",
    },
    {
        title: "Payroute",
        desc: "Global payment processing infrastructure with intelligent routing.",
        image: "/products/payroute.png",
    },
    {
        title: "Alphapay",
        desc: "Next-gen digital wallet and contactless payment ecosystem.",
        image: "/products/alphapay.png",
    },
    {
        title: "Office Kit",
        desc: "All-in-one workspace management and team collaboration suite.",
        image: "/products/office-kit.png",
    },
    {
        title: "AI Chatbot",
        desc: "Intelligent conversational agents that automate customer support 24/7.",
        image: "/products/ai-chatbot.png",
    },
];

export default function StackingCards() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const cardHeight = useRef(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!cardRefs.current[0]) return;

            // Measure card height once
            cardHeight.current = cardRefs.current[0].offsetHeight;

            // Initial states
            cardRefs.current.forEach((card, i) => {
                gsap.set(card, {
                    y: i === 0 ? 0 : cardHeight.current, // ⬅️ starts BELOW active card
                    scale: 1,
                    opacity: 1,
                    zIndex: cards.length - i,
                    willChange: "transform",
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${cards.length * 110}%`,
                    scrub: 1.6,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            cards.forEach((_, i) => {
                if (i === 0) return;

                const current = cardRefs.current[i];
                const prev = cardRefs.current[i - 1];

                // Incoming card rises FROM BELOW active card
                tl.fromTo(
                    current,
                    {
                        y: cardHeight.current,   // 👈 always starts BELOW
                    },
                    {
                        y: 0,                    // 👈 slides UP over card
                        duration: 1.8,
                        ease: "power3.out",
                        immediateRender: false,  // 🚨 MOST IMPORTANT LINE
                    },
                    i
                );

                // Previous card gently settles back (no vertical move)
                tl.to(
                    prev,
                    {
                        scale: 0.94,

                        zIndex: 1,
                        duration: 1.4,
                        ease: "power2.out",
                    },
                    i
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-white flex flex-col items-center justify-center relative px-10 md:px-20 py-20 mb-100"
        >
            {/* Ambient background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-orange-400/10 blur-[140px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-300/10 blur-[120px]" />
            </div>

            {/* Header */}
            <ProductsHeader />

            {/* Masked Card Container */}
            <div className="relative w-full max-w-[1340px] h-[600px] overflow-hidden z-10 mx-auto my-8">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/30 rounded-3xl p-12 mb-5 border border-black/10 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
                            {/* Image Section */}
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50 border border-black/5 shadow-inner group">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent z-10 pointer-events-none" />

                                {/* Product Number Badge */}
                                <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                {card.image && (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col justify-between py-4">
                                <div className="space-y-6">
                                    {/* Category Badge */}
                                    <div className="inline-flex items-center gap-2 bg-orange-100/50 text-orange-900 px-4 py-2 rounded-full text-sm font-medium border border-orange-200/50">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                        {i + 1} / {cards.length}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight bg-gradient-to-br from-black to-black/70 bg-clip-text text-transparent">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-black/60 text-lg leading-relaxed font-light">
                                        {card.desc}
                                    </p>
                                </div>

                                {/* CTA Section */}
                                <div className="space-y-4 mt-8">
                                    <button className="group w-full bg-black text-white py-4 px-8 rounded-full font-medium hover:bg-[#f4aa38] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-3">
                                        <span>Explore Product</span>
                                        <svg
                                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>

                                    {/* Additional Info */}
                                    <div className="flex items-center justify-center gap-6 text-sm text-black/40">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                            </svg>
                                            Powered by M2H
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Production Ready
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}