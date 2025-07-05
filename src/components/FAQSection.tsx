import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CONFIG } from "@/config/constants";

const faqs = FAQ_CONFIG.FAQS;

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services and booking process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-pastel-pink/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-pastel-pink py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
