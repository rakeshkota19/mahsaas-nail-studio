
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's your hygiene protocol?",
    answer: "We maintain the highest hygiene standards with hospital-grade sterilization of all tools, single-use buffers and files, mandatory mask and glove policy, and fresh towels for each client. Your safety is our top priority."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2–3 days in advance, and earlier for weekends and special occasions. For bridal services, we suggest booking 1-2 weeks ahead to ensure availability."
  },
  {
    question: "How long do gel manicures last?",
    answer: "Our gel manicures typically last 2-3 weeks without chipping, depending on your lifestyle and nail care routine. We use premium gel systems for maximum durability and shine."
  },
  {
    question: "Do you offer nail extensions?",
    answer: "Yes! We specialize in both acrylic and gel extensions in various shapes - from natural square to dramatic stiletto. Our extensions are sculpted to perfection and can last 3-4 weeks with proper care."
  },
  {
    question: "What products do you use?",
    answer: "We exclusively use professional-grade, non-toxic products from trusted brands. All our polishes are cruelty-free and many are vegan-friendly. We're happy to discuss specific ingredients if you have allergies."
  },
  {
    question: "Can I bring my own nail polish?",
    answer: "Absolutely! While we have an extensive collection of premium polishes, you're welcome to bring your own. We'll ensure proper application and finish for the best results."
  }
];

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
