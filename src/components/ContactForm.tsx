
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    terms: false
  });
  const [errors, setErrors] = useState({});

  const services = [
    'Manicure',
    'Pedicure',
    'Nail Extensions',
    'Gel Polish',
    'Nail Art',
    'Chrome Finish',
    'Bridal Package',
    'Other'
  ];

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const phoneRegex = /^\+91[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number (+91XXXXXXXXXX)';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.preferredDate = 'Date cannot be in the past';
      }
      
      // Check if it's Sunday (0 = Sunday)
      if (selectedDate.getDay() === 0) {
        newErrors.preferredDate = 'We are closed on Sundays';
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Booking request sent!",
        description: "We'll contact you soon to confirm your appointment.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        terms: false
      });
      setErrors({});
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const isFormValid = () => {
    return formData.name.trim() &&
           formData.phone.trim() &&
           formData.service &&
           formData.preferredDate &&
           formData.preferredTime &&
           formData.terms &&
           Object.keys(errors).length === 0;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to treat yourself? Fill out the form below and we'll get back to you soon.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="mt-2"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-2"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
            
            <div>
              <Label htmlFor="service">Service *</Label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-pastel-pink focus:ring-2 focus:ring-pastel-pink/20"
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  className="mt-2"
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
              </div>
              
              <div>
                <Label htmlFor="preferredTime">Preferred Time *</Label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => handleChange('preferredTime', e.target.value)}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-pastel-pink focus:ring-2 focus:ring-pastel-pink/20"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
              </div>
            </div>
            
            <div>
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="mt-2"
                rows={4}
                placeholder="Any special requests or notes..."
              />
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => handleChange('terms', checked)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                I agree to the terms and conditions and understand that this is a booking request. 
                Final confirmation will be provided by the salon. *
              </Label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
            
            <Button
              type="submit"
              disabled={!isFormValid()}
              className="w-full bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900 font-medium py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:ring-4 focus:ring-pastel-pink/50"
            >
              Send Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
