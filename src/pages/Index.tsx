import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureGrid from "@/components/FeatureGrid";
import ImageGallery from "@/components/ImageGallery";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PromotionsSection from "@/components/PromotionsSection";
import FranchiseSection from "@/components/FranchiseSection";
import FAQSection from "@/components/FAQSection";
import HealthTipsSection from "@/components/HealthTipsSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import LoyaltyGiftCard from "@/components/LoyaltyGiftCard";
import BlogHighlight from "@/components/BlogHighlight";
import LiveInstagramFeed from "@/components/LiveInstagramFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeatureGrid />
      <ImageGallery />
      <TestimonialCarousel />
      <HealthTipsSection />
      <PromotionsSection />
      <FranchiseSection />
      <FAQSection />
      {/* <NewsletterSignup /> */}
      {/* <LoyaltyGiftCard /> */}
      {/* <BlogHighlight /> */}
      {/* <LiveInstagramFeed /> */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
