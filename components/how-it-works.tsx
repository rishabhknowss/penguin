"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageSquare, Award, Zap, Users } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Ask Questions",
    description: "Post your crypto questions and attach a bounty to incentivize quality answers.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Get Expert Answers",
    description: "Experts and community members provide detailed answers to earn your bounty.",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Award,
    title: "Award Bounties",
    description: "Select the best answer and automatically release the bounty to the winner.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Build Reputation",
    description: "Earn reputation points and climb the leaderboard by providing valuable answers.",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden noise-bg">
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        style={{ y }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display mb-6">
            How <span className="gradient-text">ChainQuest</span> Works
          </h2>
          <p className="text-white/70 text-lg">
            Our platform connects crypto enthusiasts with experts through a decentralized knowledge marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="play-card p-6 h-full">
                <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className={`h-6 w-6 ${step.iconColor}`} />
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <motion.div
                    className="text-primary"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
