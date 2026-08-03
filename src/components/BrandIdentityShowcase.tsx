import React, { useState } from 'react';
import { Logo } from './Logo';
import { Sparkles, ShieldCheck, Layers, Coffee, Award, Check } from 'lucide-react';

export const BrandIdentityShowcase: React.FC = () => {
  const [copiedVariant, setCopiedVariant] = useState<string | null>(null);

  const handleCopy = (variantName: string) => {
    setCopiedVariant(variantName);
    setTimeout(() => setCopiedVariant(null), 2000);
  };

  return (
    <section id="branding" className="py-24 bg-[#0a0705] relative border-t border-[#c99a5b]/20">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c99a5b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b] mb-3">
            <Sparkles className="w-4 h-4 text-[#c99a5b]" />
            <span>Our Story & Brand Heritage</span>
            <Sparkles className="w-4 h-4 text-[#c99a5b]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            The <span className="gold-gradient-text italic font-normal">34 Cafe Milano</span> Identity
          </h2>

          <p className="text-[#f3eae1]/80 text-sm sm:text-base font-light">
            Crafted with Italian elegance, timeless typography, and gold metallic craftsmanship. Explore our official luxury brand assets and emblem variations.
          </p>
        </div>

        {/* Grid of Logo Variations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* 1. Primary Dark Background Logo */}
          <div className="glass-card rounded-3xl p-8 border border-[#c99a5b]/30 flex flex-col justify-between space-y-6 relative group hover:border-[#c99a5b] transition-all">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-serif font-bold text-[#f4d093] uppercase tracking-wider">01. Primary Horizontal</span>
              <span className="text-[10px] bg-[#201811] text-[#c99a5b] px-2.5 py-0.5 rounded-full border border-[#c99a5b]/30">Dark Canvas</span>
            </div>

            <div className="py-8 flex items-center justify-center bg-[#0d0a07] rounded-2xl border border-white/5 shadow-inner">
              <Logo variant="horizontal" size="md" theme="dark" />
            </div>

            <div className="text-xs text-gray-400 font-light flex items-center justify-between">
              <span>Main Navbar, Hero, Header</span>
              <button
                onClick={() => handleCopy('primary')}
                className="text-[#c99a5b] hover:underline flex items-center space-x-1"
              >
                {copiedVariant === 'primary' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span>SVG Spec</span>}
              </button>
            </div>
          </div>

          {/* 2. Light Background Logo */}
          <div className="bg-[#f7f2eb] rounded-3xl p-8 border border-[#c99a5b]/40 flex flex-col justify-between space-y-6 relative text-[#120d09] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#120d09]/10 pb-3">
              <span className="text-xs font-serif font-bold text-[#a3763f] uppercase tracking-wider">02. Light Background</span>
              <span className="text-[10px] bg-[#ebdcd0] text-[#7a5323] px-2.5 py-0.5 rounded-full border border-[#a3763f]/30">Warm Cream</span>
            </div>

            <div className="py-8 flex items-center justify-center bg-white rounded-2xl border border-[#c99a5b]/20 shadow-md">
              <Logo variant="horizontal" size="md" theme="light" />
            </div>

            <div className="text-xs text-gray-600 font-medium flex items-center justify-between">
              <span>Print, Menus, Invoices</span>
              <button
                onClick={() => handleCopy('light')}
                className="text-[#8c622e] hover:underline flex items-center space-x-1"
              >
                {copiedVariant === 'light' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <span>SVG Spec</span>}
              </button>
            </div>
          </div>

          {/* 3. Icon-Only Crest Emblem */}
          <div className="glass-card rounded-3xl p-8 border border-[#c99a5b]/30 flex flex-col justify-between space-y-6 relative group hover:border-[#c99a5b] transition-all">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-serif font-bold text-[#f4d093] uppercase tracking-wider">03. Icon Emblem Crest</span>
              <span className="text-[10px] bg-[#201811] text-[#c99a5b] px-2.5 py-0.5 rounded-full border border-[#c99a5b]/30">Minimal Symbol</span>
            </div>

            <div className="py-6 flex items-center justify-center bg-[#0d0a07] rounded-2xl border border-white/5">
              <Logo variant="icon-only" size="xl" theme="dark" />
            </div>

            <div className="text-xs text-gray-400 font-light flex items-center justify-between">
              <span>Favicon, App Icon, Social</span>
              <button
                onClick={() => handleCopy('icon')}
                className="text-[#c99a5b] hover:underline flex items-center space-x-1"
              >
                {copiedVariant === 'icon' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span>SVG Spec</span>}
              </button>
            </div>
          </div>

          {/* 4. Circular Heritage Seal */}
          <div className="glass-card rounded-3xl p-8 border border-[#c99a5b]/30 flex flex-col justify-between space-y-6 relative group hover:border-[#c99a5b] transition-all">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-serif font-bold text-[#f4d093] uppercase tracking-wider">04. Circular Seal Badge</span>
              <span className="text-[10px] bg-[#201811] text-[#c99a5b] px-2.5 py-0.5 rounded-full border border-[#c99a5b]/30">Stamp / Wax Seal</span>
            </div>

            <div className="py-4 flex items-center justify-center bg-[#0d0a07] rounded-2xl border border-white/5">
              <Logo variant="badge" size="lg" theme="dark" />
            </div>

            <div className="text-xs text-gray-400 font-light flex items-center justify-between">
              <span>Coffee Bags, Wax Seals</span>
              <button
                onClick={() => handleCopy('badge')}
                className="text-[#c99a5b] hover:underline flex items-center space-x-1"
              >
                {copiedVariant === 'badge' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span>SVG Spec</span>}
              </button>
            </div>
          </div>

          {/* 5. Stacked Centered Logo */}
          <div className="glass-card rounded-3xl p-8 border border-[#c99a5b]/30 flex flex-col justify-between space-y-6 relative group hover:border-[#c99a5b] transition-all">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-serif font-bold text-[#f4d093] uppercase tracking-wider">05. Stacked Centered</span>
              <span className="text-[10px] bg-[#201811] text-[#c99a5b] px-2.5 py-0.5 rounded-full border border-[#c99a5b]/30">Center Layout</span>
            </div>

            <div className="py-6 flex items-center justify-center bg-[#0d0a07] rounded-2xl border border-white/5">
              <Logo variant="stacked" size="md" theme="dark" />
            </div>

            <div className="text-xs text-gray-400 font-light flex items-center justify-between">
              <span>Menu Covers, Signage</span>
              <button
                onClick={() => handleCopy('stacked')}
                className="text-[#c99a5b] hover:underline flex items-center space-x-1"
              >
                {copiedVariant === 'stacked' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span>SVG Spec</span>}
              </button>
            </div>
          </div>

          {/* 6. Monogram Emblem */}
          <div className="glass-card rounded-3xl p-8 border border-[#c99a5b]/30 flex flex-col justify-between space-y-6 relative group hover:border-[#c99a5b] transition-all">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-serif font-bold text-[#f4d093] uppercase tracking-wider">06. Monogram Mark</span>
              <span className="text-[10px] bg-[#201811] text-[#c99a5b] px-2.5 py-0.5 rounded-full border border-[#c99a5b]/30">Minimal Mark</span>
            </div>

            <div className="py-8 flex items-center justify-center bg-[#0d0a07] rounded-2xl border border-white/5">
              <Logo variant="monogram" theme="dark" />
            </div>

            <div className="text-xs text-gray-400 font-light flex items-center justify-between">
              <span>Embroidery, Coasters</span>
              <button
                onClick={() => handleCopy('monogram')}
                className="text-[#c99a5b] hover:underline flex items-center space-x-1"
              >
                {copiedVariant === 'monogram' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span>SVG Spec</span>}
              </button>
            </div>
          </div>

        </div>

        {/* Physical Application Mockups */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#c99a5b]/30">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Brand Applications & Merchandise
            </h3>
            <p className="text-xs text-gray-400">
              How the 34 Cafe Milano luxury mark translates onto artisanal ceramic coffee cups, roasted bean packaging, and bistro aprons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Mockup 1: Coffee Cup */}
            <div className="bg-[#120d09] p-6 rounded-2xl border border-[#c99a5b]/20 text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-b from-[#221a13] to-[#120d09] border-2 border-[#c99a5b]/40 flex items-center justify-center shadow-2xl relative">
                <Logo variant="badge" size="sm" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Ceramic Espresso Cup</h4>
                <p className="text-[11px] text-gray-400 mt-1">Stressed gold leaf foil seal on matte black porcelain.</p>
              </div>
            </div>

            {/* Mockup 2: Bean Bag */}
            <div className="bg-[#120d09] p-6 rounded-2xl border border-[#c99a5b]/20 text-center space-y-4">
              <div className="w-24 h-28 mx-auto rounded-xl bg-[#18120c] border border-[#c99a5b]/40 p-3 flex flex-col items-center justify-center space-y-1 shadow-2xl">
                <Logo variant="icon-only" size="md" />
                <span className="text-[8px] font-serif font-bold text-[#f4d093] tracking-widest">34 MILANO</span>
                <span className="text-[6px] text-gray-500 uppercase">Single Origin 250g</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Artisanal Bean Bag</h4>
                <p className="text-[11px] text-gray-400 mt-1">Unbleached kraft paper with metallic gold foil emblem.</p>
              </div>
            </div>

            {/* Mockup 3: Leather & Fabric Apron */}
            <div className="bg-[#120d09] p-6 rounded-2xl border border-[#c99a5b]/20 text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-[#1d1610] border border-[#c99a5b]/40 flex items-center justify-center shadow-2xl">
                <Logo variant="monogram" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Barista Apron & Staff Uniform</h4>
                <p className="text-[11px] text-gray-400 mt-1">Embroidered metallic gold thread monogram on dark canvas.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
