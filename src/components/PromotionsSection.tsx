import { useEffect, useRef, useState } from "react";
import { GraduationCap, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PromotionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-pastel-pink/10 via-pink-50 to-pastel-pink/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pastel-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Special Offers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive promotions and treat yourself to
            luxury nail care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Discount */}
          <Card
            className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border-0 transform ${
              isVisible ? "animate-scale-in" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pastel-pink to-pink-400 animate-pulse"></div>
              <CardContent className="p-8 text-center relative">
                {/* Sparkle effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute top-6 right-6 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-300"></div>

                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pastel-pink/20 to-pastel-pink/10 rounded-full mb-6 group-hover:bg-gradient-to-br group-hover:from-pastel-pink/30 group-hover:to-pastel-pink/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <GraduationCap className="w-10 h-10 text-pastel-pink group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Student Discount
                </h3>
                <div className="text-4xl font-light text-pastel-pink mb-4 animate-pulse">
                  10% OFF
                </div>
                <p className="text-gray-600 leading-relaxed">
                  All services for students with valid ID. Perfect for treating
                  yourself during exam breaks or special occasions.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* First-Time Guest */}
          <Card
            className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border-0 transform delay-200 ${
              isVisible ? "animate-scale-in" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-pastel-pink animate-pulse delay-500"></div>
              <CardContent className="p-8 text-center relative">
                {/* Sparkle effect */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-150"></div>
                <div className="absolute top-6 left-6 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-450"></div>

                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-200/30 to-pastel-pink/10 rounded-full mb-6 group-hover:bg-gradient-to-br group-hover:from-pink-200/40 group-hover:to-pastel-pink/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Gift className="w-10 h-10 text-pastel-pink group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  First-Time Guests
                </h3>
                <div className="text-2xl font-light text-pastel-pink mb-4 leading-tight">
                  <span className="animate-pulse">Free Nail Art</span>
                  <br />
                  <span className="animate-pulse delay-300">Upgrade</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Welcome gift for new clients! Get a complimentary nail art
                  upgrade with any manicure or pedicure service.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
