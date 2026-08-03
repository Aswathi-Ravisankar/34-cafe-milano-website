import React from 'react';
import { Coffee, Utensils, Sparkles, Heart, Dog, Award, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/cafeData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#c99a5b]" />;
      case 'UtensilsCrossed': return <Utensils className="w-6 h-6 text-[#c99a5b]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#c99a5b]" />;
      case 'HeartHandshake': return <Heart className="w-6 h-6 text-[#c99a5b]" />;
      case 'Dog': return <Dog className="w-6 h-6 text-[#c99a5b]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#c99a5b]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#c99a5b]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0d0a07] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b] mb-3">
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
            <span>Why Guests Love Us</span>
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            The <span className="gold-gradient-text italic font-normal">34 Cafe Milano</span> Experience
          </h2>
          <p className="text-[#f3eae1]/80 text-sm sm:text-base font-light">
            Built on a commitment to uncompromising quality, authentic culinary craftsmanship, and welcoming hospitality.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-[#c99a5b]/20 hover:border-[#c99a5b]/50 transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#201811] border border-[#c99a5b]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {getIcon(feature.icon)}
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#f4d093] transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-[#f3eae1]/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
