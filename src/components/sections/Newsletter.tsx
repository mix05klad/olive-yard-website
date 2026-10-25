import React from "react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-earth-900 text-ivory relative overflow-hidden">
      {/* Διακοσμητικό απαλό φόντο */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#E8ECE1_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">

        <div className="space-y-3">
          <h2 className="font-serif text-3xl md:text-5xl text-honey-500">Bring Zakynthos to Your Inbox</h2>
          <p className="font-sans text-ivory/70 max-w-xl mx-auto text-base md:text-lg font-light">
            Subscribe to receive stories from our olive groves, traditional recipes, and exclusive updates on our upcoming online store.
          </p>
        </div>

        {/* Subscription Form */}
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3 pt-2">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="w-full px-5 py-3.5 bg-ivory/10 border border-ivory/20 rounded-md text-ivory placeholder-ivory/50 font-sans text-sm focus:outline-none focus:border-honey-500 backdrop-blur-sm transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 bg-olive-600 hover:bg-olive-700 text-ivory font-sans text-sm font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shadow-md cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        <p className="text-[11px] font-sans text-ivory/40">
          We respect your privacy. Unsubscribe at any time.
        </p>

      </div>
    </section>
  );
}