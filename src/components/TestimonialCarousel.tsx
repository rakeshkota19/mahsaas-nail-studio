import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS_CONFIG, ANIMATION_CONFIG } from "@/config/constants";

const testimonials = TESTIMONIALS_CONFIG.TESTIMONIALS;

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        console.log(
          "Carousel interval triggered, current index:",
          currentIndex
        );
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, ANIMATION_CONFIG.CAROUSEL_INTERVAL);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, currentIndex, testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Client Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about
            their experience.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-light text-gray-900 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="text-pastel-pink font-medium text-lg">
                  — {testimonials[currentIndex].name}
                  {testimonials[currentIndex].year &&
                    ` (${testimonials[currentIndex].year})`}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:ring-2 focus:ring-pastel-pink/50 ${
                  index === currentIndex ? "bg-pastel-pink" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
