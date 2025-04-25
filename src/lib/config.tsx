import { Icons } from "@/components/icons";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Voyentra AI",
  description: "Automate your trip planning with AI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "support@voyentra.ai",
    twitter: "",
    discord: "",
    github: "",
    instagram: "",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <img src="/path/to/Logo 1.png" alt="Logo" className="h-6 w-6" />,
          title: "AI-Powered Automation",
          description: "Streamline your workflow with intelligent automation.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Task Automation",
            description: "Automate repetitive tasks and save time.",
          },
          {
            href: "#",
            title: "Workflow Optimization",
            description: "Optimize your processes with AI-driven insights.",
          },
          {
            href: "#",
            title: "Intelligent Scheduling",
            description: "AI-powered scheduling for maximum efficiency.",
          },
        ],
      },
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "FREE",
      href: "#",
      price: "$0",
      period: "month",
      yearlyPrice: "$0",
      features: [
        "Limit of 3 Personalized Trips/Itineraries",
        "Basic AI Concierge Access",
        "",
        "",
        "",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$4.99",
      period: "month",
      yearlyPrice: "$49.99",
      features: [
        "Limit of 10 Personalized Trips/Itineraries",
        "Personalized Hotel and Flight Generation",
        "Dedicated AI Concierge Support w/ Chat History",
        "",
        "",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "PREMIUM",
      href: "#",
      price: "$9.99",
      period: "month",
      yearlyPrice: "$99.99",
      features: [
        "Unlimited Personalized Trips (Flights, Hotels, Itineraries)",
        "Premium AI Concierge Trip Insights w/ Trip and Chat History",
        "",
        "",
        "",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is Voyentra AI?",
      answer: (
        <span>
          Voyentra AI is an AI-powered travel concierge that helps you plan the perfect trip by curating personalized itineraries. 
          From flights and accommodations to activities and experiences, our platform uses advanced AI to save you time and effort while ensuring your travel plans are seamless.
        </span>
      ),
    },
    {
      question: "How can I get started with Voyentra AI?",
      answer: (
        <span>
          Getting started is simple! Just create an account, enter your travel preferences 
          (such as destinations, budget, and activities), and let our AI do the rest. 
          Your personalized itinerary will be ready in minutes, and you can start booking your dream trip.
        </span>
      ),
    },
    {
      question: "How does Voyentra AI personalize travel recommendations?",
      answer: (
        <span>
          Our AI analyzes your inputs—such as preferred destinations, budget, and activities—and combines them with a vast database of travel 
          data to provide tailored recommendations that match your preferences. We take into account your unique needs to ensure a personalized 
          experience every time.
        </span>
      ),
    },
    {
      question: "Can I make changes to my itinerary after it's created?",
      answer: (
        <span>
          Absolutely! You can review and make adjustments to your itinerary anytime. Our platform allows you to update 
          preferences, swap activities, and modify accommodations to suit your changing needs.
        </span>
      ),
    },
    {
      question: "Is Voyentra AI suitable for first-time travelers?",
      answer: (
        <span>
          Yes, Voyentra AI is designed to simplify the travel planning process, making it perfect for both seasoned travelers and first-time adventurers. 
          With easy-to-follow recommendations and a user-friendly interface, you&apos;ll feel confident in planning your trip from start to finish.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Contact Us", icon: null },
        { href: "#", text: "Blog", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "LinkedIn",
          icon: <FaLinkedin />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
