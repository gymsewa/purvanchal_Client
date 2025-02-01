"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, ArrowRight, Star } from "lucide-react"
import { useState } from 'react'
import { ContactForm } from '../api/ContactForm';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await ContactForm(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.phone,
        formData.message
      )
      setIsSubmitted(true)
      setIsError(false)
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      setIsError(true)
      setTimeout(() => setIsError(false), 3000)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 py-10 relative">
          <motion.div initial="initial" animate="animate" className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-6 text-gray-900">
                Get in Touch With Us
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our properties? We're here to help you find your perfect home.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12">
              <motion.div 
                {...fadeInUp} 
                transition={{ delay: 0.2 }} 
                className="lg:col-span-3 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and our team will get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name *"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name *"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address *"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number *"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements *"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 
                      group relative overflow-hidden shadow-lg transition-all duration-300
                      ${isError 
                        ? 'bg-red-600 hover:bg-red-700 shadow-red-500/25' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-blue-500/25'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isError ? (
                      <span className="flex items-center gap-2 text-white">
                        Error Sending Message. Please Try Again.
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center gap-2 text-white">
                        <Star className="w-5 h-5" />
                        Message Sent Successfully!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-white">
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    Your information is safe with us. We'll never share your details with third parties.
                  </p>
                </form>
              </motion.div>

              {/* Contact Info Section - keeping the rest of the component the same */}
              <motion.div 
                {...fadeInUp} 
                transition={{ delay: 0.4 }} 
                className="lg:col-span-2 space-y-6"
              >
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
                  <Star className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>20+ Years of Excellence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Premium Locations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Expert Guidance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                  <div className="space-y-2">
                    {[
                      {
                        icon: <Phone className="w-5 h-5" />,
                        title: "Sales Enquiry",
                        content: "+91 7860060081",
                        action: "tel:+917860060081"
                      },
                      {
                        icon: <Mail className="w-5 h-5" />,
                        title: "Email Us",
                        content: "info@purvanchlprojects.in",
                        action: "mailto:info@purvanchlprojects.in"
                      },
                      {
                        icon: <MapPin className="w-5 h-5" />,
                        title: "Site Location",
                        content: "Purvanchal Projects,Sec 22D Yamuna Expressway, UP",
                        action: "#"
                      }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.action}
                        className="flex items-start gap-4 px-4 py-1 rounded-xl hover:bg-gray-50 transition-colors group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <div className="text-blue-600">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}