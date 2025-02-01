import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Footer = ({ onEnquire }) => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white pt-12 pb-6">
      {/* <div className="bg-red-600 text-white py-3 text-center mb-8">
        <p className="text-lg font-bold animate-pulse">
          Limited Time Offer!
        </p>
      </div> */}

      <div className="container mx-auto px-4">
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Featured Project: Luxury Villas at Sunset Valley
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-4">
                Experience luxury living at its finest with our latest
                development featuring:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Premium 3 & 4 BHK Smart Villas</li>
                <li>• 24/7 Security with Smart Home Features</li>
                <li>• Resort-style Amenities</li>
                <li>• Special Pre-launch Prices Available</li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              {/* <p className="text-xl font-semibold text-green-600 mb-2">
                Starting from ₹1.5 Cr*
              </p> */}
              <button
                onClick={() => onEnquire("brochure")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        <div className=" mb-4">
          <div>
            <h4 className="text-xl flex justify-center items-center font-bold text-gray-800 mb-4">
              Quick Links
            </h4>
            <div className="flex justify-center items-center gap-10 text-gray-600">
              <span>
                <a href="#about" className="hover:text-blue-600">
                  Home
                </a>
              </span>
              <span>
                <a href="#specifications" className="hover:text-blue-600">
                  Specification
                </a>
              </span>
              <span>
                <a href="#amenities" className="hover:text-blue-600">
                  Amenities
                </a>
              </span>
              <span>
                <a href="#location" className="hover:text-blue-600">
                  Location
                </a>
              </span>
            </div>
          </div>
          {/* <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>123 Business Avenue</li>
              <li>City, State 12345</li>
              <li>info@realestate.com</li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="fixed bottom-6 right-6 flex flex-col gap-4">
          <a
            href="tel:+917860060042"
            className={`bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors ${
              isBlinking ? "animate-pulse" : ""
            }`}
          >
            <Phone className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://wa.me/7860060042"
            className={`bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors ${
              isBlinking ? "animate-pulse" : ""
            }`}
          >
            <BsWhatsapp className="h-6 w-6 text-white" />
          </a>
        </div>

        <div className="border-t border-gray-200 pt-2 text-center text-gray-600">
          <p>© 2025 Real Estate Company. All rights reserved.</p>
          <a
            href="https://bytewave.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Developed with ❤️ by BIL
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
