import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, TrendingUp } from "lucide-react";

const FranchiseSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Low initial investment with high ROI potential",
    "Comprehensive training and ongoing support",
    "Proven business model with established brand",
    "Marketing materials and promotional support",
    "Territory protection and exclusive rights",
    "Flexible business hours and work-life balance",
  ];

  return (
    <section id="franchise" className="py-14 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Join Our{" "}
            <span className="text-pastel-pink font-semibold">
              Franchise Family
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-0">
            Transform your passion for beauty into a thriving business. Partner
            with Nails by Mahsaa and bring our premium nail care experience to
            your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Benefits Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center border-l-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
              Why Choose Our Franchise?
            </h3>
            <p className="text-gray-600 mb-6 text-base">
              Our franchise model is designed for success. We provide everything
              you need to establish and grow a profitable nail salon business in
              your area.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-base"
                >
                  <Check className="w-5 h-5 text-pastel-pink mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-snug font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center border border-gray-100">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
              Ready to Start Your Journey?
            </h4>
            <p className="text-gray-600 mb-6 text-base">
              Take the first step towards owning your own successful nail salon
              franchise.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-pastel-pink/50 shadow-md"
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
