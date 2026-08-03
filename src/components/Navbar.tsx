import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, Calendar, ShoppingCart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenReserveModal: () => void;
  onOpenOrderModal: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReserveModal, onOpenOrderModal, cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel py-3 shadow-2xl border-b border-[#c99a5b]/20'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Branding */}
          <a href="#hero" className="cursor-pointer shrink-0 flex items-center">
            <Logo variant="horizontal" size="nav" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-[#f3eae1]/85 hover:text-[#c99a5b] transition-colors relative group py-1 whitespace-nowrap tracking-wider uppercase text-[11px] sm:text-xs"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c99a5b] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions: "Open Now" Badge + Cart Icon + "Reserve Table" CTA */}
          <div className="hidden lg:flex items-center space-x-3 sm:space-x-4 shrink-0">
            {/* Minimal "Open Now" Status Badge */}
            <div className="flex items-center space-x-1.5 bg-[#1a140e]/90 border border-[#c99a5b]/30 px-2.5 py-1 rounded-full text-[11px] text-[#f3eae1]/90 whitespace-nowrap shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="font-semibold text-[#c99a5b]">Open Now</span>
            </div>

            {/* Premium Shopping Cart Icon Button */}
            <button
              onClick={onOpenOrderModal}
              className="relative p-2.5 rounded-full glass-panel border border-[#c99a5b]/40 text-[#f3eae1] hover:text-[#c99a5b] hover:border-[#c99a5b] hover:bg-[#201811] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(201,154,91,0.35)] transition-all duration-300 flex items-center justify-center cursor-pointer shrink-0 group"
              aria-label="View Shopping Cart"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#f3eae1] group-hover:text-[#c99a5b] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#c99a5b] via-[#e2be83] to-[#a3763f] text-[#0d0a07] font-bold text-[10px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-md border border-[#0d0a07]">
                {cartCount}
              </span>
            </button>

            {/* Premium Primary CTA: Reserve Table Button */}
            <button
              onClick={onOpenReserveModal}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-[#c99a5b] via-[#e2be83] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(201,154,91,0.4)] transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex items-center space-x-2 sm:space-x-2.5 lg:hidden">
            {/* Mobile Shopping Cart Icon */}
            <button
              onClick={onOpenOrderModal}
              className="relative p-2 rounded-full glass-panel border border-[#c99a5b]/40 text-[#f3eae1] hover:text-[#c99a5b] hover:border-[#c99a5b] hover:bg-[#201811] transition-all flex items-center justify-center cursor-pointer shrink-0"
              aria-label="View Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 text-[#f3eae1]" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-[9px] min-w-[16px] h-[16px] px-0.5 rounded-full flex items-center justify-center border border-[#0d0a07]">
                {cartCount}
              </span>
            </button>

            <button
              onClick={onOpenReserveModal}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-[11px] uppercase tracking-wider shadow-md shrink-0 flex items-center space-x-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Reserve</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1a140e] border border-[#c99a5b]/30 text-[#f3eae1] hover:text-[#c99a5b] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Animated Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-[#c99a5b]/20 px-5 sm:px-8 py-6 mt-2 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-[#c99a5b]/10">
            <div className="flex items-center space-x-2 text-xs text-[#c99a5b]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open Today until 11:00 PM</span>
            </div>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-[#c99a5b] flex items-center space-x-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-2.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-[#1a140e]/80 text-xs font-semibold uppercase tracking-wider text-[#f3eae1] hover:text-[#c99a5b] hover:bg-[#281d14] transition-colors border border-[#c99a5b]/10 text-center"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 rounded-full bg-[#201811] text-[#c99a5b] font-semibold text-xs uppercase tracking-wider border border-[#c99a5b]/40 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>View Shopping Cart ({cartCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserveModal();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#c99a5b] via-[#e2be83] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
