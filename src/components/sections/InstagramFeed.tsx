import React from "react";

const instaPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600", alt: "Zakynthos cliffs" },
  { id: 2, image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=600", alt: "Olive harvest" },
  { id: 3, image: "https://images.unsplash.com/photo-1563865436874-9aef32095ffd?q=80&w=600", alt: "Pouring olive oil" },
  { id: 4, image: "https://images.unsplash.com/photo-1587049352847-81a56d773c1c?q=80&w=600", alt: "Honey comb" },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-honey-500 font-bold block mb-2">Moments from our yard</span>
            <h2 className="font-serif text-3xl md:text-4xl text-olive-700">Follow Our Journey</h2>
          </div>
          <a
            href="https://www.instagram.com/olive_yard_by_marinos_1998/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-bold uppercase tracking-wider text-earth-900 hover:text-olive-600 transition-colors inline-flex items-center gap-2"
          >
            @olive_yard_by_marinos_1998 <span>&rarr;</span>
          </a>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/olive_yard_by_marinos_1998/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden block shadow-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-olive-700/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-ivory font-sans text-xs uppercase tracking-widest bg-earth-900/60 px-4 py-2 rounded-full backdrop-blur-sm">
                  View on Instagram
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}