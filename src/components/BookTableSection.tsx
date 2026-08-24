import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CalendarDays, 
  Users, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  PartyPopper,
  ShieldCheck,
  Phone,
  Mail,
  User,
  Utensils
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TableBooking } from '../types';
import { OUTLETS } from '../data/mockData';

export const BookTableSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '19:30',
    partySize: 2,
    outletId: OUTLETS[0].id,
    seatingArea: 'Indoor AC' as 'Indoor AC' | 'Rooftop Lounge' | 'Chef Live Counter',
    occasion: 'Casual Dining',
    specialRequests: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<TableBooking | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const newBooking: TableBooking = {
      id: `DEV-TBK-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      timeSlot: formData.timeSlot,
      partySize: Number(formData.partySize),
      outletId: formData.outletId,
      seatingArea: formData.seatingArea,
      occasion: formData.occasion,
      specialRequests: formData.specialRequests,
      createdAt: new Date().toISOString()
    };

    setBookingConfirmed(newBooking);

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const selectedOutletObj = OUTLETS.find((o) => o.id === formData.outletId) || OUTLETS[0];

  return (
    <section id="book-table" className="py-20 bg-[#241A14] text-[#FDF6EC] relative overflow-hidden">
      
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Restaurant ambience background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#241A14] via-[#241A14]/90 to-[#241A14]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2A93B]/20 text-[#F2A93B] text-xs font-bold uppercase tracking-widest border border-[#F2A93B]/40">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Instant Reservation Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            RESERVE YOUR <span className="text-[#F2A93B]">MOMO TABLE</span>
          </h2>
          <p className="text-base text-[#FDF6EC]/75 font-medium">
            0% Advance Fee • Rooftop & Live Tandoor Seating • Instant WhatsApp Confirmation
          </p>
        </div>

        {/* Main Booking Card Container */}
        <div className="max-w-4xl mx-auto bg-[#34241B] rounded-3xl border-2 border-[#F2A93B]/40 shadow-2xl p-6 sm:p-10">
          
          <AnimatePresence mode="wait">
            {bookingConfirmed ? (
              /* Booking Success State Screen */
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-[#4A6B4D]/30 border-2 border-[#4A6B4D] text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A6B4D]/20 text-emerald-400 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>TABLE RESERVED & HELD</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase text-white">
                    SEE YOU SOON, {bookingConfirmed.name.toUpperCase()}!
                  </h3>
                  <p className="text-sm text-[#FDF6EC]/80 font-medium">
                    Your table is reserved. A confirmation SMS & WhatsApp ping has been triggered to <strong>{bookingConfirmed.phone}</strong>.
                  </p>
                </div>

                {/* Summary Stub */}
                <div className="max-w-md mx-auto bg-[#241A14] p-5 rounded-2xl border border-white/15 text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#FDF6EC]/60">Booking Reference:</span>
                    <strong className="text-[#F2A93B] font-mono text-sm">{bookingConfirmed.id}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FDF6EC]/60">Outlet Location:</span>
                    <strong className="text-white">{selectedOutletObj.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FDF6EC]/60">Date & Slot:</span>
                    <strong className="text-white">{bookingConfirmed.date} at {bookingConfirmed.timeSlot}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FDF6EC]/60">Guests & Area:</span>
                    <strong className="text-white">{bookingConfirmed.partySize} Guests • {bookingConfirmed.seatingArea}</strong>
                  </div>
                  {bookingConfirmed.specialRequests && (
                    <div className="flex justify-between">
                      <span className="text-[#FDF6EC]/60">Special Notes:</span>
                      <span className="text-white italic">{bookingConfirmed.specialRequests}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setBookingConfirmed(null)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                  >
                    Book Another Table
                  </button>
                  <a
                    href="#menu"
                    className="px-6 py-3 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-bold text-xs shadow-lg transition-transform active:scale-95"
                  >
                    Browse Dine-In Menu
                  </a>
                </div>
              </motion.div>
            ) : (
              /* Inline Form */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Row 1: Outlet & Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Select Outlet Location *</span>
                    </label>
                    <select
                      value={formData.outletId}
                      onChange={(e) => setFormData({ ...formData, outletId: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none"
                    >
                      {OUTLETS.map((outlet) => (
                        <option key={outlet.id} value={outlet.id}>
                          {outlet.name} ({outlet.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>Date *</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Time Slot *</span>
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:30">01:30 PM (Lunch)</option>
                      <option value="17:00">05:00 PM (Evening Snacks)</option>
                      <option value="18:30">06:30 PM (Sunset)</option>
                      <option value="19:30">07:30 PM (Dinner Rush)</option>
                      <option value="20:30">08:30 PM (Dinner Prime)</option>
                      <option value="21:30">09:30 PM (Late Dinner)</option>
                      <option value="22:30">10:30 PM (Midnight Steams)</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Guests & Seating & Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>Party Size (Guests) *</span>
                    </label>
                    <select
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: Number(e.target.value) })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest (Solo Foodie)' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Seating Preference</span>
                    </label>
                    <select
                      value={formData.seatingArea}
                      onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value as any })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none"
                    >
                      <option value="Indoor AC">Indoor Air-Conditioned</option>
                      <option value="Rooftop Lounge">Rooftop Lounge / Patio</option>
                      <option value="Chef Live Counter">Chef's Live Tandoor Counter</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <PartyPopper className="w-3.5 h-3.5" />
                      <span>Occasion</span>
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none"
                    >
                      <option value="Casual Dining">Casual Dining / Hangout</option>
                      <option value="Birthday Party">Birthday Party (Free Dessert!)</option>
                      <option value="Anniversary">Anniversary Date</option>
                      <option value="Office Lunch">Office Team Lunch</option>
                      <option value="Momo Challenge">Spicy Devil Momo Challenge</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Name, Phone, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp / Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#F2A93B] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Address (for calendar)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs font-semibold p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#FDF6EC]/80">
                    Special Requests (Baby chair, extra spicy devil dips on table, dietary notes):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Please arrange quiet corner for birthday cake cutting..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl bg-[#241A14] border border-white/20 text-white focus:border-[#F2A93B] outline-none placeholder:text-gray-500"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#FDF6EC]/70">
                    <ShieldCheck className="w-4 h-4 text-[#4A6B4D]" />
                    <span>Instant WhatsApp confirmation • No cancellation fee</span>
                  </div>

                  <button
                    type="submit"
                    id="submit-table-booking-btn"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-extrabold text-sm shadow-xl shadow-[#C1272D]/40 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    <Sparkles className="w-4 h-4 text-[#F2A93B]" />
                    <span>Confirm Free Table Reservation</span>
                  </button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
