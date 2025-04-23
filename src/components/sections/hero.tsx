"use client";

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Simple hook to get window size
function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

// Inline Orb component using styled-components
function Orb() {
  const { width, height } = useWindowSize();

  const moveOrb = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width / 1.2}px, ${height / 2}px);
    }
    100% {
      transform: translate(0, 0);
    }
  `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #007BFF 0%, #0056b3 100%);
    filter: blur(300px);
    animation: ${moveOrb} 50s alternate linear infinite;
  `;

  return <OrbStyled />;
}

const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-left text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
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
        className="text-left max-w-xl text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9"
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
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mt-6 flex w-full max-w-2xl flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link href="/signup">
          <InteractiveHoverButton>
            Plan My Trip
          </InteractiveHoverButton>
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      ></motion.p>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <div className="relative">
        <img
          src="/Untitled design.png"
          alt="Voyentra Travel Assistant"
          className="w-full max-w-lg h-auto"
          style={{ 
            background: 'transparent',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
          }}
        />
        <div 
          className="absolute inset-0 mix-blend-color pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom left, rgba(168, 85, 247, 0.85), rgba(236, 72, 153, 0.75), rgba(99, 102, 241, 0.65))',
            maskImage: 'url("/Untitled design.png")',
            maskSize: '100% 100%',
            WebkitMaskImage: 'url("/Untitled design.png")',
            WebkitMaskSize: '100% 100%',
          }}
        />
        <div 
          className="absolute inset-0 mix-blend-soft-light pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.8))',
            maskImage: 'url("/Untitled design.png")',
            maskSize: '100% 100%',
            WebkitMaskImage: 'url("/Untitled design.png")',
            WebkitMaskSize: '100% 100%',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero" className="relative pb-0 overflow-visible">
      {/* Global gradient background that extends across sections */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-purple-100/40 via-pink-50/30 to-white/20 pointer-events-none"></div>
      
      {/* Gradient accent elements */}
      <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
        {/* Top-right corner accent gradient - repositioned to come more from the side */}
        <div className="absolute top-20 -right-60 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/50 via-pink-400/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom-left corner accent gradient - extended to reach logos section - slightly weaker */}
        <div className="absolute -bottom-80 -left-20 w-[800px] h-[800px] bg-gradient-to-tr from-blue-400/40 via-purple-300/25 to-transparent rounded-full blur-3xl"></div>
        
        {/* Top-left subtle gradient - extended upward - slightly weaker */}
        <div className="absolute -top-60 -left-10 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/25 via-pink-300/15 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom-right accent gradient - extended downward */}
        <div className="absolute -bottom-60 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-blue-300/40 via-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full px-4 pt-10 pb-0 sm:px-6 sm:pt-14 md:pt-16 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            {/* Left column with text and CTA */}
            <div className="flex flex-col items-start pl-0">
              <div className="flex w-full flex-col space-y-0 overflow-hidden pt-0 pl-0">
                <motion.h1
                  className="text-left text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl"
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
                  className="text-left max-w-xl text-base leading-6 text-muted-foreground sm:text-lg sm:leading-7 pl-0 mt-1"
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
              </div>
              <motion.div
                className="mt-3 flex w-full flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease }}
              >
                <Link href="/signup">
                  <InteractiveHoverButton>
                    Plan My Trip
                  </InteractiveHoverButton>
                </Link>
              </motion.div>
            </div>
            
            {/* Right column with image */}
            <div className="flex justify-center md:justify-end">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
