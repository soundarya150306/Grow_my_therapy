'use client';

import React from 'react';
import Image from 'next/image';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ArrowRight, CheckCircle2, Award, BookOpen, HeartHandshake } from 'lucide-react';

interface AboutPreviewProps {
  onOpenConsultation: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-[480px] sm:h-[520px] rounded-2xl overflow-hidden bg-surface-muted border border-border shadow-elevated">
                <Image
                  src={DOCTOR_PROFILE.hero.image}
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/95 backdrop-blur-md border border-border shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-dark">
                        Licensed Clinical Psychologist
                      </p>
                      <p className="text-[11px] text-text-muted">
                        Doctor of Psychology (PsyD) • California
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="absolute -top-4 -right-4 hidden sm:block p-3.5 rounded-xl bg-surface border border-border shadow-elevated text-xs">
                <span className="font-semibold text-accent">Warm & Grounded</span>
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

            {/* Credentials Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {DOCTOR_PROFILE.about.credentials.map((c, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-surface border border-border/70">
                  <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium text-primary-dark">
                    {c.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-light text-background text-sm font-medium transition-all shadow-subtle group"
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
