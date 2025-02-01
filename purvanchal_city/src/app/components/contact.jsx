"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial="initial" animate="animate" className="max-w-4xl mx-auto">
          <motion.h1 {...fadeInUp} className="text-4xl font-bold text-center mb-12">
            Contact Us
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 8929814406</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">sales@purvanchal.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      Purvanchal Projects
                      <br />
                      Yamuna Expressway
                      <br />
                      Greater Noida, UP
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="font-semibold mb-4">Sales Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
