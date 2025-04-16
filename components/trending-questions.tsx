"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MessageSquare, Award } from "lucide-react"

interface Question {
  id: string
  title: string
  excerpt: string
  answers: number
  bounty: number
  tags: string[]
  timeAgo: string
}

const trendingQuestions: Question[] = [
  {
    id: "1",
    title: "How does Ethereum's transition to PoS affect network security?",
    excerpt: "I'm trying to understand the security implications of Ethereum's move from PoW to PoS consensus...",
    answers: 12,
    bounty: 250,
    tags: ["Ethereum", "PoS", "Security"],
    timeAgo: "2h ago",
  },
  {
    id: "2",
    title: "Best practices for securing a DeFi smart contract?",
    excerpt: "I'm developing a new DeFi protocol and want to ensure my smart contracts are secure against...",
    answers: 8,
    bounty: 500,
    tags: ["DeFi", "Smart Contracts", "Security"],
    timeAgo: "5h ago",
  },
  {
    id: "3",
    title: "How to optimize gas fees for complex NFT minting?",
    excerpt: "My NFT project involves complex on-chain operations during minting. How can I optimize...",
    answers: 15,
    bounty: 180,
    tags: ["NFT", "Gas Optimization", "Solidity"],
    timeAgo: "1d ago",
  },
  {
    id: "4",
    title: "Implementing cross-chain token bridges securely",
    excerpt: "What are the best approaches for implementing a secure cross-chain token bridge between...",
    answers: 6,
    bounty: 350,
    tags: ["Cross-chain", "Bridges", "Interoperability"],
    timeAgo: "2d ago",
  },
]

export function TrendingQuestions() {
  return (
    <section className="py-20 noise-bg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display mb-2">Trending Questions</h2>
            <p className="text-white/60">The hottest topics in crypto right now</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="play-card h-full p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {question.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70">
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary ml-auto">
                        {question.timeAgo}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 hover:text-primary transition-colors">{question.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{question.excerpt}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center text-white/60 text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{question.answers} answers</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-primary font-medium">${question.bounty} Bounty</span>
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
            View All Questions
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
