import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MagicCard } from "@/components/magicui/magic-card";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      className="bg-white"
    >
      <div className="flex justify-center w-full py-2">
        <MagicCard 
          className="w-full max-w-4xl p-16 text-center rounded-2xl shadow-none hover:shadow-[0_0_2px_rgba(0,0,0,0.01)] transition-all duration-300 before:border-[3px] before:!border-black/40"
          gradientSize={400}
          gradientFrom="#a855f7"
          gradientTo="#ec4899"
          gradientOpacity={0.05}
        >
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8A5AFF] to-[#E06A9C] bg-clip-text text-transparent pb-2">Ready for a stress-free trip?</h2>
            <p className="text-base md:text-xl mb-8 text-gray-500">Plan your next trip in minutes. It&apos;s free to get started.</p>
            <Link
              href="http://localhost:3001/auth/sign-up"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full sm:w-auto text-white bg-gradient-to-r from-[#8A5AFF] to-[#E06A9C] hover:opacity-90 flex px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              )}
            >
              Plan My Trip
            </Link>
          </div>
        </MagicCard>
      </div>
    </Section>
  );
}
