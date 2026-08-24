import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Flame, 
  Star, 
  Clock, 
  ShieldCheck, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Sparkles,
  Info
} from 'lucide-react';
import { MenuItem } from '../types';
import { SIGNATURE_DIPS } from '../data/mockData';

interface ItemQuickViewModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, dip: string, notes: string) => void;
}

export const ItemQuickViewModal: React.FC<ItemQuickViewModalProps> = ({
  item,
  onClose,
  onAddToCart
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedDip, setSelectedDip] = useState(item.dipRecommendations[0] || SIGNATURE_DIPS[0]);
  const [customNotes, setCustomNotes] = useState('');

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedDip, customNotes);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FDF6EC] text-[#241A14] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#F2A93B]/30 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#241A14]/70 hover:bg-[#241A14] text-white transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Image Side */}
            <div className="md:col-span-5 relative aspect-4/3 md:aspect-auto md:h-full bg-black">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              
              {/* Veg / Non-Veg Indicator */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className={`w-6 h-6 rounded-md bg-white/95 border flex items-center justify-center shadow-md ${
                  item.isVeg ? 'border-[#4A6B4D]' : 'border-[#C1272D]'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-[#4A6B4D]' : 'bg-[#C1272D]'}`} />
                </div>
                <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full text-white ${
                  item.isVeg ? 'bg-[#4A6B4D]' : 'bg-[#C1272D]'
                }`}>
                  {item.isVeg ? 'PURE VEG' : 'NON-VEG'}
                </span>
              </div>
            </div>

            {/* Details Side */}
            <div className="md:col-span-7 p-6 sm:p-7 space-y-4">
              
              {/* Title & Native Name */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#241A14] leading-tight">
                    {item.name}
                  </h3>
                </div>
                {item.nativeName && (
                  <p className="text-xs text-[#C1272D] font-bold mt-0.5">
                    {item.nativeName}
                  </p>
                )}
              </div>

              {/* Price & Badges */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-[#C1272D]">
                  ₹{item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-sm line-through text-[#241A14]/50 font-semibold">
                    ₹{item.originalPrice}
                  </span>
                )}
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-[#F2A93B]/20 text-[#241A14]">
                  {item.piecesCount} Pieces
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#241A14]/80 leading-relaxed">
                {item.description}
              </p>

              {/* Spice & Prep Specs */}
              <div className="flex flex-wrap items-center gap-3 text-xs pt-1 border-t border-[#241A14]/10">
                <div className="flex items-center gap-1 font-semibold text-[#241A14]">
                  <span className="text-gray-500">Spice Level:</span>
                  <div className="flex items-center text-[#C1272D]">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Flame
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < item.spiceLevel ? 'fill-[#C1272D] text-[#C1272D]' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#C1272D]">
                    {item.spiceLevel === 0 ? 'Mild' : item.spiceLevel === 1 ? 'Medium' : item.spiceLevel === 2 ? 'Spicy' : 'Devil Hot'}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[#241A14]/70">
                  <Clock className="w-3.5 h-3.5 text-[#F2A93B]" />
                  <span>{item.prepTime}</span>
                </div>

                <div className="flex items-center gap-1 text-[#241A14]/70">
                  <Star className="w-3.5 h-3.5 fill-[#F2A93B] text-[#F2A93B]" />
                  <span>{item.rating} ({item.reviewCount}+ reviews)</span>
                </div>
              </div>

              {/* Allergen Info */}
              {item.allergenInfo && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#241A14]/60 bg-white/60 p-2 rounded-xl border border-[#241A14]/5">
                  <Info className="w-3.5 h-3.5 text-[#C1272D]" />
                  <span>Allergen advice: {item.allergenInfo}</span>
                </div>
              )}

              {/* Dip Customization */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-[#241A14] flex items-center justify-between">
                  <span>Choose Your Primary Dip:</span>
                  <span className="text-[10px] text-[#4A6B4D] font-semibold">Included Free</span>
                </label>
                <select
                  value={selectedDip}
                  onChange={(e) => setSelectedDip(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-[#241A14]/20 text-[#241A14] focus:border-[#C1272D] focus:ring-1 focus:ring-[#C1272D] outline-none"
                >
                  {SIGNATURE_DIPS.map((dip, idx) => (
                    <option key={idx} value={dip}>{dip}</option>
                  ))}
                </select>
              </div>

              {/* Special Instructions Note */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#241A14]/70">
                  Chef instructions (optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra spicy, pack dips separately..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  maxLength={80}
                  className="w-full text-xs p-2 rounded-xl bg-white border border-[#241A14]/20 text-[#241A14] focus:border-[#C1272D] outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Quantity Stepper & Add to Order CTA */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#241A14]/10">
                <div className="flex items-center border-2 border-[#241A14]/20 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="p-1.5 rounded-lg hover:bg-gray-100 text-[#241A14] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 text-sm font-bold text-[#241A14] min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="p-1.5 rounded-lg hover:bg-gray-100 text-[#241A14] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  id="modal-add-to-cart-btn"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-bold text-sm shadow-lg shadow-[#C1272D]/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <ShoppingBag className="w-4 h-4 text-[#F2A93B]" />
                  <span>Add to Order • ₹{item.price * quantity}</span>
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
