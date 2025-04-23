import { GradientSeparator } from "@/components/ui/gradient-separator";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for trying out our service",
    features: [
      "Basic trip planning tools",
      "Up to 2 trips per month",
      "Basic destination guides",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Best for frequent travelers",
    features: [
      "Everything in Basic",
      "Unlimited trip planning",
      "Premium destination guides",
      "AI travel recommendations",
      "Priority support",
      "Trip collaboration tools"
    ],
    cta: "Start Pro Plan",
    highlighted: true
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    description: "For travel agencies and teams",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom branding",
      "API access",
      "Analytics dashboard",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center bg-white pt-24">
        <div className="flex flex-col items-center w-full max-w-7xl px-6 py-24">
          <GradientSeparator 
            width="60px"
            gradientFrom="#8A5AFF"
            gradientTo="#E06A9C"
            className="mb-4"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-500 text-center mb-16">
            Choose the plan that's right for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "rounded-2xl p-8 flex flex-col relative",
                  plan.highlighted
                    ? "border-2 border-[#8A5AFF] shadow-lg"
                    : "border border-gray-200"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#8A5AFF] to-[#E06A9C] text-white text-xs rounded-full px-4 py-1.5 font-medium flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <button
                  className={cn(
                    "w-full py-4 px-6 rounded-xl font-semibold mb-8 transition-all duration-300",
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#8A5AFF] to-[#E06A9C] text-white hover:opacity-90"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  )}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#8A5AFF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 