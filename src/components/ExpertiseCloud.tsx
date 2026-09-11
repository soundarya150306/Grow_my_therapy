'use client';

import React from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { Sparkles } from 'lucide-react';

export const ExpertiseCloud: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-surface-muted/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-semibold tracking-widest text-text-muted uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>AREAS OF CLINICAL FOCUS & EVIDENCE-BASED MODALITIES</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
          {DOCTOR_PROFILE.expertisePills.map((pill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-surface border border-border text-xs sm:text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary hover:shadow-subtle transition-all duration-200 cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
