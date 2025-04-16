"use client"

import { motion } from "framer-motion"
import { Github, GitPullRequest, GitMerge, GitBranch, CircleCheck, AlertCircle, Code, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubIntegration() {
  const issues = [
    {
      id: 1,
      title: "Implement token distribution contract",
      repo: "penguin/smart-contracts",
      status: "open",
      labels: ["bounty", "smart contract", "high priority"],
      bounty: 500,
      assignee: null,
    },
    {
      id: 2,
      title: "Fix UI rendering bug in dashboard",
      repo: "penguin/frontend",
      status: "open",
      labels: ["bug", "frontend", "medium priority"],
      bounty: 200,
      assignee: null,
    },
    {
      id: 3,
      title: "Add unit tests for reward calculation",
      repo: "penguin/core",
      status: "closed",
      labels: ["test", "backend"],
      bounty: 150,
      assignee: "dev0x123",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="play-border inline-block mb-6">
              <div className="play-border-content px-4 py-1">
                <div className="flex items-center space-x-2">
                  <Github className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">GitHub Integration</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display mb-6">Seamless GitHub Integration</h2>
            <p className="text-white/70 text-lg mb-6">
              Our bot automatically tracks issues, pull requests, and contributions across GitHub repositories,
              distributing rewards to developers when their work is merged.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Automatic issue tracking and bounty assignment",
                "Smart contract integration for transparent reward distribution",
                "Pull request verification and code quality assessment",
                "Reputation building through verified contributions",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Code className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Github className="mr-2 h-5 w-5" />
              Connect GitHub
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="play-card p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-2 text-white/80" />
                  <h3 className="font-medium">GitHub Issues with Bounties</h3>
                </div>
                <span className="badge badge-primary">Beta</span>
              </div>

              <div className="space-y-4">
                {issues.map((issue) => (
                  <div key={issue.id} className="github-issue">
                    <div className="flex items-start">
                      {issue.status === "open" ? (
                        <AlertCircle className="h-5 w-5 mr-3 mt-1 issue-open flex-shrink-0" />
                      ) : (
                        <CircleCheck className="h-5 w-5 mr-3 mt-1 issue-closed flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-medium mb-1 hover:text-primary cursor-pointer">{issue.title}</h4>
                        <div className="text-sm text-white/60 mb-3">
                          <span className="mr-2">{issue.repo}</span>
                          {issue.status === "open" ? (
                            <span className="text-green-400">Open</span>
                          ) : (
                            <span className="text-purple-400">Closed</span>
                          )}
                          {issue.assignee && <span className="ml-2">• Assigned to {issue.assignee}</span>}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {issue.labels.map((label, idx) => (
                            <span key={idx} className="badge badge-secondary">
                              <Tag className="h-3 w-3 mr-1" />
                              {label}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3 text-sm text-white/60">
                            <span className="flex items-center">
                              <GitPullRequest className="h-4 w-4 mr-1" />
                              {issue.status === "open" ? "0" : "1"} PRs
                            </span>
                            <span className="flex items-center">
                              <GitBranch className="h-4 w-4 mr-1" />
                              main
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-primary font-medium">${issue.bounty} USDC</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="play-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <GitMerge className="h-5 w-5 mr-2 text-white/80" />
                  <h3 className="font-medium">Recent Activity</h3>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-white/70">
                  <CircleCheck className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-white/90 mr-1">dev0x123</span>
                  merged pull request
                  <span className="text-primary mx-1">#42</span>
                  and earned
                  <span className="text-primary ml-1">150 USDC</span>
                </div>
                <div className="flex items-center text-white/70">
                  <GitPullRequest className="h-4 w-4 mr-2 text-purple-400" />
                  <span className="text-white/90 mr-1">alice_dev</span>
                  opened pull request
                  <span className="text-primary mx-1">#47</span>
                  for bounty
                  <span className="text-primary ml-1">$200</span>
                </div>
                <div className="flex items-center text-white/70">
                  <AlertCircle className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-white/90 mr-1">bob_coder</span>
                  created issue
                  <span className="text-primary mx-1">#51</span>
                  with bounty
                  <span className="text-primary ml-1">$300</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
