
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Testimonials', href: '#testimonials' }
    ],
    'Services': [
      { name: 'Manicure & Pedicure', href: '#contact' },
      { name: 'Nail Extensions', href: '#contact' },
      { name: 'Nail Art', href: '#contact' },
      { name: 'Bridal Package', href: '#contact' }
    ],
    'Contact': [
      { name: 'Book Appointment', href: '#contact' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Location', href: '#contact' },
      { name: 'Blog', href: '#blog' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-light mb-4">Nails by Mahsaa</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Luxury nail care in the heart of Kothapet, Hyderabad. 
              Your beauty, our passion.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nailsalon_mahsaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-pastel-pink hover:text-gray-900 transition-colors duration-300 focus:ring-2 focus:ring-pastel-pink/50"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pastel-pink transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Nails by Mahsaa. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
