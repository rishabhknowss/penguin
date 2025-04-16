"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Add mouse position tracking for the glowy logo effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  // Logo components for the background
  const GitHubLogo = ({ className }: { className: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  )
  
  const SolanaLogo = ({ className }: { className: string }) => (
    <svg viewBox="0 0 397.7 311.7" className={className} fill="currentColor">
      <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zM333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
    </svg>
  )
  
 
  // Create logo objects with positioning info
  const logos = [
    { 
      id: 'github', 
      Logo: GitHubLogo, 
      position: { left: '15%', top: '20%' }, 
      size: { width: '120px', height: '120px' }, 
      color: '#f0f6fc',
      movement: { x: mousePosition.x / 100 * 1.2, y: mousePosition.y / 100 * 0.8 }
    },
    { 
      id: 'solana', 
      Logo: SolanaLogo, 
      position: { right: '15%', top: '30%' }, 
      size: { width: '140px', height: '140px' }, 
      color: '#14F195',
      movement: { x: mousePosition.x / 100 * -0.9, y: mousePosition.y / 100 * 1.1 }
    }
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg grid-bg"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent"
        style={{ opacity, y }}
      />
      
      {/* Glowy Logo Background */}
     {/*  {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute z-0"
          style={{
            ...logo.position,
            ...logo.size,
            color: logo.color,
            filter: `drop-shadow(0 0 15px ${logo.color}80)`,
          }}
          animate={{
            x: logo.movement.x,
            y: logo.movement.y,
            rotate: [0, 2, 0, -2, 0],
            scale: [1, 1.03, 1, 0.97, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <logo.Logo className="w-full h-full" />
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle, ${logo.color}60 0%, transparent 70%)`,
              filter: 'blur(20px)',
              transform: 'scale(1.5)',
            }}
          />
        </motion.div>
      ))}
       */}
     
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="gradient-text">Penguin Bounties for Github Issues</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contribute to open source projects, solve issues, and earn crypto rewards through our GitHub integration.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg">
              Start Onboarding
            </Button>
            <Button
              variant="outline"
              className="border-white/20 hover:border-primary text-white hover:text-primary px-8 py-6 text-lg group"
            >
              View Bounties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="coming-soon-overlay">
              <span className="badge badge-primary">Coming Soon</span>
            </div>

            <div className="play-card p-6 relative">
              <span className="text-3xl md:text-4xl font-display text-primary mb-2">30+</span>
              <p className="text-white/60">Repositories</p>
            </div>
            <div className="play-card p-6 relative">
              <span className="text-3xl md:text-4xl font-display text-secondary mb-2">500+</span>
              <p className="text-white/60">Bounties</p>
            </div>
            <div className="play-card p-6 relative">
              <span className="text-3xl md:text-4xl font-display text-primary mb-2">$20k</span>
              <p className="text-white/60">Rewards</p>
            </div>
            <div className="play-card p-6 relative">
              <span className="text-3xl md:text-4xl font-display text-secondary mb-2">3000</span>
              <p className="text-white/60">Contributors</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowRight className="h-8 w-8 text-white/60 rotate-90" />
      </motion.div>
    </section>
  )
}