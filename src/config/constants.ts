// API Configuration
export const API_CONFIG = {
  LAMBDA_URL:
    "https://a5s72ir5ai52papc5xi5rqstjm0jbeof.lambda-url.ap-southeast-2.on.aws",
} as const;

// https://a5s72ir5ai52papc5xi5rqstjm0jbeof.lambda-url.ap-southeast-2.on.aws
// https://5eoeqgusabhjdus6f6bcxqv3bu0yozzn.lambda-url.ap-south-1.on.aws/

// Form Configuration
export const FORM_CONFIG = {
  TIME_SLOTS: [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
  ],
  SERVICES: [
    "Manicure",
    "Pedicure",
    "Nail Extensions",
    "Gel Polish",
    "Nail Art",
    "Chrome Finish",
    "Bridal Package",
    "Other",
  ],
  VALIDATION: {
    PHONE_REGEX: /^(\+91[6-9]\d{9}|[6-9]\d{9}|\d{3}[- ]?\d{3}[- ]?\d{4})$/,
    TIME_24_REGEX: /^([01]?\d|2[0-3]):[0-5]\d$/,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
} as const;

// Navigation Configuration
export const NAVIGATION_CONFIG = {
  MENU_ITEMS: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "feature" },
    { label: "Gallery", id: "gallery" },
    { label: "Franchise Model", id: "franchise" },
    { label: "Contact", id: "contact" },
  ],
} as const;

// Content Configuration
export const CONTENT_CONFIG = {
  BRAND: {
    NAME: "Mahsaa",
    TAGLINE:
      "Luxury nail care in the heart of Kothapet, Hyderabad. Your beauty, our passion.",
  },
  SOCIAL_LINKS: {
    INSTAGRAM: "https://instagram.com/nailsalon_mahsaa",
    FACEBOOK: "https://www.facebook.com/profile.php?id=61575053222915",
  },
  STATS: {
    HAPPY_CLIENTS: "500+",
    YEARS_EXPERIENCE: "3+",
  },
} as const;

// Footer Configuration
export const FOOTER_CONFIG = {
  LINKS: {
    "Quick Links": [
      { name: "About", href: "#about" },
      { name: "Services", href: "#feature" },
      { name: "Gallery", href: "#gallery" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    Services: [
      { name: "Manicure & Pedicure", href: "#contact" },
      { name: "Nail Extensions", href: "#contact" },
      { name: "Nail Art", href: "#contact" },
      { name: "Bridal Package", href: "#contact" },
    ],
    Contact: [
      { name: "Book Appointment", href: "#contact" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
} as const;

// FAQ Configuration
export const FAQ_CONFIG = {
  FAQS: [
    {
      question: "What's your hygiene protocol?",
      answer:
        "We maintain the highest hygiene standards with hospital-grade sterilization of all tools, single-use buffers and files, mandatory mask and glove policy, and fresh towels for each client. Your safety is our top priority.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2–3 days in advance, and earlier for weekends and special occasions. For bridal services, we suggest booking 1-2 weeks ahead to ensure availability.",
    },
    {
      question: "How long do gel manicures last?",
      answer:
        "Our gel manicures typically last 2-3 weeks without chipping, depending on your lifestyle and nail care routine. We use premium gel systems for maximum durability and shine.",
    },
    {
      question: "Do you offer nail extensions?",
      answer:
        "Yes! We specialize in both acrylic and gel extensions in various shapes - from natural square to dramatic stiletto. Our extensions are sculpted to perfection and can last 3-4 weeks with proper care.",
    },
    {
      question: "What products do you use?",
      answer:
        "We exclusively use professional-grade, non-toxic products from trusted brands. All our polishes are cruelty-free and many are vegan-friendly. We're happy to discuss specific ingredients if you have allergies.",
    },
    {
      question: "Can I bring my own nail polish?",
      answer:
        "Absolutely! While we have an extensive collection of premium polishes, you're welcome to bring your own. We'll ensure proper application and finish for the best results.",
    },
  ],
} as const;

// Features Configuration
export const FEATURES_CONFIG = {
  FEATURES: [
    {
      icon: "Sparkles",
      title: "Manicure & Pedicure",
      description:
        "Classic care for healthy nails with premium products and meticulous attention to detail.",
    },
    {
      icon: "Palette",
      title: "Nail Extensions",
      description:
        "Acrylic & gel extensions in any shape - from natural to dramatic, perfectly sculpted.",
    },
    {
      icon: "Star",
      title: "Nail Art & Chrome",
      description:
        "Hand-painted designs & chrome finishes that transform your nails into works of art.",
    },
    {
      icon: "Brush",
      title: "Gel Polish & Overlays",
      description:
        "Long-lasting colour & strength with our premium gel systems and overlays.",
    },
    {
      icon: "RefreshCw",
      title: "Refills & Maintenance",
      description:
        "Keep your nails fresh every 2–3 weeks with professional maintenance services.",
    },
    {
      icon: "Heart",
      title: "Bridal & Event Nails",
      description:
        "Custom looks for your special day - elegant, timeless designs that photograph beautifully.",
    },
  ],
} as const;

// Testimonials Configuration
export const TESTIMONIALS_CONFIG = {
  TESTIMONIALS: [
    {
      name: "Priya S.",
      text: "We dare you to find a better review! Mahsaa's attention to detail is incredible. My nails have never looked better!",
      rating: 5,
    },
    {
      name: "Happy Bride",
      text: "Another set, another smile. Perfect bridal nails for my wedding day. Thank you for making my special day even more beautiful!",
      rating: 5,
      year: "2024",
    },
    {
      name: "Sneha M.",
      text: "The hygiene standards are exceptional and the nail art is absolutely stunning. I'm a regular customer now!",
      rating: 5,
    },
  ] as const,
} as const;

// Gallery Configuration
export const GALLERY_CONFIG = {
  IMAGES: [
    "MahsaaPoster75", // Feature image
    "MahsaaPoster71",
    "MahsaaPoster72",
    "MahsaaPoster73",
    "MahsaaPoster76",
    "MahsaaPoster8",
  ],
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  CAROUSEL_INTERVAL: 2000,
} as const;

// Health Tips Configuration
export const HEALTH_TIPS_CONFIG = {
  TIPS: [
    {
      id: 1,
      title: "Moisturize Daily",
      tip: "Apply cuticle oil and hand cream daily to keep nails and surrounding skin healthy and hydrated.",
    },
    {
      id: 2,
      title: "Avoid Harsh Chemicals",
      tip: "Wear gloves when cleaning or using chemicals to protect your nails from damage and drying.",
    },
    {
      id: 3,
      title: "File Properly",
      tip: "Always file in one direction (not back and forth) to prevent nail splitting and breakage.",
    },
    {
      id: 4,
      title: "Use Base Coat",
      tip: "Always apply a base coat before nail polish to protect nails and prevent staining.",
    },
    {
      id: 5,
      title: "Take Breaks",
      tip: "Give your nails a break from polish occasionally to let them breathe and recover.",
    },
    {
      id: 6,
      title: "Eat Well",
      tip: "Include biotin, protein, and vitamins in your diet for stronger, healthier nail growth.",
    },
  ],
} as const;
