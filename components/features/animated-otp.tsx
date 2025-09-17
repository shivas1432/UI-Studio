"use client";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const digits = ["4", "8", "3", "1", "9", "7"];

const OTPVariations = () => {
  return (
    <div className="min-h-screen bg-black-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Animated OTP Design Variations</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <VariationOne />
        <VariationTwo />
        <VariationThree />
        <VariationFour />
      </div>
    </div>
  );
};

// Variation 1: Floating Circular Design
const VariationOne = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
      <h3 className="text-white font-semibold mb-4">Floating Circles</h3>
      <FloatingOTP key={animationKey} />
    </div>
  );
};

const FloatingOTP = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (activeIndex > digits.length - 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 400);

    if (activeIndex === digits.length - 1) {
      setTimeout(() => setFadeOut(true), 450);
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="flex items-center justify-center h-48">
      <div className="flex items-center gap-4">
        {digits.map((digit, idx) => (
          <div key={idx} className="relative">
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-white font-bold border border-neutral-700"
              animate={{
                y: activeIndex === idx ? [-2, -8, -2] : 0,
                scale: activeIndex === idx ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {activeIndex === idx && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
                  }}
                />
              )}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: fadeOut ? 0 : 1,
                  scale: fadeOut ? 0.5 : 1,
                }}
                transition={{
                  duration: fadeOut ? 0.2 : 0.3,
                  delay: fadeOut ? 0 : idx * 0.43,
                }}
              >
                {digit}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Variation 2: Neon Hexagon Design
const VariationTwo = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
      <h3 className="text-white font-semibold mb-4">Neon Hexagons</h3>
      <HexagonOTP key={animationKey} />
    </div>
  );
};

const HexagonOTP = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (activeIndex > digits.length - 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 400);

    if (activeIndex === digits.length - 1) {
      setTimeout(() => setFadeOut(true), 450);
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="flex items-center justify-center h-48">
      <div className="flex items-center gap-3">
        {digits.map((digit, idx) => (
          <div key={idx} className="relative">
            <div 
              className="w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-white font-bold border border-neutral-700"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              {activeIndex === idx && (
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.7), inset 0 0 15px rgba(34, 211, 238, 0.3)",
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 1.2, 1],
                    opacity: [0, 1, 1],
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
              <motion.span
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{
                  opacity: fadeOut ? 0 : 1,
                  rotateY: fadeOut ? 90 : 0,
                }}
                transition={{
                  duration: fadeOut ? 0.2 : 0.4,
                  delay: fadeOut ? 0 : idx * 0.43,
                }}
                className="relative z-10"
              >
                {digit}
              </motion.span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Variation 3: Matrix-style Vertical Bars
const VariationThree = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
      <h3 className="text-white font-semibold mb-4">Matrix Bars</h3>
      <MatrixOTP key={animationKey} />
    </div>
  );
};

const MatrixOTP = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (activeIndex > digits.length - 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 400);

    if (activeIndex === digits.length - 1) {
      setTimeout(() => setFadeOut(true), 450);
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="flex items-center justify-center h-48">
      <div className="flex items-end gap-2">
        {digits.map((digit, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <motion.div
              className="w-8 bg-gradient-to-t from-neutral-800 to-neutral-700 rounded-t-md border border-neutral-600 flex items-end justify-center pb-2 text-white font-bold"
              style={{ height: 60 + (idx * 8) }}
              animate={{
                height: activeIndex === idx ? [60 + (idx * 8), 80 + (idx * 8), 60 + (idx * 8)] : 60 + (idx * 8),
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {activeIndex === idx && (
                <>
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400 rounded-t-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5] }}
                    transition={{ duration: 0.8 }}
                    style={{
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 10px rgba(34, 211, 238, 0.3)",
                    }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                      boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
                    }}
                  />
                </>
              )}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: fadeOut ? 0 : 1,
                  y: fadeOut ? 10 : 0,
                }}
                transition={{
                  duration: fadeOut ? 0.2 : 0.3,
                  delay: fadeOut ? 0 : idx * 0.43,
                }}
                className="relative z-10"
              >
                {digit}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Variation 4: Futuristic Diamond Shape
const VariationFour = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
      <h3 className="text-white font-semibold mb-4">Diamond Grid</h3>
      <DiamondOTP key={animationKey} />
    </div>
  );
};

const DiamondOTP = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (activeIndex > digits.length - 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 400);

    if (activeIndex === digits.length - 1) {
      setTimeout(() => setFadeOut(true), 450);
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="flex items-center justify-center h-48">
      <div className="flex items-center gap-3">
        {digits.map((digit, idx) => (
          <div key={idx} className="relative">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-white font-bold border border-neutral-700 transform rotate-45"
              animate={{
                rotate: activeIndex === idx ? [45, 65, 45] : 45,
                scale: activeIndex === idx ? [1, 1.15, 1] : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {activeIndex === idx && (
                <>
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.3, 1],
                      opacity: [0, 1, 0.8],
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                      boxShadow: "0 0 25px rgba(34, 211, 238, 0.7), inset 0 0 15px rgba(34, 211, 238, 0.4)",
                    }}
                  />
                  <motion.div
                    className="absolute inset-2 border border-cyan-300 opacity-50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </>
              )}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: fadeOut ? 0 : 1,
                  scale: fadeOut ? 0.5 : 1,
                }}
                transition={{
                  duration: fadeOut ? 0.2 : 0.3,
                  delay: fadeOut ? 0 : idx * 0.43,
                }}
                className="transform -rotate-45 relative z-10"
              >
                {digit}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OTPVariations;