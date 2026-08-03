import React, { useState } from 'react';
import { X, Star, Clock, Flame, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, options: string[]) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedMilk, setSelectedMilk] = useState('Oat Milk');
  const [extraShot, setExtraShot] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const options: string[] = [];
    if (item.category === 'coffee') {
      options.push(`Milk: ${selectedMilk}`);
      if (extraShot) options.push('Extra Shot (+ $1.00)');
    }
    onAddToCart(item, quantity, options);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full glass-panel rounded-3xl overflow-hidden border border-[#c99a5b]/40 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#c99a5b] transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Item Image */}
          <div className="md:col-span-5 h-64 md:h-full relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-transparent to-transparent md:hidden" />
          </div>

          {/* Item Info & Customization */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Badges */}
              <div className="flex items-center space-x-2 mb-2">
                {item.isBestSeller && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#c99a5b] text-[#0d0a07] font-bold text-[10px] uppercase tracking-wider flex items-center space-x-1">
                    <Flame className="w-3 h-3 fill-[#0d0a07]" />
                    <span>Best Seller</span>
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full bg-[#201811] text-[#c99a5b] font-medium text-[10px] uppercase tracking-wider border border-[#c99a5b]/30">
                  {item.category}
                </span>
              </div>

              {/* Title & Rating */}
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {item.name}
              </h3>

              <div className="flex items-center space-x-3 text-xs text-gray-300 mb-4">
                <div className="flex items-center space-x-1 text-[#c99a5b]">
                  <Star className="w-4 h-4 fill-[#c99a5b]" />
                  <span className="font-bold text-white">{item.rating}</span>
                </div>
                <span>•</span>
                <span>{item.reviewsCount} Guest Reviews</span>
                {item.prepTime && (
                  <>
                    <span>•</span>
                    <span className="flex items-center space-x-1 text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-[#c99a5b]" />
                      <span>{item.prepTime}</span>
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs text-[#f3eae1]/80 leading-relaxed font-light mb-6">
                {item.description}
              </p>

              {/* Coffee Customizations if category === coffee */}
              {item.category === 'coffee' && (
                <div className="space-y-3 pt-4 border-t border-[#c99a5b]/20 text-xs">
                  <div>
                    <label className="block text-gray-400 font-semibold mb-1 uppercase tracking-wider text-[10px]">Milk Preference</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Oat Milk', 'Whole Milk', 'Almond Milk'].map((milk) => (
                        <button
                          key={milk}
                          type="button"
                          onClick={() => setSelectedMilk(milk)}
                          className={`py-1.5 px-2 rounded-lg text-center border text-[11px] transition-all ${
                            selectedMilk === milk
                              ? 'bg-[#c99a5b] text-[#0d0a07] font-bold border-[#c99a5b]'
                              : 'bg-[#18120c] text-gray-300 border-white/10'
                          }`}
                        >
                          {milk}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center space-x-2 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={extraShot}
                      onChange={(e) => setExtraShot(e.target.checked)}
                      className="rounded accent-[#c99a5b]"
                    />
                    <span className="text-gray-300">Add Extra Ristretto Shot (+ $1.00)</span>
                  </label>
                </div>
              )}

            </div>

            {/* Quantity Selector & Add Button */}
            <div className="pt-4 border-t border-[#c99a5b]/20 flex items-center justify-between gap-4">
              
              <div className="flex items-center space-x-3 bg-[#18120c] p-1.5 rounded-xl border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg bg-black/40 text-white flex items-center justify-center hover:bg-[#c99a5b] hover:text-[#0d0a07] transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-serif font-bold text-white text-sm w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-black/40 text-white flex items-center justify-center hover:bg-[#c99a5b] hover:text-[#0d0a07] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added to Order</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add ${(item.price * quantity + (extraShot ? 1.0 : 0)).toFixed(2)}</span>
                  </>
                )}
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
