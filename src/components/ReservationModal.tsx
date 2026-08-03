import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, Send } from 'lucide-react';
import { ReservationForm } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingPreference: 'indoor',
    specialRequest: ''
  });

  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
      setRefId(`MILANO-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-xl w-full glass-panel rounded-3xl p-6 sm:p-8 border border-[#c99a5b]/40 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#c99a5b] transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-white">Table Reserved!</h3>
            
            <p className="text-xs text-emerald-300 max-w-md mx-auto">
              Grazie, <strong className="text-white">{form.name}</strong>! Your table at 34 Cafe Milano has been confirmed.
            </p>

            <div className="bg-[#140e0a] p-4 rounded-2xl border border-[#c99a5b]/30 max-w-sm mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-gray-400">Confirmation Ref:</span>
                <span className="font-mono font-bold text-[#f4d093]">{refId}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-gray-400">Date & Time:</span>
                <span className="text-white font-medium">{form.date} at {form.time}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-gray-400">Party Size:</span>
                <span className="text-white font-medium">{form.guests} Guests ({form.seatingPreference})</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400">
              A confirmation email has been sent to <span className="text-white">{form.email}</span>. We hold tables for 15 minutes past reservation time.
            </p>

            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 rounded-xl bg-[#c99a5b] text-[#0d0a07] font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#c99a5b] mb-1">
              <Sparkles className="w-4 h-4 text-[#c99a5b]" />
              <span>Table Reservation</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-1">
              Book a Table at 34 Cafe Milano
            </h3>
            <p className="text-xs text-gray-400 mb-6">Select your date, party size, and seating preference.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c99a5b]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Time Slot *</label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c99a5b]"
                  >
                    <option value="09:00">09:00 AM (Breakfast)</option>
                    <option value="11:30">11:30 AM (Brunch)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="15:30">03:30 PM (Afternoon Coffee)</option>
                    <option value="18:30">06:30 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner Prime)</option>
                    <option value="20:30">08:30 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Guests & Seating */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Party Size *</label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) })}
                    className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c99a5b]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Seating Area</label>
                  <select
                    value={form.seatingPreference}
                    onChange={(e) => setForm({ ...form, seatingPreference: e.target.value as any })}
                    className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c99a5b]"
                  >
                    <option value="indoor">Indoor Milano Lounge</option>
                    <option value="patio">Lush Outdoor Patio</option>
                    <option value="bar">Espresso Bar High-Tops</option>
                  </select>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lorenzo De Luca"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="lorenzo@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Special Occasion / Request</label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday celebration, anniversary, high chair needed"
                    value={form.specialRequest}
                    onChange={(e) => setForm({ ...form, specialRequest: e.target.value })}
                    className="w-full bg-[#140e0a] border border-[#c99a5b]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-xl cursor-pointer"
              >
                {loading ? 'Confirming Reservation...' : 'Confirm Table Booking'}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
