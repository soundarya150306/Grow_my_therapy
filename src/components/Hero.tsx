'use client';

import React from 'react';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ArrowRight, Sparkles, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background">
      {/* Subtle organic background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[550px] h-[550px] rounded-full bg-accent-soft/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-secondary-light/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-7">
            
            {/* Location & Credentials Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-semibold tracking-wider text-accent uppercase shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{DOCTOR_PROFILE.hero.eyebrow}</span>
            </div>

            {/* Main Editorial H1 */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.18] text-primary-dark tracking-tight">
              {DOCTOR_PROFILE.hero.h1}
            </h1>

            {/* Subtitle with High Psychological Warmth */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
              {DOCTOR_PROFILE.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-light text-background font-medium text-sm transition-all duration-300 shadow-elevated active:scale-[0.98] group"
              >
                <span>{DOCTOR_PROFILE.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface hover:bg-surface-muted border border-border text-text-primary font-medium text-sm transition-all duration-300 shadow-subtle"
              >
                <span>{DOCTOR_PROFILE.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Reassurance Badges */}
            <div className="pt-4 border-t border-border/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>In-person Santa Monica office</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>California statewide telehealth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Evidence-based CBT & EMDR</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Decorative Framing */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent-soft/60 to-secondary-light/40 -rotate-2 transform transition-transform duration-500 group-hover:rotate-0" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-surface border border-border shadow-elevated p-2">
                <div className="relative h-[440px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-surface-muted">
                  <Image
                    src={DOCTOR_PROFILE.hero.image}
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  
                  {/* Subtle Gradient Shadow at bottom for badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-60" />

                  {/* Floating Doctor Profile Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-surface/95 backdrop-blur-md border border-border/60 shadow-elevated">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-primary-dark">
                          {DOCTOR_PROFILE.name}
                        </h4>
                        <p className="text-[11px] text-text-secondary font-medium">
                          PsyD • Licensed Clinical Psychologist
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-accent-soft text-accent text-[10px] font-semibold tracking-wide uppercase">
                        Accepting Clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Location Floating Tag */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface border border-border shadow-elevated text-xs font-medium text-text-primary animate-fade-in">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>Santa Monica, CA 90401</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
