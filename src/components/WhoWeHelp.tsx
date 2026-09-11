'use client';

import React from 'react';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhoWeHelpProps {
  onOpenConsultation: () => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onOpenConsultation }) => {
  return (
    <section id="who-we-help" className="py-20 md:py-28 bg-background relative perspective-2000 overflow-hidden">
      {/* 3D Ambient Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-soft/30 rounded-full blur-3xl pointer-events-none animate-float-orb" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary-light/30 rounded-full blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              CLIENT POPULATIONS & FOCUS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary-dark font-medium leading-tight">
              Who I Support in My Practice
            </h2>
            <p className="text-base text-text-secondary leading-relaxed font-light">
              Therapy tailored specifically for adults navigating the complex intersection of high expectations, nervous system stress, and unresolved experiences.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors group pb-1 border-b border-primary/30"
          >
            <span>See if we are a good fit</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Column 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTOR_PROFILE.whoWeHelp.map((item) => (
            <ThreeDTilt key={item.id} maxTilt={8} scale={1.02} glare={true} glareOpacity={0.12} className="h-full">
              <div 
                className="flex flex-col h-full rounded-3xl bg-surface/95 backdrop-blur-sm border border-border overflow-hidden shadow-3d-subtle hover:shadow-3d-elevated transition-all duration-300 group preserve-3d"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-surface-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent opacity-50" />
                  
                  <div className="absolute top-4 left-4 translate-z-30">
                    <span className="px-3.5 py-1.5 rounded-full bg-surface/95 backdrop-blur-md text-primary-dark text-xs font-semibold shadow-3d-subtle border border-border/80">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6 translate-z-20">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-primary-dark font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-secondary italic">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-5 border-t border-border/60">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </ThreeDTilt>
          ))}
        </div>

      </div>
    </section>
  );
};
