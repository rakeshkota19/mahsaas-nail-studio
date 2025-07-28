import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import MahsaaPoster71 from "../assets/images/Mahsaa poster 7.1.png";
import MahsaaPoster72 from "../assets/images/Mahsaa poster 7.2.png";
import MahsaaPoster73 from "../assets/images/Mahsaa poster 7.3.png";
import MahsaaPoster74 from "../assets/images/Mahsaa poster 7.6.png";
import MahsaaPoster75 from "../assets/images/Mahsaa poster 7.5.png";

const galleryImages = [
  MahsaaPoster71, // Large Left Image
  MahsaaPoster72, // Right top left
  MahsaaPoster73, // Right top right
  MahsaaPoster74, // Right bottom left
  MahsaaPoster75, // Right bottom right
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    setSelectedImage((prev) =>
      direction === "prev"
        ? (prev === 0 ? galleryImages.length - 1 : prev - 1)
        : (prev === galleryImages.length - 1 ? 0 : prev + 1)
    );
  };

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const ImageComponent = ({ src, alt, className, index }) => (
    imageErrors[index] ? (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <Image className="w-12 h-12 text-gray-400" />
      </div>
    ) : (
      <img
        src={src}
        alt={alt}
        className={`${className} object-cover cursor-pointer`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left Large Image */}
          <div className="row-span-2">
            <ImageComponent
              src={galleryImages[0]}
              alt="Gallery Large"
              className="w-full h-full rounded-lg shadow-lg"
              index={0}
            />
          </div>

          {/* Right Side Four Images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {galleryImages.slice(1).map((img, idx) => (
              <ImageComponent
                key={idx + 1}
                src={img}
                alt={`Gallery Small ${idx + 1}`}
                className="rounded-lg shadow-md"
                index={idx + 1}
              />
            ))}
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
