"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, Search, Bell, User, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Waitlist } from "./waitlist" // Import the Waitlist component

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Repositories", href: "/repositories" }, // Replace Repositories with Join Waitlist
    { name: "Bounties", href: "/bounties" },
    { name: "About", href: "/about" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/penguin-logo.png" alt="Penguin Logo" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-display tracking-wide">Penguin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-primary transition-colors relative group cursor-pointer"
               
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search repositories..."
                className="pl-10 bg-transparent border-white/10 focus:border-primary w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-primary">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
              
              <a href="https://github.com/apps/penguin-space-bot" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium cursor-pointer">
                <Github />Install Bot
              </Button>
              </a>
              <div 
                onClick={() => setIsWaitlistOpen(true)}
                className="mr-2  cursor-pointer hover:underline"
               
              >
                Join Waitlist
              </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden glassmorphism border-b border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search repositories..."
                  className="pl-10 bg-transparent border-white/10 focus:border-primary"
                />
              </div>

              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-primary transition-colors py-2 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-white/80 hover:text-primary">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white/80 hover:text-primary">
                    <User className="h-5 w-5" />
                  </Button>
                </div>
      
                <a href="https://github.com/apps/penguin-space-bot"> <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium cursor-pointer">
                  Install Penguin
                </Button></a>
                <Button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="mr-2 border border-primary text-primary hover:bg-primary/10 font-medium cursor-pointer hover:underline"
                  variant="outline"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Waitlist Modal */}
      {isWaitlistOpen && <Waitlist isVisible={isWaitlistOpen} setIsVisible={setIsWaitlistOpen} />}
    </>
  )
}