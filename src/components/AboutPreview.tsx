'use client';

import React from 'react';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { ArrowRight, CheckCircle2, Award, BookOpen, HeartHandshake } from 'lucide-react';

interface AboutPreviewProps {
  onOpenConsultation: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative perspective-2000 overflow-hidden">
      {/* 3D Ambient Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-soft/30 rounded-full blur-3xl pointer-events-none animate-float-orb" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-light/30 rounded-full blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Photo & Credentials Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <ThreeDTilt maxTilt={8} scale={1.02} glare={true} glareOpacity={0.15}>
                <div className="relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden bg-surface-muted border border-border shadow-3d-elevated preserve-3d">
                  <Image
                    src={DOCTOR_PROFILE.hero.image}
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-75" />

                  {/* 3D Depth Floating Credential Pill */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-3d-elevated translate-z-30">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary-dark">
                          Licensed Clinical Psychologist
                        </p>
                        <p className="text-[11px] text-text-muted">
                          Doctor of Psychology (PsyD) • California PSY28914
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ThreeDTilt>

              {/* 3D Floating Decorative Accent Badge */}
              <div className="absolute -top-4 -right-4 hidden sm:block p-3.5 px-4 rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-3d-elevated text-xs animate-float-3d">
                <span className="font-semibold text-accent block">Warm & Grounded</span>
                <p className="text-[10px] text-text-muted">Depth-oriented therapy</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Clinical Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                {DOCTOR_PROFILE.about.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary-dark font-medium leading-tight">
                {DOCTOR_PROFILE.about.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-primary font-medium leading-relaxed">
              {DOCTOR_PROFILE.about.bioLead}
            </p>

            <div className="space-y-4 text-text-secondary text-base leading-relaxed font-light">
              <p>{DOCTOR_PROFILE.about.paragraphs[0]}</p>
              <p>{DOCTOR_PROFILE.about.paragraphs[1]}</p>
            </div>

            {/* Credentials Matrix with 3D depth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {DOCTOR_PROFILE.about.credentials.map((c, i) => (
                <ThreeDTilt key={i} maxTilt={6} scale={1.02} glare={false}>
                  <div className="p-4 rounded-2xl bg-surface/90 border border-border/70 shadow-3d-subtle hover:border-accent/40 transition-colors">
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block mb-0.5">
                      {c.label}
                    </span>
                    <span className="text-sm font-medium text-primary-dark">
                      {c.value}
                    </span>
                  </div>
                </ThreeDTilt>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-light text-background text-sm font-medium transition-all shadow-3d-elevated hover:scale-105 group"
              >
                <span>Schedule a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors py-2"
              >
                Explore Specialized Services →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
