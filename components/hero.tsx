"use client"

import { useRef } from "react"
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

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg grid-bg"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent"
        style={{ opacity, y }}
      />

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
            <span className="gradient-text">Algora but Onchain</span>
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
              Explore Repositories
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
              <span className="text-3xl md:text-4xl font-display text-primary mb-2">0</span>
              <p className="text-white/60">Repositories</p>
            </div>
            <div className="play-card p-6 relative">
              <span className="text-3xl md:text-4xl font-display text-secondary mb-2">0</span>
              <p className="text-white/60">Bounties</p>
            </div>
            <div className="play-card p-6 relative">
              <span className="text-3xl md:text-4xl font-display text-primary mb-2">$0</span>
              <p className="text-white/60">Rewards</p>
            </div>
            <div className="play-card p-6 relative">
              <span className="text-3xl md:text-4xl font-display text-secondary mb-2">0</span>
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
