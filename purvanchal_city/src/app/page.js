"use client"

import { useState } from "react"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import Specifications from "./components/specifications"
import Amenities from "./components/amenities"
import EnquiryModal from "./components/enquiry-modal"
import LocationSection from "./components/location-section"
import Contact from "./components/contact"


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState("enquiry")

  const handleEnquiry = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const handleFormSubmit = async (formData) => {
    // Handle form submission
    console.log(formData)
    setIsModalOpen(false)
    // Show success message or handle download
  }

  return (
    <main>
      <Navbar />
      <HeroSection onEnquire={handleEnquiry} />
      <Specifications onEnquire={handleEnquiry} />
      <Amenities />
      <LocationSection />
      <Contact/>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        title={
          modalType === "brochure"
            ? "Download Brochure"
            : modalType === "booking"
              ? "Book Your Dream Home"
              : "Request Information"
        }
        ctaText={modalType === "brochure" ? "Download Now" : "Submit Enquiry"}
      />
    </main>
  )
}

