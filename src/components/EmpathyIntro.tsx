'use client';

import React from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { Heart, Compass, Shield } from 'lucide-react';

export const EmpathyIntro: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
            {DOCTOR_PROFILE.empathyBanner.eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-dark font-medium leading-tight">
            {DOCTOR_PROFILE.empathyBanner.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Soulful Lead Quote Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-surface-muted border border-border/80 shadow-subtle relative">
              <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-accent mb-6">
                <Heart className="w-5 h-5" />
              </div>
              <p className="font-serif text-lg sm:text-xl text-primary-dark italic leading-relaxed">
                {DOCTOR_PROFILE.empathyBanner.leadQuote}
              </p>
              <div className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span className="text-xs tracking-wide uppercase text-text-muted font-medium">
                  A compassionate clinical perspective
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Thoughtful, Grounding Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-light">
            <p>
              {DOCTOR_PROFILE.empathyBanner.paragraphs[0]}
            </p>
            <p>
              {DOCTOR_PROFILE.empathyBanner.paragraphs[1]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-background border border-border/60">
                <h4 className="font-medium text-primary-dark text-sm mb-1 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  Emotional & Physical Safety
                </h4>
                <p className="text-xs text-text-muted">
                  Carefully paced work emphasizing nervous system stabilization and calm daily regulation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border/60">
                <h4 className="font-medium text-primary-dark text-sm mb-1 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-secondary" />
                  Depth Meets Practical Tools
                </h4>
                <p className="text-xs text-text-muted">
                  Structured evidence-based methods (CBT, EMDR) balanced with reflective self-understanding.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
