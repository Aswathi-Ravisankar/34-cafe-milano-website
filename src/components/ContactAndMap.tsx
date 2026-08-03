import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, ExternalLink, Navigation, Send, CheckCircle, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { ContactForm } from '../types';

export const ContactAndMap: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Reservation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry / Reservation',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0805] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b] mb-3">
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
            <span>Get In Touch & Location</span>
            <span className="w-8 h-0.5 bg-[#c99a5b]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Visit <span className="gold-gradient-text italic font-normal">34 Cafe Milano</span>
          </h2>
          <p className="text-[#f3eae1]/80 text-sm sm:text-base font-light">
            We look forward to serving you. Contact us for table bookings, private events, or catering inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-8 border border-[#c99a5b]/25 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Contact Details</h3>
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-[#201811] border border-[#c99a5b]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#c99a5b]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Address</h4>
                  <p className="text-sm text-white font-medium mt-0.5">{CAFE_INFO.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-[#201811] border border-[#c99a5b]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#c99a5b]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Phone</h4>
                  <a href={`tel:${CAFE_INFO.phone}`} className="text-sm text-white font-medium hover:text-[#c99a5b] transition-colors mt-0.5 block">
                    {CAFE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-[#201811] border border-[#c99a5b]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#c99a5b]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Email</h4>
                  <a href={`mailto:${CAFE_INFO.email}`} className="text-sm text-white font-medium hover:text-[#c99a5b] transition-colors mt-0.5 block">
                    {CAFE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-[#201811] border border-[#c99a5b]/30 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-[#c99a5b]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Instagram</h4>
                  <a href={CAFE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#c99a5b] font-medium hover:underline mt-0.5 block">
                    {CAFE_INFO.instagram}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#c99a5b]/15 flex flex-wrap gap-3">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={CAFE_INFO.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#1d1610] text-[#c99a5b] border border-[#c99a5b]/30 text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 border border-[#c99a5b]/25">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-xs text-gray-400 mb-6">Fill in the form below and our team will get back to you promptly.</p>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-950/40 border border-emerald-500/40 rounded-2xl animate-in zoom-in-95 duration-200">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-serif text-xl font-bold text-white mb-1">Message Received!</h4>
                  <p className="text-xs text-emerald-200 mb-4">
                    Grazie! Thank you for reaching out to 34 Cafe Milano. We have received your message and will reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-[#c99a5b] text-[#0d0a07] text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Gianna Rossi"
                        className="w-full bg-[#140e0a] border border-[#c99a5b]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="gianna@example.com"
                        className="w-full bg-[#140e0a] border border-[#c99a5b]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#140e0a] border border-[#c99a5b]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#140e0a] border border-[#c99a5b]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c99a5b]"
                      >
                        <option>Table Reservation Inquiry</option>
                        <option>Private Event / Catering</option>
                        <option>General Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-300 mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you today?"
                      className="w-full bg-[#140e0a] border border-[#c99a5b]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c99a5b]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-xl cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Interactive Map Card Representation */}
        <div id="location" className="rounded-3xl overflow-hidden glass-panel border border-[#c99a5b]/30 shadow-2xl relative">
          <div className="p-4 bg-[#140e0a] border-b border-[#c99a5b]/20 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#c99a5b]" />
              <span className="font-serif font-bold text-white text-base">34 Cafe Milano Location Map</span>
            </div>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#c99a5b] font-semibold hover:underline flex items-center space-x-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-80 bg-[#1a140e] flex items-center justify-center text-center p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#c99a5b_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10 glass-panel p-8 rounded-3xl border border-[#c99a5b]/40 max-w-lg shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-[#c99a5b] text-[#0d0a07] font-serif font-bold text-xl flex items-center justify-center mx-auto mb-3">
                34
              </div>
              <h4 className="font-serif text-2xl font-bold text-white mb-1">34 Cafe Milano</h4>
              <p className="text-xs text-gray-300 mb-4">{CAFE_INFO.address}</p>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#c99a5b] text-[#0d0a07] font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Launch Turn-by-Turn Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
