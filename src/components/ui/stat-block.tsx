"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { NumberTicker } from "@/components/magicui/number-ticker";

interface StatBlockProps {
  value: number;
  label: string;
  suffix?: string;
  icon?: ReactNode;
  className?: string;
  valueClassName?: string;
  startValue?: number;
  delay?: number;
}

export function StatBlock({
  value,
  label,
  suffix,
  icon,
  className,
  valueClassName,
  startValue = 0,
  delay = 0.2,
}: StatBlockProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="flex items-end">
        <NumberTicker
          value={value}
          startValue={startValue}
          delay={delay}
          className={cn(
            "text-6xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent", 
            valueClassName
          )}
        />
        {suffix && (
          <span className="ml-1 text-3xl font-semibold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
            {suffix}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-center gap-2">
        {icon && <div className="text-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">{icon}</div>}
        <p className="text-center text-base font-medium text-foreground/80">{label}</p>
      </div>
    </div>
  );
} 