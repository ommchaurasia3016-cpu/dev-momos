import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Users,
  Compass
} from 'lucide-react';
import { OUTLETS } from '../data/mockData';
import { OutletLocation } from '../types';

interface LocationsSectionProps {
  onOpenBooking: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenBooking }) => {
  const [selectedOutletId, setSelectedOutletId] = useState(OUTLETS[0].id);

  const activeOutlet = OUTLETS.find((o) => o.id === selectedOutletId) || OUTLETS[0];

  return (
    <section id="locations" className="py-20 bg-[#241A14] text-[#FDF6EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2A93B]/20 text-[#F2A93B] text-xs font-bold uppercase tracking-widest border border-[#F2A93B]/40">
            <Compass className="w-3.5 h-3.5" />
            <span>14 Outlets & Cloud Hubs</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            FIND A <span className="text-[#F2A93B]">DEV MOMO'S NEAR YOU</span>
          </h2>
          <p className="text-base text-[#FDF6EC]/75 font-medium">
            Visit our craft dine-in bistros or get steaming orders dispatched from our cloud kitchens.
          </p>
        </div>

        {/* Outlet Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {OUTLETS.map((outlet) => {
            const isSelected = selectedOutletId === outlet.id;
            return (
              <button
                key={outlet.id}
                onClick={() => setSelectedOutletId(outlet.id)}
                id={`outlet-btn-${outlet.id}`}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#C1272D] text-white border-[#C1272D] shadow-lg shadow-[#C1272D]/30 scale-105'
                    : 'bg-[#34241B] text-[#FDF6EC]/80 border-white/10 hover:border-[#F2A93B]/60 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#F2A93B]" />
                <span>{outlet.city} — {outlet.area}</span>
              </button>
            );
          })}
        </div>

        {/* Active Outlet Detail Showcase */}
        <div className="bg-[#34241B] rounded-3xl border-2 border-[#F2A93B]/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Outlet Information */}
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Live Status Badge */}
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A6B4D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4A6B4D]"></span>
                  </span>
                  <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                    OPEN NOW • DINE-IN & DELIVERY ACTIVE
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#F2A93B] uppercase tracking-widest">
                    {activeOutlet.city}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mt-1">
                    {activeOutlet.name}
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#FDF6EC]/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C1272D] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{activeOutlet.address}</p>
                      <p className="text-xs text-[#FDF6EC]/60">Landmark: {activeOutlet.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#F2A93B] shrink-0" />
                    <span>{activeOutlet.openingHours}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#4A6B4D] shrink-0" />
                    <span>{activeOutlet.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-[#F2A93B] shrink-0" />
                    <span>Seating Capacity: <strong>{activeOutlet.seatingCapacity} Foodies</strong></span>
                  </div>
                </div>

                {/* Amenities Chips */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-bold text-[#F2A93B] uppercase tracking-wider">
                    Outlet Amenities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeOutlet.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-xl bg-white/10 text-[11px] font-semibold text-[#FDF6EC] border border-white/10"
                      >
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={activeOutlet.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${activeOutlet.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Outlet</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="py-3 px-4 rounded-xl border border-[#F2A93B] text-[#F2A93B] hover:bg-[#F2A93B]/10 font-bold text-xs"
                >
                  Reserve Table Here
                </button>
              </div>

            </div>

            {/* Right: Interactive Ambience Photo & Map Preview */}
            <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto lg:h-full bg-black">
              <img
                src={activeOutlet.image}
                alt={activeOutlet.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="bg-[#241A14]/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#F2A93B]">Live Location Status</span>
                    <span className="text-[10px] text-emerald-400 font-extrabold">🟢 Peak Kitchen Flow</span>
                  </div>
                  <p className="text-xs text-white/80">
                    Tables filling fast for tonight. Walk-ins welcome or reserve online in 30 seconds.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
