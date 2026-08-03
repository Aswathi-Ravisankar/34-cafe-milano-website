import React from 'react';
import { Star, ChevronDown, Coffee, Calendar, MapPin, Award } from 'lucide-react';
import { CAFE_INFO, HERO_IMAGE } from '../data/cafeData';
import { Logo } from './Logo';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenReserveModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenReserveModal }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="34 Cafe Milano Luxury Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.70]"
          referrerPolicy="no-referrer"
        />
        {/* Layered vignette & warm dark luxury gradients (60-70% overlay for optimal contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-[#0d0a07]/65 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a07]/90 via-black/40 to-[#0d0a07]/90" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c99a5b]/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Hero Content Box (Strict max-width 1100px container) */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Emblem Crest Header */}
        <div className="flex justify-center mb-5">
          <Logo variant="icon-only" size="lg" />
        </div>

        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-panel border border-[#c99a5b]/40 text-xs tracking-wider uppercase text-[#f4d093] mb-6 shadow-2xl animate-fade-in">
          <Award className="w-4 h-4 text-[#c99a5b]" />
          <span className="font-medium">Voted Top Italian Café & Specialty Coffee</span>
          <span className="text-[#c99a5b] font-bold">★ 4.8</span>
        </div>

        {/* Main Display Headline (Limited to 2 balanced lines, max-w-3xl) */}
        <h1 className="max-w-3xl mx-auto text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.12] mb-6 drop-shadow-2xl text-balance">
          Where Italian Elegance Meets <br className="hidden sm:inline" />
          <span className="gold-gradient-text italic font-normal">Artisanal Espresso</span>
        </h1>

        {/* Brand Subheading */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#f3eae1]/90 leading-relaxed font-light mb-10 text-balance drop-shadow-md">
          Welcome to <strong className="text-white font-semibold">34 Cafe Milano</strong> — a luxurious sanctuary of handcrafted coffee, 
          authentic Italian pastas, wood-fired paninis, and exquisite tiramisu in a cozy, ambient environment.
        </p>

        {/* CTA Button Group (Stack vertically on mobile/tablet, side-by-side on desktop) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto mb-16 px-2">
          <button
            onClick={onExploreMenu}
            className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 h-13 sm:h-14 rounded-full bg-gradient-to-r from-[#c99a5b] via-[#d4a86b] to-[#a3763f] text-[#0d0a07] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-2xl hover:shadow-[#c99a5b]/30 flex items-center justify-center space-x-2.5 sm:space-x-3 group cursor-pointer shrink-0 max-w-full"
          >
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#0d0a07] group-hover:rotate-12 transition-transform shrink-0" />
            <span className="whitespace-nowrap">Explore Menu & Order</span>
          </button>

          <button
            onClick={onOpenReserveModal}
            className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 h-13 sm:h-14 rounded-full glass-panel text-[#f3eae1] font-semibold text-xs sm:text-sm uppercase tracking-wider border border-[#c99a5b]/40 hover:border-[#c99a5b] hover:bg-[#231a12] transition-all flex items-center justify-center space-x-2.5 sm:space-x-3 cursor-pointer shrink-0 max-w-full"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#c99a5b] shrink-0" />
            <span className="whitespace-nowrap">Reserve a Table</span>
          </button>
        </div>

        {/* Quick Highlights Counter / Trust Bar (12-column Grid alignment) */}
        <div className="w-full max-w-4xl mx-auto glass-panel p-5 sm:p-7 rounded-2xl border border-[#c99a5b]/25 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="text-center p-2 border-r border-[#c99a5b]/15 last:border-0 md:last:border-r-0">
            <div className="flex items-center justify-center space-x-1 text-[#c99a5b] mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#c99a5b] text-[#c99a5b]" />
              ))}
            </div>
            <div className="font-serif font-bold text-lg sm:text-xl text-white">4.8 / 5.0</div>
            <div className="text-[10px] sm:text-[11px] text-[#f3eae1]/70 uppercase tracking-wider mt-0.5">1,420+ Reviews</div>
          </div>

          <div className="text-center p-2 md:border-r border-[#c99a5b]/15">
            <div className="font-serif font-bold text-lg sm:text-xl text-[#c99a5b]">100% Arabica</div>
            <div className="text-[10px] sm:text-[11px] text-[#f3eae1]/70 uppercase tracking-wider mt-0.5">Single Origin Roast</div>
          </div>

          <div className="text-center p-2 border-r border-[#c99a5b]/15">
            <div className="font-serif font-bold text-lg sm:text-xl text-white">Handcrafted</div>
            <div className="text-[10px] sm:text-[11px] text-[#f3eae1]/70 uppercase tracking-wider mt-0.5">Fresh Pastas & Paninis</div>
          </div>

          <div className="text-center p-2">
            <div className="font-serif font-bold text-lg sm:text-xl text-[#c99a5b]">Patio & Lounge</div>
            <div className="text-[10px] sm:text-[11px] text-[#f3eae1]/70 uppercase tracking-wider mt-0.5">Cozy Ambient Seating</div>
          </div>

        </div>

      </div>

      {/* Down Arrow Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a
          href="#about"
          className="text-[#c99a5b]/70 hover:text-[#c99a5b] transition-colors flex flex-col items-center space-y-1 group"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#c99a5b]/80">Discover Story</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#c99a5b]" />
        </a>
      </div>
    </section>
  );
};
