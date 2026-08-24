import React from 'react';
import { Flame, Sparkles, Tag, Gift, Zap } from 'lucide-react';

interface OffersTickerProps {
  onSelectCoupon?: (code: string) => void;
}

export const OffersTicker: React.FC<OffersTickerProps> = ({ onSelectCoupon }) => {
  const tickerItems = [
    { text: "FLAT 20% OFF FIRST DIRECT ORDER", code: "FIRSTMOMO", icon: Tag, highlight: "USE CODE: FIRSTMOMO" },
    { text: "BUY 1 GET 1 — FRIED & KURKURE MOMOS", code: "BOGOMOMO", icon: Sparkles, highlight: "MON TO THU SPECIAL" },
    { text: "FREE DELIVERY ON ORDERS ABOVE ₹299", code: "FREEDEL", icon: Zap, highlight: "HOT & FAST DISPATCH" },
    { text: "FREE RED GARLIC DEVIL CHUTNEY JAR (250G)", code: "FREEDIP", icon: Gift, highlight: "ON ORDERS ₹349+" },
    { text: "TRY NEW BELGIAN DARK CHOCOLATE LAVA MOMOS", code: "", icon: Flame, highlight: "DESSERT SHOWSTOPPER" },
    { text: "PARTY CRATES: FLAT ₹150 OFF ON 16-PC PLATTERS", code: "PARTY150", icon: Sparkles, highlight: "CODE: PARTY150" }
  ];

  return (
    <div 
      id="offers-ticker"
      className="relative bg-[#C1272D] text-white py-3 overflow-hidden border-y-2 border-[#F2A93B]/40 shadow-inner z-20"
    >
      <div className="flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-bold tracking-wider uppercase">
          {/* First loop */}
          {tickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={`t1-${idx}`} 
                onClick={() => item.code && onSelectCoupon?.(item.code)}
                className="inline-flex items-center gap-3 cursor-pointer hover:text-[#F2A93B] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#241A14]/30 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-[#F2A93B]" />
                </div>
                <span>{item.text}</span>
                <span className="bg-[#F2A93B] text-[#241A14] text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                  {item.highlight}
                </span>
                <span className="text-[#F2A93B]/60">•</span>
              </div>
            );
          })}

          {/* Second identical loop for infinite continuous marquee */}
          {tickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={`t2-${idx}`} 
                onClick={() => item.code && onSelectCoupon?.(item.code)}
                className="inline-flex items-center gap-3 cursor-pointer hover:text-[#F2A93B] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#241A14]/30 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-[#F2A93B]" />
                </div>
                <span>{item.text}</span>
                <span className="bg-[#F2A93B] text-[#241A14] text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                  {item.highlight}
                </span>
                <span className="text-[#F2A93B]/60">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
