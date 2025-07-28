import React from "react";
import QRCodeImage from "@/assets/images/qr-code.png"; // adjust the path as needed

const ContactSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl">
          Get in <span className="text-pastel-pink font-bold">Touch</span>
        </h2>
        <p className="mt-4 text-gray-600">
          We'd love to hear from you. Reach out for bookings, questions, or just
          to say hello!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Business Hours */}
          <div className="bg-pastel-pink text-white rounded-xl p-6 shadow-md w-full lg:w-[100%]">
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Everyday</span>
                <span>11:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact + QR Code */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone or Whatsapp</h3>
              <p className="text-sm font-medium text-gray-800">
                +91 9154284617
              </p>
              <p className="text-sm text-gray-500">Call for bookings</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="tel:+919876543210"
                  className="mt-4 inline-block border px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition"
                >
                  Contact
                </a>
                <a
                  href="https://wa.me/919154284617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-pastel-pink text-white px-4 py-2 rounded-md text-sm hover:bg-pastel-pink/90 transition"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Google Map */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.103836579111!2d78.5425882!3d17.358735799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9900553eb6fb%3A0x20bc9f6f60fbb03c!2sNails%20by%20Mahsaa%20-%20Nail%20Salon%20in%20Kothapet!5e0!3m2!1sen!2sin!4v1752747123692!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
