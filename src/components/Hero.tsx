import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Sparkles, 
  ArrowDown, 
  Clock, 
  Star, 
  ShieldCheck, 
  ShoppingBag, 
  CalendarDays, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { BRAND_TAGLINES } from '../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  const [activeTaglineIdx, setActiveTaglineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTaglineIdx((prev) => (prev + 1) % BRAND_TAGLINES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen bg-[#241A14] text-[#FDF6EC] pt-24 sm:pt-28 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Graphic & Food Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=2000&q=85"
          alt="Steaming fresh momos in bamboo steamer"
          className="w-full h-full object-cover object-center opacity-20 scale-105 transform filter brightness-75 contrast-125"
        />
        {/* Dark radial vignette & gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241A14] via-[#241A14]/85 to-[#241A14]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C1272D]/15 via-transparent to-transparent" />
      </div>

      {/* Decorative Floating Subtle Glows */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C1272D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F2A93B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography, Taglines & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Top Badge: Sleek uppercase pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2A93B]/15 border border-[#F2A93B]/30 text-xs font-bold uppercase tracking-wider text-[#F2A93B]"
            >
              <Flame className="w-4 h-4 text-[#C1272D]" />
              <span>DELHI’S #1 ARTISANAL MOMO BRAND</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B4D]"></span>
              <span className="text-[#FDF6EC]/80 font-semibold">Fresh Batches Steaming</span>
            </motion.div>

            {/* Oversized Signature Headline with Italic Display Style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[0.95] tracking-tight uppercase text-white drop-shadow-sm italic">
                STEAM, <br className="hidden sm:inline" />
                SPICE, & <br className="hidden sm:inline" />
                <span className="text-[#C1272D] not-italic inline-block font-black">
                  SOUL.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#F2A93B] font-bold tracking-tight">
                Wrapped with Obsession. Fired Up in Devil Chutney.
              </p>
            </motion.div>

            {/* Rotating Dynamic Taglines */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border-l-4 border-[#C1272D] p-4 rounded-r-2xl backdrop-blur-xs border border-white/5"
            >
              <div className="flex items-center gap-2 text-[11px] font-black text-[#F2A93B] uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Culinary Guarantee:</span>
              </div>
              <p className="text-sm sm:text-base text-[#FDF6EC] font-medium italic min-h-[1.5rem]">
                "{BRAND_TAGLINES[activeTaglineIdx]}"
              </p>
            </motion.div>

            {/* Subheadline description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#FDF6EC]/80 max-w-2xl leading-relaxed font-normal"
            >
              From paper-thin translucent steamed wrappers to crunch-packed Kurkure & clay-charred Tandoori momos — authentic Himalayan street recipes elevated for real food lovers.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#delivery"
                id="hero-order-online-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C1272D] hover:bg-[#A81F25] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#C1272D]/30 transition-all hover:scale-105 active:scale-95 group focus:outline-none"
              >
                <ShoppingBag className="w-4 h-4 text-[#F2A93B] group-hover:rotate-12 transition-transform" />
                <span>Order Online (Flat 20% OFF)</span>
              </a>

              <button
                onClick={onOpenBooking}
                id="hero-book-table-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-[#FDF6EC] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 focus:outline-none"
              >
                <CalendarDays className="w-4 h-4 text-[#F2A93B]" />
                <span>Book a Table</span>
              </button>

              <button
                onClick={onExploreMenu}
                id="hero-explore-menu-btn"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#F2A93B] hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span>View Full Menu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Micro Statistics Row with dividers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#C1272D] tracking-tight">4.8★</p>
                  <p className="text-[10px] uppercase font-bold text-[#FDF6EC]/60 tracking-widest">25,000+ Reviews</p>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">25 Mins</p>
                  <p className="text-[10px] uppercase font-bold text-[#FDF6EC]/60 tracking-widest">Express Dispatch</p>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#F2A93B] tracking-tight">500K+</p>
                  <p className="text-[10px] uppercase font-bold text-[#FDF6EC]/60 tracking-widest">Hand-Folded</p>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">100%</p>
                  <p className="text-[10px] uppercase font-bold text-[#FDF6EC]/60 tracking-widest">Fresh Dough</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Card with High Contrast Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Visual Frame with Steam and Glow */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Steamer Glow Background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C1272D]/30 to-[#F2A93B]/20 rounded-3xl blur-2xl opacity-50" />

              {/* Main Platter Card */}
              <div className="relative rounded-3xl bg-[#C1272D] p-5 sm:p-6 shadow-2xl overflow-hidden border border-white/10">
                
                {/* Subtle Dot Pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Inner White Container */}
                <div className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-lg border-t-6 border-[#F2A93B] text-[#241A14]">
                  
                  {/* Photo with steam overlay */}
                  <div className="relative rounded-xl overflow-hidden aspect-4/3 group mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1000&q=85"
                      alt="Authentic Darjeeling Momos in Emerald Ceramic on Polished Mahogany"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Visual Steam Simulation Overlay */}
                    <div className="absolute top-2 left-1/3 w-8 h-16 bg-white/20 blur-md rounded-full animate-steam pointer-events-none" />
                    <div className="absolute top-6 left-1/2 w-10 h-20 bg-white/15 blur-lg rounded-full animate-steam pointer-events-none" style={{ animationDelay: '1.2s' }} />

                    {/* Gradient shadow on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Best Seller Ribbon on top right */}
                    <div className="absolute top-3 right-3 bg-[#C1272D] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-[#F2A93B] text-[#F2A93B]" />
                      <span>#1 Bestseller</span>
                    </div>

                    {/* Bottom Image Caption */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[10px] font-black text-[#F2A93B] uppercase tracking-widest">Chef's Signature</span>
                        <h3 className="text-base font-bold text-white leading-tight">
                          Darjeeling Steamed Chicken
                        </h3>
                      </div>
                      <span className="text-base font-black text-[#F2A93B] bg-black/70 px-2.5 py-1 rounded-lg border border-white/20">
                        ₹189
                      </span>
                    </div>
                  </div>

                  {/* Micro Specs */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FDF6EC] border border-[#241A14]/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#4A6B4D]"></span>
                        <span className="font-bold text-[#241A14]">Pure Desi Ghee & Herbs</span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase text-[#C1272D]">0% Frozen</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FDF6EC] border border-[#241A14]/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C1272D]"></span>
                        <span className="font-bold text-[#241A14]">3-Chili Garlic Devil Dip</span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase text-emerald-700">Included</span>
                    </div>
                  </div>

                  {/* CTA inside card */}
                  <div className="mt-4 pt-3 border-t border-[#241A14]/10 flex items-center justify-between">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2"
                    >
                      <CalendarDays className="w-4 h-4 text-[#F2A93B]" />
                      <span>Instant Table Reservation</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Playful Floating Badge Sticker */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-[#F2A93B] text-[#241A14] px-3.5 py-2 rounded-2xl shadow-xl transform -rotate-6 border border-[#241A14]/20 hidden sm:block"
              >
                <p className="font-bold text-xs leading-tight text-center">
                  🥟 Hand-Folded at 6:00 AM
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Anchor */}
      <div className="relative z-10 text-center mt-6">
        <a
          href="#offers"
          aria-label="Scroll to offers"
          className="inline-flex flex-col items-center text-xs font-bold uppercase tracking-wider text-[#FDF6EC]/60 hover:text-[#F2A93B] transition-colors"
        >
          <span className="mb-1 text-[10px]">Scroll For Deals & Menu</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-[#F2A93B]" />
          </motion.div>
        </a>
      </div>

    </section>
  );
};
