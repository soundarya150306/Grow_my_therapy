'use client';

import React from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { Heart, Compass, Shield } from 'lucide-react';

export const EmpathyIntro: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-border relative overflow-hidden perspective-2000">
      {/* 3D Floating Orbs */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-accent-soft/30 rounded-full blur-3xl pointer-events-none animate-float-orb" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
            {DOCTOR_PROFILE.empathyBanner.eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-dark font-medium leading-tight">
            {DOCTOR_PROFILE.empathyBanner.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Soulful Lead Quote Card with 3D Tilt */}
          <div className="lg:col-span-5">
            <ThreeDTilt maxTilt={7} scale={1.02} glare={true} glareOpacity={0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-surface-muted/80 backdrop-blur-sm border border-border/80 shadow-3d-elevated relative preserve-3d">
                <div className="w-11 h-11 rounded-2xl bg-accent-soft flex items-center justify-center text-accent mb-6 shadow-sm translate-z-30">
                  <Heart className="w-5 h-5" />
                </div>
                <p className="font-serif text-lg sm:text-xl text-primary-dark italic leading-relaxed translate-z-20">
                  {DOCTOR_PROFILE.empathyBanner.leadQuote}
                </p>
                <div className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3 translate-z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs tracking-wide uppercase text-text-muted font-medium">
                    A compassionate clinical perspective
                  </span>
                </div>
              </div>
            </ThreeDTilt>
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
              <ThreeDTilt maxTilt={5} scale={1.02} glare={false}>
                <div className="p-5 rounded-2xl bg-background border border-border/70 shadow-3d-subtle hover:border-accent/40 transition-colors">
                  <h4 className="font-medium text-primary-dark text-sm mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    Emotional & Physical Safety
                  </h4>
                  <p className="text-xs text-text-muted">
                    Carefully paced work emphasizing nervous system stabilization and calm daily regulation.
                  </p>
                </div>
              </ThreeDTilt>

              <ThreeDTilt maxTilt={5} scale={1.02} glare={false}>
                <div className="p-5 rounded-2xl bg-background border border-border/70 shadow-3d-subtle hover:border-accent/40 transition-colors">
                  <h4 className="font-medium text-primary-dark text-sm mb-1 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-secondary" />
                    Depth Meets Practical Tools
                  </h4>
                  <p className="text-xs text-text-muted">
                    Structured evidence-based methods (CBT, EMDR) balanced with reflective self-understanding.
                  </p>
                </div>
              </ThreeDTilt>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
