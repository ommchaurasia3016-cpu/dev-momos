import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#FDF6EC] text-[#241A14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C1272D]/10 text-[#C1272D] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 fill-[#C1272D]" />
            <span>Got Questions? We’ve Got Answers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#241A14]">
            FREQUENTLY ASKED <span className="text-[#C1272D]">MOMO QUERIES</span>
          </h2>
          <p className="text-base text-[#241A14]/75 font-medium">
            Everything you wanted to know about our dough, delivery zones, bookings, and spice levels.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C1272D]/40 shadow-md'
                    : 'bg-white/80 border-[#241A14]/10 hover:border-[#241A14]/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-md bg-[#F2A93B]/20 text-[#241A14]">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#241A14]">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-full bg-[#FDF6EC] text-[#241A14] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#C1272D] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#241A14]/80 leading-relaxed border-t border-[#241A14]/5 mt-2"
                    >
                      <p className="pt-3">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Helpdesk Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#241A14]/10 text-center text-xs text-[#241A14]/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Still have an unanswered question about catering or dietary specs?</span>
          <a
            href="https://wa.me/919871044220?text=Hello%20DEV%20MOMO%27S,%20I%20have%20a%20question!"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#C1272D] hover:underline"
          >
            Chat with our Kitchen Manager on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
};
