"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Shield, 
  Download,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Clock,
  Users,
  Globe
} from "lucide-react";
import PremiumCheckout from "./PremiumCheckout";

const PremiumPricingPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const countries = [
    { code: "India", name: "India", flag: "🇮🇳", currency: "₹", price: "2,499", originalPrice: "2,999", discount: "500" },
    { code: "US", name: "United States", flag: "🇺🇸", currency: "$", price: "40", originalPrice: "48", discount: "8" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧", currency: "£", price: "23", originalPrice: "28", discount: "5" }
  ];

  const currentCountry = countries.find(c => c.code === selectedCountry) || countries[0];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              Premium Collection
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Unlock Premium
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Design Collection
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get access to our complete library of premium components, templates, and design systems. 
              Perfect for developers and designers who want to ship faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white dark:bg-gray-800 p-1 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 px-4 py-2">
                <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Select Country:</span>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-transparent border-none outline-none font-semibold text-gray-900 dark:text-white cursor-pointer"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code} className="dark:bg-gray-800">
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              key={`free-${selectedCountry}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Free</h3>
                  <p className="text-gray-500 dark:text-gray-400">Get started for free</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">{currentCountry.currency}0</span>
                  <span className="text-gray-500 dark:text-gray-400">forever</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">20+ Premium Components</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Basic Templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Community Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Personal Projects</span>
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                Continue with Free
              </button>
            </motion.div>

            <motion.div
              key={`premium-${selectedCountry}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6 mt-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Premium</h3>
                  <p className="text-gray-500 dark:text-gray-400">Complete design system</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-medium text-gray-500 dark:text-gray-400 line-through">
                    {currentCountry.currency}{currentCountry.originalPrice}
                  </span>
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm px-2 py-1 rounded-full font-semibold">
                    {Math.round(((parseInt(currentCountry.originalPrice.replace(',', '')) - parseInt(currentCountry.price.replace(',', ''))) / parseInt(currentCountry.originalPrice.replace(',', ''))) * 100)}% OFF
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">
                    {currentCountry.currency}{currentCountry.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">one-time</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-2">
                  Limited time offer - Save {currentCountry.currency}{currentCountry.discount}!
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">500+ Premium Components</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Complete Template Library</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Advanced Animations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Priority Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Commercial License</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Source Code Access</span>
                </div>
              </div>

              <button 
                onClick={() => setCheckoutOpen(true)}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Get Premium Now
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                30-day money-back guarantee
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What&apos;s included in Premium
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">1000+ Happy Customers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <PremiumCheckout
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        selectedCountry={selectedCountry}
      />
    </>
  );
};

const features = [
  {
    icon: Code,
    title: "500+ Components",
    description: "Complete library of production-ready React components with TypeScript support."
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Comprehensive design tokens, color palettes, and typography systems."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "All components are fully responsive and optimized for mobile devices."
  },
  {
    icon: Monitor,
    title: "Dashboard Templates",
    description: "Complete admin panels and dashboard layouts ready to customize."
  },
  {
    icon: Download,
    title: "Source Code",
    description: "Full access to source code with detailed documentation and examples."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Components built for speed with tree-shaking and lazy loading support."
  }
];

export default PremiumPricingPage;