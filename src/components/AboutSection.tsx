import { useEffect, useRef, useState } from "react";
import { CONTENT_CONFIG } from "@/config/constants";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay stats animation slightly
          setTimeout(() => setAnimateStats(true), 300);
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
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container-custom">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional nail care service"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Exceptional care.
                <br />
                Personal wellbeing.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At our Kothapet boutique, enjoy hygienic, personalized service
                with non-toxic, eco-friendly products. Every treatment is
                crafted to enhance your natural beauty while prioritizing your
                health and comfort.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div
                className={`text-center p-6 bg-white rounded-xl shadow-sm transition-all duration-700 ${
                  animateStats ? "animate-scale-in" : "opacity-0 scale-95"
                }`}
              >
                <div className="text-3xl font-light text-pastel-pink mb-2 animate-pulse">
                  {CONTENT_CONFIG.STATS.HAPPY_CLIENTS}
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div
                className={`text-center p-6 bg-white rounded-xl shadow-sm transition-all duration-700 delay-150 ${
                  animateStats ? "animate-scale-in" : "opacity-0 scale-95"
                }`}
              >
                <div className="text-3xl font-light text-pastel-pink mb-2 animate-pulse">
                  {CONTENT_CONFIG.STATS.YEARS_EXPERIENCE}
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
