import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import facekitAi2 from "../assets/images/facekitAi2.png";
import officeKit from "../assets/images/officeKit.png";
import pilotAi from "../assets/images/aipilot.png";
import tijjori from "../assets/images/tijjori.png";
import wps from "../assets/images/wps.jpg";
import alphapay from "../assets/images/alphapay.png";
import airecruitment from "../assets/images/airecruitment.png";
import payroute from "../assets/images/payroute.jpg";
import ProductsHeader from "./ProductsHeader";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
// ⭐ NORMALIZES SCROLL (DISABLED as Lenis handles this)
// ScrollTrigger.normalizeScroll(true);
const cards = [
    {
        title: "Office Kit",
        desc: "All-in-one workspace management and team collaboration suite.",
        image: officeKit,
        path: "products/officekit-hr"
    },
    {
        title: "Facekit AI",
        desc: "Advanced facial recognition SDK for secure and seamless identity verification.",
        image: facekitAi2,
        path: "/products/facekit-ai"
    },
    {
        title: "Pilot AI",
        desc: "Autonomous navigation systems powering the next generation of robotics.",
        image: pilotAi,
        path: "/products/pilot-ai"
    },
    {
        title: "Tijori",
        desc: "Secure digital vault and comprehensive finance management for modern businesses.",
        image: tijjori,
        path: "/products/tijori"
    },
    {
        title: "WPS",
        desc: "Wages Production System (WPS) manages and processes employee salary-related information.",
        image: wps,
        path: "/products/wps"
    },
    {
        title: "Recruitment AI",
        desc: "Streamlined applicant tracking and hiring platform for enterprise teams.",
        image: airecruitment,
        path: "/products/recruitment"
    },
    {
        title: "Payroute",
        desc: "Global payment processing infrastructure with intelligent routing.",
        image: payroute,
        path: "/products/payroute"
    },
    {
        title: "Alfapay",
        desc: "Next-gen digital wallet and contactless payment ecosystem.",
        image: alphapay,
        path: "/products/alphapay"
    },
];

export default function StackingCards() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const cardHeight = useRef(0);
    const navigate = useNavigate();
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!cardRefs.current[0]) return;
            cardHeight.current = cardRefs.current[0].offsetHeight;
            cardRefs.current.forEach((card, i) => {
                gsap.set(card, {
                    y: i === 0 ? 0 : cardHeight.current,
                    scale: 1,
                    opacity: 1,
                    zIndex: cards.length - i,
                    willChange: "transform",
                    force3D: true, // ⭐ smoother GPU rendering
                });
            });
            const tl = gsap.timeline({
                defaults: { ease: "none" }, // ⭐ removes scroll resistance
                scrollTrigger: {
                    trigger: sectionRef.current,
                    // ✅ FIXES INITIAL STUCK FEELING
                    start: "top top",
                    // ⭐ gives each card perfect scroll space
                    end: () => `+=${cards.length * window.innerHeight}`, scrub: 0.5, // much faster and snappier
                    pin: true,
                    // ✅ prevents pin jump
                    anticipatePin: 0,
                },
            });
            cards.forEach((_, i) => {
                if (i === 0) return;
                const current = cardRefs.current[i];
                const prev = cardRefs.current[i - 1];
                tl.fromTo(
                    current,
                    { y: cardHeight.current },
                    {
                        y: 0,
                        duration: 1.8,
                        ease: "power3.out",
                        immediateRender: false,
                    },
                    i
                );
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
            className="min-h-screen bg-white flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20"
        >
            <ProductsHeader />
            <div className="relative w-full max-w-[1340px] h-[520px] sm:h-[560px] md:h-[600px] lg:h-[540px] overflow-hidden z-10 mx-auto my-8">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/30 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-black/10 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 h-full">
                            {/* IMAGE */}
                            <div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 shadow-inner group w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-full">
                                <div className="absolute top-4 left-4 z-20 bg-black/80 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className=" bg-white w-full h-full object-cover "
                                />
                            </div>
                            {/* CONTENT */}
                            <div className="flex flex-col justify-between py-2 sm:py-4">
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="inline-flex items-center gap-2 bg-orange-100/50 text-orange-900 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-orange-200/50 w-fit">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                        {i + 1} / {cards.length}
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight bg-gradient-to-br from-black to-black/70 bg-clip-text text-transparent">
                                        {card.title}
                                    </h3>
                                    <p className="text-black/60 text-sm sm:text-base lg:text-lg leading-relaxed font-light max-w-xl">
                                        {card.desc}
                                    </p>
                                </div>
                                <button
                                    onClick={() => navigate(card.path)}
                                    className="group w-50 h-11 bg-black text-white px-6 sm:px-8 rounded-full font-medium hover:bg-[#f4aa38] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-3 mt-6"
                                >
                                    Explore Product →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}