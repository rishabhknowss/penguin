"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Star, GitFork, Eye, AlertCircle } from "lucide-react"

interface Repository {
  id: string
  name: string
  description: string
  stars: number
  forks: number
  watchers: number
  openIssues: number
  language: string
  languageColor: string
}

const featuredRepos: Repository[] = [
  {
    id: "1",
    name: "ethereum/solidity",
    description: "Solidity, the Smart Contract Programming Language",
    stars: 20500,
    forks: 5600,
    watchers: 1200,
    openIssues: 325,
    language: "C++",
    languageColor: "#f34b7d",
  },
  {
    id: "2",
    name: "aave/aave-protocol",
    description: "Aave Protocol - Decentralized Liquidity Protocol",
    stars: 4300,
    forks: 1800,
    watchers: 320,
    openIssues: 42,
    language: "TypeScript",
    languageColor: "#2b7489",
  },
  {
    id: "3",
    name: "uniswap/v3-core",
    description: "Core smart contracts of Uniswap v3",
    stars: 3800,
    forks: 2100,
    watchers: 280,
    openIssues: 15,
    language: "Solidity",
    languageColor: "#AA6746",
  },
]

export function FeaturedRepos() {
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
            <h2 className="text-3xl md:text-4xl font-display mb-2">Featured Repositories</h2>
            <p className="text-white/60">Top open source projects with active bounties</p>
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
          {featuredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="play-card h-full p-6">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-3 hover:text-primary transition-colors">{repo.name}</h3>
                  <p className="text-white/70 text-sm mb-6">{repo.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: repo.languageColor }}></span>
                    <span className="text-sm text-white/70">{repo.language}</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between text-sm text-white/60">
                    <div className="flex space-x-4">
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        {repo.stars.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="h-4 w-4 mr-1" />
                        {repo.forks.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {repo.watchers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center text-primary">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{repo.openIssues} issues</span>
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
            View All Repositories
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
