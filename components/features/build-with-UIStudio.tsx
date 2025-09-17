"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Code, Zap, Sparkles } from "lucide-react";
import FeaturesContainer from "./features-container";

const BuildWithUIStudio = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      id: 1,
      title: "Install UIStudio",
      command: "npm create uistudio-app",
      description: "Get started in seconds",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 2,
      title: "Choose Components",
      command: "npx uistudio add button card",
      description: "Pick what you need",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Customize & Ship",
      command: "npm run build",
      description: "Deploy with confidence",
      color: "from-purple-400 to-pink-500"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <FeaturesContainer>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium">
        <Layers className="h-4 w-4 text-primary" />
        <p className="text-white">Build with UIStudio</p>
      </div>
      
      <p className="mb-6 text-balance text-white/70">
        Transform your development workflow with our intuitive toolkit. 
        From concept to deployment in minutes, not hours.
      </p>

      {/* Interactive Process Flow */}
      <div className="relative">
        {/* Progress Bar */}
        <div className="mb-6 flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                  index <= activeStep
                    ? 'border-primary bg-primary text-slate-900'
                    : 'border-slate-600 bg-slate-800 text-slate-400'
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setActiveStep(index);
                  setIsPlaying(false);
                }}
              >
                {index + 1}
                {index === activeStep && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  className="w-16 h-0.5 mx-2 bg-slate-700"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: index < activeStep ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Step Title */}
            <div className="flex items-center gap-3">
              <motion.div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center`}
                whileHover={{ rotate: 5 }}
              >
                {activeStep === 0 && <Zap className="w-6 h-6 text-white" />}
                {activeStep === 1 && <Code className="w-6 h-6 text-white" />}
                {activeStep === 2 && <Sparkles className="w-6 h-6 text-white" />}
              </motion.div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {steps[activeStep].title}
                </h3>
                <p className="text-sm text-white/60">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>

            {/* Code Block */}
            <div className="relative bg-slate-900/80 border border-slate-700 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <span className="text-xs text-slate-400">terminal</span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-400">$</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    className="text-white font-mono overflow-hidden"
                  >
                    {steps[activeStep].command}
                  </motion.span>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-green-400 text-sm"
                >
                  ✓ Step completed successfully
                </motion.div>
              </div>

              {/* Floating particles */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Sparkles className="w-4 h-4 text-primary/40" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
          >
            <div className="text-2xl font-bold text-primary">2min</div>
            <div className="text-xs text-white/60">Setup Time</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
          >
            <div className="text-2xl font-bold text-cyan-400">50+</div>
            <div className="text-xs text-white/60">Components</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
          >
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-xs text-white/60">Customizable</div>
          </motion.div>
        </div>
      </div>
    </FeaturesContainer>
  );
};

export default BuildWithUIStudio;