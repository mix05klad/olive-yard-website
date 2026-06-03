import React from "react";

export default function OurStory() {
  return (
    <section id="story" className="py-24 bg-olive-100/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Αριστερή Πλευρά: Φωτογραφικό Κολάζ */}
          <div className="relative h-[500px] sm:h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595854619726-2cb63428fb17?q=80&w=1000')` }}
            />
            {/* Διακοσμητικό Badge */}
            <div className="absolute top-6 left-6 bg-ivory/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-olive-100 text-center">
              <span className="block font-serif text-3xl text-olive-700">1998</span>
              <span className="block font-sans text-[10px] uppercase tracking-widest text-earth-900 font-bold">Established</span>
            </div>
          </div>

          {/* Δεξιά Πλευρά: Το Αφήγημα */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-honey-500 font-bold">
                A Family Tradition
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-olive-700 leading-tight">
                Rooted in the Heart <br /> of Exo Chora
              </h2>
            </div>
            
            <div className="font-sans text-earth-900/80 space-y-6 text-lg font-light leading-relaxed">
              <p>
                For over two decades, the Olive Yard has been more than just a shop; it is a reflection of our family's deep connection to the Zakynthian land. We believe in preserving the authentic flavors and crafts of our island.
              </p>
              <p>
                From cultivating our own olive groves to harvest our golden honey, most of our offerings are carefully produced by our family. We also proudly support local artisans, bringing you the finest handmade olive wood creations, traditional ceramics, and local wines.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-olive-600 text-olive-700 font-sans text-sm font-bold tracking-wider uppercase rounded-md hover:bg-olive-600 hover:text-ivory transition-all duration-300"
              >
                Visit Our Store
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}