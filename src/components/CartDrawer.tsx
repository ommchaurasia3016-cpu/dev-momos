import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  MapPin, 
  Percent, 
  Flame,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, Coupon } from '../types';
import { COUPONS, OUTLETS } from '../data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  appliedCoupon: Coupon | null;
  onApplyCoupon: (coupon: Coupon | null) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedCoupon,
  onApplyCoupon
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [selectedOutlet, setSelectedOutlet] = useState(OUTLETS[0].id);
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  // Calculations
  const itemTotal = cartItems.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'percentage') {
      const calc = (itemTotal * appliedCoupon.discountValue) / 100;
      discount = appliedCoupon.maxDiscount ? Math.min(calc, appliedCoupon.maxDiscount) : calc;
    } else {
      discount = appliedCoupon.discountValue;
    }
  }

  const deliveryFee = orderType === 'delivery' ? (itemTotal >= 299 ? 0 : 40) : 0;
  const taxesAndPackaging = Math.round(itemTotal * 0.05) + (orderType === 'delivery' ? 25 : 10);
  const grandTotal = Math.max(0, itemTotal - discount + deliveryFee + taxesAndPackaging);

  const handleApplyCouponCode = () => {
    const code = couponInput.trim().toUpperCase();
    setCouponError('');
    if (!code) return;

    const found = COUPONS.find((c) => c.code.toUpperCase() === code);
    if (!found) {
      setCouponError('Invalid coupon code.');
      return;
    }

    if (itemTotal < found.minOrder) {
      setCouponError(`Min order value of ₹${found.minOrder} required for this coupon.`);
      return;
    }

    onApplyCoupon(found);
    setCouponInput('');
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  const handleCheckoutDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || (orderType === 'delivery' && !customerAddress)) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }

    const orderId = `DEV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderSuccess(orderId);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;
    const itemsText = cartItems
      .map((ci) => `• ${ci.quantity}x ${ci.item.name} (Dip: ${ci.selectedDip || 'Standard'}) - ₹${ci.item.price * ci.quantity}`)
      .join('%0A');

    const message = `Hello DEV MOMO'S! I'd like to place an order:%0A%0A*ORDER TYPE:* ${orderType.toUpperCase()}%0A*ITEMS:*%0A${itemsText}%0A%0A*Subtotal:* ₹${itemTotal}%0A*Discount:* ₹${discount}%0A*Grand Total:* ₹${grandTotal}%0A%0A*Customer Name:* ${customerName || 'Foodie'}%0A*Phone:* ${customerPhone || 'N/A'}%0A*Address/Outlet:* ${customerAddress || selectedOutlet}`;

    window.open(`https://wa.me/919871044220?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-lg bg-[#FDF6EC] text-[#241A14] h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Drawer Header */}
          <div className="p-5 bg-[#241A14] text-white flex items-center justify-between sticky top-0 z-10 border-b border-[#F2A93B]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#C1272D] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg tracking-wide uppercase">
                  YOUR MOMO CART
                </h3>
                <p className="text-[11px] text-[#FDF6EC]/70">
                  {cartItems.length} items selected • Dispatch in ~20 mins
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-5 space-y-6 flex-1 overflow-y-auto">
            {orderSuccess ? (
              /* Success State Screen */
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-[#4A6B4D]/20 text-[#4A6B4D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl uppercase text-[#241A14]">
                  ORDER RECEIVED!
                </h3>
                <p className="text-sm font-bold text-[#C1272D]">
                  Order ID: {orderSuccess}
                </p>
                <p className="text-xs text-[#241A14]/75 max-w-xs mx-auto">
                  Our chef is heating the steamers! We’ve sent a confirmation SMS to <strong>{customerPhone}</strong>.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-[#241A14]/10 text-xs space-y-1 text-left">
                  <p><strong>Type:</strong> {orderType.toUpperCase()}</p>
                  <p><strong>Amount to Pay:</strong> ₹{grandTotal} (Cash on Delivery / UPI on Delivery)</p>
                  <p><strong>Estimated Arrival:</strong> 25-30 Mins</p>
                </div>
                <button
                  onClick={() => {
                    setOrderSuccess(null);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full py-3 rounded-xl bg-[#C1272D] text-white font-bold text-xs uppercase"
                >
                  Done / Back to Menu
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              /* Empty Cart State */
              <div className="text-center py-16 space-y-4">
                <div className="text-5xl">🥟</div>
                <h4 className="text-lg font-bold text-[#241A14]">Your cart is hungry!</h4>
                <p className="text-xs text-[#241A14]/60 max-w-xs mx-auto">
                  Add some steaming Darjeeling momos, sizzling platters, or crunchy kurkure snacks to get started.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#C1272D] text-white text-xs font-bold shadow-md hover:bg-[#A81F25]"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              /* Items List & Order Config */
              <>
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-2xl border border-[#241A14]/10">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      orderType === 'delivery'
                        ? 'bg-[#C1272D] text-white shadow-sm'
                        : 'text-[#241A14]/70 hover:bg-gray-50'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Hot Delivery (25m)</span>
                  </button>

                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      orderType === 'takeaway'
                        ? 'bg-[#C1272D] text-white shadow-sm'
                        : 'text-[#241A14]/70 hover:bg-gray-50'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Self Takeaway</span>
                  </button>
                </div>

                {/* Outlet Selector */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#241A14] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C1272D]" />
                    <span>Fulfilling Kitchen Outlet:</span>
                  </label>
                  <select
                    value={selectedOutlet}
                    onChange={(e) => setSelectedOutlet(e.target.value)}
                    className="w-full text-xs font-medium p-2.5 rounded-xl bg-white border border-[#241A14]/15 outline-none"
                  >
                    {OUTLETS.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.name} ({o.city})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#241A14]/70">
                    <span>Order Items</span>
                    <button
                      onClick={onClearCart}
                      className="text-[#C1272D] hover:underline text-[11px]"
                    >
                      Clear All
                    </button>
                  </div>

                  {cartItems.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3 bg-white rounded-2xl border border-[#241A14]/10 shadow-xs flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <img
                          src={ci.item.image}
                          alt={ci.item.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-[#241A14] truncate">
                            {ci.item.name}
                          </p>
                          <p className="text-[10px] text-[#C1272D] font-medium truncate">
                            Dip: {ci.selectedDip || 'Devil Garlic Chutney'}
                          </p>
                          <p className="text-xs font-extrabold text-[#241A14]">
                            ₹{ci.item.price * ci.quantity}
                          </p>
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center bg-[#FDF6EC] border border-[#241A14]/15 rounded-xl p-0.5 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, -1)}
                          className="p-1 hover:bg-white rounded-lg text-[#241A14]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#241A14] min-w-[1.25rem] text-center">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, 1)}
                          className="p-1 hover:bg-white rounded-lg text-[#241A14]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon Box */}
                <div className="bg-white p-3.5 rounded-2xl border border-[#241A14]/10 space-y-2">
                  <label className="text-xs font-bold text-[#241A14] flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#F2A93B]" />
                    <span>Apply Coupon Code</span>
                  </label>

                  {appliedCoupon ? (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                      <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>'{appliedCoupon.code}' Applied! (Saved ₹{discount})</span>
                      </div>
                      <button
                        onClick={() => onApplyCoupon(null)}
                        className="text-xs font-bold text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. FIRSTMOMO"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                          className="flex-1 text-xs p-2 rounded-xl bg-[#FDF6EC] border border-[#241A14]/15 outline-none uppercase font-bold"
                        />
                        <button
                          onClick={handleApplyCouponCode}
                          className="px-4 py-2 rounded-xl bg-[#241A14] text-white text-xs font-bold hover:bg-[#34241B]"
                        >
                          Apply
                        </button>
                      </div>
                      {couponError && (
                        <p className="text-[11px] text-red-600 font-semibold">{couponError}</p>
                      )}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {COUPONS.slice(0, 2).map((c) => (
                          <button
                            key={c.code}
                            onClick={() => {
                              onApplyCoupon(c);
                              confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
                            }}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-[#F2A93B]/20 text-[#241A14] hover:bg-[#F2A93B]/40"
                          >
                            + Use {c.code} ({c.discountText})
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Customer Checkout Form */}
                <form id="checkout-form" onSubmit={handleCheckoutDirect} className="space-y-2.5 bg-white p-3.5 rounded-2xl border border-[#241A14]/10">
                  <p className="text-xs font-bold text-[#241A14]">Customer & Dispatch Details</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="text-xs p-2 rounded-xl bg-[#FDF6EC] border border-[#241A14]/15 outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (10 digits) *"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="text-xs p-2 rounded-xl bg-[#FDF6EC] border border-[#241A14]/15 outline-none"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <input
                      type="text"
                      placeholder="Complete Delivery Address & Flat No. *"
                      required
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full text-xs p-2 rounded-xl bg-[#FDF6EC] border border-[#241A14]/15 outline-none"
                    />
                  )}
                </form>

                {/* Bill Breakdown */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#241A14]/10 space-y-1.5 text-xs text-[#241A14]/80">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span>₹{itemTotal}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Coupon Discount</span>
                      <span>- ₹{discount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Delivery Partner Fee</span>
                    <span>{deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${deliveryFee}`}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>GST & Hygienic Packaging</span>
                    <span>₹{taxesAndPackaging}</span>
                  </div>

                  <div className="pt-2 border-t border-[#241A14]/10 flex justify-between text-sm font-extrabold text-[#241A14]">
                    <span>To Pay</span>
                    <span className="text-[#C1272D] text-base">₹{grandTotal}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {cartItems.length > 0 && !orderSuccess && (
            <div className="p-5 bg-white border-t border-[#241A14]/10 space-y-2 sticky bottom-0 z-10">
              <button
                type="submit"
                form="checkout-form"
                id="cart-checkout-direct-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-extrabold text-sm shadow-xl shadow-[#C1272D]/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <span>Confirm Order • ₹{grandTotal}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                id="cart-whatsapp-order-btn"
                className="w-full py-2.5 px-4 rounded-xl bg-[#4A6B4D] hover:bg-[#3D583F] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Order via WhatsApp Hotline</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
