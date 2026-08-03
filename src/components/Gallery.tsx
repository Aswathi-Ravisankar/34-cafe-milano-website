import React, { useState } from 'react';
import { Maximize2, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'coffee' | 'food' | 'interiors' | 'patio'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Photos' },
    { key: 'coffee', label: 'Coffee & Barista' },
    { key: 'food', label: 'Gourmet Food' },
    { key: 'interiors', label: 'Interiors & Lounge' },
    { key: 'patio', label: 'Garden Patio' },
  ];

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#0a0805] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b] mb-3">
            <Sparkles className="w-4 h-4 text-[#c99a5b]" />
            <span>Visual Atmosphere & Aesthetics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            The <span className="gold-gradient-text italic font-normal">34 Cafe Milano</span> Gallery
          </h2>
          <p className="text-[#f3eae1]/80 text-sm sm:text-base font-light">
            Take a visual tour of our cozy interiors, artisanal coffee craftings, freshly prepared dishes, and leafy garden patio.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] border-[#f4d093]/40 shadow-lg font-bold'
                  : 'bg-[#17110b] text-gray-400 border-white/5 hover:border-[#c99a5b]/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer glass-card border border-[#c99a5b]/20"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold text-[#c99a5b] tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center space-x-1 text-xs text-[#c99a5b] font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view full image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-[#c99a5b]/40 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 text-white hover:text-[#c99a5b] transition-colors border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8 h-[350px] sm:h-[480px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#140e0a]">
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#c99a5b]/10 border border-[#c99a5b]/30 text-xs font-semibold text-[#c99a5b] uppercase tracking-wider mb-4">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>34 Cafe Milano Gallery</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    {selectedImage.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c99a5b]/20 flex justify-between items-center text-xs text-gray-400">
                  <span>Category: <strong className="text-white capitalize">{selectedImage.category}</strong></span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-4 py-2 rounded-xl bg-[#c99a5b] text-[#0d0a07] font-bold uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
