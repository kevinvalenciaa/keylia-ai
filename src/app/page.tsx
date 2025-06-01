import Blog from "@/components/sections/blog";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
// import Logos from "@/components/sections/logos";
import Pricing from "@/components/sections/pricing";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import Testimonials from "@/components/sections/testimonials";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden pt-10">
        <Hero />
        {/* <Logos /> */}
        <Problem />
        <Solution />
        {/* Commented out How It Works section */}
        {/* <HowItWorks /> */}
        
        {/* Commented out Testimonials section */}
        {/* <Testimonials/> */}
        
        {/* CTA section moved above FAQ */}
        <CTA />
        <FAQ />
        
        <Footer />
      </main>
    </>
  );
}
