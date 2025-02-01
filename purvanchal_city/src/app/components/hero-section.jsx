'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, PhoneCall, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const BlinkingBanner = () => {
  return (
    <motion.div
      animate={{
        backgroundColor: ['#ff4444', '#ff8c00'],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute top-[10%] left-0 right-0 z-20 py-2 text-center text-white font-bold"
    >
      🔥 Limited Time Offer - Book Now & Get 10% Discount! Hurry Up! 🏠
    </motion.div>
  );
};

const ContactButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-2 z-50">
      <motion.a
        href="tel:+1234567890"
        whileHover={{ scale: 1.1 }}
        className="bg-green-500 p-3 rounded-full text-white"
      >
        <PhoneCall className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="https://wa.me/1234567890"
        whileHover={{ scale: 1.1 }}
        className="bg-[#25D366] p-3 rounded-full text-white"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default function HeroSection({ onEnquire }) {
  return (
    <div className="relative min-h-screen flex items-center">
      <Image
        src="/bannerImg.jpg"
        alt="Purvanchal Luxury Residences"
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-black/40" />
      
      {/* <BlinkingBanner /> */}
      {/* <ContactButtons /> */}

      <div className="container mx-auto px-10 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="inline-block px-4 py-2 rounded-full bg-red-500 text-white mb-6"
            >
              🎉 New Launch - Special Prices
            </motion.span>
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
                className="px-8 py-4 bg-red-500 text-lg text-white font-semibold rounded-lg 
                          hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => onEnquire('brochure')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 flex items-center justify-center bg-white/20 text-white font-semibold text-lg rounded-lg 
                          hover:bg-white/30 transition-all duration-300"
              >
                Download Brochure <Download className="ml-2 w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="glass rounded-xl p-8 max-w-md backdrop-blur-md bg-black/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                <motion.span
                  animate={{ color: ['#ffffff', '#ffdd00', '#ffffff'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Limited Time Pre-Launch Offers
                </motion.span>
              </h3>
              <div className="space-y-4">
                {[
                  "🌟 Pay More Save More - Special Discount",
                  "💎 Premium Priority Location - First 50 Bookings",
                  "🏆 4 BHK Special Upgrade - Limited Units"
                ].map((offer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-center space-x-3 text-white/90"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    </motion.div>
                    <span>{offer}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
  );
}