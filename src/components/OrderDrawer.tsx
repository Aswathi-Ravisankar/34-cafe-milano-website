import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingCart, CheckCircle, ArrowRight, Clock, Coffee } from 'lucide-react';
import { MenuItem } from '../types';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  options: string[];
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const subtotal = cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax + (fulfillment === 'delivery' ? 4.99 : 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
      setOrderRef(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
      onClearCart();
    }, 1200);
  };

  const scrollToMenu = () => {
    onClose();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-in fade-in duration-300">
      <div className="relative w-full max-w-md h-full glass-panel border-l border-[#c99a5b]/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#c99a5b]/20">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-full bg-[#1a140e] border border-[#c99a5b]/30 text-[#c99a5b]">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white leading-tight">Shopping Cart</h3>
              <p className="text-[11px] text-[#c99a5b] font-medium uppercase tracking-wider">34 Cafe Milano</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/40 text-gray-400 hover:text-white hover:bg-[#2a1d14] transition-colors cursor-pointer"
            aria-label="Close Shopping Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 py-6 overflow-y-auto space-y-4">
          
          {completed ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-white">Order Confirmed!</h4>
              <p className="text-xs text-emerald-300 max-w-xs mx-auto">
                Grazie! Your order has been placed successfully at 34 Cafe Milano.
              </p>

              <div className="bg-[#140e0a] p-4 rounded-2xl border border-[#c99a5b]/30 text-left space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-gray-400">Order Ref:</span>
                  <span className="font-mono font-bold text-[#f4d093]">{orderRef}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-gray-400">Fulfillment:</span>
                  <span className="text-white capitalize">{fulfillment}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-gray-400">Estimated Ready:</span>
                  <span className="text-white font-medium flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#c99a5b]" />
                    <span>{fulfillment === 'pickup' ? '15 - 20 mins' : '30 - 40 mins'}</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCompleted(false);
                  onClose();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c99a5b] via-[#e2be83] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : cart.length === 0 ? (
            /* Elegant Empty Cart State */
            <div className="text-center py-16 px-4 space-y-5 my-auto flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#1a140e] border border-[#c99a5b]/40 flex items-center justify-center mx-auto text-[#c99a5b] shadow-[0_0_30px_rgba(201,154,91,0.2)]">
                  <ShoppingCart className="w-9 h-9 stroke-[1.5]" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#2a1d14] border border-[#c99a5b]/30 flex items-center justify-center text-[#c99a5b]">
                  <Coffee className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="space-y-2 max-w-xs mx-auto">
                <h4 className="font-serif text-lg font-bold text-white">Your Cart is Empty</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your cart is empty. Start exploring our handcrafted menu.
                </p>
              </div>

              <button
                onClick={scrollToMenu}
                className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c99a5b] via-[#e2be83] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-xl cursor-pointer flex items-center space-x-2"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Fulfillment Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#120d09] rounded-xl border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setFulfillment('pickup')}
                  className={`py-2 rounded-lg font-bold transition-all cursor-pointer ${
                    fulfillment === 'pickup'
                      ? 'bg-[#c99a5b] text-[#0d0a07]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Store Pickup (15m)
                </button>
                <button
                  type="button"
                  onClick={() => setFulfillment('delivery')}
                  className={`py-2 rounded-lg font-bold transition-all cursor-pointer ${
                    fulfillment === 'delivery'
                      ? 'bg-[#c99a5b] text-[#0d0a07]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Local Delivery (+$4.99)
                </button>
              </div>

              {/* Items List */}
              {cart.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-[#140e0a] border border-[#c99a5b]/20 hover:border-[#c99a5b]/40 transition-colors"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm font-bold text-white truncate">
                      {cartItem.item.name}
                    </h5>
                    <span className="text-xs text-[#f4d093] font-serif font-bold block mt-0.5">
                      ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                    </span>
                    {cartItem.options.length > 0 && (
                      <p className="text-[10px] text-gray-400 truncate mt-0.5">
                        {cartItem.options.join(', ')}
                      </p>
                    )}
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-lg border border-white/10 shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                      className="text-gray-300 hover:text-[#c99a5b] p-0.5 cursor-pointer"
                      title="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-white min-w-[14px] text-center">{cartItem.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                      className="text-gray-300 hover:text-[#c99a5b] p-0.5 cursor-pointer"
                      title="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(cartItem.item.id)}
                    className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* Footer Checkout Summary */}
        {!completed && cart.length > 0 && (
          <div className="pt-4 border-t border-[#c99a5b]/20 space-y-3 shrink-0">
            
            <div className="space-y-1.5 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {fulfillment === 'delivery' && (
                <div className="flex justify-between text-[#c99a5b]">
                  <span>Delivery Fee</span>
                  <span>$4.99</span>
                </div>
              )}
              <div className="flex justify-between font-serif text-base font-bold text-white pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-[#f4d093]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={scrollToMenu}
                className="py-3 px-4 rounded-full glass-panel border border-[#c99a5b]/30 text-[#f3eae1] font-semibold text-xs uppercase tracking-wider hover:border-[#c99a5b] hover:bg-[#201811] transition-all cursor-pointer text-center truncate"
              >
                Continue Shopping
              </button>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="py-3 px-4 rounded-full bg-gradient-to-r from-[#c99a5b] via-[#e2be83] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center space-x-1.5 shadow-xl cursor-pointer truncate"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Checkout (${total.toFixed(2)})</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </>
                )}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
