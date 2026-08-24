import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Sparkles, 
  MessageSquarePlus, 
  CheckCircle2, 
  Quote, 
  X, 
  Heart,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    city: '',
    rating: 5,
    favoriteDish: 'Darjeeling Steamed Chicken Momos',
    comment: ''
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      alert('Please fill in your name and review.');
      return;
    }

    const review: Testimonial = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      roleOrCity: newReview.city || 'Delhi Foodie',
      rating: newReview.rating,
      comment: newReview.comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      verifiedPlatform: 'Google',
      favoriteDish: newReview.favoriteDish,
      date: 'Just now',
      badge: 'Foodie Contributor'
    };

    setReviewsList([review, ...reviewsList]);
    setIsWriteModalOpen(false);
    setNewReview({ name: '', city: '', rating: 5, favoriteDish: 'Darjeeling Steamed Chicken Momos', comment: '' });

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <section id="reviews" className="py-20 bg-[#FDF6EC] text-[#241A14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C1272D]/10 text-[#C1272D] text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-[#C1272D]" />
            <span>25,000+ Verified Foodie Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#241A14]">
            WHAT THE <span className="text-[#C1272D]">STREETS ARE SAYING</span>
          </h2>
          <p className="text-base text-[#241A14]/75 font-medium">
            Real feedback from momo lovers across Delhi, Bengaluru, Mumbai, and Pune.
          </p>
        </div>

        {/* Zomato-Style Hero Rating Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#241A14]/10 p-6 sm:p-8 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Rating Score */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-[#24963F] text-white flex flex-col items-center justify-center shadow-lg">
              <span className="font-display text-3xl font-extrabold flex items-center gap-0.5">
                4.8 <span className="text-base">★</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-white/90">EXCELLENT</span>
            </div>

            <div>
              <h3 className="font-display text-xl uppercase text-[#241A14]">
                OVERALL FOODIE RATING
              </h3>
              <p className="text-xs text-[#241A14]/70">
                Aggregated from Zomato, Swiggy & Google Maps Reviews
              </p>
              <div className="flex items-center gap-3 mt-1.5 text-[11px] font-bold">
                <span className="text-[#E23744]">Zomato: 4.8★</span>
                <span className="text-[#FC8019]">Swiggy: 4.7★</span>
                <span className="text-[#4285F4]">Google: 4.9★</span>
              </div>
            </div>
          </div>

          {/* Write a review button */}
          <button
            onClick={() => setIsWriteModalOpen(true)}
            id="open-write-review-modal-btn"
            className="px-6 py-3 rounded-xl bg-[#241A14] hover:bg-[#34241B] text-white font-bold text-xs flex items-center gap-2 shadow-md shrink-0 active:scale-95 transition-transform"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#F2A93B]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-[#241A14]/10 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#F2A93B]/40"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-[#241A14]">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-[#241A14]/60">
                        {review.roleOrCity}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center text-[#F2A93B]">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F2A93B]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#241A14]/5 text-[#241A14]">
                      via {review.verifiedPlatform}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#241A14]/85 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#241A14]/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#C1272D] font-bold">
                  <Flame className="w-3.5 h-3.5 fill-[#C1272D]" />
                  <span>Fav Dish: {review.favoriteDish}</span>
                </div>
                <span className="text-[#241A14]/40 text-[11px]">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FDF6EC] text-[#241A14] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#F2A93B]/40 relative"
            >
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white text-[#241A14] hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 mb-6">
                <h3 className="font-display text-2xl uppercase text-[#241A14]">
                  SHARE YOUR <span className="text-[#C1272D]">MOMO REVIEW</span>
                </h3>
                <p className="text-xs text-[#241A14]/70">
                  Tell fellow foodies how you liked the spices, pleats, and dips!
                </p>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#241A14]">Your Rating *</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= newReview.rating
                              ? 'fill-[#F2A93B] text-[#F2A93B]'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#241A14] ml-2">
                      {newReview.rating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#241A14]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Roy"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl bg-white border border-[#241A14]/20 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#241A14]">City / Area</label>
                    <input
                      type="text"
                      placeholder="e.g. Bangalore"
                      value={newReview.city}
                      onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl bg-white border border-[#241A14]/20 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#241A14]">Favorite Momo / Dish</label>
                  <input
                    type="text"
                    placeholder="e.g. Kurkure Paneer Momos"
                    value={newReview.favoriteDish}
                    onChange={(e) => setNewReview({ ...newReview, favoriteDish: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl bg-white border border-[#241A14]/20 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#241A14]">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="How were the momos? The chutney heat? The crunch?"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl bg-white border border-[#241A14]/20 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#C1272D] hover:bg-[#A81F25] text-white font-bold text-xs uppercase shadow-md active:scale-95 transition-transform"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
