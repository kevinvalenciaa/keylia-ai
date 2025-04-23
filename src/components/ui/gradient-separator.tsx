import { cn } from "@/lib/utils";

interface GradientSeparatorProps {
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  width?: string | number;
  height?: string | number;
}

export function GradientSeparator({
  className,
  gradientFrom = "#a855f7", // Default purple
  gradientTo = "#ec4899", // Default pink
  width = "100px",
  height = "4px",
}: GradientSeparatorProps) {
  return (
    <div className={cn("flex justify-center w-full my-2", className)}>
      <div 
        className="rounded-full animate-background-position-spin" 
        style={{
          width,
          height,
          background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  );
} 