"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Code, Palette } from "lucide-react";
import Link from "next/link";

const LandingCta = () => {
  return (
    <div className="my-40 flex flex-col items-center gap-8 px-4">
      <motion.div
        initial={{
          y: 20,
          filter: "blur(15px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.23, 1, 0.320, 1],
        }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        
        
        <h1 className="mx-auto max-w-4xl text-center">
          <span className="block text-4xl md:text-5xl lg:text-5xl font-black leading-[0.9] mb-2">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Craft
            </span>
          </span>
          <span className="block text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-2">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Beautiful
            </span>
          </span>
          <span className="block text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Interfaces
            </span>
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{
          y: 15,
          filter: "blur(10px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.23, 1, 0.320, 1],
        }}
        viewport={{ once: true }}
        className="max-w-2xl text-center text-lg md:text-xl text-gray-300 leading-relaxed"
      >
        Transform your ideas into stunning digital experiences with our 
        <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-semibold"> premium collection </span>
        of animated components and design systems.
      </motion.p>

      <motion.div
        initial={{
          y: 10,
          filter: "blur(8px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          ease: [0.23, 1, 0.320, 1],
        }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-8"
      >
        <CtaButtons />
      </motion.div>

      <motion.div
        initial={{
          y: 10,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="flex items-center gap-6 mt-8 text-sm text-gray-500"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>200+ Components</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span>TypeScript Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span>Dark Mode</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingCta;

const CtaButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Link href="/components/animated-form">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[2px] shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative flex items-center gap-3 rounded-[14px] bg-black px-8 py-4 text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10">
            <Palette className="w-5 h-5" />
            <span className="font-semibold text-lg">Browse Gallery</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </motion.button>
      </Link>

      <Link href="/docs/introduction">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-gray-700 hover:border-gray-600 bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300"
        >
          <Code className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
            View Documentation
          </span>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
        </motion.button>
      </Link>
    </div>
  );
};