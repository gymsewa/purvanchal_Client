import React, { useState } from 'react';
import { X, Check, Building2, Phone, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactForm } from "@/app/api/ContactForm";

const EnquiryModal = ({
  isOpen,
  onClose,
  title,
  ctaText,
  projectName = "Luxury Residences"
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: ""
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send only firstName, phone as mobile, and email
      // Pass empty strings for lastName and message since they're required by the API
      await ContactForm(
        formData.firstName,  // firstName
        "",                 // lastName (empty)
        formData.email,     // email
        formData.phone,     // mobile (using phone number)
        ""                  // message (empty)
      );
      setCurrentStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Building2, text: "Priority Access to Premium Units" },
    { icon: Check, text: "Exclusive Pre-Launch Prices" },
    { icon: Check, text: "Personalized Site Visit" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
          >
            {currentStep === 0 ? (
              <>
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white/80 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold mb-2">{title}</h2>
                    <p className="text-white/80 text-lg">{projectName}</p>
                  </motion.div>
                </div>

                <div className="p-8">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Exclusive Benefits:</h3>
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <benefit.icon className="h-5 w-5 text-blue-600" />
                          <span>{benefit.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="First Name"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        />
                        <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          required
                          pattern="[0-9]{10}"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                        <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      </div>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                          />
                        </span>
                      ) : (
                        ctaText
                      )}
                    </motion.button>
                  </form>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="h-8 w-8 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Our team will contact you shortly with exclusive details about {projectName}.</p>
                <button
                  onClick={onClose}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;