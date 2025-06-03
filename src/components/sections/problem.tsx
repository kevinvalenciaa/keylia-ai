"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { GradientSeparator } from "@/components/ui/gradient-separator";
import { Clock, Coins, Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const neonColors = [
  {
    firstColor: "#3050cf", // Navy blue matching the new theme
    secondColor: "#60a5fa", // Light blue accent
  },
  {
    firstColor: "#2563eb", // Slightly different blue
    secondColor: "#7dd3fc", // Sky blue
  },
  {
    firstColor: "#1d4ed8", // Deep blue
    secondColor: "#3b82f6", // Standard blue
  },
  {
    firstColor: "#1e40af", // Darker blue
    secondColor: "#93c5fd", // Light blue
  }
];

const problems = [
  {
    title: "Save Hours of Planning Time",
    description:
      "Skip the research and booking headaches. Get auto-curated itineraries in minutes, not days.",
    icon: Clock,
  },
  {
    title: "Maximize Your Travel Budget",
    description:
      "Find deals, avoid tourist traps, and optimize your budget for experiences—not fees.",
    icon: Coins,
  },
  {
    title: "Travel More, Worry Less",
    description:
      "We handle the logistics—so you can focus on exploring and stay in the moment.",
    icon: Globe,
  },
  {
    title: "Discover Hidden Gems",
    description:
      "Uncover unique destinations and authentic local spots that most travelers miss.",
    icon: MapPin,
  },
];

function ProblemImage() {
  return (
    <motion.div
      className="relative flex w-full items-center justify-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <div className="relative max-w-xs mx-auto">
        <img
          src="/Chat bot-amico.png"
          alt="Voyentra Travel Assistant"
          className="w-full h-auto"
          style={{ 
            background: 'transparent',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
          }}
        />
        <div 
          className="absolute inset-0 mix-blend-color pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom left, rgba(48, 80, 207, 0.85), rgba(96, 165, 250, 0.75), rgba(59, 130, 246, 0.65))',
            maskImage: 'url("/Chat bot-amico.png")',
            maskSize: '100% 100%',
            WebkitMaskImage: 'url("/Chat bot-amico.png")',
            WebkitMaskSize: '100% 100%',
          }}
        />
        <div 
          className="absolute inset-0 mix-blend-soft-light pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, rgba(48, 80, 207, 0.9), rgba(96, 165, 250, 0.8))',
            maskImage: 'url("/Chat bot-amico.png")',
            maskSize: '100% 100%',
            WebkitMaskImage: 'url("/Chat bot-amico.png")',
            WebkitMaskSize: '100% 100%',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Component() {
  return (
    <Section
      titleComponent={
        <GradientSeparator 
          width="80px" 
          height="4px"
          gradientFrom="#3050cf" 
          gradientTo="#60a5fa"
        />
      }
      subtitle="Trip planning made easy."
      className="bg-gradient-to-b from-transparent to-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-12">
        {/* Left side - Illustration */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          <ProblemImage />
        </div>
        
        {/* Right side - 2x2 grid of cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
              <NeonGradientCard 
                neonColors={neonColors[index]} 
                borderRadius={12}
                className="h-full transition-all duration-500 hover:translate-y-[-4px] hover:shadow-lg"
              >
                <div className="flex items-start space-x-4 p-4">
                  <div className="w-10 h-10 bg-primary/10 backdrop-blur-lg rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold">{problem.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </NeonGradientCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </Section>
  );
}
