'use client';

import React, { useState } from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-dark font-medium leading-tight">
            Everything You Need to Know
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-light">
            Clear, transparent answers about sessions, modalities, and getting started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {DOCTOR_PROFILE.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-surface border-primary/30 shadow-subtle' 
                    : 'bg-surface/70 border-border hover:border-border/90'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-primary-dark">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-primary/10 text-primary' : 'bg-surface-muted text-text-muted'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-text-secondary leading-relaxed font-light animate-fade-in border-t border-border/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
