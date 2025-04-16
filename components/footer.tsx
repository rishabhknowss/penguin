"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Twitter, Github, DiscIcon as Discord, Linkedin } from "lucide-react"

export function Footer() {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Home", href: "/" },
        { name: "Explore", href: "/explore" },
        { name: "Repositories", href: "/repositories" },
        { name: "Bounties", href: "/bounties" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API", href: "/api" },
        { name: "Status", href: "/status" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Discord", icon: Discord, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ]

  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 noise-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src="/images/penguin-logo.png" alt="Penguin Logo" width={36} height={36} className="rounded-lg" />
              <span className="text-xl font-display tracking-wide">Penguin</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-md">
              The premier onchain bounty platform for open source contributions. Connect your GitHub repositories and
              reward contributors automatically.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/10 transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-medium mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Penguin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/40 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/40 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
