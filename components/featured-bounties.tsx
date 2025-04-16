"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Clock, Award, Users } from "lucide-react"

interface Bounty {
  id: string
  title: string
  description: string
  amount: number
  deadline: string
  participants: number
  sponsor: {
    name: string
    logo: string
  }
}

const featuredBounties: Bounty[] = [
  {
    id: "1",
    title: "Optimize Gas Usage in DEX Smart Contract",
    description: "Looking for solutions to reduce gas consumption in our DEX smart contract by at least 15%.",
    amount: 2500,
    deadline: "5 days left",
    participants: 18,
    sponsor: {
      name: "UniSwap",
      logo: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "2",
    title: "Develop Zero-Knowledge Proof Implementation",
    description: "Create an efficient ZK-proof implementation for our privacy-focused blockchain.",
    amount: 5000,
    deadline: "12 days left",
    participants: 7,
    sponsor: {
      name: "Polygon",
      logo: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "3",
    title: "Cross-Chain NFT Bridge Security Audit",
    description: "Conduct a comprehensive security audit of our cross-chain NFT bridge protocol.",
    amount: 3800,
    deadline: "8 days left",
    participants: 12,
    sponsor: {
      name: "Chainlink",
      logo: "/placeholder.svg?height=40&width=40",
    },
  },
]

export function FeaturedBounties() {
  return (
    <section className="py-20 bg-background/50 noise-bg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display mb-2">Featured Bounties</h2>
            <p className="text-white/60">Solve challenges and earn substantial rewards</p>
          </motion.div>

          <motion.button
            className="hidden md:flex items-center text-primary hover:text-white transition-colors"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            View All
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBounties.map((bounty, index) => (
            <motion.div
              key={bounty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="play-card h-full p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={bounty.sponsor.logo || "/placeholder.svg"}
                        alt={bounty.sponsor.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-white/80">{bounty.sponsor.name}</span>
                    </div>
                    <div className="flex items-center text-secondary">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{bounty.deadline}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mb-3 hover:text-primary transition-colors">{bounty.title}</h3>

                  <p className="text-white/70 text-sm mb-6">{bounty.description}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center text-white/60 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{bounty.participants} participants</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-1 text-primary" />
                      <span className="text-primary font-medium">${bounty.amount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <motion.button
            className="inline-flex items-center text-primary hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            View All Bounties
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
