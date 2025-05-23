"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoUrl = "https://res.cloudinary.com/dtqt2krmo/video/upload/v1744872964/ghigl9p5u8iqrwksf1w4.mp4"
  
  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="py-20 bg-background/50 noise-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">See How Penguin Works</h2>
          <p className="text-white/70 text-lg">
            Watch our demo to see how Penguin connects GitHub repositories with onchain rewards
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="play-border">
            <div className="play-border-content p-1">
              <div className="video-container bg-black/50 relative rounded-lg overflow-hidden aspect-video">
                {isPlaying ? (
                  <video 
                    className="w-full h-full object-cover rounded-lg"
                    src={videoUrl}
                    autoPlay
                    controls
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-black/30 z-10"></div>
                      <video 
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                        src={videoUrl} 
                        muted
                        playsInline
                        loop
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          onClick={handlePlayClick}
                        >
                          <Play className="h-10 w-10 text-primary-foreground" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}