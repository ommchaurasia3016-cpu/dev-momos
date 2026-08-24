import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tag, Sparkles, Copy, Check, Scissors, Gift, Clock, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Coupon } from '../types';
import { COUPONS } from '../data/mockData';

interface OffersSectionProps {
  onApplyCoupon: (coupon: Coupon) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onApplyCoupon }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setCopiedCode(coupon.code);
    onApplyCoupon(coupon);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section id="offers" className="py-20 bg-[#FDF6EC] text-[#241A14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C1272D]/10 text-[#C1272D] text-xs font-bold uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5 fill-[#C1272D]" />
            <span>Exclusive Promo Codes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#241A14]">
            DEALS & <span className="text-[#C1272D]">TICKET OFFERS</span>
          </h2>
          <p className="text-base text-[#241A14]/75 font-medium">
            Copy voucher codes to unlock instant discounts on direct online orders.
          </p>
        </div>

        {/* Voucher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COUPONS.map((coupon, idx) => {
            const isCopied = copiedCode === coupon.code;

            return (
              <motion.div
                key={coupon.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-white rounded-3xl border-2 border-dashed border-[#241A14]/20 hover:border-[#C1272D] transition-all duration-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg group overflow-hidden"
              >
                {/* Popular Tag */}
                {coupon.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#F2A93B] text-[#241A14] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl shadow-xs">
                    ★ MOST POPULAR
                  </div>
                )}

                {/* Top Voucher Cutout Dents */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FDF6EC] border-r-2 border-dashed border-[#241A14]/20" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FDF6EC] border-l-2 border-dashed border-[#241A14]/20" />

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#C1272D]">
                    <Scissors className="w-4 h-4" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest">
                      PROMO VOUCHER
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#C1272D] uppercase">
                      {coupon.discountText}
                    </h3>
                    <h4 className="text-sm font-bold text-[#241A14] leading-snug">
                      {coupon.title}
                    </h4>
                  </div>

                  <p className="text-xs text-[#241A14]/70 leading-relaxed">
                    {coupon.terms}
                  </p>
                </div>

                {/* Bottom Code & Copy Action */}
                <div className="pt-5 mt-4 border-t border-[#241A14]/10 space-y-3">
                  <div className="flex items-center justify-between bg-[#FDF6EC] p-2.5 rounded-2xl border border-[#241A14]/15">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-[#F2A93B]" />
                      <span className="font-mono text-sm font-extrabold tracking-wider text-[#241A14]">
                        {coupon.code}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyCode(coupon)}
                      id={`copy-coupon-${coupon.code}`}
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                        isCopied
                          ? 'bg-[#4A6B4D] text-white'
                          : 'bg-[#C1272D] text-white hover:bg-[#A81F25]'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>APPLIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#241A14]/50">
                    <span>Min Order: ₹{coupon.minOrder}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {coupon.validUntil}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
