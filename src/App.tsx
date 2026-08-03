import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedMenu } from './components/FeaturedMenu';
import { BestSellers } from './components/BestSellers';
import { Gallery } from './components/Gallery';
import { BrandIdentityShowcase } from './components/BrandIdentityShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { BusinessHours } from './components/BusinessHours';
import { ContactAndMap } from './components/ContactAndMap';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

import { ItemDetailModal } from './components/ItemDetailModal';
import { ReservationModal } from './components/ReservationModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { MenuItem } from './types';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [orderDrawerOpen, setOrderDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (item: MenuItem, quantity: number = 1, options: string[] = []) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { item, quantity, options }];
    });
    showToast(`Added "${item.name}" to order!`);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQty } : ci))
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0d0a07] text-[#f3eae1] font-sans selection:bg-[#c99a5b] selection:text-[#0d0a07]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-[#c99a5b] px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs font-semibold text-white animate-in slide-in-from-bottom duration-300">
          <div className="w-7 h-7 rounded-full bg-[#c99a5b] text-[#0d0a07] flex items-center justify-center">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setOrderDrawerOpen(true)}
            className="ml-2 text-[#f4d093] underline hover:text-white flex items-center space-x-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>View Tray</span>
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        onOpenReserveModal={() => setReserveModalOpen(true)}
        onOpenOrderModal={() => setOrderDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Hero Section */}
      <Hero
        onExploreMenu={scrollToMenu}
        onOpenReserveModal={() => setReserveModalOpen(true)}
      />

      {/* About Story */}
      <About />

      {/* Featured Menu */}
      <FeaturedMenu
        onSelectItem={(item) => setSelectedItem(item)}
        onAddToCart={(item) => handleAddToCart(item, 1)}
      />

      {/* Best Sellers */}
      <BestSellers
        onAddToCart={(item) => handleAddToCart(item, 1)}
        onSelectItem={(item) => setSelectedItem(item)}
      />

      {/* Gallery */}
      <Gallery />

      {/* Brand Identity & Logo Showcase */}
      <BrandIdentityShowcase />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Business Hours */}
      <BusinessHours
        onOpenReserveModal={() => setReserveModalOpen(true)}
      />

      {/* Contact & Google Maps */}
      <ContactAndMap />

      {/* Call To Action */}
      <CallToAction
        onExploreMenu={scrollToMenu}
        onOpenReserveModal={() => setReserveModalOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={reserveModalOpen}
        onClose={() => setReserveModalOpen(false)}
      />

      {/* Online Order Drawer */}
      <OrderDrawer
        isOpen={orderDrawerOpen}
        onClose={() => setOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
