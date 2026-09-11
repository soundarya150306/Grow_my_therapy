'use client';

import React, { useState } from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { ArrowRight, ShieldCheck, Sparkles, Compass, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-accent" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-secondary" />;
      case 'Compass': return <Compass className="w-6 h-6 text-primary" />;
      default: return <Sparkles className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-surface border-y border-border relative perspective-2000 overflow-hidden">
      {/* 3D Ambient Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-accent-soft/40 rounded-full blur-3xl pointer-events-none animate-float-orb" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-light/30 rounded-full blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-7s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">
            SPECIALIZED CLINICAL SERVICES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary-dark font-medium leading-tight">
            Evidence-Based Therapy for Lasting Relief
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-light">
            Every service integrates practical cognitive-behavioral tools with somatic mindfulness and depth-oriented insight.
          </p>
        </div>

        {/* 3 Core Services 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {DOCTOR_PROFILE.services.map((service) => {
            const isExpanded = expandedService === service.id;

            return (
              <ThreeDTilt key={service.id} maxTilt={8} scale={1.02} glare={true} glareOpacity={0.12} className="h-full">
                <div
                  className="flex flex-col h-full rounded-3xl bg-background/95 backdrop-blur-sm border border-border p-7 sm:p-8 shadow-3d-subtle hover:shadow-3d-elevated transition-all duration-300 relative group preserve-3d"
                >
                  {/* Icon Container with 3D Pop */}
                  <div className="w-13 h-13 p-3 rounded-2xl bg-surface border border-border/80 flex items-center justify-center mb-6 shadow-3d-subtle group-hover:scale-110 transition-transform translate-z-30 w-fit">
                    {getIcon(service.icon)}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2 mb-4 translate-z-20">
                    <h3 className="font-serif text-xl sm:text-2xl text-primary-dark font-medium group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-secondary italic">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-text-secondary leading-relaxed font-light mb-6 translate-z-10">
                    {service.shortDesc}
                  </p>

                  {/* Expanded Full Details */}
                  {isExpanded && (
                    <div className="space-y-5 pt-4 border-t border-border/60 animate-fade-in text-xs text-text-secondary translate-z-20">
                      <p className="leading-relaxed font-light">
                        {service.fullDesc}
                      </p>

                      <div>
                        <span className="font-semibold text-primary-dark block mb-2">Common Signs:</span>
                        <ul className="space-y-1.5">
                          {service.indicators.map((ind, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{ind}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-semibold text-primary-dark block mb-2">Modality Focus:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.modalities.map((mod, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md bg-surface text-[11px] font-medium border border-border shadow-sm">
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toggle & CTA */}
                  <div className="pt-6 mt-auto border-t border-border/60 flex items-center justify-between translate-z-20">
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="text-xs font-semibold text-text-muted hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-semibold text-primary hover:text-primary-light flex items-center gap-1 group/btn"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </ThreeDTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
};
