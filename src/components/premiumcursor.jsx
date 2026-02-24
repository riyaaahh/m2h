import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

const PremiumCursor = () => {

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)


    const smoothX = useSpring(mouseX, {
        stiffness: 220,   
        damping: 30,
        mass: 0.2
    })

    const smoothY = useSpring(mouseY, {
        stiffness: 140,
        damping: 30,
        mass: 0.2
    })

    const [hovering, setHovering] = useState(false)

    useEffect(() => {

        const move = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const addHover = () => setHovering(true)
        const removeHover = () => setHovering(false)

        window.addEventListener("mousemove", move)

        const targets = document.querySelectorAll("a, button")

        targets.forEach(el => {
            el.addEventListener("mouseenter", addHover)
            el.addEventListener("mouseleave", removeHover)
        })

        return () => {
            window.removeEventListener("mousemove", move)

            targets.forEach(el => {
                el.removeEventListener("mouseenter", addHover)
                el.removeEventListener("mouseleave", removeHover)
            })
        }

    }, [])

    return (
        <>
            {/* DOT */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#f4aa38] blur-[0.5px] pointer-events-none z-[9999]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />


        </>
    )
}

export default PremiumCursor