
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, TrendingUp } from "lucide-react";

const FranchiseSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Low initial investment with high ROI potential",
    "Comprehensive training and ongoing support",
    "Proven business model with established brand",
    "Marketing materials and promotional support",
    "Territory protection and exclusive rights",
    "Flexible business hours and work-life balance"
  ];

  const stats = [
    { icon: Star, value: "95%", label: "Franchise Success Rate" },
    { icon: Users, value: "50+", label: "Happy Franchisees" },
    { icon: TrendingUp, value: "200%", label: "Average ROI" }
  ];

  return (
    <section id="franchise" className="py-20 bg-gradient-to-br from-pastel-pink/10 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Join Our <span className="text-pastel-pink font-medium">Franchise Family</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your passion for beauty into a thriving business. Partner with Nails by Mahsaa 
            and bring our premium nail care experience to your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Why Choose Our Franchise?
            </h3>
            <p className="text-gray-600 mb-8">
              Our franchise model is designed for success. We provide everything you need to 
              establish and grow a profitable nail salon business in your area.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-pink mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-pastel-pink/20 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-pastel-pink/10 rounded-full mr-4">
                    <stat.icon className="w-6 h-6 text-pastel-pink" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                Investment Details
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Initial Franchise Fee</span>
                  <span className="font-semibold">₹5,00,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Total Investment Range</span>
                  <span className="font-semibold">₹15-25 Lakhs</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Royalty Fee</span>
                  <span className="font-semibold">8% of Revenue</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Territory Size</span>
                  <span className="font-semibold">5 km radius</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-light text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h4>
              <p className="text-gray-600 mb-6">
                Take the first step towards owning your own successful nail salon franchise.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900 font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-pastel-pink/50"
              >
                Contact Now
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            *Investment amounts may vary based on location, size, and local market conditions. 
            Contact us for detailed financial projections and franchise disclosure documents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
