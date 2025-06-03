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
  const StatValue = () => (
    <div className={cn(
      "text-6xl font-bold bg-gradient-to-r from-[#3050cf] to-[#60a5fa] bg-clip-text text-transparent",
      valueClassName
    )}>
      <NumberTicker
        value={value}
        startValue={startValue}
        delay={delay}
      />
      {suffix && (
        <span className="ml-1 text-3xl font-semibold bg-gradient-to-r from-[#3050cf] to-[#60a5fa] bg-clip-text text-transparent">
          {suffix}
        </span>
      )}
    </div>
  );

  if (icon) {
    return (
      <div className="flex items-center space-x-2">
        {icon && <div className="text-lg bg-gradient-to-r from-[#3050cf] to-[#60a5fa] bg-clip-text text-transparent">{icon}</div>}
        <StatValue />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <StatValue />
      <div className="mt-3 flex items-center gap-2">
        <p className="text-center text-base font-medium text-foreground/80">{label}</p>
      </div>
    </div>
  );
} 