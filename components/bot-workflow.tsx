"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { Bot, GitCommit, GitPullRequest, DollarSign, CheckCircle2 } from "lucide-react"

export function BotWorkflow() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="py-24 bg-background/50 noise-bg relative overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-secondary/5 to-transparent"
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
            How the <span className="gradient-text">Penguin Bot</span> Works
          </h2>
          <p className="text-white/70 text-lg">
            Our GitHub bot automates the entire workflow from issue creation to reward distribution
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50 hidden md:block"></div>

          <div className="space-y-24 relative">
            {[
              {
                icon: GitCommit,
                title: "Issue Creation & Bounty Assignment",
                description:
                  "Repository maintainers create issues and assign bounties in USDC or other tokens. The Penguin bot automatically tags these issues and makes them discoverable.",
                position: "left",
                iconBg: "bg-primary/20",
                iconColor: "text-primary",
              },
              {
                icon: GitPullRequest,
                title: "Developer Submits Solution",
                description:
                  "Developers fork the repository, work on the issue, and submit a pull request. The Penguin bot automatically detects the PR and links it to the bounty.",
                position: "right",
                iconBg: "bg-secondary/20",
                iconColor: "text-secondary",
              },
              {
                icon: Bot,
                title: "Automated Verification",
                description:
                  "The Penguin bot runs automated checks on the pull request, including code quality, test coverage, and compliance with repository guidelines.",
                position: "left",
                iconBg: "bg-primary/20",
                iconColor: "text-primary",
              },
              {
                icon: CheckCircle2,
                title: "Maintainer Approval",
                description:
                  "Repository maintainers review the solution and approve the pull request. The Penguin bot marks the issue as resolved.",
                position: "right",
                iconBg: "bg-secondary/20",
                iconColor: "text-secondary",
              },
              {
                icon: DollarSign,
                title: "Automatic Reward Distribution",
                description:
                  "Upon merge, the Penguin bot automatically triggers a smart contract to transfer the bounty to the developer's wallet. The transaction is recorded on-chain for transparency.",
                position: "left",
                iconBg: "bg-primary/20",
                iconColor: "text-primary",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${step.position === "left" ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-full md:w-5/12 ${step.position === "left" ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <h3 className="text-2xl font-display mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>

                <div className="mx-auto my-8 md:my-0 relative">
                  <div
                    className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center z-10 relative`}
                  >
                    <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
