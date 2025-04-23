import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Edit, MapPin, CheckCircle } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Share Your Preferences",
    content:
      "Input your travel preferences, including destinations, dates, and budget, and let our platform take care of the rest.",
    image: "/voyentra-search.png",
    icon: <Edit className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. AI Curates Your Itinerary",
    content:
      "Our advanced AI analyzes your inputs and instantly generates a personalized itinerary, selecting the best flights, accommodations, and experiences tailored to you.",
    image: "/voyentra-recommendation.png",
    icon: <MapPin className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Book and Relax",
    content:
      "Review your customized travel plan, make any final adjustments, and book with confidence. Your perfect trip is just a few clicks away.",
    image: "/voyentra-dashboard.jpg",
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
