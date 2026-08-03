import React, { useState } from 'react';
import { Instagram, MapPin, Phone, Mail, ExternalLink, Send, CheckCircle, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#070503] text-[#f3eae1]/80 pt-16 pb-12 border-t border-[#c99a5b]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <Logo variant="horizontal" size="md" />
            </a>

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              An authentic Italian specialty coffee and bistro destination. Serving 100% single-origin espresso, fresh handcrafted pastas, wood-fired paninis, and artisanal tiramisu in an elegant atmosphere.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#18120d] border border-[#c99a5b]/30 flex items-center justify-center text-[#c99a5b] hover:bg-[#c99a5b] hover:text-[#0d0a07] transition-all"
                title="Instagram @34cafemilano"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={CAFE_INFO.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#18120d] border border-[#c99a5b]/30 flex items-center justify-center text-[#c99a5b] hover:bg-[#c99a5b] hover:text-[#0d0a07] transition-all"
                title="Google Business Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#c99a5b] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#c99a5b] transition-colors">About Story</a></li>
              <li><a href="#menu" className="hover:text-[#c99a5b] transition-colors">Menu Selection</a></li>
              <li><a href="#bestsellers" className="hover:text-[#c99a5b] transition-colors">Best Sellers</a></li>
              <li><a href="#gallery" className="hover:text-[#c99a5b] transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#c99a5b] transition-colors">Google Reviews</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Operating Hours</h4>
            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Mon - Thu:</span>
                <span className="text-white">08:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Fri - Sat:</span>
                <span className="text-white">08:00 AM - 11:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Sunday:</span>
                <span className="text-white">08:30 AM - 10:30 PM</span>
              </div>
              <p className="text-[10px] text-[#c99a5b] pt-1">Kitchen closes 30 mins prior to closing.</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Milano Newsletter</h4>
            <p className="text-xs text-gray-400">Subscribe for seasonal menu updates, tasting events, and special offers.</p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Grazie! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#120d09] border border-[#c99a5b]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c99a5b]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center space-x-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} 34 Cafe Milano. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-300 cursor-pointer">Cookie Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
