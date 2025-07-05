import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { API_CONFIG, FORM_CONFIG } from "@/config/constants";

interface FormData {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  terms: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  terms?: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    terms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const services = FORM_CONFIG.SERVICES;
  const timeSlots = FORM_CONFIG.TIME_SLOTS;

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!FORM_CONFIG.VALIDATION.PHONE_REGEX.test(formData.phone)) {
      newErrors.phone =
        "Please enter a valid phone number (e.g. +91XXXXXXXXXX or 9XXXXXXXXX)";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = "Date cannot be in the past";
      }
      if (selectedDate.getDay() === 0) {
        newErrors.preferredDate = "We are closed on Sundays";
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Preferred time is required";
    } else if (
      !FORM_CONFIG.VALIDATION.TIME_24_REGEX.test(formData.preferredTime)
    ) {
      newErrors.preferredTime =
        "Please enter time in 24-hour format (e.g. 14:00)";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (validateForm()) {
      setSubmitting(true);
      try {
        const response = await fetch(API_CONFIG.LAMBDA_URL, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            service: formData.service,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
            message: formData.message,
            terms: formData.terms,
          }),
        });
        if (!response.ok) {
          let errorMsg = "Failed to send booking request.";
          try {
            const data = await response.json();
            if (data && data.error) errorMsg = data.error;
          } catch {
            /* ignore JSON parse errors */
          }
          setApiError(errorMsg);
          toast({
            title: "Error",
            description: errorMsg,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Booking request sent!",
            description: "We'll contact you soon to confirm your appointment.",
          });
          setFormData({
            name: "",
            phone: "",
            service: "",
            preferredDate: "",
            preferredTime: "",
            message: "",
            terms: false,
          });
          setErrors({});
        }
      } catch (err) {
        setApiError("Network error. Please try again.");
        toast({
          title: "Error",
          description: "Network error. Please try again.",
          variant: "destructive",
        });
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.phone.trim() &&
      formData.service &&
      formData.preferredDate &&
      formData.preferredTime &&
      formData.terms &&
      Object.keys(errors).length === 0
    );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to treat yourself? Fill out the form below and we'll get back
            to you soon.
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
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="mt-2"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="mt-2"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="service">Service *</Label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-pastel-pink focus:ring-2 focus:ring-pastel-pink/20"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    handleChange("preferredDate", e.target.value)
                  }
                  className="mt-2"
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="preferredTime">Preferred Time *</Label>
                <Input
                  id="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={(e) =>
                    handleChange("preferredTime", e.target.value)
                  }
                  className="mt-2"
                  min="08:00"
                  max="20:00"
                  step="900" // 15 min steps
                />
                {errors.preferredTime && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.preferredTime}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="mt-2"
                rows={4}
                placeholder="Any special requests or notes..."
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) =>
                  handleChange("terms", checked as boolean)
                }
                className="mt-1"
              />
              <Label
                htmlFor="terms"
                className="text-sm text-gray-600 leading-relaxed"
              >
                I agree to the terms and conditions and understand that this is
                a booking request. Final confirmation will be provided by the
                salon. *
              </Label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms}</p>
            )}

            {apiError && (
              <p className="text-red-500 text-center text-sm mb-2">
                {apiError}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-pastel-pink hover:bg-pastel-pink/90 text-gray-900 font-medium py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:ring-4 focus:ring-pastel-pink/50"
            >
              {submitting ? "Sending..." : "Send Booking Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
