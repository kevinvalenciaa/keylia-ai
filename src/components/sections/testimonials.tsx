"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-[380px] cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 mx-4",
      "border border-neutral-200 bg-white",
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
    </div>
    <div className="flex w-full justify-start">
      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO @TechStart",
    description: (
      <p>
        <Highlight>Transformative platform!</Highlight> Our team's efficiency 
        doubled within weeks of implementation.
      </p>
    ),
  },
  {
    name: "Michael Chen",
    role: "CTO @InnovateX",
    description: (
      <p>
        The <Highlight>easiest integration</Highlight> we've ever experienced. 
        Reduced deployment time from weeks to days.
      </p>
    ),
  },
  {
    name: "Emma Williams",
    role: "Product Lead @FutureTech",
    description: (
      <p>
        <Highlight>Game-changing analytics.</Highlight> Gained insights that 
        helped increase customer retention by 40%.
      </p>
    ),
  },
  {
    name: "David Kim",
    role: "Director @CloudWorks",
    description: (
      <p>
        Their <Highlight>security features</Highlight> gave us the confidence 
        to migrate sensitive data securely.
      </p>
    ),
  },
  {
    name: "Lisa Rodriguez",
    role: "VP Operations @LogiChain",
    description: (
      <p>
        <Highlight>24/7 reliability</Highlight> with phenomenal uptime. 
        The backbone of our daily operations.
      </p>
    ),
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 overflow-hidden">
        <div className="gap-4">
          {[0, 1].map((rowIndex) => (
            <Marquee
              horizontal
              key={rowIndex}
              className={cn("py-4", {
                "[--duration:180s]": rowIndex === 0, // Top row speed
                "[--duration:179s]": rowIndex === 1, // Bottom row speed
               
              })}
              reverse={rowIndex === 1}
              pauseOnHover={true}
              
            >
              {duplicatedTestimonials.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: Math.random() * 0.5,
                    duration: 0.8,
                  }}
                >
                  <TestimonialCard {...card} />
                </motion.div>
              ))}
            </Marquee>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background from-20%"></div>
      </div>
    </Section>
  );
}