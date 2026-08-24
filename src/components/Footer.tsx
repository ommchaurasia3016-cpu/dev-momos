import React from 'react';
import { 
  Flame, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18110D] text-[#FDF6EC] pt-16 pb-12 border-t-2 border-[#F2A93B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#C1272D] flex items-center justify-center border border-[#F2A93B]/50 shadow-md">
                <Flame className="w-6 h-6 text-[#F2A93B]" />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-white uppercase">
                  DEV <span className="text-[#F2A93B]">MOMO'S</span>
                </span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#FDF6EC]/60">
                  ESTD. 2019 • DESI HIMALAYAN STREET FOOD
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FDF6EC]/70 leading-relaxed max-w-sm">
              Hand-folded translucent momos, fiery Dalle Khursani chili garlic chutney, and charcoal-charred tandoori goodness. Freshly rolled every dawn.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C1272D] flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C1272D] flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919871044220"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4A6B4D] flex items-center justify-center text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm uppercase tracking-wider text-[#F2A93B]">
              QUICK SITEMAP
            </h4>
            <ul className="space-y-2 text-xs text-[#FDF6EC]/80">
              <li><a href="#menu" className="hover:text-[#F2A93B] transition-colors">Menu & Platters</a></li>
              <li><a href="#offers" className="hover:text-[#F2A93B] transition-colors">Deals & Coupons</a></li>
              <li><a href="#about" className="hover:text-[#F2A93B] transition-colors">Our Origin Story</a></li>
              <li><a href="#book-table" className="hover:text-[#F2A93B] transition-colors">Book a Table</a></li>
              <li><a href="#delivery" className="hover:text-[#F2A93B] transition-colors">Delivery Partners</a></li>
              <li><a href="#gallery" className="hover:text-[#F2A93B] transition-colors">Foodie Gallery</a></li>
              <li><a href="#locations" className="hover:text-[#F2A93B] transition-colors">14 Outlets</a></li>
            </ul>
          </div>

          {/* Cravings & Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm uppercase tracking-wider text-[#F2A93B]">
              SIGNATURE DISHES
            </h4>
            <ul className="space-y-2 text-xs text-[#FDF6EC]/80">
              <li><a href="#menu" className="hover:text-[#F2A93B] transition-colors">Darjeeling Steamed Chicken</a></li>
              <li><a href="#menu" className="hover:text-[#F2A93B] transition-colors">Delhi-Style Kurkure Paneer</a></li>
              <li><a href="#menu" className="hover:text-[#F2A93B] transition-colors">Charcoal Tandoori Chicken</a></li>
              <li><a href="#menu" className="hover:text-[#F2A93B] transition-colors">Smoking Cast-Iron Sizzler</a></li>
              <li><a href="#menu" className="hover:text-[#F2A93B] transition-colors">Red Garlic Devil Chutney Jar</a></li>
              <li><a href="#menu" className="hover:text-[#F2A93B] transition-colors">Belgian Dark Chocolate Lava</a></li>
            </ul>
          </div>

          {/* Contact & Headquarters */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm uppercase tracking-wider text-[#F2A93B]">
              HEADQUARTERS
            </h4>
            <div className="space-y-2.5 text-xs text-[#FDF6EC]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C1272D] shrink-0 mt-0.5" />
                <span>DEV MOMO'S HQ, Inner Circle, Connaught Place, New Delhi - 110001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4A6B4D] shrink-0" />
                <span>Hotline: +91 98710 44220</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F2A93B] shrink-0" />
                <span>orders@devmomos.com</span>
              </div>
            </div>

            {/* Hygiene & FSSAI Badge */}
            <div className="pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-[11px] text-emerald-400">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-bold">FSSAI Certified Kitchens</p>
                  <p className="text-[10px] text-[#FDF6EC]/60">Lic. 13321008000452 • Grade 5/5 Hygiene</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDF6EC]/60">
          <p>
            © {new Date().getFullYear()} DEV MOMO'S Private Limited. All rights reserved. Hand-folded with <span className="text-[#C1272D]">❤️</span> in India.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#F2A93B] hover:text-white font-bold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
