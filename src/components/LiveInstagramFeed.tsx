
const LiveInstagramFeed = () => {
  const instagramPosts = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1610992015762-45dca7656d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1599948121462-8d7b57ddf4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Follow Us on Instagram
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with our latest work and behind-the-scenes moments.
          </p>
          <a
            href="https://instagram.com/nailsalon_mahsaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pastel-pink hover:text-pastel-pink/80 font-medium transition-colors duration-300"
          >
            @nailsalon_mahsaa
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-sm font-medium">View on Instagram</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveInstagramFeed;
