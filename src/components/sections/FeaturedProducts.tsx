import React from "react";
import Image from "next/image"; // Εισαγωγή του Next.js Image Component

const categories = [
  { title: "Extra Virgin Olive Oil", image: "/olive-oil.jpg" },
  { title: "Local Zakynthian Honey", image: "/honey.jpg" },
  { title: "Handcrafted Olive Wood", image: "/olive-wood.jpg" },
  { title: "Traditional Ceramics", image: "/ceramics.jpg" },
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
              {/* Premium Next.js Image Implementation */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill // Γεμίζει αυτόματα την κάρτα
                sizes="(max-w-7xl) 25vw, 100vw" // Βοηθάει το Next.js να κατεβάσει το σωστό μέγεθος για κινητά/desktop
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay for text readability (Με προσθήκη z-10 για να κάθεται πάνω από την εικόνα) */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/20 to-transparent z-10" />

              {/* Text Content (Με προσθήκη z-20 για να είναι πάντα ευανάγνωστο στην κορυφή) */}
              <div className="absolute bottom-0 left-0 p-6 z-20">
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