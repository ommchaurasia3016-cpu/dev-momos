import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  ShoppingBag, 
  CalendarDays, 
  Menu as MenuIcon, 
  X, 
  Phone, 
  ChevronRight, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenBooking: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onOpenCart,
  onOpenBooking,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Deals', href: '#offers' },
    { label: 'Our Story', href: '#about' },
    { label: 'Book Table', href: '#book-table' },
    { label: 'Order Online', href: '#delivery' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Outlets', href: '#locations' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDF6EC]/90 backdrop-blur-md shadow-sm py-3 border-b border-[#241A14]/10 text-[#241A14]'
            : 'bg-transparent py-4 text-[#FDF6EC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="relative w-9 h-9 rounded-xl bg-[#C1272D] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 border border-[#F2A93B]/40">
              <Flame className="w-5 h-5 text-[#F2A93B]" />
              {/* Steaming dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A6B4D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4A6B4D]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`font-display tracking-wider text-xl uppercase transition-colors ${
                  isScrolled ? 'text-[#241A14]' : 'text-white'
                }`}>
                  DEV <span className="text-[#C1272D]">MOMO'S</span>
                </span>
              </div>
              <span className={`text-[9px] tracking-widest uppercase font-bold flex items-center gap-1 ${
                isScrolled ? 'text-[#241A14]/60' : 'text-[#FDF6EC]/80'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B4D]"></span>
                Himalayan Street Fuel
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#C1272D] text-white shadow-sm'
                      : isScrolled
                      ? 'text-[#241A14]/80 hover:text-[#C1272D] hover:bg-[#241A14]/5'
                      : 'text-[#FDF6EC]/90 hover:text-[#F2A93B] hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Table Booking CTA (desktop) */}
            <button
              onClick={onOpenBooking}
              id="nav-book-table-btn"
              className={`hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all focus:outline-none ${
                isScrolled
                  ? 'border-[#241A14]/20 text-[#241A14] hover:border-[#241A14] hover:bg-[#241A14]/5'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5 text-[#F2A93B]" />
              <span>Book Table</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              id="nav-cart-btn"
              aria-label="View Cart"
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold border transition-all active:scale-95 focus:outline-none ${
                isScrolled
                  ? 'bg-white border-[#241A14]/15 text-[#241A14] shadow-xs hover:bg-[#FDF6EC]'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#F2A93B]" />
                {totalCartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2.5 bg-[#C1272D] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs"
                  >
                    {totalCartCount}
                  </motion.span>
                )}
              </div>
              <span className="hidden sm:inline">
                {totalCartCount > 0 ? `₹${cartSubtotal}` : 'Cart'}
              </span>
            </button>

            {/* Order Online CTA */}
            <a
              href="#delivery"
              id="nav-order-online-btn"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-[#C1272D] hover:bg-[#A81F25] text-white shadow-md shadow-[#C1272D]/25 transition-all hover:scale-105 active:scale-95 focus:outline-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2A93B]" />
              <span>Order Online</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className={`lg:hidden p-2 rounded-xl border focus:outline-none transition-colors ${
                isScrolled
                  ? 'bg-white border-[#241A14]/10 text-[#241A14]'
                  : 'bg-white/10 border-white/20 text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pt-20 bg-[#241A14] text-[#FDF6EC] px-6 pb-8 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4A6B4D] animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-wide text-[#F2A93B]">ALL OUTLETS OPEN NOW</span>
                </div>
                <span className="text-xs text-[#FDF6EC]/60">Delivery in ~25 mins</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold text-[#FDF6EC] hover:bg-white/10 active:bg-[#C1272D] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#F2A93B]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl border border-[#F2A93B] text-[#F2A93B] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#F2A93B]/10"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book a Table (Free Instant Confirmation)</span>
              </button>

              <div className="flex gap-2">
                <a
                  href="tel:+919871044220"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#4A6B4D]" />
                  <span>Call Hotline</span>
                </a>
                <a
                  href="#locations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#F2A93B]" />
                  <span>14 Outlets</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
