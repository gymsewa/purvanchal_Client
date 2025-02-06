"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <span className={`font-bold text-xl ${scrolled ? "text-primary" : "text-white"}`}>Purvanchal</span> */}
            <Image src="/purvanchal-logo.png" alt="Solist Logo" width={100} height={100} />
            <Image src="/BLACK LOGO-01.png" alt="Solist Logo" width={100} height={100} />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about" scrolled={scrolled}>
              Home
            </NavLink>
            <NavLink href="#specifications" scrolled={scrolled}>
              Specifications
            </NavLink>
            <NavLink href="#amenities" scrolled={scrolled}>
              Amenities
            </NavLink>
            <NavLink href="#location" scrolled={scrolled}>
              Location
            </NavLink>
          </div>

          <motion.a
            href="tel:+917860060042"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center px-6 py-2 rounded-full space-x-2
              ${scrolled ? "bg-primary text-black bg-black/10 hover:bg-primary-dark" : "bg-white/10 text-white hover:bg-white/20"}
              transition-all duration-300
            `}
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">Contact Sales</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children, scrolled }) {
  return (
    <Link
      href={href}
      className={`
        relative font-medium transition-colors duration-300
        ${scrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"}
        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
        after:bg-current after:transition-all after:duration-300
        hover:after:w-full
      `}
    >
      {children}
    </Link>
  )
}