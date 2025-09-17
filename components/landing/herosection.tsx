"use client";
import React, { useState, useEffect } from "react";
import Techstacksectionhero from "./techstacksectionhero";
import Herobuttons from "./herobuttons";
import { motion } from "motion/react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Static version for SSR
  if (!mounted) {
    return (
      <div className="flex min-h-[100vh] flex-col items-center justify-center">
        <div className="z-[3] flex flex-col items-center justify-center gap-20 text-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="mx-auto max-w-4xl text-balance py-2 text-4xl font-black leading-[0.9] tracking-wider md:text-5xl lg:text-6xl">
                  <span 
                    className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                    style={{ 
                      fontFamily: 'serif',
                      textShadow: '0 0 30px rgba(0,0,0,0.5)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    CODE LESS
                  </span>
                  <span 
                    className="block bg-gradient-to-br from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    style={{ 
                      fontFamily: 'serif',
                      textShadow: '0 0 30px rgba(0,255,255,0.3)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    CREATE MORE
                  </span>
                  <span 
                    className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                    style={{ 
                      fontFamily: 'serif',
                      textShadow: '0 0 30px rgba(0,0,0,0.5)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    SHIP FASTER
                  </span>
                </h1>
                
                <div className="flex justify-center">
                  {/* Static placeholder */}
                </div>
              </div>
            </div>
            
            <div className="mb-8 max-w-2xl space-y-6">
              <div className="text-balance text-center text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                Build <span className="font-bold text-primary tracking-wide">EXCEPTIONAL</span> user interfaces with 
                battle-tested components designed for{" "}
                <span className="relative inline-block">
                  <span className="font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent tracking-wide">
                    MAXIMUM PRODUCTIVITY
                  </span>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/60 to-cyan-400/60" />
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {/* Static grid placeholder */}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <Herobuttons />
            </div>
          </div>
          <div className="space-y-4">
            <Techstacksectionhero />
          </div>
        </div>
      </div>
    );
  }

  // Animated version for client-side
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
      <div className="z-[3] flex flex-col items-center justify-center gap-20 text-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="space-y-6">
            <motion.div
              suppressHydrationWarning
              initial={{
                y: 10,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h1 className="mx-auto max-w-4xl text-balance py-2 text-4xl font-black leading-[0.9] tracking-wider md:text-5xl lg:text-6xl">
                <span 
                  className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: 'serif',
                    textShadow: '0 0 30px rgba(0,0,0,0.5)',
                    letterSpacing: '0.05em'
                  }}
                >
                  CODE LESS
                </span>
                <span 
                  className="block bg-gradient-to-br from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: 'serif',
                    textShadow: '0 0 30px rgba(0,255,255,0.3)',
                    letterSpacing: '0.05em'
                  }}
                >
                  CREATE MORE
                </span>
                <span 
                  className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: 'serif',
                    textShadow: '0 0 30px rgba(0,0,0,0.5)',
                    letterSpacing: '0.05em'
                  }}
                >
                  SHIP FASTER
                </span>
              </h1>
              
              <motion.div
                suppressHydrationWarning
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                {/* Add your content here */}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            suppressHydrationWarning
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
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="mb-8 max-w-2xl space-y-6"
          >
            <div className="text-balance text-center text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
              Build <span className="font-bold text-primary tracking-wide">EXCEPTIONAL</span> user interfaces with 
              battle-tested components designed for{" "}
              <span className="relative inline-block">
                <span className="font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent tracking-wide">
                  MAXIMUM PRODUCTIVITY
                </span>
                <motion.div
                  suppressHydrationWarning
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/60 to-cyan-400/60"
                />
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Add your grid content here */}
            </div>
          </motion.div>
          
          <motion.div
            suppressHydrationWarning
            initial={{
              y: 5,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Herobuttons />
          </motion.div>
        </div>
        <div className="space-y-4">
          <Techstacksectionhero />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;