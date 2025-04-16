"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bitcoin, EclipseIcon as Ethereum, DollarSign, Coins } from "lucide-react"

interface FloatingIcon {
  id: number
  Icon: any
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    // Generate random icons
    const iconComponents = [Bitcoin, Ethereum, DollarSign, Coins]
    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 15; i++) {
      newIcons.push({
        id: i,
        Icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 8, // 8-24px
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15, // 15-25s
      })
    }

    setIcons(newIcons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-cyan"
          initial={{
            x: `${icon.x}vw`,
            y: `${icon.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${icon.y}vh`, `${(icon.y + 20) % 100}vh`],
            opacity: [0, 0.8, 0],
            rotate: [0, 360],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: icon.duration,
            delay: icon.delay,
            ease: "linear",
          }}
          style={{ fontSize: icon.size }}
        >
          <icon.Icon />
        </motion.div>
      ))}
    </div>
  )
}
