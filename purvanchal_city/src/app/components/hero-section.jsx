'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection({ onEnquire }) {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <Image
        src="/Purvanchal_Img.jpg"
        alt="Purvanchal Luxury Residences"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              New Launch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Purvanchal
              <span className="block animate-shine">New Launch</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              3 & 4 BHK Luxury Residences at Yamuna Expressway
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => onEnquire('booking')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg 
                          hover:bg-accent-dark transition-all duration-300 flex items-center justify-center"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => onEnquire('brochure')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg 
                          hover:bg-white/20 transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="glass rounded-xl p-8 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-6">Pre-Launch Offers</h3>
              <div className="space-y-4">
                {[
                  "Pay More Save More - On Request",
                  "Premium Priority Discount - On Request",
                  "4 BHK Special Upgrade Discount - On Request"
                ].map((offer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-center space-x-3 text-white/90"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>{offer}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mb-2">
          <div className="w-1 h-2 bg-white rounded-full mx-auto mt-2" />
        </div>
        <span className="text-sm">Scroll to explore</span>
      </motion.div>
    </div>
  )
}
