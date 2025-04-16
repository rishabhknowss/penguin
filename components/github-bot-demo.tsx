"use client"

import { motion } from "framer-motion"
import { Play, Code, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubBotDemo() {
  return (
    <section className="py-24 bg-background/50 noise-bg">
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
            <h2 className="text-3xl md:text-4xl font-display mb-6">Seamless GitHub Bot Integration</h2>
            <p className="text-white/70 text-lg mb-6">
              Our GitHub bot automatically tracks contributions, verifies completed tasks, and distributes rewards to
              developers. Connect your GitHub account to start earning rewards for your open-source contributions.
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
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="play-border">
              <div className="play-border-content p-1">
                <div className="video-container bg-black/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=400&width=600"
                        alt="GitHub Bot Demo"
                        className="rounded-lg opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Play className="h-8 w-8 text-primary-foreground" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/70 p-3 rounded-lg">
                          <h3 className="text-lg font-medium text-white mb-1">See how our GitHub bot works</h3>
                          <p className="text-white/70 text-sm">
                            Watch how developers earn rewards through verified contributions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
