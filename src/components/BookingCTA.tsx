'use client';

import React from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { ArrowRight, MapPin, Calendar, Clock, ShieldCheck } from 'lucide-react';

interface BookingCTAProps {
  onOpenConsultation: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-muted/60 relative overflow-hidden border-t border-border perspective-2000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ThreeDTilt maxTilt={5} scale={1.01} glare={true} glareOpacity={0.08}>
          <div className="relative rounded-3xl bg-primary-dark text-background p-8 sm:p-12 md:p-16 overflow-hidden shadow-3d-elevated preserve-3d">
            
            {/* 3D Botanical glow background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/40 rounded-full blur-3xl pointer-events-none animate-float-orb" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-5s' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6 translate-z-20">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light/60 border border-primary-light text-xs font-semibold text-secondary-light uppercase tracking-wider shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-secondary" />
                  <span>{DOCTOR_PROFILE.bookingCta.eyebrow}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-surface font-normal leading-tight">
                  {DOCTOR_PROFILE.bookingCta.heading}
                </h2>

                <p className="text-base sm:text-lg text-surface-muted/90 leading-relaxed font-light">
                  {DOCTOR_PROFILE.bookingCta.subheading}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary hover:bg-secondary/90 text-primary-dark font-semibold text-sm transition-all shadow-3d-elevated active:scale-[0.98] group hover:scale-105"
                  >
                    <span>{DOCTOR_PROFILE.bookingCta.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <p className="text-xs text-accent-soft/80 flex items-center gap-2 pt-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span>Free 15-minute introductory call • No obligation • HIPAA Compliant</span>
                </p>

              </div>

              {/* Right Card: Quick Location & Contact Summary with 3D Depth */}
              <div className="lg:col-span-5 translate-z-30">
                <div className="p-6 sm:p-7 rounded-2xl bg-surface/10 backdrop-blur-md border border-surface/15 space-y-5 text-sm shadow-3d-subtle">
                  <h4 className="font-serif text-lg text-surface font-medium border-b border-surface/15 pb-3">
                    Practice Information
                  </h4>

                  <div className="space-y-3.5 text-surface-muted/90 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-surface block">Santa Monica Office:</strong>
                        <span>{DOCTOR_PROFILE.address.full}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-surface block">Telehealth Sessions:</strong>
                        <span>{DOCTOR_PROFILE.contact.telehealthCoverage}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-surface block">Direct Contact:</strong>
                        <span>{DOCTOR_PROFILE.contact.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-surface-muted/70 italic">
                    *Prompt response within 24–48 business hours.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ThreeDTilt>

      </div>
    </section>
  );
};
