"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.08,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY],
  );

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY],
  );

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn("group relative rounded-[inherit] before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-black/30 before:transition-opacity before:duration-300 before:group-hover:opacity-0", className)}
    >
      {/* Neon border glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-[1.5px] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-50 blur-[1px]"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize * 0.75}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom}, 
          ${gradientTo}, 
          transparent 100%
          )
          `,
          zIndex: 1,
        }}
      />
      {/* Main gradient border */}
      <motion.div
        className="pointer-events-none absolute -inset-[0.5px] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-60"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize * 0.5}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom}, 
          ${gradientTo}, 
          transparent 100%
          )
          `,
          zIndex: 2,
        }}
      />
      <div className="absolute inset-px rounded-[inherit] bg-gray-50" style={{ zIndex: 3 }} />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
          zIndex: 4,
        }}
      />
      <div className="relative" style={{ zIndex: 5 }}>{children}</div>
    </div>
  );
} 