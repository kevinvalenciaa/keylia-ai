import Marquee from "@/components/magicui/marquee";
import Image from "next/image";


const companies = [
  { name: "hotellook", logo: "/logos/hotellook.png" },
  { name: "aviasales", logo: "/logos/aviasales.png" },
  { name: "tripcom", logo: "/logos/tripcom.png" },
  { name: "Wayaway", logo: "/logos/Wayaway.png" },
  { name: "trivago", logo: "/logos/trivago.png" },

];

export default function Logos() {
  return (
    <section id="logos" className="relative pt-0 z-0 overflow-visible">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <h3 className="text-center text-sm font-semibold text-gray-500 relative z-10">
          TRUSTED BY LEADING TRAVEL AGENCIES
        </h3>
        <div className="relative mt-2">
          <Marquee className="max-w-full [--duration:40s] relative z-10">
            {companies.map((company, idx) => (
              <Image
                key={idx}
                src={company.logo}
                width={150}
                height={50}
                className="dark:brightness-0 dark:invert grayscale opacity-30 object-contain"
                alt={company.name}
              />

            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent"></div>
        </div>
      </div>
    </section>
  );
}
