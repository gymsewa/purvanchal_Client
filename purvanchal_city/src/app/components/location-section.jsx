"use client"

import { motion } from "framer-motion"
import { MapPin, Train, School, Building2, Hospital, ShoppingBag } from "lucide-react"
import Image from "next/image";

export default function LocationSection() {
  const locations = [
    {
      icon: Train,
      name: "Knowledge Park 2 Metro Station",
      distance: "5.2 km",
    },
    {
      icon: Building2,
      name: "Gautam Buddha University",
      distance: "3 km",
    },
    {
      icon: School,
      name: "JP International School",
      distance: "4.3 km",
    },
    {
      icon: ShoppingBag,
      name: "MSX Mall",
      distance: "5.6 km",
    },
    {
      icon: Hospital,
      name: "Kailash Hospital, Greater",
      distance: "7.2 km",
    },
  ]

  return (
    <section id="location" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Location</h2>
          <p className="text-gray-600 leading-relaxed">
            Purvanchal Royal City in Greater Noida offers exceptional connectivity, just 7 minutes from Pari Chowk and
            28 minutes from the DND Flyway. Its proximity to major employment hubs, including Knowledge Park II Metro
            Station and Sector 18 Noida, ensures convenient commutes. Nearby educational institutions, such as KR
            Mangalam School and G D Goenka School, along with recreational spots like The Grand Venice Mall, enhance the
            living experience in this serene and secure environment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <location.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{location.name}</h3>
                    <p className="text-sm text-primary">{location.distance}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="bg-white rounded-lg p-6 shadow-md mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Address:</label>
                  <p className="font-medium">Sector CHI-V, Greater Noida</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">City:</label>
                  <p className="font-medium">Greater-noida</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">State:</label>
                  <p className="font-medium">Uttar Pradesh</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Country:</label>
                  <p className="font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Purvanchal_Img.jpg"
                alt="Location Map"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg"
            >
              <MapPin className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

