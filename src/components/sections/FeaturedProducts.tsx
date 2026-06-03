import React from "react";

const categories = [
  { title: "Extra Virgin Olive Oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800" },
  { title: "Local Zakynthian Honey", image: "https://images.unsplash.com/photo-1587049352847-81a56d773c1c?q=80&w=800" },
  { title: "Handcrafted Olive Wood", image: "https://images.unsplash.com/photo-1611078512130-f2c8d8b94870?q=80&w=800" },
  { title: "Traditional Ceramics", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800" },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-olive-700">Flavors of Zakynthos</h2>
          <p className="font-sans text-earth-900/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our carefully curated selection of local products, crafted with love and respect for our island's traditions.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl text-ivory leading-tight mb-2">{cat.title}</h3>
                <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-honey-500 group-hover:text-ivory transition-colors duration-300">
                  Explore <span>&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}