"use client";

import { motion } from "framer-motion";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

export default function Hero2() {
  return (
    <section id="hero" className="relative pb-0 overflow-visible">
      {/* Global gradient background that extends above the navbar */}
      <div className="absolute inset-0 top-0 bottom-1/2 -z-10 bg-gradient-to-b from-blue-100/40 via-sky-50/30 to-transparent pointer-events-none" style={{ top: '-100px' }}></div>
      
      {/* Gradient accent elements */}
      <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none" style={{ top: '-100px' }}>
        {/* Top-right corner accent gradient - repositioned to come more from the side */}
        <div className="absolute top-20 -right-60 w-[800px] h-[800px] bg-gradient-to-bl from-blue-600/50 via-sky-400/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Top-left subtle gradient - extended upward - slightly weaker */}
        <div className="absolute -top-60 -left-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/25 via-sky-300/15 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full px-4 pt-24 pb-0 sm:px-6 sm:pt-32 md:pt-40 lg:px-8 lg:pt-44">
        <div className="container mx-auto">
          {/* Centered content */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease,
                staggerChildren: 0.2,
              }}
            >
              {["Automate", "your", "trip", "planning", "with", "AI"].map((text, index) => (
                <motion.span
                  key={index}
                  className="inline-block px-1 first:pl-0 md:px-2 md:first:pl-0 text-balance font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease,
                  }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-center max-w-xl text-base leading-6 text-muted-foreground sm:text-lg sm:leading-7 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease,
              }}
            >
              Save time and money with AI-powered recommendations for the best flights, hotels, and itineraries tailored just for you.
            </motion.p>
            <motion.div
              className="mt-8 flex w-full flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease }}
            >
              <Link href="http://localhost:3001/auth/sign-up">
                <InteractiveHoverButton>
                  Plan My Trip
                </InteractiveHoverButton>
              </Link>
            </motion.div>
          </div>

          {/* Video section with fade-out effect */}
          <motion.div
            className="relative mx-auto flex w-full items-center justify-center mt-20 pb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1, ease }}
          >
            <div className="relative w-full max-w-6xl">
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/voyentra-dashboard.jpg"
                thumbnailAlt="Hero Video"
                className="border rounded-lg w-full"
              />
              {/* Enhanced fade-out overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 via-white/80 to-transparent pointer-events-none rounded-b-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
