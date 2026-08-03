import React from 'react';
import { Clock, Calendar, Sparkles, MapPin, Phone } from 'lucide-react';
import { BUSINESS_HOURS, CAFE_INFO } from '../data/cafeData';

interface BusinessHoursProps {
  onOpenReserveModal: () => void;
}

export const BusinessHours: React.FC<BusinessHoursProps> = ({ onOpenReserveModal }) => {
  return (
    <section id="hours" className="py-24 bg-[#0d0a07] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Reserve CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c99a5b]">
              <Clock className="w-4 h-4 text-[#c99a5b]" />
              <span>Planning Your Visit</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Operating Hours & <br />
              <span className="gold-gradient-text italic font-normal">Table Reservations</span>
            </h2>

            <p className="text-[#f3eae1]/80 text-sm sm:text-base font-light leading-relaxed">
              We welcome you seven days a week for morning espresso, artisanal lunches, afternoon pastries, and romantic evening Italian dining.
            </p>

            {/* Live Open Badge */}
            <div className="p-4 rounded-2xl glass-panel border border-[#c99a5b]/30 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Current Status</span>
                <span className="font-serif text-lg font-bold text-white">
                  Open Now <span className="text-[#c99a5b] text-sm font-sans font-medium">• Closes 11:00 PM</span>
                </span>
              </div>
            </div>

            <button
              onClick={onOpenReserveModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c99a5b] to-[#a3763f] text-[#0d0a07] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-2xl flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table Online</span>
            </button>
          </div>

          {/* Right Column: Schedule Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#c99a5b]/30 shadow-2xl">
              
              <div className="flex items-center justify-between pb-6 border-b border-[#c99a5b]/20 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Weekly Schedule</h3>
                  <p className="text-xs text-gray-400 mt-0.5">34 Cafe Milano • Kitchen & Bar Hours</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#201811] border border-[#c99a5b]/30 text-xs text-[#c99a5b] font-medium">
                  Walk-ins Welcome
                </div>
              </div>

              <div className="space-y-3">
                {BUSINESS_HOURS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#16100b] hover:bg-[#201710] transition-colors border border-white/5"
                  >
                    <span className="text-sm font-medium text-white">{item.day}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-serif text-[#f4d093]">{item.hours}</span>
                      {item.isOpenToday && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400" title="Open Today" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Private Event / Holiday Note */}
              <div className="mt-6 pt-6 border-t border-[#c99a5b]/15 text-xs text-gray-400 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#c99a5b] shrink-0" />
                <span>Private event hosting and holiday catering reservations available upon inquiry.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
