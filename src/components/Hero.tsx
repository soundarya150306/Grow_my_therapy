'use client';

import React, { useState, useEffect } from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Heart, 
  Wind, 
  Feather, 
  Sun,
  Shield
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [seconds, setSeconds] = useState(4);
  const [isInteractiveBreathing, setIsInteractiveBreathing] = useState(false);

  // Calming Box-Breathing interactive cycle for 3D Zen sphere
  useEffect(() => {
    const phases: Array<'Inhale' | 'Hold' | 'Exhale' | 'Rest'> = ['Inhale', 'Hold', 'Exhale', 'Rest'];
    let currentIdx = 0;
    
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          currentIdx = (currentIdx + 1) % phases.length;
          setBreathPhase(phases[currentIdx]);
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background perspective-2000">
      {/* 3D Floating Calming Ambient Orbs */}
      <div className="absolute top-12 right-1/4 w-80 h-80 rounded-full bg-accent-soft/50 blur-3xl pointer-events-none animate-float-orb" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary-light/40 blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-primary-light/10 blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-7">
            
            {/* Location & Credentials Badge with 3D Depth */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md border border-border text-xs font-semibold tracking-wider text-accent uppercase shadow-3d-subtle hover:border-accent/40 transition-colors">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-light text-background font-medium text-sm transition-all duration-300 shadow-3d-elevated active:scale-[0.98] group hover:-translate-y-0.5"
              >
                <span>{DOCTOR_PROFILE.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-surface/90 hover:bg-surface border border-border text-text-primary font-medium text-sm transition-all duration-300 shadow-3d-subtle hover:-translate-y-0.5"
              >
                <span>{DOCTOR_PROFILE.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Reassurance Badges */}
            <div className="pt-4 border-t border-border/80 w-full flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>In-person Santa Monica sanctuary</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>California statewide telehealth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Evidence-based CBT, EMDR & Somatic</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Sanctuary & Calm Resonance Center (No Doctor Photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              
              {/* 3D Depth Card Container with interactive mouse tracking */}
              <ThreeDTilt maxTilt={10} scale={1.02} glare={true} glareOpacity={0.12} className="w-full">
                <div className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-surface via-surface to-surface-muted/60 border border-border/80 shadow-3d-elevated overflow-hidden preserve-3d">
                  
                  {/* Subtle 3D Ambient Lighting Layers */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-soft/60 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-light/50 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

                  {/* Header within 3D Sanctuary Card */}
                  <div className="relative z-10 flex items-center justify-between pb-6 border-b border-border/70 translate-z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-accent-soft flex items-center justify-center text-accent shadow-sm">
                        <Feather className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-primary-dark">
                          Therapeutic Sanctuary
                        </h3>
                        <p className="text-[11px] text-text-muted">
                          Mindful • Grounded • Evidence-Based
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent-soft text-accent text-[10px] font-semibold tracking-wider uppercase">
                      Santa Monica
                    </span>
                  </div>

                  {/* Center: 3D Interactive Zen Calming Resonance Sphere */}
                  <div className="relative py-8 my-2 flex flex-col items-center justify-center translate-z-40">
                    
                    {/* Glowing outer 3D rings */}
                    <div className="relative flex items-center justify-center w-52 h-52">
                      
                      {/* Animated 3D Ring 1 */}
                      <div 
                        className={`absolute inset-0 rounded-full border border-accent/30 transition-all duration-1000 ${
                          breathPhase === 'Inhale' ? 'scale-110 opacity-80 border-accent' : 
                          breathPhase === 'Hold' ? 'scale-110 opacity-90 border-secondary' : 
                          breathPhase === 'Exhale' ? 'scale-90 opacity-40 border-accent-soft' : 'scale-95 opacity-50'
                        }`} 
                      />

                      {/* Animated 3D Ring 2 with Glow */}
                      <div 
                        className={`absolute inset-4 rounded-full bg-gradient-to-tr from-accent/15 via-secondary/10 to-accent-soft/30 backdrop-blur-sm border border-border/60 transition-all duration-1000 shadow-3d-glow ${
                          breathPhase === 'Inhale' ? 'scale-105' : 
                          breathPhase === 'Hold' ? 'scale-105' : 
                          breathPhase === 'Exhale' ? 'scale-95' : 'scale-100'
                        }`} 
                      />

                      {/* Core 3D Zen Sphere */}
                      <div 
                        onClick={() => setIsInteractiveBreathing(!isInteractiveBreathing)}
                        className={`relative w-32 h-32 rounded-full cursor-pointer flex flex-col items-center justify-center text-center p-3 transition-all duration-1000 bg-gradient-to-br from-surface via-surface-muted to-accent-soft border border-border/90 shadow-3d-elevated group hover:scale-105 ${
                          breathPhase === 'Inhale' ? 'scale-105 shadow-3d-glow ring-4 ring-accent/20' : 
                          breathPhase === 'Hold' ? 'scale-105 ring-4 ring-secondary/20' : 
                          breathPhase === 'Exhale' ? 'scale-95' : 'scale-100'
                        }`}
                      >
                        <Wind className="w-5 h-5 text-accent mb-1 transition-transform group-hover:rotate-12" />
                        <span className="text-xs font-semibold text-primary-dark tracking-wide">
                          {breathPhase}
                        </span>
                        <span className="text-[10px] text-text-muted font-medium">
                          {seconds}s • Reset Calm
                        </span>
                      </div>

                    </div>

                    <p className="text-[11px] text-text-muted text-center mt-3 font-light">
                      Box-breathing resonance • Gentle nervous system regulation
                    </p>
                  </div>

                  {/* 3D Pillars of Care Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/70 relative z-10 translate-z-30">
                    <div className="p-3 rounded-2xl bg-surface/80 border border-border/70 shadow-sm hover:border-accent/40 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-3.5 h-3.5 text-accent" />
                        <span className="text-xs font-semibold text-primary-dark">Safe Space</span>
                      </div>
                      <p className="text-[10px] text-text-muted leading-tight">
                        Confidential, non-judgmental environment
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-surface/80 border border-border/70 shadow-sm hover:border-accent/40 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-secondary" />
                        <span className="text-xs font-semibold text-primary-dark">EMDR & CBT</span>
                      </div>
                      <p className="text-[10px] text-text-muted leading-tight">
                        Evidence-based healing for deep relief
                      </p>
                    </div>
                  </div>

                  {/* Bottom Practice Tag */}
                  <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-text-secondary translate-z-20">
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      <span>Santa Monica & Telehealth</span>
                    </div>
                    <button 
                      onClick={onOpenConsultation}
                      className="text-primary font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Begin Journey</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </ThreeDTilt>

              {/* Floating 3D Satellite Badges */}
              <div className="absolute -top-4 -left-6 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-3d-elevated text-xs font-medium text-text-primary animate-float-3d">
                <Sun className="w-4 h-4 text-secondary" />
                <span>Quiet Ocean Air Healing</span>
              </div>

              <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-3d-elevated text-xs font-medium text-text-primary animate-float-3d-slow">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Doctor of Psychology (PsyD)</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
