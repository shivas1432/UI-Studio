"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const BuildComponents = () => {
  return (
    <>
      <motion.p
        initial={{
          y: 10,
          filter: "blur(10px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mb-2 text-center text-xs text-neutral-500"
      >
        Build
      </motion.p>
      <motion.h1
        initial={{
          y: 10,
          filter: "blur(10px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mx-auto mb-2 max-w-2xl text-balance bg-gradient-to-br from-neutral-100 via-neutral-100 via-50% to-blue-200/50 bg-clip-text py-2 text-center text-2xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-5xl animate-pulse"
      >
        Visually Stunning Interfaces With Complete Design Freedom
      </motion.h1>
      <motion.p
        initial={{
          y: 10,
          filter: "blur(10px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mb-6 max-w-md text-balance bg-gradient-to-br from-white/70 via-blue-200/60 to-blue-300/40 bg-clip-text text-center text-[0.75rem] text-transparent sm:max-w-lg sm:text-[0.8rem] lg:text-[0.85rem]"
      >
        Create responsive, production-ready interfaces using components designed
        for performance, accessibility, and easy customization.
      </motion.p>
    </>
  );
};

export default BuildComponents;

export const ExploreComponentsButton = () => {
  return (
    <Link href="/components/animated-form">
      <motion.div
        initial={{
          y: 5,
          filter: "blur(5px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="group relative z-20 mt-8 flex h-8 w-auto cursor-pointer items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-1.5 text-[0.8rem] font-semibold text-white no-underline transition-all duration-300 hover:from-blue-500 hover:to-blue-300 hover:shadow-lg md:h-9 md:rounded-xl md:px-5 md:py-2 md:text-[0.85rem]"
      >
        Explore All Components
        <ChevronRight className="mt-0.5 h-3 w-3 transition-all duration-200 ease-in-out group-hover:translate-x-1 md:h-3.5 md:w-3.5 md:group-hover:translate-x-2" />
      </motion.div>
    </Link>
  );
};