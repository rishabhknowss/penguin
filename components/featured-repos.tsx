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
    name: "solana-labs/solana",
    description: "Web-Scale Blockchain for fast, secure, scalable, decentralized apps and marketplaces.",
    stars: 14043,
    forks: 4757,
    watchers: 265,
    openIssues: 43,
    language: "Rust",
    languageColor: "#dea584",
  },
  {
    id: "2",
    name: "solana-labs/solana-program-library",
    description: "A collection of Solana programs maintained by Solana Labs.",
    stars: 3891,
    forks: 2265,
    watchers: 38,
    openIssues: 30,
    language: "Rust",
    languageColor: "#dea584",
  },
  {
    id: "3",
    name: "helius-labs/solana-awesome",
    description: "A comprehensive, factual resource hub for anyone interested in learning about the Solana blockchain and its underlying technology.",
    stars: 287,
    forks: 34,
    watchers: 9,
    openIssues: 12,
    language: "Markdown",
    languageColor: "#083fa1",
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
