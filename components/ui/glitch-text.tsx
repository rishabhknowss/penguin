"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  glitchInterval?: number
}

export function GlitchText({ text, className, glitchInterval = 3000 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, glitchInterval)

    return () => clearInterval(intervalId)
  }, [glitchInterval])

  return (
    <div className="relative">
      <motion.span
        className={cn("relative inline-block", className)}
        animate={{
          x: isGlitching ? [0, -2, 3, -1, 0] : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
        {isGlitching && (
          <>
            <span
              className="absolute top-0 left-0 w-full h-full text-cyan mix-blend-screen"
              style={{ clipPath: "polygon(0 15%, 100% 15%, 100% 30%, 0 30%)" }}
            >
              {text}
            </span>
            <span
              className="absolute top-0 left-0 w-full h-full text-magenta mix-blend-screen"
              style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 65%, 0 65%)" }}
            >
              {text}
            </span>
            <span
              className="absolute top-0 left-0 w-full h-full text-white mix-blend-screen"
              style={{ clipPath: "polygon(0 80%, 100% 80%, 100% 95%, 0 95%)" }}
            >
              {text}
            </span>
          </>
        )}
      </motion.span>
    </div>
  )
}
