
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeatureGrid from '@/components/FeatureGrid';
import ImageGallery from '@/components/ImageGallery';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PromotionsSection from '@/components/PromotionsSection';
import FAQSection from '@/components/FAQSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import LoyaltyGiftCard from '@/components/LoyaltyGiftCard';
import BlogHighlight from '@/components/BlogHighlight';
import LiveInstagramFeed from '@/components/LiveInstagramFeed';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeatureGrid />
      <ImageGallery />
      <TestimonialCarousel />
      <PromotionsSection />
      <FAQSection />
      <NewsletterSignup />
      <LoyaltyGiftCard />
      <BlogHighlight />
      <LiveInstagramFeed />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
