import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Sparkles, 
  Heart, 
  Award, 
  ChefHat, 
  ShieldCheck, 
  CheckCircle2,
  Users,
  Building2,
  Star
} from 'lucide-react';
import { STATS_DATA } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const craftPillars = [
    {
      title: "0.8mm Translucent Wrappers",
      description: "No thick, gummy dough balls here. We roll our dough paper-thin with 18 precise hand-pinched pleats that lock in natural steam and aromatic meat broth.",
      badge: "Pure Craft",
      icon: Award
    },
    {
      title: "12-Hour Himalayan Marinades",
      description: "Coarsely ground whole chicken thigh, fresh malai paneer, and mountain spices steeped with ginger, scallions, and pure desi butter for explosive juiciness.",
      badge: "Zero Compromise",
      icon: Flame
    },
    {
      title: "The Legendary Devil Chutney",
      description: "Brewed daily with fiery Dalle Khursani chilies, stone-ground garlic, roasted tomatoes, and zero artificial preservatives. Bold, spicy, and addictive.",
      badge: "House Secret",
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FDF6EC] text-[#241A14] relative overflow-hidden">
      
      {/* Subtle background doodle accents */}
      <div className="absolute top-12 left-8 w-64 h-64 bg-[#F2A93B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-8 w-80 h-80 bg-[#C1272D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C1272D]/10 text-[#C1272D] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-[#C1272D]" />
            <span>Our Origin & Obsession</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#241A14]">
            BORN ON THE STREETS, <br />
            <span className="text-[#C1272D]">CRAFTED FOR TRUE FOODIES</span>
          </h2>
          <p className="text-base sm:text-lg text-[#241A14]/80 leading-relaxed font-medium">
            We started DEV MOMO'S with one simple frustration: tired of eating thick, rubbery flour balls with tasteless stuffing and watery chili sauce. We set out to honor real Himalayan street traditions.
          </p>
        </div>

        {/* Founder Story & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Story Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-[#FFF9F0] p-6 sm:p-8 rounded-3xl border-2 border-[#F2A93B]/30 shadow-sm relative">
              <div className="absolute -top-4 -right-4 bg-[#F2A93B] text-[#241A14] font-handwriting font-bold text-xs px-3 py-1.5 rounded-xl rotate-6 shadow-md">
                "Steam is Life!"
              </div>

              <h3 className="text-2xl font-bold text-[#241A14] mb-3 flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-[#C1272D]" />
                <span>The DEV MOMO'S Manifesto</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#241A14]/85 leading-relaxed">
                <p>
                  In 2019, our founder Dev spent six months traveling through Darjeeling, Gangtok, and Kathmandu learning the delicate art of folding momos from master street hawkers. He realized the magic lives in two sacred rules: <strong>an ultra-thin translucent wrapper</strong> and <strong>a fiercely fresh stuffing that releases piping hot broth when bitten</strong>.
                </p>
                <p>
                  Today, across 14 bustling kitchens in Delhi, Bengaluru, Mumbai, and Pune, our team of dedicated momo artisans hand-pleat every single piece at dawn. We never freeze our dough, we never use MSG, and we roast our whole spices in small batches every morning.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#241A14]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#241A14]">Devashish "Dev" Roy</h4>
                  <p className="text-xs text-[#241A14]/60">Founder & Chief Momo Artisan</p>
                </div>
                <div className="font-handwriting text-xl text-[#C1272D] font-bold">
                  Dev Roy
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#4A6B4D]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#4A6B4D] shrink-0" />
                <span className="text-xs font-bold text-[#241A14]">100% Zero Preservatives</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#C1272D]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C1272D] shrink-0" />
                <span className="text-xs font-bold text-[#241A14]">Pure Vegetarian Dedicated Kitchens</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Gallery Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white aspect-4/5 group bg-[#241A14]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=85"
                  alt="Momo hand pleating craft"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-110"
                />
              </div>
              <div className="p-4 rounded-2xl bg-[#C1272D] text-white shadow-md">
                <p className="font-display text-2xl font-bold">18 PLEATS</p>
                <p className="text-xs text-white/90">Exact hand-pinched folds per dumpling</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-2xl bg-[#F2A93B] text-[#241A14] shadow-md">
                <p className="font-display text-2xl font-bold">6:00 AM</p>
                <p className="text-xs font-semibold text-[#241A14]/80">Fresh daily batch prep starts</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white aspect-4/5 group bg-[#241A14]">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=85"
                  alt="Charcoal Tandoor Skewers with Lemon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-110"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Animated Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-5 sm:p-6 rounded-3xl border border-[#241A14]/10 shadow-md text-center hover:border-[#C1272D]/50 transition-colors"
            >
              <p className="font-display text-3xl sm:text-4xl text-[#C1272D] font-extrabold mb-1">
                {stat.value}
              </p>
              <h4 className="font-bold text-sm sm:text-base text-[#241A14]">
                {stat.label}
              </h4>
              <p className="text-xs text-[#241A14]/60 mt-1">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 Craft Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#241A14]">
              WHAT MAKES DEV MOMO'S DIFFERENT?
            </h3>
            <p className="text-sm text-[#241A14]/70 mt-1">Our 3 unbending culinary rules</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {craftPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-[#FFF9F0] p-6 sm:p-7 rounded-3xl border-2 border-[#241A14]/10 hover:border-[#C1272D] transition-all duration-300 shadow-sm hover:shadow-lg group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#C1272D]/10 flex items-center justify-center text-[#C1272D] group-hover:bg-[#C1272D] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#F2A93B]/20 text-[#241A14] border border-[#F2A93B]/40">
                        {pillar.badge}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#241A14] mb-2 group-hover:text-[#C1272D] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#241A14]/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
