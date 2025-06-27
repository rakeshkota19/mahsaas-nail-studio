
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1610992015762-45dca7656d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1599948121462-8d7b57ddf4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1563899956230-b9de5fbe55a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1607943346506-4ed4adbc8f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1555887700-c535b0cff42d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our gallery of stunning nail art and professional nail care services.
          </p>
        </div>
        
        {/* Indian-style asymmetric grid layout */}
        <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
          {/* Large feature image */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-5 row-span-2 aspect-[4/5] overflow-hidden rounded-xl cursor-pointer group shadow-lg"
            onClick={() => openLightbox(0)}
          >
            <img
              src={galleryImages[0]}
              alt="Featured nail art"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Medium images */}
          <div
            className="col-span-6 md:col-span-3 lg:col-span-4 aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md"
            onClick={() => openLightbox(1)}
          >
            <img
              src={galleryImages[1]}
              alt="Nail art gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <div
            className="col-span-6 md:col-span-3 lg:col-span-3 aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md"
            onClick={() => openLightbox(2)}
          >
            <img
              src={galleryImages[2]}
              alt="Nail art gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Small images row */}
          <div
            className="col-span-4 md:col-span-2 lg:col-span-2 aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md"
            onClick={() => openLightbox(3)}
          >
            <img
              src={galleryImages[3]}
              alt="Nail art gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <div
            className="col-span-4 md:col-span-2 lg:col-span-3 aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md"
            onClick={() => openLightbox(4)}
          >
            <img
              src={galleryImages[4]}
              alt="Nail art gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <div
            className="col-span-4 md:col-span-2 lg:col-span-2 aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md"
            onClick={() => openLightbox(5)}
          >
            <img
              src={galleryImages[5]}
              alt="Nail art gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Bottom row */}
          <div
            className="col-span-6 md:col-span-4 lg:col-span-4 aspect-[3/2] overflow-hidden rounded-xl cursor-pointer group shadow-md"
            onClick={() => openLightbox(6)}
          >
            <img
              src={galleryImages[6]}
              alt="Nail art gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <div
            className="col-span-6 md:col-span-4 lg:col-span-5 aspect-[3/2] overflow-hidden rounded-xl cursor-pointer group shadow-md"
            onClick={() => openLightbox(7)}
          >
            <img
              src={galleryImages[7]}
              alt="Nail art gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-black/90">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:ring-2 focus:ring-white/50"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:ring-2 focus:ring-white/50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:ring-2 focus:ring-white/50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <img
                src={galleryImages[selectedImage]}
                alt={`Nail art ${selectedImage + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageGallery;
