import React from "react";
import Image from "next/image"; // Εισαγωγή του Next.js Image Component

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-earth-900 text-ivory">

      {/* Premium Background Image Implementation */}
      <Image
        src="/shop-hero.jpg" // Αν το αρχείο σου είναι .png, άλλαξέ το σε /shop-hero.png
        alt="Olive Yard by Marinos Store Interior in Exo Chora"
        fill // Γεμίζει αυτόματα όλο το section
        priority // Λέει στον browser να τη φορτώσει κατά προτεραιότητα (SEO & Speed)
        sizes="100vw"
        className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">

        {/* Accent Tag */}
        <span className="inline-block font-sans text-xs uppercase tracking-[0.25em] text-honey-500 bg-olive-700/50 px-4 py-2 rounded-full border border-olive-600/30 backdrop-blur-sm">
          Exo Chora, Zakynthos • Est. 1998
        </span>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mx-auto">
          Taste the Authentic <br />
          <span className="italic text-honey-500">Zakynthian Heritage</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-xl text-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
          Welcome to Olive Yard by Marinos. Explore a curated collection of hand-harvested olive oil, local honey, and artisanal olive wood creations born from decades of family tradition.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 bg-olive-600 hover:bg-olive-700 text-ivory font-sans text-sm font-medium tracking-wider uppercase rounded-md shadow-lg transition-all duration-300"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-ivory/10 text-ivory border border-ivory/30 font-sans text-sm font-medium tracking-wider uppercase rounded-md backdrop-blur-sm transition-all duration-300"
          >
            Find Our Shop
          </a>
        </div>

      </div>

      {/* Bottom Soft Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent opacity-10" />
    </section>
  );
}