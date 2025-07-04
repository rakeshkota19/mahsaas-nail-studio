import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import MahsaaPoster71 from "../assets/images/Mahsaa poster 7.1.png";
import MahsaaPoster72 from "../assets/images/Mahsaa poster 7.2.png";
import MahsaaPoster73 from "../assets/images/Mahsaa poster 7.3.png";
import MahsaaPoster75 from "../assets/images/Mahsaa poster 7.5.png";
import MahsaaPoster76 from "../assets/images/Mahsaa poster 7.6.png";
import MahsaaPoster8 from "../assets/images/Mahsaa poster 8.png";

const galleryImages = [
  MahsaaPoster75, // Feature image
  MahsaaPoster71,
  MahsaaPoster72,
  MahsaaPoster73,
  MahsaaPoster76,
  MahsaaPoster8,
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleImageError = (index: number) => {
    console.log(`Image failed to load at index ${index}`);
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    console.log(`Image loaded successfully at index ${index}`);
  };

  const ImageComponent = ({
    src,
    alt,
    className,
    index,
    onClick,
  }: {
    src: string;
    alt: string;
    className: string;
    index: number;
    onClick: () => void;
  }) => {
    if (imageErrors[index]) {
      return (
        <div
          className={`${className} bg-gray-200 flex items-center justify-center cursor-pointer`}
          onClick={onClick}
        >
          <div className="text-center text-gray-500">
            <Image className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onError={() => handleImageError(index)}
        onLoad={() => handleImageLoad(index)}
        onClick={onClick}
      />
    );
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our gallery of stunning nail art and professional
            nail care services.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {/* Large feature image */}
            <div className="sm:col-span-2 md:col-span-3 aspect-[4/5] overflow-hidden rounded-xl cursor-pointer group shadow-lg">
              <ImageComponent
                src={galleryImages[0]}
                alt="Featured nail art"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                index={0}
                onClick={() => openLightbox(0)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Other images */}
            {galleryImages.slice(1).map((img, idx) => (
              <div key={idx + 1} className="aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md">
                <ImageComponent
                  src={img}
                  alt="Nail art gallery"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  index={idx + 1}
                  onClick={() => openLightbox(idx + 1)}
                />
              </div>
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
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:ring-2 focus:ring-white/50"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:ring-2 focus:ring-white/50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:ring-2 focus:ring-white/50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {imageErrors[selectedImage] ? (
                <div className="w-full h-[60vh] bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Image className="w-16 h-16 mx-auto mb-4" />
                    <p>Image unavailable</p>
                  </div>
                </div>
              ) : (
                <img
                  src={galleryImages[selectedImage]}
                  alt={`Nail art ${selectedImage + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
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
