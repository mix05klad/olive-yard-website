import React from "react";

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-ivory pt-16 pb-8 border-t border-olive-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-3xl text-honey-500">Olive Yard</h4>
            <p className="font-sans text-xs uppercase tracking-widest text-ivory/60 font-bold">By Marinos</p>
            <p className="font-sans text-sm text-ivory/70 font-light max-w-xs mx-auto md:mx-0 mt-4">
              Authentic traditional products, handcrafted in Zakynthos since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-sm uppercase tracking-widest text-honey-500 font-bold mb-6">Explore</h4>
            <nav className="flex flex-col space-y-3 font-sans text-sm text-ivory/80">
              <a href="#" className="hover:text-honey-500 transition-colors">Home</a>
              <a href="#story" className="hover:text-honey-500 transition-colors">Our Story</a>
              <a href="#products" className="hover:text-honey-500 transition-colors">Products</a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-sans text-sm uppercase tracking-widest text-honey-500 font-bold mb-6">Follow Us</h4>
            <div className="flex flex-col space-y-3 font-sans text-sm text-ivory/80">
              <a 
                href="https://www.instagram.com/olive_yard_by_marinos_1998/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-honey-500 transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/OliveYardbyMarinos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-honey-500 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-sans text-xs text-ivory/50">
            &copy; {new Date().getFullYear()} Olive Yard by Marinos. All rights reserved.
          </p>
          <div className="font-sans text-xs text-ivory/50 space-x-4">
            <span className="cursor-pointer hover:text-ivory transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-ivory transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}