import { Sparkles, Palette, Star, Brush, RefreshCw, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES_CONFIG } from "@/config/constants";

// Icon mapping
const iconMap = {
  Sparkles,
  Palette,
  Star,
  Brush,
  RefreshCw,
  Heart,
};

const features = FEATURES_CONFIG.FEATURES.map((feature) => ({
  ...feature,
  icon: iconMap[feature.icon as keyof typeof iconMap],
}));

const FeatureGrid = () => {
  return (
    <section id="feature" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From classic care to artistic expression, discover our comprehensive
            range of nail services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm bg-gray-50/50 hover:bg-white focus-within:ring-2 focus-within:ring-pastel-pink/50"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pastel-pink/10 rounded-full mb-6 group-hover:bg-pastel-pink/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-pastel-pink" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
