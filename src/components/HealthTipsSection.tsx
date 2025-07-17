import { useState, useEffect } from "react";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HEALTH_TIPS_CONFIG, ANIMATION_CONFIG } from "@/config/constants";

const healthTips = HEALTH_TIPS_CONFIG.TIPS;

const HealthTipsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % healthTips.length);
      }, ANIMATION_CONFIG.CAROUSEL_INTERVAL + 1000); // Slightly slower than testimonials
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  const nextTip = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % healthTips.length);
  };

  const prevTip = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? healthTips.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pastel-pink/5 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pastel-pink fill-current" />
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Health Tips for Nail Care
            </h2>
            <Heart className="w-6 h-6 text-pastel-pink fill-current" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert advice to keep your nails healthy and beautiful between salon visits
          </p>
        </div>

        <div 
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {healthTips[currentIndex].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {healthTips[currentIndex].tip}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevTip}
                    className="flex items-center gap-2 text-pastel-pink hover:text-pastel-pink/80"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  
                  <div className="flex gap-2">
                    {healthTips.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentIndex ? "bg-pastel-pink" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTip}
                    className="flex items-center gap-2 text-pastel-pink hover:text-pastel-pink/80"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HealthTipsSection;