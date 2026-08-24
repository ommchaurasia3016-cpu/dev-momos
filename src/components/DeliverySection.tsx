import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Zap, 
  ShieldCheck,
  Search
} from 'lucide-react';

interface DeliverySectionProps {
  onOpenCart: () => void;
  onSelectMenuCategory?: (cat: string) => void;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({ onOpenCart, onSelectMenuCategory }) => {
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<{ checked: boolean; time: string; hub: string } | null>(null);

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) {
      alert('Please enter a valid 6-digit postal pincode.');
      return;
    }

    // Realistic simulation of hub radius check
    const times = ['22-28 mins', '25-30 mins', '28-35 mins'];
    const hubs = ['Connaught Place Central Hub', 'Indiranagar Craft Kitchen', 'Bandra West Cloud Kitchen', 'Koregaon Park Hub'];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomHub = hubs[Math.floor(Math.random() * hubs.length)];

    setPincodeStatus({
      checked: true,
      time: randomTime,
      hub: randomHub
    });
  };

  return (
    <section id="delivery" className="py-20 bg-[#FDF6EC] text-[#241A14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C1272D]/10 text-[#C1272D] text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 fill-[#C1272D]" />
            <span>Fast Dispatch • Thermal Insulated Packing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#241A14]">
            ORDER ONLINE & <span className="text-[#C1272D]">DELIVERY HUBS</span>
          </h2>
          <p className="text-base text-[#241A14]/75 font-medium">
            Order directly from DEV MOMO'S for best prices and exclusive free dip jars, or via your favorite food apps.
          </p>
        </div>

        {/* 3 Delivery Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Card 1: Direct Express (Featured Flagship) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#241A14] text-[#FDF6EC] rounded-3xl p-6 sm:p-8 border-2 border-[#F2A93B] shadow-2xl flex flex-col justify-between overflow-hidden md:-translate-y-2"
          >
            <div className="absolute top-0 right-0 bg-[#F2A93B] text-[#241A14] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              ★ BEST VALUE (0% MARKUP)
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#C1272D] flex items-center justify-center text-white">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase text-white">
                    DEV MOMO'S DIRECT
                  </h3>
                  <p className="text-xs text-[#F2A93B] font-semibold">
                    Our Official Kitchen Engine
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>15–20% Cheaper than third-party aggregators</span>
                </div>
                <div className="flex items-center gap-2 text-[#F2A93B] font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Free 250g Red Devil Chutney on ₹349+</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Direct Priority Kitchen Dispatch</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#FDF6EC]/70 pt-1">
                <span>Avg Dispatch: <strong>18 Mins</strong></span>
                <span>Min Order: <strong>₹149</strong></span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenCart}
                id="order-direct-channel-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-[#C1272D]/40 flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4 text-[#F2A93B]" />
                <span>Order Direct Now (Save Extra)</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Zomato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#241A14]/10 shadow-sm hover:shadow-xl hover:border-red-400 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E23744] text-white flex items-center justify-center font-display text-lg">
                    Z
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase text-[#E23744]">
                      ZOMATO
                    </h3>
                    <p className="text-xs text-[#241A14]/60">Food Delivery & Dining</p>
                  </div>
                </div>

                <span className="bg-[#24963F] text-white text-xs font-extrabold px-2.5 py-1 rounded-lg">
                  4.6 ★
                </span>
              </div>

              <p className="text-xs text-[#241A14]/80 leading-relaxed">
                Order DEV MOMO'S on Zomato across all 14 outlet locations with live tracking and Zomato Gold benefits.
              </p>

              <div className="p-3 rounded-2xl bg-[#FDF6EC] border border-[#241A14]/5 space-y-1 text-xs">
                <p><strong>Live Status:</strong> 🟢 Delivering Now</p>
                <p><strong>Zomato Gold:</strong> Free Delivery Eligible</p>
                <p><strong>Avg Delivery:</strong> 25-35 Mins</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noreferrer"
                id="zomato-order-btn"
                className="w-full py-3 px-4 rounded-xl bg-[#E23744] hover:bg-[#c92e3a] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Swiggy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#241A14]/10 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FC8019] text-white flex items-center justify-center font-display text-lg">
                    S
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase text-[#FC8019]">
                      SWIGGY
                    </h3>
                    <p className="text-xs text-[#241A14]/60">Fast Food Delivery</p>
                  </div>
                </div>

                <span className="bg-[#48C479] text-white text-xs font-extrabold px-2.5 py-1 rounded-lg">
                  4.5 ★
                </span>
              </div>

              <p className="text-xs text-[#241A14]/80 leading-relaxed">
                Enjoy Swiggy One free delivery and lightning-fast kitchen pickups with thermal steam preservation.
              </p>

              <div className="p-3 rounded-2xl bg-[#FDF6EC] border border-[#241A14]/5 space-y-1 text-xs">
                <p><strong>Live Status:</strong> 🟢 Open for Delivery</p>
                <p><strong>Swiggy One:</strong> Free Delivery & Extra Offers</p>
                <p><strong>Avg Delivery:</strong> 22-30 Mins</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noreferrer"
                id="swiggy-order-btn"
                className="w-full py-3 px-4 rounded-xl bg-[#FC8019] hover:bg-[#e06f12] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Live Delivery Radius & Pincode Checker Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#241A14]/10 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-[#241A14] flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-5 h-5 text-[#C1272D]" />
                <span>Check Delivery Time to Your Area</span>
              </h4>
              <p className="text-xs text-[#241A14]/70">
                Enter your 6-digit postal code to check live delivery feasibility.
              </p>
            </div>

            <form onSubmit={handleCheckPincode} className="w-full sm:w-auto flex gap-2">
              <input
                type="text"
                maxLength={6}
                placeholder="e.g. 110001"
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                className="text-xs p-3 rounded-xl bg-[#FDF6EC] border border-[#241A14]/15 outline-none font-bold tracking-wider w-36 text-center"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-[#C1272D] text-white text-xs font-bold hover:bg-[#A81F25] active:scale-95 transition-transform"
              >
                Check
              </button>
            </form>

          </div>

          {pincodeStatus && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 pt-4 border-t border-[#241A14]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-2xl border border-emerald-200"
            >
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Deliverable to Pincode {pincode}! Fulfilling from <strong>{pincodeStatus.hub}</strong>.</span>
              </div>
              <div className="flex items-center gap-1 font-extrabold text-[#C1272D]">
                <Clock className="w-3.5 h-3.5" />
                <span>ETA: {pincodeStatus.time}</span>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};
