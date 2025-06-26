
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
          Discover luxury nail care
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-90">
          Manicures · Pedicures · Extensions · Gel Polish · Art
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900 font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-pastel-pink/50"
        >
          Book Now
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
