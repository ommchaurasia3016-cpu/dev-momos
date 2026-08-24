import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  Heart,
  Eye,
  Flame,
  Utensils
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Dishes', 'Sizzlers', 'Ambience', 'Kitchen Behind The Scenes'];

  const filteredGallery = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1C1410] text-[#FDF6EC] relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C1272D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F2A93B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C1272D]/20 border border-[#C1272D]/40 text-[#F2A93B] text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>Chiaroscuro Culinary Artistry</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            THE MOMO <span className="text-[#C1272D]">GASTRONOMY</span>
          </h2>
          <p className="text-base text-[#FDF6EC]/75 font-normal max-w-2xl mx-auto">
            Shot on dark mahogany and handcrafted jewel ceramics. High-contrast culinary captures of Himalayan steam, crispy panko crunch, charred embers, and dripping devil oils.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#C1272D] text-white shadow-lg shadow-[#C1272D]/30 scale-105'
                  : 'bg-[#2A1E18] text-[#FDF6EC]/75 border border-white/10 hover:border-[#F2A93B]/40 hover:text-white hover:bg-[#34261E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Photo Collage Grid (Inspired by Reference Aesthetics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative bg-[#241A14] rounded-2xl overflow-hidden border border-white/10 hover:border-[#F2A93B]/60 shadow-xl cursor-pointer aspect-4/5 flex flex-col justify-end transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100 contrast-110"
                loading="lazy"
              />

              {/* Moody Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Top Pill Indicator */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-black uppercase tracking-wider text-[#F2A93B]">
                <Utensils className="w-3 h-3 text-[#C1272D]" />
                <span>{item.category}</span>
              </div>

              {/* Top Right Quick View Aperture */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-3.5 h-3.5 text-[#F2A93B]" />
              </div>

              {/* Content Panel at Bottom */}
              <div className="relative p-4 sm:p-5 text-white z-10 space-y-1.5 transform transition-transform duration-300">
                <h4 className="font-bold text-sm sm:text-base leading-snug text-white group-hover:text-[#F2A93B] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#FDF6EC]/70 line-clamp-2 font-normal leading-relaxed">
                  {item.caption}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C1272D]">
                  <Flame className="w-3 h-3 text-[#F2A93B]" />
                  <span>Click to Expand High-Res</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Foodie Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#C1272D] via-[#8E171D] to-[#241A14] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2A93B] shrink-0 border border-white/10">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide">
                TAG <span className="text-[#F2A93B]">#DEVMOMOSGASTRONOMY</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Share your moody dining shots on Instagram. Best food photography wins an all-inclusive Chef's Table Tasting Menu every month!
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#F2A93B] hover:bg-[#e0982c] text-[#241A14] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shrink-0 active:scale-95 transition-transform"
          >
            <Heart className="w-4 h-4 fill-[#241A14]" />
            <span>Follow @devmomos_official</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <div 
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev & Next Controls */}
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#241A14] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="relative aspect-16/10 bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={filteredGallery[activeLightboxIndex].image}
                  alt={filteredGallery[activeLightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[68vh] object-contain"
                />
              </div>

              <div className="p-6 text-white space-y-2 bg-[#1C1410] border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F2A93B] uppercase tracking-wider">
                    {filteredGallery[activeLightboxIndex].category} • Gastronomy Series
                  </span>
                  <span className="text-xs text-white/50 font-bold">
                    {activeLightboxIndex + 1} / {filteredGallery.length}
                  </span>
                </div>
                <h3 className="font-display text-xl uppercase text-white">
                  {filteredGallery[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FDF6EC]/80 leading-relaxed font-normal">
                  {filteredGallery[activeLightboxIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

