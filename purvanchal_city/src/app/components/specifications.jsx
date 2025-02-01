"use client"

import { motion } from "framer-motion"
import { Home } from "lucide-react"

export default function Specifications({ onEnquire }) {
  const specs = [
    {
      title: "3 BHK",
      area: "1800 sq.ft.Approx",
      type: "LUXURY RESIDENCES",
    },
    {
      title: "3 BHK+ST",
      area: "2000 sq.ft.Approx",
      type: "LUXURY RESIDENCES",
    },
    {
      title: "3 BHK+ST(P)",
      area: "2500 sq.ft.Approx",
      type: "LUXURY RESIDENCES",
    },
    {
      title: "4 BHK+ST",
      area: "3200 sq.ft.Approx",
      type: "LUXURY RESIDENCES",
    },
  ]

  return (
    <section id="specifications" className=" pt-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Luxury Specifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of thoughtfully designed luxury residences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6 bg-primary text-white">
                <Home className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold">{spec.type}</h3>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold mb-4 text-gradient">{spec.title}</div>
                <div className="text-gray-600 mb-6">{spec.area}</div>
                <motion.button
                  onClick={() => onEnquire("specifications")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Request A Call
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

