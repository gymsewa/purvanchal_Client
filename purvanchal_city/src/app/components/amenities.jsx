"use client"

import { motion } from "framer-motion"
import {
  ShoppingBasketIcon as Basketball,
  PocketIcon as Pool,
  Dumbbell,
  TableIcon as TableTennis,
  Trees,
  Coffee,
  Gamepad,
  Users,
} from "lucide-react"
import Image from "next/image"

export default function Amenities() {
  const amenities = [
    { icon: Basketball, name: "Basketball Court" },
    { icon: Pool, name: "Swimming Pools" },
    { icon: Trees, name: "Jogging Track" },
    { icon: Dumbbell, name: "Gymnasium" },
    { icon: TableTennis, name: "Indoor Games" },
    { icon: Coffee, name: "Café" },
    { icon: Gamepad, name: "Kids Play Area" },
    { icon: Users, name: "Community Hall" },
  ]

  return (
    <section id="amenities" className=" py-10 max-h[80vh]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">
              Best of Purvanchal Life
              <span className="block text-gradient">Reserved for You.</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Experience luxury living with world-class amenities designed for your comfort and convenience.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium">{amenity.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/imagepurvanchal2.jpg"
                alt="Luxury Amenities"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
