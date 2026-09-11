'use client';

import React from 'react';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { MapPin, CheckCircle2, Sparkles } from 'lucide-react';

interface OurOfficeProps {
  onOpenConsultation: () => void;
}

export const OurOffice: React.FC<OurOfficeProps> = ({ onOpenConsultation }) => {
  const { office } = DOCTOR_PROFILE;

  return (
    <section id="our-office" className="py-20 md:py-28 bg-surface-muted/40 relative overflow-hidden perspective-2000">
      {/* Background 3D Ambient Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-soft/30 rounded-full blur-3xl pointer-events-none animate-float-orb" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-light/30 rounded-full blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-6s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border text-xs font-semibold text-secondary uppercase tracking-wider shadow-sm">
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

        {/* Asymmetric 3D Editorial Gallery (Zero text/descriptions on pictures) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Main Hero Image (Left 7 cols) with 3D Tilt */}
          <div className="lg:col-span-7">
            <ThreeDTilt maxTilt={6} scale={1.015} glare={true} glareOpacity={0.15} className="h-full">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden bg-surface border border-border shadow-3d-elevated group">
                <Image
                  src={office.images[0].url}
                  alt={office.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </ThreeDTilt>
          </div>

          {/* Supporting Images Stack (Right 5 cols) with 3D Tilt */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Image 2 (Clean photo without text) */}
            <ThreeDTilt maxTilt={8} scale={1.02} glare={true} glareOpacity={0.12}>
              <div className="relative h-[225px] sm:h-[228px] w-full rounded-2xl overflow-hidden bg-surface border border-border shadow-3d-subtle group">
                <Image
                  src={office.images[1].url}
                  alt={office.images[1].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
            </ThreeDTilt>

            {/* Image 3 (Clean photo without text) */}
            <ThreeDTilt maxTilt={8} scale={1.02} glare={true} glareOpacity={0.12}>
              <div className="relative h-[225px] sm:h-[228px] w-full rounded-2xl overflow-hidden bg-surface border border-border shadow-3d-subtle group">
                <Image
                  src={office.images[2].url}
                  alt={office.images[2].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
            </ThreeDTilt>

          </div>

        </div>

        {/* Office Features & Session Options with 3D Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {office.features.map((feat, i) => (
            <ThreeDTilt key={i} maxTilt={6} scale={1.02} glare={false}>
              <div className="p-6 rounded-2xl bg-surface/95 backdrop-blur-sm border border-border/80 shadow-3d-subtle h-full flex flex-col justify-between hover:border-accent/40 transition-colors">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-accent-soft flex items-center justify-center text-accent mb-3.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-primary-dark mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </ThreeDTilt>
          ))}
        </div>

        {/* Location Reassurance Bar */}
        <ThreeDTilt maxTilt={4} scale={1.01} glare={false} className="mt-10">
          <div className="p-6 sm:p-7 rounded-3xl bg-surface/95 backdrop-blur-md border border-border shadow-3d-elevated flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-sm text-text-secondary">
              <div className="w-10 h-10 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-primary-dark text-base">
                  {DOCTOR_PROFILE.address.full}
                </p>
                <p className="text-xs text-text-muted">
                  Convenient parking, confidential entry, ADA accessible, and California statewide telehealth
                </p>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-full bg-primary hover:bg-primary-light text-background text-xs font-semibold tracking-wide transition-all shrink-0 shadow-3d-subtle hover:scale-105"
            >
              Visit the Office
            </button>
          </div>
        </ThreeDTilt>

      </div>
    </section>
  );
};
