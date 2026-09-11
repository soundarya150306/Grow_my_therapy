'use client';

import React, { useState } from 'react';
import { DOCTOR_PROFILE, ServiceItem } from '@/data/profile';
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
    <section id="services" className="py-20 md:py-28 bg-surface border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {DOCTOR_PROFILE.services.map((service) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="flex flex-col rounded-2xl bg-background border border-border p-7 sm:p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 relative group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-surface border border-border/80 flex items-center justify-center mb-6 shadow-subtle group-hover:scale-105 transition-transform">
                  {getIcon(service.icon)}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2 mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-primary-dark font-medium group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-secondary italic">
                    {service.tagline}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-sm text-text-secondary leading-relaxed font-light mb-6">
                  {service.shortDesc}
                </p>

                {/* Expanded Full Details */}
                {isExpanded && (
                  <div className="space-y-5 pt-4 border-t border-border/60 animate-fade-in text-xs text-text-secondary">
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
                          <span key={i} className="px-2.5 py-1 rounded-md bg-surface text-[11px] font-medium border border-border">
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Toggle & CTA */}
                <div className="pt-6 mt-auto border-t border-border/60 flex items-center justify-between">
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
