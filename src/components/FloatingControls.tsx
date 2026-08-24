import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  CalendarDays, 
  MessageSquare, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';

interface FloatingControlsProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenBooking: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  cartItems,
  onOpenCart,
  onOpenBooking
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Quick Connect (Right side) */}
      <aside aria-label="Quick Actions" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-full bg-[#241A14] text-white shadow-xl hover:bg-[#34241B] border border-white/20 transition-transform active:scale-90"
            >
              <ArrowUp className="w-4 h-4 text-[#F2A93B]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919871044220?text=Hello%20DEV%20MOMO%27S!%20I%20want%20to%20order%20or%20ask%20a%20question."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95 border-2 border-white"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden md:inline text-xs font-extrabold pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <aside aria-label="Mobile Navigation Bar" className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-[#241A14]/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          
          {/* Book Table */}
          <button
            onClick={onOpenBooking}
            className="flex-1 py-2.5 px-3 rounded-xl border border-[#F2A93B]/60 text-[#F2A93B] font-bold text-xs flex items-center justify-center gap-1.5 active:bg-white/5"
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>

          {/* Cart / Order */}
          <button
            onClick={onOpenCart}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#C1272D] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#F2A93B]" />
            <span>{totalCount > 0 ? `Cart (${totalCount})` : 'Order Now'}</span>
          </button>

        </div>
      </aside>
    </>
  );
};
