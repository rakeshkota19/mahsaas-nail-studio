
import { GraduationCap, Gift } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const PromotionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pastel-pink/10 to-pink-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Special Offers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive promotions and treat yourself to luxury nail care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Discount */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-pastel-pink"></div>
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pastel-pink/10 rounded-full mb-6 group-hover:bg-pastel-pink/20 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8 text-pastel-pink" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Student Discount
                </h3>
                <div className="text-3xl font-light text-pastel-pink mb-4">
                  15% OFF
                </div>
                <p className="text-gray-600 leading-relaxed">
                  All services for students with valid ID. Perfect for treating yourself during exam breaks or special occasions.
                </p>
              </CardContent>
            </div>
          </Card>
          
          {/* First-Time Guest */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-pastel-pink"></div>
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pastel-pink/10 rounded-full mb-6 group-hover:bg-pastel-pink/20 transition-colors duration-300">
                  <Gift className="w-8 h-8 text-pastel-pink" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  First-Time Guests
                </h3>
                <div className="text-2xl font-light text-pastel-pink mb-4">
                  Free Nail Art Upgrade
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Welcome gift for new clients! Get a complimentary nail art upgrade with any manicure or pedicure service.
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
