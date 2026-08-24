import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Flame, 
  Star, 
  Plus, 
  Minus, 
  Eye, 
  Sparkles, 
  Filter, 
  SlidersHorizontal,
  ChevronDown,
  ShoppingBag,
  Check
} from 'lucide-react';
import { MenuItem, MenuCategory, CartItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/mockData';

interface MenuSectionProps {
  cartItems: CartItem[];
  onAddToCart: (item: MenuItem, quantity: number, dip?: string) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onQuickView: (item: MenuItem) => void;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  onQuickView,
  onOpenCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'spicy' | 'bestseller'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');

  // Filter & sort calculation
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesNative = item.nativeName?.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesNative && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;
      if (dietaryFilter === 'spicy' && item.spiceLevel < 2) return false;
      if (dietaryFilter === 'bestseller' && !item.isBestSeller) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount; // 'popular'
    });
  }, [selectedCategory, searchQuery, dietaryFilter, sortBy]);

  // Helper to get current item quantity in cart
  const getItemCartQuantity = (itemId: string) => {
    const found = cartItems.find((ci) => ci.item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 bg-[#FFF9F0] text-[#241A14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C1272D]/10 text-[#C1272D] text-xs font-bold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 fill-[#C1272D]" />
            <span>Zomato & Dine-In Starters to Platters</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#241A14]">
            EXPLORE THE <span className="text-[#C1272D]">MOMO VAULT</span>
          </h2>
          <p className="text-base text-[#241A14]/75 font-medium">
            Handcrafted fresh dumplings, wok-tossed snacks, sizzlers, and house-brewed dips.
          </p>
        </div>

        {/* Category Horizontal Tab Navigation */}
        <div className="relative mb-8 pb-2">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  id={`cat-tab-${cat.id}`}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#C1272D] text-white border-[#C1272D] shadow-lg shadow-[#C1272D]/25 scale-102'
                      : 'bg-white text-[#241A14] border-[#241A14]/10 hover:border-[#F2A93B] hover:bg-[#FDF6EC]'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#F2A93B]/20 text-[#241A14]'
                    }`}>
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search, Dietary Filter & Sort Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#241A14]/10 shadow-sm mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search momos, kurkure, paneer, tandoori, dips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#241A14]/10 text-xs sm:text-sm text-[#241A14] placeholder:text-gray-400 focus:outline-none focus:border-[#C1272D] focus:ring-1 focus:ring-[#C1272D]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-[#241A14]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Buttons */}
            <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-2">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-[#241A14] text-white'
                    : 'bg-[#FDF6EC] text-[#241A14]/80 hover:bg-gray-100'
                }`}
              >
                All
              </button>

              <button
                onClick={() => setDietaryFilter(dietaryFilter === 'veg' ? 'all' : 'veg')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#4A6B4D] text-white border-[#4A6B4D]'
                    : 'bg-[#FDF6EC] text-[#4A6B4D] border-[#4A6B4D]/30 hover:bg-[#4A6B4D]/10'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#4A6B4D] border border-white" />
                <span>Pure Veg</span>
              </button>

              <button
                onClick={() => setDietaryFilter(dietaryFilter === 'non-veg' ? 'all' : 'non-veg')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#C1272D] text-white border-[#C1272D]'
                    : 'bg-[#FDF6EC] text-[#C1272D] border-[#C1272D]/30 hover:bg-[#C1272D]/10'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#C1272D] border border-white" />
                <span>Non-Veg</span>
              </button>

              <button
                onClick={() => setDietaryFilter(dietaryFilter === 'spicy' ? 'all' : 'spicy')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                  dietaryFilter === 'spicy'
                    ? 'bg-[#C1272D] text-white'
                    : 'bg-[#FDF6EC] text-[#C1272D] hover:bg-red-50'
                }`}
              >
                <Flame className="w-3.5 h-3.5 fill-[#C1272D] text-[#C1272D]" />
                <span>Spicy (2+ 🌶️)</span>
              </button>

              <button
                onClick={() => setDietaryFilter(dietaryFilter === 'bestseller' ? 'all' : 'bestseller')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                  dietaryFilter === 'bestseller'
                    ? 'bg-[#F2A93B] text-[#241A14]'
                    : 'bg-[#FDF6EC] text-[#241A14] hover:bg-amber-50'
                }`}
              >
                <Star className="w-3.5 h-3.5 fill-[#F2A93B] text-[#F2A93B]" />
                <span>Bestsellers</span>
              </button>
            </div>

          </div>

          {/* Bottom Bar: Total count & Sort Selector */}
          <div className="flex items-center justify-between pt-2 border-t border-[#241A14]/5 text-xs text-[#241A14]/70">
            <p>
              Showing <strong className="text-[#241A14]">{filteredItems.length}</strong> delicious items
            </p>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-semibold py-1 px-2.5 rounded-lg bg-[#FDF6EC] border border-[#241A14]/10 text-[#241A14] outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated (★)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#241A14]/10 p-8 space-y-4">
            <p className="text-4xl">🥟</p>
            <h3 className="text-xl font-bold text-[#241A14]">No dishes found matching your filters</h3>
            <p className="text-sm text-[#241A14]/60 max-w-md mx-auto">
              Try adjusting your search terms or reset the filters to explore our full Himalayan menu.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#C1272D] text-white text-xs font-bold hover:bg-[#A81F25]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((dish) => {
              const inCartQty = getItemCartQuantity(dish.id);

              return (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-[#241A14]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C1272D]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative aspect-16/10 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onQuickView(dish)}>
                      <img
                        src={dish.image}
                        alt={dish.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Veg / Non-Veg emblem (Indian Food Symbol) */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-1 rounded-md shadow-md">
                        <div className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                          dish.isVeg ? 'border-[#4A6B4D]' : 'border-[#C1272D]'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-[#4A6B4D]' : 'bg-[#C1272D]'}`} />
                        </div>
                      </div>

                      {/* Badges: Best Seller / Chef Special / New */}
                      {dish.isBestSeller && (
                        <div className="absolute top-3 right-3 bg-[#C1272D] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
                          BESTSELLER
                        </div>
                      )}
                      {!dish.isBestSeller && dish.isChefSpecial && (
                        <div className="absolute top-3 right-3 bg-[#F2A93B] text-[#241A14] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
                          CHEF'S PICK
                        </div>
                      )}
                      {!dish.isBestSeller && !dish.isChefSpecial && dish.isNew && (
                        <div className="absolute top-3 right-3 bg-[#4A6B4D] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
                          NEW
                        </div>
                      )}

                      {/* Quick View Hover Action */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickView(dish);
                        }}
                        aria-label="Quick View item"
                        className="absolute bottom-2.5 right-2.5 p-2 rounded-xl bg-white/90 hover:bg-white text-[#241A14] shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {/* Pieces & Spice badge */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                          {dish.piecesCount} pcs
                        </span>
                        {dish.spiceLevel > 0 && (
                          <span className="text-[10px] font-bold text-[#F2A93B] bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-md flex items-center">
                            {'🌶️'.repeat(dish.spiceLevel)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 
                            onClick={() => onQuickView(dish)}
                            className="font-bold text-base text-[#241A14] hover:text-[#C1272D] transition-colors leading-snug cursor-pointer"
                          >
                            {dish.name}
                          </h3>
                          {dish.nativeName && (
                            <p className="text-[11px] font-semibold text-[#C1272D]">
                              {dish.nativeName}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-[#241A14]/70 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>

                      {/* Rating & Prep details */}
                      <div className="flex items-center justify-between text-[11px] text-[#241A14]/60 pt-1">
                        <div className="flex items-center gap-1 text-[#241A14] font-bold">
                          <Star className="w-3.5 h-3.5 fill-[#F2A93B] text-[#F2A93B]" />
                          <span>{dish.rating}</span>
                          <span className="text-[10px] text-gray-400 font-normal">({dish.reviewCount})</span>
                        </div>
                        <span>{dish.prepTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & Add Action */}
                  <div className="p-4 sm:p-5 pt-0 border-t border-[#241A14]/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-extrabold text-[#C1272D]">
                          ₹{dish.price}
                        </span>
                        {dish.originalPrice && (
                          <span className="text-xs line-through text-gray-400 font-semibold">
                            ₹{dish.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold">Free Dip Included</span>
                    </div>

                    {/* Add or Stepper Button */}
                    {inCartQty === 0 ? (
                      <button
                        onClick={() => onAddToCart(dish, 1)}
                        id={`add-btn-${dish.id}`}
                        className="px-3.5 py-2 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white text-xs font-extrabold shadow-md shadow-[#C1272D]/20 flex items-center gap-1.5 active:scale-95 transition-transform"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>ADD</span>
                      </button>
                    ) : (
                      <div className="flex items-center bg-[#C1272D] text-white rounded-xl shadow-md p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(dish.id, -1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 hover:bg-black/20 rounded-lg transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold min-w-[1.25rem] text-center">
                          {inCartQty}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(dish.id, 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 hover:bg-black/20 rounded-lg transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

        {/* View Full Cart Floating Indicator if items added */}
        {cartItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky bottom-6 z-30 mt-10 max-w-xl mx-auto"
          >
            <div className="bg-[#241A14] text-white p-4 rounded-2xl shadow-2xl border-2 border-[#F2A93B]/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C1272D] flex items-center justify-center font-bold text-white">
                  {cartItems.reduce((acc, c) => acc + c.quantity, 0)}
                </div>
                <div>
                  <p className="text-xs text-[#F2A93B] font-bold uppercase tracking-wider">Order in Progress</p>
                  <p className="text-base font-extrabold text-white">
                    ₹{cartItems.reduce((acc, c) => acc + c.item.price * c.quantity, 0)} • {cartItems.length} unique dishes
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenCart}
                id="menu-sticky-cart-btn"
                className="py-2.5 px-5 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-transform"
              >
                <span>View Cart</span>
                <ShoppingBag className="w-4 h-4 text-[#F2A93B]" />
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
