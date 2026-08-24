import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Sparkles, Mail, CheckCircle2, Gift, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterSection: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;

    setIsSubscribed(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="py-16 bg-[#241A14] text-[#FDF6EC] relative overflow-hidden">
      
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C1272D]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#34241B] rounded-3xl border-2 border-[#F2A93B]/40 p-8 sm:p-12 shadow-2xl text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2A93B]/20 text-[#F2A93B] text-xs font-bold uppercase tracking-widest border border-[#F2A93B]/30">
            <Crown className="w-4 h-4 text-[#F2A93B]" />
            <span>VIP MOMO GUILD</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-white tracking-tight">
              JOIN THE SECRET <span className="text-[#F2A93B]">MOMO GUILD</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FDF6EC]/80 max-w-xl mx-auto font-medium">
              Get <strong>1 Free Portion of Kurkure Momos on your Birthday</strong>, plus weekly secret dish drops & exclusive 15% VIP member coupons.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 bg-[#241A14] rounded-2xl border border-emerald-500/40 text-center space-y-3 max-w-md mx-auto"
              >
                <div className="w-12 h-12 rounded-full bg-[#4A6B4D]/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg uppercase text-white">
                  WELCOME TO THE GUILD!
                </h4>
                <p className="text-xs text-[#FDF6EC]/80">
                  Your VIP Pass code is <strong className="text-[#F2A93B] font-mono">VIPMOMO15</strong>. Use it on your next direct order for flat 15% off!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your Email or Phone..."
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#241A14] border border-white/20 text-xs sm:text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F2A93B]"
                  />
                </div>

                <button
                  type="submit"
                  id="newsletter-subscribe-btn"
                  className="px-6 py-3.5 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#C1272D]/40 flex items-center justify-center gap-2 shrink-0 active:scale-95 transition-transform"
                >
                  <Sparkles className="w-4 h-4 text-[#F2A93B]" />
                  <span>Claim VIP Pass</span>
                </button>
              </form>
            )}
          </AnimatePresence>

          <p className="text-[11px] text-[#FDF6EC]/50">
            🔒 No spam ever. Only steaming hot momo rewards. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
};
