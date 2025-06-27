
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "This Month's Hottest Nail Colours",
    excerpt: "Discover the trending shades that are dominating the nail art scene this season.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    readTime: "3 min read"
  },
  {
    title: "Nail Care Tips for Healthy Growth",
    excerpt: "Expert advice on maintaining strong, healthy nails between salon visits.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    readTime: "5 min read"
  },
  {
    title: "Bridal Nail Art Inspiration",
    excerpt: "Elegant and timeless nail designs perfect for your special day.",
    image: "https://images.unsplash.com/photo-1610992015762-45dca7656d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    readTime: "4 min read"
  }
];

const BlogHighlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tips, trends, and inspiration for your nail care journey.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  index === currentIndex ? 'ring-2 ring-pastel-pink/50' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback image if the original fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1599948121462-8d7b57ddf4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-pastel-pink mb-2 font-medium">{post.readTime}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-pastel-pink hover:text-pastel-pink/80 p-0 h-auto font-medium group"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-50 border-gray-200 focus:ring-2 focus:ring-pastel-pink/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-50 border-gray-200 focus:ring-2 focus:ring-pastel-pink/50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlight;
