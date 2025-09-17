"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard,
  Smartphone,
  Check,
  Shield,
  Lock,
  X,
  MessageCircle,
  Send,
  Instagram,
  AlertCircle,
  Gift
} from "lucide-react";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry: string;
}

const PremiumCheckout: React.FC<CheckoutProps> = ({ isOpen, onClose, selectedCountry }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: selectedCountry
    },
    paymentMethod: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const countries = [
    { code: "India", name: "India", flag: "🇮🇳", currency: "₹", price: "2,499", originalPrice: "2,999", discount: "500" },
    { code: "US", name: "United States", flag: "🇺🇸", currency: "$", price: "40", originalPrice: "48", discount: "8" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧", currency: "£", price: "23", originalPrice: "28", discount: "5" }
  ];

  const getCurrentCountry = () => countries.find(c => c.code === formData.address.country) || countries[0];
  const currentCountry = getCurrentCountry();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string, country: string) => {
    switch (country) {
      case "India":
        return /^[6-9]\d{9}$/.test(phone);
      case "US":
        return /^\d{10}$/.test(phone);
      case "UK":
        return /^[0-9]{10,11}$/.test(phone);
      default:
        return phone.length >= 10;
    }
  };

  const validatePostalCode = (code: string, country: string) => {
    switch (country) {
      case "India":
        return /^\d{6}$/.test(code);
      case "US":
        return /^\d{5}(-\d{4})?$/.test(code);
      case "UK":
        return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(code);
      default:
        return code.length >= 3;
    }
  };

  const getPhoneFormat = (country: string) => {
    switch (country) {
      case "India":
        return "10-digit Indian mobile number";
      case "US":
        return "10-digit US phone number";
      case "UK":
        return "10-11 digit UK phone number";
      default:
        return "valid phone number";
    }
  };

  const getPostalCodeFormat = (country: string) => {
    switch (country) {
      case "India":
        return "6-digit pincode";
      case "US":
        return "5-digit ZIP code";
      case "UK":
        return "UK postcode (e.g., SW1A 1AA)";
      default:
        return "postal code";
    }
  };

  const getPhonePrefix = (country: string) => {
    switch (country) {
      case "India":
        return "+91";
      case "US":
        return "+1";
      case "UK":
        return "+44";
      default:
        return "+91";
    }
  };

  const getCountryPaymentMethods = (country: string) => {
    switch (country) {
      case "India":
        return [
          { id: "debit", name: "Debit Card", icon: CreditCard, description: "Visa, Mastercard, Rupay" },
          { id: "credit", name: "Credit Card", icon: CreditCard, description: "Visa, Mastercard, Rupay" },
          { id: "phonepe", name: "PhonePe", icon: Smartphone, description: "Pay with PhonePe UPI" },
          { id: "paytm", name: "Paytm", icon: Smartphone, description: "Pay with Paytm Wallet" },
          { id: "gpay", name: "Google Pay", icon: Smartphone, description: "Pay with Google Pay" },
          { id: "amazon", name: "Amazon Pay", icon: Smartphone, description: "Pay with Amazon Pay" }
        ];
      case "US":
        return [
          { id: "debit", name: "Debit Card", icon: CreditCard, description: "Visa, Mastercard, Discover" },
          { id: "credit", name: "Credit Card", icon: CreditCard, description: "Visa, Mastercard, Amex" },
          { id: "paypal", name: "PayPal", icon: Smartphone, description: "Pay with PayPal" },
          { id: "apple", name: "Apple Pay", icon: Smartphone, description: "Pay with Apple Pay" },
          { id: "google", name: "Google Pay", icon: Smartphone, description: "Pay with Google Pay" },
          { id: "venmo", name: "Venmo", icon: Smartphone, description: "Pay with Venmo" }
        ];
      case "UK":
        return [
          { id: "debit", name: "Debit Card", icon: CreditCard, description: "Visa, Mastercard" },
          { id: "credit", name: "Credit Card", icon: CreditCard, description: "Visa, Mastercard, Amex" },
          { id: "paypal", name: "PayPal", icon: Smartphone, description: "Pay with PayPal" },
          { id: "apple", name: "Apple Pay", icon: Smartphone, description: "Pay with Apple Pay" },
          { id: "google", name: "Google Pay", icon: Smartphone, description: "Pay with Google Pay" },
          { id: "klarna", name: "Klarna", icon: Smartphone, description: "Pay with Klarna" }
        ];
      default:
        return [
          { id: "debit", name: "Debit Card", icon: CreditCard, description: "Visa, Mastercard" },
          { id: "credit", name: "Credit Card", icon: CreditCard, description: "Visa, Mastercard" },
          { id: "paypal", name: "PayPal", icon: Smartphone, description: "Pay with PayPal" }
        ];
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.confirmEmail) {
      newErrors.confirmEmail = "Please confirm your email";
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Emails do not match";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone, formData.address.country)) {
      const phoneFormat = getPhoneFormat(formData.address.country);
      newErrors.phone = `Please enter a valid ${phoneFormat}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.address.street) newErrors.street = "Street address is required";
    if (!formData.address.city) newErrors.city = "City is required";
    if (!formData.address.state) newErrors.state = "State/Province is required";
    if (!formData.address.postalCode) {
      newErrors.postalCode = "Postal/ZIP code is required";
    } else if (!validatePostalCode(formData.address.postalCode, formData.address.country)) {
      const postalFormat = getPostalCodeFormat(formData.address.country);
      newErrors.postalCode = `Please enter a valid ${postalFormat}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    if (!formData.paymentMethod) {
      setErrors({ payment: "Please select a payment method" });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (currentStep === 1) isValid = validateStep1();
    else if (currentStep === 2) isValid = validateStep2();
    else if (currentStep === 3) isValid = validateStep3();

    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const addressField = field.split(".")[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [addressField]: value }
      });
    } else {
      setFormData({ ...formData, [field]: value });
    }
    
    if (errors[field] || errors[field.split(".")[1]]) {
      setErrors({ ...errors, [field]: "", [field.split(".")[1]]: "" });
    }
  };

  const paymentMethods = getCountryPaymentMethods(formData.address.country);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate OTP sending and payment processing
    await new Promise(resolve => setTimeout(resolve, 3500));
    
    setIsProcessing(false);
    setPaymentFailed(true);
  };

  const resetCheckout = () => {
    setCurrentStep(1);
    setIsProcessing(false);
    setPaymentFailed(false);
    setFormData({
      email: "",
      confirmEmail: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: selectedCountry
      },
      paymentMethod: ""
    });
    setErrors({});
  };

  const handleClose = () => {
    resetCheckout();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Processing State */}
          {isProcessing && (
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mb-6"
              >
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-8 h-8 text-blue-600" />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
              >
                Sending OTP to your email
              </motion.h3>
              
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400"
              >
                Please check {formData.email} for verification code
              </motion.p>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
                className="mt-6 h-2 bg-blue-600 rounded-full"
              />
            </div>
          )}

          {/* Payment Failed State */}
          {paymentFailed && (
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mb-6"
              >
                <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Payment Processing Issue
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Sorry, there was an issue processing your payment. Please contact us for assistance.
              </p>

              {/* Special Offer */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 mb-6 border border-green-200 dark:border-green-700">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-700 dark:text-green-400">Special Offer!</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400">
                  For this inconvenience, we're offering you an additional <strong>10% discount</strong> on your purchase!
                </p>
              </div>
              
              {/* Contact Options */}
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Us:</h4>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="https://wa.me/447867034729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors border border-green-200 dark:border-green-700"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div className="text-left">
                    <p className="font-medium text-green-700 dark:text-green-400">WhatsApp</p>
                    <p className="text-xs text-green-600 dark:text-green-500">+44 7867 034729</p>
                  </div>
                </a>
                
                <a
                  href="https://t.me/helpme_coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-700"
                >
                  <Send className="w-5 h-5 text-blue-600" />
                  <div className="text-left">
                    <p className="font-medium text-blue-700 dark:text-blue-400">Telegram</p>
                    <p className="text-xs text-blue-600 dark:text-blue-500">@helpme_coder
</p>
                  </div>
                </a>
                
                <a
                  href="mailto:shivashanker7337@gmail.com"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div className="text-left">
                    <p className="font-medium text-gray-700 dark:text-gray-300">Email</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Support Team</p>
                  </div>
                </a>
                
                <a
                  href="https://instagram.com/ss_web_innovations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors border border-pink-200 dark:border-pink-700"
                >
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <div className="text-left">
                    <p className="font-medium text-pink-700 dark:text-pink-400">Instagram</p>
                    <p className="text-xs text-pink-600 dark:text-pink-500">ss_web_innovations</p>
                  </div>
                </a>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setPaymentFailed(false)}
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Normal Checkout Flow */}
          {!isProcessing && !paymentFailed && (
            <>
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {currentStep > 1 && (
                      <button
                        onClick={handleBack}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Complete Your Purchase
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Step {currentStep} of 4
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`w-1/4 h-2 rounded-full mr-1 last:mr-0 ${
                          step <= currentStep
                            ? "bg-blue-600"
                            : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Contact</span>
                    <span>Address</span>
                    <span>Payment</span>
                    <span>Confirm</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        Contact Information
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                            placeholder="your@email.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Confirm Email Address</label>
                          <input
                            type="email"
                            value={formData.confirmEmail}
                            onChange={(e) => handleInputChange("confirmEmail", e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                            placeholder="Confirm your email"
                          />
                          {errors.confirmEmail && <p className="text-red-500 text-sm mt-1">{errors.confirmEmail}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                              {getPhonePrefix(formData.address.country)}
                            </span>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-r-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                              placeholder={formData.address.country === "India" ? "9876543210" : formData.address.country === "US" ? "5551234567" : "7700900123"}
                              maxLength={formData.address.country === "UK" ? 11 : 10}
                            />
                          </div>
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Address */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Billing Address
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Country</label>
                          <select
                            value={formData.address.country}
                            onChange={(e) => {
                              handleInputChange("address.country", e.target.value);
                              setFormData(prev => ({ ...prev, paymentMethod: "" }));
                            }}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                          >
                            {countries.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.flag} {country.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Street Address</label>
                          <input
                            type="text"
                            value={formData.address.street}
                            onChange={(e) => handleInputChange("address.street", e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                            placeholder="123 Main Street, Apartment 4B"
                          />
                          {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">City</label>
                            <input
                              type="text"
                              value={formData.address.city}
                              onChange={(e) => handleInputChange("address.city", e.target.value)}
                              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                              placeholder={formData.address.country === "India" ? "Mumbai" : formData.address.country === "US" ? "New York" : "London"}
                            />
                            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {formData.address.country === "US" ? "State" : formData.address.country === "India" ? "State" : "County/Region"}
                            </label>
                            <input
                              type="text"
                              value={formData.address.state}
                              onChange={(e) => handleInputChange("address.state", e.target.value)}
                              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                              placeholder={formData.address.country === "India" ? "Maharashtra" : formData.address.country === "US" ? "New York" : "Greater London"}
                            />
                            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {formData.address.country === "US" ? "ZIP Code" : formData.address.country === "India" ? "Pincode" : "Postcode"}
                          </label>
                          <input
                            type="text"
                            value={formData.address.postalCode}
                            onChange={(e) => handleInputChange("address.postalCode", e.target.value)}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800"
                            placeholder={formData.address.country === "India" ? "400001" : formData.address.country === "US" ? "10001" : "SW1A 1AA"}
                            maxLength={formData.address.country === "India" ? 6 : formData.address.country === "US" ? 10 : 8}
                          />
                          {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment Method */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        Payment Method
                      </h3>
                      
                      <div className="space-y-3">
                        {paymentMethods.map((method) => (
                          <div
                            key={method.id}
                            onClick={() => handleInputChange("paymentMethod", method.id)}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.paymentMethod === method.id
                                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <method.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                <div>
                                  <p className="font-medium">{method.name}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                                </div>
                              </div>
                              {formData.paymentMethod === method.id && (
                                <Check className="w-5 h-5 text-blue-600" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      {errors.payment && <p className="text-red-500 text-sm mt-2">{errors.payment}</p>}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Order Summary
                      </h3>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Premium UI Collection</span>
                          <span className="text-lg font-bold">{currentCountry.currency}{currentCountry.price}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                          <span>Original Price</span>
                          <span className="line-through">{currentCountry.currency}{currentCountry.originalPrice}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-green-600">
                          <span>Discount</span>
                          <span>-{currentCountry.currency}{currentCountry.discount}</span>
                        </div>
                        <hr className="border-gray-300 dark:border-gray-600" />
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Total</span>
                          <span>{currentCountry.currency}{currentCountry.price}</span>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Lock className="w-4 h-4" />
                          <span>Secure 256-bit SSL encryption</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Shield className="w-4 h-4" />
                          <span>30-day money-back guarantee</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {currentStep < 4 ? (
                      "Complete all steps to proceed"
                    ) : (
                      "Ready to complete your purchase"
                    )}
                  </div>
                  <div className="flex gap-3">
                    {currentStep < 4 ? (
                      <button
                        onClick={handleNext}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {currentStep === 3 ? "Review Order" : "Continue"}
                      </button>
                    ) : (
                      <button
                        onClick={handlePayment}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Complete Purchase
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PremiumCheckout;