import { useState } from "react";
import Masonry from "react-masonry-css";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Image } from "lucide-react";

import MahsaaPoster71 from "../assets/images/img-3.jpeg";
import MahsaaPoster72 from "../assets/images/img-1.jpeg";
import MahsaaPoster73 from "../assets/images/img-2.jpeg";
import MahsaaPoster74 from "../assets/images/img-4.jpeg";
import MahsaaPoster75 from "../assets/images/img-5.jpeg";
import MahsaaPoster76 from "../assets/images/img-6.jpg";

const galleryImages = [
  MahsaaPoster71,
  MahsaaPoster72,
  MahsaaPoster73,
  MahsaaPoster74,
  MahsaaPoster75,
  MahsaaPoster76,
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    setSelectedImage((prev) =>
      direction === "prev"
        ? prev === 0 ? galleryImages.length - 1 : prev - 1
        : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const ImageComponent = ({ src, alt, index }) => (
    imageErrors[index] ? (
      <div className="bg-gray-200 flex items-center justify-center min-h-[200px] rounded-lg shadow-md">
        <Image className="w-12 h-12 text-gray-400" />
      </div>
    ) : (
      <img
        src={src}
        alt={alt}
        className="cursor-pointer rounded-lg shadow-md"
        loading="lazy"
        onError={() => handleImageError(index)}
        onClick={() => openLightbox(index)}
      />
    )
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our gallery of stunning nail art and professional nail care services.
          </p>
        </div>

        <Masonry
          breakpointCols={{ default: 3, 800: 2, 600: 1 }}
          className="flex gap-4"
          columnClassName="space-y-4"
        >
          {galleryImages.map((img, idx) => (
            <ImageComponent
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              index={idx}
            />
          ))}
        </Masonry>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-black/90">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {imageErrors[selectedImage] ? (
                <div className="w-full h-[60vh] bg-gray-200 flex items-center justify-center">
                  <Image className="w-16 h-16 text-gray-400" />
                </div>
              ) : (
                <img
                  src={galleryImages[selectedImage]}
                  alt={`Gallery ${selectedImage + 1}`}
                  className="w-full max-h-[80vh] object-contain"
                  onError={() => handleImageError(selectedImage)}
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageGallery;
