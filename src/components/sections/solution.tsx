"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import Ripple from "@/components/magicui/ripple";
import Safari from "@/components/safari";
import Section from "@/components/section";
import { SolutionStats } from "@/components/sections/solution-stats";
import { GradientSeparator } from "@/components/ui/gradient-separator";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Streamlined Search",
    description:
      "Effortlessly find the best options with our AI-powered recommendations that save you hours of searching, offering personalized travel experiences tailored just for you.",
    className: "hover:bg-red-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <Safari
          src={`/voyentra-search.png`}
          url="https://voyentra.com"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "Personalized Recommendations",
    description:
      "Say goodbye to overwhelming options. Our app filters through endless possibilities and presents you with the perfect matches based on your unique preferences and needs.",
    className:
      "order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",
    content: (
      <Safari
        src={`/voyentra-recommendation.png`}
        url="https://voyentra.com"
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    title: "Unified Experience",
    description:
      "Experience seamless travel planning with everything in one place—from flights to activities—integrating your entire journey into one smooth, stress-free process.",
    className:
      "md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <Safari
          src={`/voyentra-dashboard.jpg`}
          url="https://voyentra.com"
          className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "Confidence in Every Decision",
    description:
      "With AI-driven insights and real-time updates, you'll always make the best choices for your trip, reducing uncertainty and ensuring you feel confident in every decision.",
    className:
      "flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          src={`/voyentra-concierge.png`}
          url="https://voyentra.com"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
];

export default function Component() {
  return (
    <Section
      titleComponent={
        <GradientSeparator 
          width="80px" 
          height="4px"
          gradientFrom="#a855f7" 
          gradientTo="#ec4899"
        />
      }
      subtitle="Empower Your Travel Planning with AI"
      description="Generic travel apps can't keep up. Our platform is designed to offer personalized, AI-driven recommendations that transform your travel experience, saving you time and ensuring your plans are seamless."
      className="bg-white dark:bg-black pt-0"
    >
      <SolutionStats />
      
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl",
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {feature.content}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
