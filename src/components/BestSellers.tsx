import React from 'react';
import { Flame, Star, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';

interface BestSellersProps {
  onAddToCart: (item: MenuItem) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ onAddToCart, onSelectItem }) => {
  const bestSellers = MENU_ITEMS.filter((item) => item.isBestSeller).slice(0, 4);

  return (
    <section id="bestsellers" className="py-24 bg-[#0d0a07] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c99a5b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b] mb-3">
              <Sparkles className="w-4 h-4 text-[#c99a5b]" />
              <span>Iconic Milano Favorites</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Signature <span className="gold-gradient-text italic font-normal">Best Sellers</span>
            </h2>
          </div>
          <p className="text-[#f3eae1]/80 text-sm max-w-md font-light">
            Celebrated by our guests and featured across Google Reviews for their unforgettable taste and presentation.
          </p>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-5 border border-[#c99a5b]/25 hover:border-[#c99a5b] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-2"
            >
              <div>
                {/* Photo with Best Seller badge */}
                <div
                  className="relative h-52 rounded-2xl overflow-hidden mb-5 cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#c99a5b] text-[#0d0a07] font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center space-x-1">
                    <Flame className="w-3.5 h-3.5 fill-[#0d0a07]" />
                    <span>Top Rated</span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-xs text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                    <Star className="w-3.5 h-3.5 fill-[#c99a5b] text-[#c99a5b]" />
                    <span className="font-bold">{item.rating}</span>
                    <span className="text-gray-300 text-[10px]">({item.reviewsCount}+)</span>
                  </div>
                </div>

                <h3
                  onClick={() => onSelectItem(item)}
                  className="font-serif text-xl font-bold text-white hover:text-[#c99a5b] transition-colors cursor-pointer mb-2 line-clamp-1"
                >
                  {item.name}
                </h3>

                <p className="text-xs text-[#f3eae1]/70 leading-relaxed font-light mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-[#c99a5b]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 block">Price</span>
                  <span className="font-serif text-lg font-bold text-[#f4d093]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center space-x-1 shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
