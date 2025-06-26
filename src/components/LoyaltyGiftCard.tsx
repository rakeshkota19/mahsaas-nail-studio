
import { useState } from 'react';
import { Star, Gift } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoyaltyGiftCard = () => {
  const [showLoyaltyModal, setShowLoyaltyModal] = useState(false);
  const [showGiftCardModal, setShowGiftCardModal] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Rewards & Gifts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Earn points on every visit and share the luxury with gift cards for your loved ones.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Loyalty Program */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Loyalty Program
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Earn points on every visit and unlock exclusive rewards, priority booking, and special discounts.
              </p>
              <Button 
                onClick={() => setShowLoyaltyModal(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-yellow-500/50"
              >
                Join Loyalty
              </Button>
            </CardContent>
          </Card>
          
          {/* Gift Cards */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pastel-pink/20 rounded-full mb-6">
                <Gift className="w-8 h-8 text-pastel-pink" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Gift Cards
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Perfect for birthdays, holidays, or just to show someone you care. Available in various amounts.
              </p>
              <Button 
                onClick={() => setShowGiftCardModal(true)}
                className="bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900 font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-pastel-pink/50"
              >
                Buy Gift Card
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Loyalty Modal */}
      <Dialog open={showLoyaltyModal} onOpenChange={setShowLoyaltyModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-center">Join Our Loyalty Program</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label htmlFor="loyaltyName">Full Name</Label>
              <Input id="loyaltyName" placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="loyaltyEmail">Email</Label>
              <Input id="loyaltyEmail" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="loyaltyPhone">Phone Number</Label>
              <Input id="loyaltyPhone" placeholder="+91 98765 43210" />
            </div>
            <Button className="w-full bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900">
              Join Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Gift Card Modal */}
      <Dialog open={showGiftCardModal} onOpenChange={setShowGiftCardModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-center">Purchase Gift Card</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label htmlFor="giftAmount">Gift Card Amount</Label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>₹1,000</option>
                <option>₹2,000</option>
                <option>₹3,000</option>
                <option>₹5,000</option>
              </select>
            </div>
            <div>
              <Label htmlFor="recipientName">Recipient Name</Label>
              <Input id="recipientName" placeholder="Enter recipient's name" />
            </div>
            <div>
              <Label htmlFor="recipientEmail">Recipient Email</Label>
              <Input id="recipientEmail" type="email" placeholder="Enter recipient's email" />
            </div>
            <Button className="w-full bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900">
              Purchase Gift Card
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LoyaltyGiftCard;
