"use client"

import { useState } from "react"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import Specifications from "./components/specifications"
import Amenities from "./components/amenities"
import EnquiryModal from "./components/enquiry-modal"
import LocationSection from "./components/location-section"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ImageGallery from "./components/gallerySection"


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState("enquiry")

  const handleEnquiry = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const handleFormSubmit = async (formData) => {
    console.log(formData)
    setIsModalOpen(false)
  }

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection onEnquire={handleEnquiry} />
      <Specifications onEnquire={handleEnquiry} />
      <Amenities/>
      <LocationSection />
      {/* <ImageGallery/> */}
      <Contact />
      <Footer onEnquire={handleEnquiry}/>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        title={
          modalType === "brochure"
            ? "Download Brochure"
            : modalType === "specifications"
              ? "Request Specifications"
              : "Price Enquiry"
        }
        ctaText="Submit Enquiry"
      />
    </main>
  )
}