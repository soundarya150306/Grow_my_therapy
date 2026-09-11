'use client';

import React from 'react';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/data/profile';

export const PhotoBreak: React.FC = () => {
  return (
    <section className="relative h-[380px] sm:h-[460px] w-full overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80"
        alt="Calm Pacific Coastline and grounded natural serenity in California"
        fill
        className="object-cover object-center"
        priority={false}
      />
      
      {/* Dark warm overlay */}
      <div className="absolute inset-0 bg-primary-dark/65 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-surface space-y-4">
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-surface-muted">
          {DOCTOR_PROFILE.photoBreak.statement}
        </p>
        <p className="text-xs sm:text-sm tracking-widest uppercase text-accent-soft/90 font-light">
          {DOCTOR_PROFILE.photoBreak.caption}
        </p>
      </div>
    </section>
  );
};
