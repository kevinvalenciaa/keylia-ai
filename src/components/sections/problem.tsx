import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { GradientSeparator } from "@/components/ui/gradient-separator";
import { Clock, Coins, Globe } from "lucide-react";

const neonColors = [
  {
    firstColor: "#a855f7", // Purple matching the site's theme
    secondColor: "#ec4899", // Pink matching the site's theme
  },
  {
    firstColor: "#8a65fb", // Slightly different purple
    secondColor: "#f97066", // Orange-pink
  },
  {
    firstColor: "#7c3aed", // Vivid purple
    secondColor: "#3b82f6", // Blue
  }
];

const problems = [
  {
    title: "Save Hours of Planning Time",
    description:
      "Skip the 10+ hours of research and booking headaches. With auto-curated itineraries and smart suggestions, your entire trip is planned in minutes—not days.",
    icon: Clock,
  },
  {
    title: "Maximize Your Travel Budget",
    description:
      "Get more value for every dollar spent. We find deals, avoid tourist traps, and optimize your budget for experiences—not fees.",
    icon: Coins,
  },
  {
    title: "Travel More, Worry Less",
    description:
      "Let us handle the planning, so you can focus on exploring. From airport pickups to dinner reservations, we handle the logistics—so you can stay in the moment.",
    icon: Globe,
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
      subtitle="Trip planning made easy."
      className="bg-gradient-to-b from-transparent to-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <NeonGradientCard 
              neonColors={neonColors[index]} 
              borderRadius={16}
              className="h-full transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 backdrop-blur-lg rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-foreground/80">{problem.description}</p>
              </div>
            </NeonGradientCard>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
