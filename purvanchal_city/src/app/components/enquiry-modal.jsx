"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const EnquiryModal = ({
  isOpen,
  onClose,
  title = "Download Brochure",
  onSubmit,
  ctaText = "Download now"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    onSubmit(data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl w-full max-w-md overflow-hidden"
          >
            <div className="relative bg-gradient-to-r from-primary/90 to-primary p-6 text-white">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>

            <div className="p-6">
              <div className="flex gap-6 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-2">
                    <img src="/icons/call.svg" alt="Call back" className="w-full h-full" />
                  </div>
                  <span className="text-sm">Instant Call Back</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-2">
                    <img src="/icons/visit.svg" alt="Site visit" className="w-full h-full" />
                  </div>
                  <span className="text-sm">Free Site Visit</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-2">
                    <img src="/icons/price.svg" alt="Best price" className="w-full h-full" />
                  </div>
                  <span className="text-sm">Unmatched Price</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile No"
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-Mail Address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  {ctaText}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;

