import { useState, useEffect, useCallback } from "react";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { HEALTH_TIPS_CONFIG, ANIMATION_CONFIG } from "@/config/constants";

// Import images
import moisturizeImg from "../assets/health-tips/moisturize.jpeg";
import protectionImg from "../assets/health-tips/protection.jpeg";
import filingImg from "../assets/health-tips/filing.jpeg";
import basecoatImg from "../assets/health-tips/basecoat.jpeg";
import breakImg from "../assets/health-tips/break.jpeg";
import nutritionImg from "../assets/health-tips/nutrition.jpeg";

const imageMap = {
  "/src/assets/health-tips/moisturize.jpeg": moisturizeImg,
  "/src/assets/health-tips/protection.jpeg": protectionImg,
  "/src/assets/health-tips/filing.jpeg": filingImg,
  "/src/assets/health-tips/basecoat.jpeg": basecoatImg,
  "/src/assets/health-tips/break.jpeg": breakImg,
  "/src/assets/health-tips/nutrition.jpeg": nutritionImg,
};

const healthTips = HEALTH_TIPS_CONFIG.TIPS;

const HealthTipsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(max-width: 768px)": { slidesToScroll: 1 },
      "(min-width: 769px)": { slidesToScroll: 1 },
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Update current index on carousel select
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Attach emblaApi events
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, ANIMATION_CONFIG.CAROUSEL_INTERVAL || 4000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

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
          className="max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6 px-4 md:px-0">
              {healthTips.map((tip, index) => (
                <div
                  key={tip.id}
                  className="embla__slide basis-full md:basis-1/2 lg:basis-1/3 shrink-0 px-2"
                >
                  <Card className="h-full border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={imageMap[tip.image as keyof typeof imageMap]}
                        alt={tip.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-medium text-gray-900 mb-3">
                          {tip.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {tip.tip}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollPrev}
              className="flex items-center gap-2 text-pastel-pink hover:text-white hover:bg-pastel-pink/80"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex gap-2">
              {healthTips.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-pastel-pink" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollNext}
              className="flex items-center gap-2 text-pastel-pink hover:text-white hover:bg-pastel-pink/80"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTipsSection;
