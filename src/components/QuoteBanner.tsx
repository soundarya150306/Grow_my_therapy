'use client';

import React from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { Quote } from 'lucide-react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-primary-dark text-background relative overflow-hidden">
      {/* Decorative organic background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="w-12 h-12 rounded-full bg-primary-light/40 border border-primary-light/60 flex items-center justify-center mx-auto text-secondary-light">
          <Quote className="w-6 h-6" />
        </div>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-normal leading-[1.3] text-surface tracking-tight">
          “{DOCTOR_PROFILE.philosophyQuote.quote}”
        </blockquote>

        <div className="pt-2 flex flex-col items-center">
          <cite className="not-italic font-medium text-base text-surface-muted">
            {DOCTOR_PROFILE.philosophyQuote.author}
          </cite>
          <span className="text-xs text-accent-soft font-light tracking-wider uppercase mt-1">
            {DOCTOR_PROFILE.philosophyQuote.role}
          </span>
        </div>
      </div>
    </section>
  );
};
