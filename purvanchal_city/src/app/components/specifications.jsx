"use client"

import { motion } from "framer-motion"
import { Home, Ruler, BedDouble, IndianRupee } from "lucide-react"
import Image from "next/image"

export default function Specifications({ onEnquire }) {
  const specs = [
    {
      title: "3 BHK + 3T",
      area: "1700 Sq Ft",
      type: "LUXURY RESIDENCES",
      price: "₹8,000/Sq Ft*",
      features: ["3 Bedrooms", "3 Toilets", "Modern Kitchen", "Spacious Living Room"],
    },
    {
      title: "3 BHK + Servant + 4T",
      area: "2050 Sq Ft",
      type: "LUXURY RESIDENCES",
      price: "₹8,000/Sq Ft*",
      features: ["3 Bedrooms", "4 Toilets", "Servant Room", "Modern Kitchen"],
    },
    {
      title: "3 BHK + Servant + Study + 4T",
      area: "2400 Sq Ft",
      type: "LUXURY RESIDENCES",
      price: "₹8,000/Sq Ft*",
      features: ["3 Bedrooms", "Study Room", "4 Toilets", "Servant Room"],
    },
    {
      title: "4 BHK + Servant + 4T",
      area: "3600 Sq Ft",
      type: "LUXURY RESIDENCES",
      price: "₹8,000/Sq Ft*",
      features: ["4 Bedrooms", "4 Toilets", "Servant Room", "Modern Kitchen"],
    },
  ]

  const floorPlans = [
    {
      type: "3 BHK",
      area: "1735.04 Sqft",
      sqmt: "161.19 Sqmt",
      image: "/generic-floorplan.jpg"
    },
    {
      type: "4 BHK",
      area: "2000.04 Sqft",
      sqmt: "185.81 Sqmt",
      image: "/generic-floorplan.jpg"
    },
    {
      type: "5 BHK",
      area: "2200.04 Sqft",
      sqmt: "204.39 Sqmt",
      image: "/generic-floorplan.jpg"
    },
  ]

  return (
    <section id="specifications" className=" pt-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-black/10 text-primary rounded-full text-sm font-medium mb-4">
            Premium Specifications
          </span>
          <h2 className="text-4xl font-bold mb-4">Luxury Specifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of thoughtfully designed luxury residences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-black to-primary-dark text-white">
                <Home className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold">{spec.type}</h3>
              </div>
              <div className="px-6 py-3">
                <div className="text-xl font-bold mb-2 ">{spec.title}</div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Ruler className="w-4 h-4" />
                  {spec.area}
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold mb-6">
                  <IndianRupee className="w-4 h-4" />
                  {spec.price}
                </div>
                <div className="space-y-2 mb-6">
                  {spec.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <BedDouble className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onEnquire("specifications")}
                  className="w-full py-3 bg-black text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Request Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Floor Plans</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Purvanchal Royal City in Greater Noida offers diverse floor plans to cater to varying needs. The 3 BHK, 4
            BHK, and 5 BHK apartments come in multiple configurations, featuring spacious bedrooms, elegant living
            areas, and servant rooms. Some layouts include family lounges, puja rooms, and powder rooms, ensuring both
            comfort and luxury.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-[200px] w-full">
                  <Image
                    src={plan.image || "/placeholder.svg"}
                    alt={`${plan.type} Floor Plan`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 border-t">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Home className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{plan.type}</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4" />
                      <span>{plan.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4" />
                      <span>{plan.sqmt}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onEnquire("floor-plan")}
                    className="w-full py-3 bg-black text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Price On Request
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

