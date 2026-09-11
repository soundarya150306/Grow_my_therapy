'use client';

import React from 'react';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/data/profile';
import { MapPin, Sun, ShieldCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface OurOfficeProps {
  onOpenConsultation: () => void;
}

export const OurOffice: React.FC<OurOfficeProps> = ({ onOpenConsultation }) => {
  const { office } = DOCTOR_PROFILE;

  return (
    <section id="our-office" className="py-20 md:py-28 bg-surface-muted/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-secondary uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            <span>{office.eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary-dark font-medium leading-tight">
            {office.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            {office.description}
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Main Hero Image (Left 7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden bg-surface border border-border shadow-elevated group">
            <Image
              src={office.images[0].url}
              alt={office.images[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-70" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-surface/90 backdrop-blur-md border border-border/80 shadow-elevated">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                Sanctuary in Santa Monica
              </span>
              <p className="text-xs sm:text-sm font-serif text-primary-dark font-medium">
                {office.images[0].caption}
              </p>
            </div>
          </div>

          {/* Supporting Images Stack (Right 5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Image 2 */}
            <div className="relative min-h-[220px] rounded-2xl overflow-hidden bg-surface border border-border shadow-subtle group">
              <Image
                src={office.images[1].url}
                alt={office.images[1].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-surface/90 backdrop-blur-md border border-border text-[11px] font-medium text-primary-dark">
                {office.images[1].caption}
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative min-h-[220px] rounded-2xl overflow-hidden bg-surface border border-border shadow-subtle group">
              <Image
                src={office.images[2].url}
                alt={office.images[2].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-surface/90 backdrop-blur-md border border-border text-[11px] font-medium text-primary-dark">
                {office.images[2].caption}
              </div>
            </div>

          </div>

        </div>

        {/* Office Features & Session Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {office.features.map((feat, i) => (
            <div key={i} className="p-5 rounded-2xl bg-surface border border-border/80 shadow-subtle">
              <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center text-accent mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-semibold text-primary-dark mb-1">
                {feat.title}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Location Reassurance Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-primary-dark">
                {DOCTOR_PROFILE.address.full}
              </p>
              <p className="text-xs text-text-muted">
                Convenient parking, confidential entry, ADA accessible, and California statewide telehealth
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-background text-xs font-semibold tracking-wide transition-colors shrink-0 shadow-subtle"
          >
            Visit the Office
          </button>
        </div>

      </div>
    </section>
  );
};
