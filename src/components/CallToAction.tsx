import React from 'react';
import { Coffee, Calendar, Navigation, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface CallToActionProps {
  onExploreMenu: () => void;
  onOpenReserveModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onExploreMenu, onOpenReserveModal }) => {
  return (
    <section className="py-20 bg-[#0d0a07] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden glass-panel p-10 sm:p-16 border-2 border-[#c99a5b]/40 shadow-2xl text-center">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c99a5b]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1e1610] border border-[#c99a5b]/40 text-xs font-semibold uppercase tracking-wider text-[#f4d093] mb-6">
              <Sparkles className="w-4 h-4 text-[#c99a5b]" />
              <span>Your Italian Escape Awaits</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Experience <span className="gold-gradient-text italic font-normal">34 Cafe Milano</span> Today
            </h2>

            <p className="text-[#f3eae1]/80 text-base sm:text-lg font-light mb-10 text-balance">
              Join us for handcrafted espresso, fresh artisanal dishes, and unforgettable Milano hospitality. Walk-ins and reservations warmly welcomed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-2xl flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Coffee className="w-4 h-4" />
                <span>Explore Full Menu</span>
              </button>

              <button
                onClick={onOpenReserveModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1b140d] text-white font-semibold text-xs uppercase tracking-wider border border-[#c99a5b]/40 hover:border-[#c99a5b] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#c99a5b]" />
                <span>Book a Table</span>
              </button>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/50 text-[#c99a5b] font-semibold text-xs uppercase tracking-wider border border-white/10 hover:border-[#c99a5b]/50 transition-all flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
