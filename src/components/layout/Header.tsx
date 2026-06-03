import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/90 backdrop-blur-md border-b border-olive-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <a href="/" className="flex items-center h-full py-2">
          <Image 
            src="/logo.jpg" 
            alt="Olive Yard by Marinos Logo" 
            width={180} 
            height={70} 
            className="object-contain h-full w-auto" 
            priority={true} 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-sans text-sm font-medium tracking-wide uppercase text-earth-900">
          <a href="#" className="hover:text-olive-600 transition-colors">Home</a>
          <a href="#story" className="hover:text-olive-600 transition-colors">Our Story</a>
          <a href="#products" className="hover:text-olive-600 transition-colors">Products</a>
          <a href="#contact" className="hover:text-olive-600 transition-colors">Contact</a>
        </nav>

        {/* Actions (Language Switcher & CTA) */}
        <div className="flex items-center gap-6">
          <span className="text-sm font-sans font-bold cursor-pointer hover:text-olive-600">EN / EL</span>
          <a 
            href="#contact" 
            className="hidden md:inline-block px-5 py-2.5 bg-olive-600 text-ivory text-xs uppercase font-bold tracking-wider rounded-md hover:bg-olive-700 transition-all shadow-md"
          >
            Visit Us
          </a>
        </div>
        
      </div>
    </header>
  );
}