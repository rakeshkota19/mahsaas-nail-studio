
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);
    setIsValid(valid);
    return valid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive the latest nail trends and exclusive offers.",
      });
      setEmail('');
      setIsValid(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pastel-pink/20 to-pink-100/50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Stay in the loop
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Latest nail trends & exclusive offers delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="flex-1 px-6 py-4 text-lg border-gray-300 focus:border-pastel-pink focus:ring-2 focus:ring-pastel-pink/20 rounded-full"
            />
            <Button
              type="submit"
              disabled={!isValid}
              className="bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900 font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:ring-4 focus:ring-pastel-pink/50"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
