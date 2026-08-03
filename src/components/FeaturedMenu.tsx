import React, { useState, useMemo } from 'react';
import { Search, Star, Clock, Plus, Filter, Check, Flame, Leaf, Award } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem, MenuCategory } from '../types';

interface FeaturedMenuProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onSelectItem, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegetarianFilter, setVegetarianFilter] = useState(false);
  const [chefSpecialFilter, setChefSpecialFilter] = useState(false);

  const categories: { key: MenuCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Offerings', count: MENU_ITEMS.length },
    { key: 'coffee', label: 'Artisanal Coffee', count: MENU_ITEMS.filter(i => i.category === 'coffee').length },
    { key: 'pastas', label: 'Fresh Pastas', count: MENU_ITEMS.filter(i => i.category === 'pastas').length },
    { key: 'pizzas', label: 'Pizzas & Paninis', count: MENU_ITEMS.filter(i => i.category === 'pizzas').length },
    { key: 'desserts', label: 'Italian Desserts', count: MENU_ITEMS.filter(i => i.category === 'desserts').length },
    { key: 'drinks', label: 'Botanicals & Spritz', count: MENU_ITEMS.filter(i => i.category === 'drinks').length },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesVeg = !vegetarianFilter || item.isVegetarian;
      const matchesChef = !chefSpecialFilter || item.isChefSpecial;

      return matchesCategory && matchesSearch && matchesVeg && matchesChef;
    });
  }, [selectedCategory, searchQuery, vegetarianFilter, chefSpecialFilter]);

  return (
    <section id="menu" className="py-24 bg-[#0a0805] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b] mb-3">
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
            <span>Handcrafted Culinary Selection</span>
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            The Menu at <span className="gold-gradient-text italic font-normal">34 Cafe Milano</span>
          </h2>
          <p className="text-[#f3eae1]/80 text-sm sm:text-base font-light">
            Every creation is prepared using traditional Italian culinary techniques and the finest imported specialty ingredients.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Top Search & Dietary Toggles */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-[#c99a5b]/20">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c99a5b]" />
              <input
                type="text"
                placeholder="Search coffee, pasta, tiramisu, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#140e0a] text-sm text-white placeholder-gray-500 pl-10 pr-4 py-2.5 rounded-xl border border-[#c99a5b]/20 focus:outline-none focus:border-[#c99a5b] transition-colors"
              />
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setVegetarianFilter(!vegetarianFilter)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center space-x-1.5 transition-all border ${
                  vegetarianFilter
                    ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500'
                    : 'bg-[#17110b] text-gray-400 border-white/10 hover:border-emerald-500/40'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>Vegetarian</span>
                {vegetarianFilter && <Check className="w-3 h-3 ml-1" />}
              </button>

              <button
                onClick={() => setChefSpecialFilter(!chefSpecialFilter)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center space-x-1.5 transition-all border ${
                  chefSpecialFilter
                    ? 'bg-[#2b1f13] text-[#f4d093] border-[#c99a5b]'
                    : 'bg-[#17110b] text-gray-400 border-white/10 hover:border-[#c99a5b]/40'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-[#c99a5b]" />
                <span>Chef's Special</span>
                {chefSpecialFilter && <Check className="w-3 h-3 ml-1" />}
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-5 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] border-[#f4d093]/40 shadow-lg shadow-[#c99a5b]/20 font-bold'
                    : 'bg-[#150f0b] text-[#f3eae1]/70 border-white/5 hover:border-[#c99a5b]/30 hover:text-white'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-3xl border border-[#c99a5b]/20 max-w-md mx-auto">
            <Search className="w-12 h-12 text-[#c99a5b] mx-auto mb-3 opacity-50" />
            <h3 className="font-serif text-lg font-bold text-white mb-1">No Menu Items Found</h3>
            <p className="text-xs text-gray-400 mb-4">Try resetting your search or adjusting filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVegetarianFilter(false);
                setChefSpecialFilter(false);
              }}
              className="px-4 py-2 rounded-xl bg-[#c99a5b] text-[#0d0a07] text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image Container with Badges */}
                <div
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.isBestSeller && (
                      <span className="px-2.5 py-1 rounded-full bg-[#c99a5b] text-[#0d0a07] font-bold text-[10px] uppercase tracking-wider shadow-md flex items-center space-x-1">
                        <Flame className="w-3 h-3 fill-[#0d0a07]" />
                        <span>Best Seller</span>
                      </span>
                    )}
                    {item.isChefSpecial && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-900/90 text-[#f4d093] font-semibold text-[10px] uppercase tracking-wider border border-[#c99a5b]/40 backdrop-blur-md">
                        Chef's Choice
                      </span>
                    )}
                  </div>

                  {/* Prep Time */}
                  {item.prepTime && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-gray-300 text-[10px] flex items-center space-x-1 border border-white/10">
                      <Clock className="w-3 h-3 text-[#c99a5b]" />
                      <span>{item.prepTime}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    {/* Rating & Tag Pills */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1 text-xs">
                        <Star className="w-3.5 h-3.5 fill-[#c99a5b] text-[#c99a5b]" />
                        <span className="font-bold text-white">{item.rating}</span>
                        <span className="text-gray-400">({item.reviewsCount})</span>
                      </div>

                      <div className="flex items-center space-x-1">
                        {item.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-[10px] text-[#c99a5b] uppercase font-medium bg-[#281d14] px-2 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="font-serif text-xl font-bold text-white hover:text-[#c99a5b] transition-colors cursor-pointer mb-2 line-clamp-1"
                    >
                      {item.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#f3eae1]/70 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Price & Add Action */}
                  <div className="pt-4 border-t border-[#c99a5b]/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-gray-400 block tracking-wider">Price</span>
                      <span className="font-serif text-xl font-bold text-[#f4d093]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(item)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center space-x-1.5 shadow-md hover:shadow-[#c99a5b]/20 cursor-pointer"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Add</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
