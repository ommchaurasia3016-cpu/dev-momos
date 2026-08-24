import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OffersTicker } from './components/OffersTicker';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { OffersSection } from './components/OffersSection';
import { BookTableSection } from './components/BookTableSection';
import { DeliverySection } from './components/DeliverySection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationsSection } from './components/LocationsSection';
import { FaqSection } from './components/FaqSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemQuickViewModal } from './components/ItemQuickViewModal';
import { FloatingControls } from './components/FloatingControls';
import { MenuItem, CartItem, Coupon } from './types';
import { COUPONS, MENU_ITEMS } from './data/mockData';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Pre-populate with 1 bestseller to make the ordering cart feel immediately alive and delightful
    {
      item: MENU_ITEMS[0], // Darjeeling Juicy Chicken
      quantity: 1,
      selectedDip: 'Spicy Red Garlic Devil Chutney (House Secret)'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(COUPONS[0]); // FIRSTMOMO 20% by default
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll Spy for active navigation links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'offers', 'about', 'menu', 'book-table', 'delivery', 'gallery', 'reviews', 'locations', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (item: MenuItem, quantity: number, dip?: string, notes?: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((ci) => ci.item.id === item.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        if (dip) updated[existingIdx].selectedDip = dip;
        if (notes) updated[existingIdx].customNotes = notes;
        return updated;
      }
      return [...prev, { item, quantity, selectedDip: dip || item.dipRecommendations[0], customNotes: notes }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectCouponFromTicker = (code: string) => {
    const found = COUPONS.find((c) => c.code === code);
    if (found) {
      setAppliedCoupon(found);
      setIsCartOpen(true);
    }
  };

  const scrollToBookTable = () => {
    const el = document.getElementById('book-table');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF6EC] text-[#241A14]">
      {/* Sticky Header */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={scrollToBookTable}
        activeSection={activeSection}
      />

      {/* Main Single-Page App Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={scrollToBookTable}
          onExploreMenu={scrollToMenu}
        />

        {/* 2. Offers Ticker Marquee */}
        <OffersTicker
          onSelectCoupon={handleSelectCouponFromTicker}
        />

        {/* 3. About / Brand Story Section */}
        <AboutSection />

        {/* 4. Deep Interactive Menu Section */}
        <MenuSection
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          onQuickView={(item) => setQuickViewItem(item)}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 5. Deals & Offers Ticket Stub Cards */}
        <OffersSection
          onApplyCoupon={(coupon) => {
            setAppliedCoupon(coupon);
            setIsCartOpen(true);
          }}
        />

        {/* 6. Inline Reservation / Book a Table */}
        <BookTableSection />

        {/* 7. Order Online & Delivery Partners */}
        <DeliverySection
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 8. Ambience & Foodie Gallery */}
        <GallerySection />

        {/* 9. Testimonials & Zomato/Google Ratings */}
        <TestimonialsSection />

        {/* 10. Outlets, Hours & Map Details */}
        <LocationsSection
          onOpenBooking={scrollToBookTable}
        />

        {/* 11. FAQ Accordion */}
        <FaqSection />

        {/* 12. VIP Momo Guild Loyalty / Newsletter */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={setAppliedCoupon}
      />

      {/* Quick View Item Details Modal */}
      <ItemQuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Sticky Controls on Mobile & Desktop */}
      <FloatingControls
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={scrollToBookTable}
      />
    </div>
  );
}
