import React from "react";

export default function ContactLocation() {
  return (
    <section id="contact" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-olive-700">Visit Our Shop</h2>
          <p className="font-sans text-earth-900/80 max-w-2xl mx-auto text-lg font-light">
            Experience the Zakynthian hospitality in person. We are located in the traditional village of Exo Chora.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-olive-100">
          
          {/* Αριστερή Πλευρά: Πληροφορίες */}
          <div className="p-10 md:p-14 space-y-10 flex flex-col justify-center">
            
            {/* Address */}
            <div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-honey-500 font-bold mb-3">Location</h3>
              <p className="font-serif text-2xl text-earth-900">Exo Chora 290 91</p>
              <p className="font-sans text-earth-900/70 mt-1">Zakynthos, Greece</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-honey-500 font-bold mb-3">Contact</h3>
              <a href="tel:+306983636770" className="font-serif text-2xl text-earth-900 hover:text-olive-600 transition-colors block">
                +30 698 363 6770
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-honey-500 font-bold mb-3">Opening Hours</h3>
              <p className="font-sans text-earth-900 font-medium">Summer Season</p>
              <p className="font-sans text-earth-900/70 mt-1">Check our Google Maps listing for current hours.</p>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <a 
                href="https://maps.app.goo.gl/7dafRc8eWVFy3khcA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-olive-600 hover:bg-olive-700 text-ivory font-sans text-sm font-bold tracking-wider uppercase rounded-md transition-all shadow-md"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Δεξιά Πλευρά: Χάρτης (Iframe placeholder για την Έξω Χώρα) */}
          <div className="h-96 lg:h-auto w-full bg-olive-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3936.5465064375753!2d20.6812305!3d37.801262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13676bb0b7b665af%3A0x6595a64ff1e453da!2sOlive%20Yard%20by%20Marinos!5e1!3m2!1sen!2sgr!4v1780396040962!5m2!1sen!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[110%] opacity-90"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}