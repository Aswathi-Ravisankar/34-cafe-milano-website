import React from 'react';
import { Coffee, Utensils, Heart, Sparkles, Instagram, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO, COFFEE_ART_IMAGE, PASTA_SPECIAL_IMAGE } from '../data/cafeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0d0a07] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c99a5b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Overlapping Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#c99a5b]/30 shadow-2xl group">
              <img
                src={COFFEE_ART_IMAGE}
                alt="Artisanal Latte Art 34 Cafe Milano"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-transparent to-transparent opacity-80" />
            </div>

            {/* Inset Secondary Image Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 rounded-2xl overflow-hidden border-2 border-[#c99a5b]/40 shadow-2xl glass-card hidden sm:block">
              <img
                src={PASTA_SPECIAL_IMAGE}
                alt="Handcrafted Pasta Milano"
                className="w-full h-36 sm:h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#17110b]/90 text-center">
                <span className="text-xs font-serif font-bold text-[#f4d093] block">Truffle Tagliatelle</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Fresh Handcrafted Daily</span>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute top-6 -left-4 sm:-left-6 glass-panel px-5 py-3 rounded-2xl border border-[#c99a5b]/40 shadow-xl flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#c99a5b]/20 flex items-center justify-center text-[#c99a5b]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">Italian Excellence</span>
                <span className="text-[11px] text-[#c99a5b] uppercase tracking-wider">Milano Roasting Recipe</span>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b]">
              <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              A Taste of Milano's <br />
              <span className="gold-gradient-text italic font-normal">Timeless Café Culture</span>
            </h2>

            <p className="text-[#f3eae1]/80 text-base leading-relaxed font-light">
              {CAFE_INFO.storyText}
            </p>

            {/* Key Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#17110b] border border-[#c99a5b]/15">
                <CheckCircle2 className="w-5 h-5 text-[#c99a5b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">100% Single-Origin Espresso</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Custom roasted in small batches for golden crema.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#17110b] border border-[#c99a5b]/15">
                <CheckCircle2 className="w-5 h-5 text-[#c99a5b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Authentic Italian Recipes</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Imported Parmigiano DOP & San Marzano tomatoes.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#17110b] border border-[#c99a5b]/15">
                <CheckCircle2 className="w-5 h-5 text-[#c99a5b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Intimate Milano Atmosphere</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Lush indoor greenery and warm candlelight seating.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#17110b] border border-[#c99a5b]/15">
                <CheckCircle2 className="w-5 h-5 text-[#c99a5b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">In-House Bakery & Tiramisu</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Baked fresh every morning with pure passion.</p>
                </div>
              </div>
            </div>

            {/* Social & Google Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#1e1610] text-[#c99a5b] border border-[#c99a5b]/30 hover:border-[#c99a5b] text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @34cafemilano</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>

              <a
                href={CAFE_INFO.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#1e1610] text-[#f3eae1] border border-white/10 hover:border-[#c99a5b]/50 text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all"
              >
                <span>Google Business Profile</span>
                <ExternalLink className="w-3 h-3 text-[#c99a5b]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
