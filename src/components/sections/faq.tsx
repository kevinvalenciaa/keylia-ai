import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";
import { GradientSeparator } from "@/components/ui/gradient-separator";

export default function FAQ() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col items-center">
        <GradientSeparator 
          width="60px"
          gradientFrom="#3050cf"
          gradientTo="#60a5fa"
          className="mb-4"
        />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently asked questions</h2>
      </div>
      <div className="mx-auto my-6 md:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {siteConfig.faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={faq.question}
              className="w-full border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h4 className="mb-6 text-center text-sm font-medium tracking-tight text-foreground/80">
        Still have questions? Email us at{" "}
        <a href={`mailto:${siteConfig.links.email}`} className="underline">
          {siteConfig.links.email}
        </a>
      </h4>
    </Section>
  );
}
