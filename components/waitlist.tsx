"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser'

export function Waitlist() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  
  useEffect(() => {
    // Initialize EmailJS with the public key from environment variables
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError("Email is required")
      return
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email")
      return
    }
    
    setIsLoading(true)
    setError("")
    
    try {
      // Format date in a readable way
      const currentDate = new Date()
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
      
      // Get service ID from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      
      // Get template IDs from environment variables
      const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
      const userTemplateId = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID;
      
      if (!serviceId || !adminTemplateId || !userTemplateId) {
        throw new Error("EmailJS configuration is missing");
      }
      
      // Create the template parameters
      const templateParams = {
        email_address: email,
        time_stamp: formattedDate,
        reply_to: email
      };
      
      // Send notification email to admin (you)
      console.log("Sending admin notification email...");
      await emailjs.send(serviceId, adminTemplateId, templateParams);
      
      // Send confirmation email to the user
      console.log("Sending user confirmation email...");
      await emailjs.send(serviceId, userTemplateId, templateParams);
      
      console.log("Emails sent successfully");
      
      // Handle success
      setIsSubmitted(true)
      setIsLoading(false)
      
      // Store email in localStorage
      localStorage.setItem('penguin_waitlist_email', email)
      localStorage.setItem('penguin_waitlist_joined', 'true')
      
    } catch (err: unknown) {
      console.error("EmailJS error:", err)
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Something went wrong. Please try again.")
      }
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md play-border"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="play-border-content p-6 md:p-8">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display mb-2 gradient-text">Join the Waitlist</h3>
                {!isSubmitted ? (
                  <p className="text-white/70 text-sm">
                    Be the first to experience GitHub bounties done right.
                  </p>
                ) : null}
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-muted rounded-md border border-border px-4 py-3 text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    {error && (
                      <p className="mt-1.5 text-sm text-red-400">{error}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Get Early Access"
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-4"
                >
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-display mb-2">You're on the list!</h4>
                  <p className="text-white/70 text-sm mb-4">
                    We'll notify you when Penguin is ready to launch.
                  </p>
                  <Button 
                    onClick={() => setIsVisible(false)}
                    variant="outline" 
                    className="border-white/20 hover:border-primary text-white hover:text-primary px-6"
                  >
                    Close
                  </Button>
                </motion.div>
              )}
              
              <div className="mt-6 text-center text-xs text-white/40">
                <p>No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}