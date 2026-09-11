'use client';

import React, { useState, useEffect, useRef } from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { ThreeDTilt } from './ThreeDTilt';
import { 
  ArrowRight, 
  CheckCircle2, 
  Wind, 
  Sun, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  Waves
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const [countdown, setCountdown] = useState<number>(4);
  const [cycleCount, setCycleCount] = useState<number>(0);

  const breathPhases = [
    { name: 'Inhale', duration: 4, instruction: 'Inhale the quiet ocean air...', color: 'text-accent', ringColor: 'border-accent' },
    { name: 'Hold', duration: 4, instruction: 'Hold gently, finding stillness...', color: 'text-secondary', ringColor: 'border-secondary' },
    { name: 'Exhale', duration: 4, instruction: 'Exhale slowly, release tension...', color: 'text-accent', ringColor: 'border-accent-soft' },
    { name: 'Rest', duration: 4, instruction: 'Rest & ground your body...', color: 'text-text-muted', ringColor: 'border-border' },
  ];

  const currentPhase = breathPhases[phaseIndex];

  // Timer effect that only runs when user starts the exercise
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setPhaseIndex((currIdx) => {
              const nextIdx = (currIdx + 1) % breathPhases.length;
              if (nextIdx === 0) {
                setCycleCount((c) => c + 1);
              }
              return nextIdx;
            });
            return breathPhases[(phaseIndex + 1) % breathPhases.length].duration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, phaseIndex, breathPhases]);

  const toggleBreathing = () => {
    setIsActive(!isActive);
  };

  const resetBreathing = () => {
    setIsActive(false);
    setPhaseIndex(0);
    setCountdown(4);
    setCycleCount(0);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background perspective-2000">
      {/* 3D Floating Calming Ambient Orbs */}
      <div className="absolute top-12 right-1/4 w-80 h-80 rounded-full bg-accent-soft/50 blur-3xl pointer-events-none animate-float-orb" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary-light/40 blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-primary-light/10 blur-3xl pointer-events-none animate-float-orb" style={{ animationDelay: '-8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
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

          {/* Right Column: Quiet Ocean Air Healing - Interactive Zen Breathing Sanctuary */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px]">
              
              {/* 3D Tilt Card with Organic, Clean Aesthetics (Uncluttered) */}
              <ThreeDTilt maxTilt={8} scale={1.02} glare={true} glareOpacity={0.12} className="w-full">
                <div className="relative rounded-[2.5rem] p-8 sm:p-10 bg-gradient-to-b from-surface/95 via-surface/90 to-surface-muted/70 backdrop-blur-xl border border-border/80 shadow-3d-elevated overflow-hidden preserve-3d">
                  
                  {/* Subtle Ocean Air Ambient Light Orbs */}
                  <div className="absolute top-0 right-0 w-56 h-56 bg-accent-soft/70 rounded-full blur-2xl pointer-events-none -mr-12 -mt-12" />
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary-light/60 rounded-full blur-2xl pointer-events-none -ml-12 -mb-12" />

                  {/* Header: Quiet Ocean Air Healing */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-1.5 pb-6 border-b border-border/60 translate-z-20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/80 text-accent text-xs font-semibold tracking-wider uppercase">
                      <Waves className="w-3.5 h-3.5 animate-pulse" />
                      <span>Quiet Ocean Air Healing</span>
                    </div>
                    <p className="text-xs text-text-muted font-light">
                      Santa Monica coastal rhythm • Somatic nervous system reset
                    </p>
                  </div>

                  {/* Centerpiece: Interactive 3D Breathing Zen Sphere */}
                  <div className="relative py-8 flex flex-col items-center justify-center translate-z-40">
                    
                    {/* Glowing outer 3D rings that expand/contract with breath */}
                    <div className="relative flex items-center justify-center w-56 h-56">
                      
                      {/* Animated Ocean Ripple Ring 1 */}
                      <div 
                        className={`absolute inset-0 rounded-full border border-accent/25 transition-all duration-1000 ${
                          !isActive ? 'scale-100 opacity-40' :
                          currentPhase.name === 'Inhale' ? 'scale-115 opacity-80 border-accent' : 
                          currentPhase.name === 'Hold' ? 'scale-115 opacity-90 border-secondary' : 
                          currentPhase.name === 'Exhale' ? 'scale-90 opacity-40 border-accent-soft' : 'scale-95 opacity-50'
                        }`} 
                      />

                      {/* Animated Ocean Ripple Ring 2 with Subtle Gradient Glow */}
                      <div 
                        className={`absolute inset-4 rounded-full bg-gradient-to-tr from-accent/15 via-secondary/10 to-accent-soft/40 backdrop-blur-sm border border-border/70 transition-all duration-1000 shadow-3d-glow ${
                          !isActive ? 'scale-100 opacity-60' :
                          currentPhase.name === 'Inhale' ? 'scale-110' : 
                          currentPhase.name === 'Hold' ? 'scale-110 shadow-3d-glow' : 
                          currentPhase.name === 'Exhale' ? 'scale-95' : 'scale-100'
                        }`} 
                      />

                      {/* Core Zen Sphere (Clickable to Start/Pause) */}
                      <button 
                        onClick={toggleBreathing}
                        aria-label={isActive ? "Pause breathing exercise" : "Start breathing exercise"}
                        className={`relative w-36 h-36 rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 bg-gradient-to-br from-surface via-surface-muted to-accent-soft/90 border border-border shadow-3d-elevated group cursor-pointer hover:scale-105 active:scale-95 ${
                          !isActive ? 'ring-2 ring-accent/30 hover:ring-accent/60' :
                          currentPhase.name === 'Inhale' ? 'scale-110 shadow-3d-glow ring-4 ring-accent/30' : 
                          currentPhase.name === 'Hold' ? 'scale-110 ring-4 ring-secondary/30' : 
                          currentPhase.name === 'Exhale' ? 'scale-90 ring-2 ring-accent/20' : 'scale-100'
                        }`}
                      >
                        <Wind className={`w-6 h-6 mb-1.5 transition-all duration-700 ${
                          isActive ? 'text-accent animate-pulse' : 'text-accent/80 group-hover:scale-110'
                        }`} />

                        {isActive ? (
                          <>
                            <span className={`text-sm font-semibold tracking-wide ${currentPhase.color}`}>
                              {currentPhase.name}
                            </span>
                            <span className="text-xl font-serif font-bold text-primary-dark mt-0.5">
                              {countdown}s
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-xs font-semibold text-primary-dark tracking-wide">
                              Begin Calm
                            </span>
                            <span className="text-[10px] text-text-muted font-light mt-0.5">
                              Tap to start
                            </span>
                          </>
                        )}
                      </button>

                    </div>

                    {/* Dynamic Phase Guidance Instruction */}
                    <div className="min-h-[32px] mt-4 text-center">
                      <p className={`text-xs font-light transition-all duration-500 ${
                        isActive ? 'text-primary-dark font-medium' : 'text-text-muted'
                      }`}>
                        {isActive ? currentPhase.instruction : 'Box-breathing resonance • Inhale 4s • Hold 4s • Exhale 4s'}
                      </p>
                    </div>

                  </div>

                  {/* Interactive Control Buttons */}
                  <div className="pt-5 border-t border-border/60 flex items-center justify-center gap-3 relative z-10 translate-z-20">
                    <button
                      onClick={toggleBreathing}
                      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm ${
                        isActive 
                          ? 'bg-surface-muted hover:bg-border text-primary-dark' 
                          : 'bg-primary hover:bg-primary-light text-background hover:scale-105 shadow-3d-subtle'
                      }`}
                    >
                      {isActive ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Pause Exercise</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Start Breathing</span>
                        </>
                      )}
                    </button>

                    {isActive && (
                      <button
                        onClick={resetBreathing}
                        title="Reset exercise"
                        className="p-2.5 rounded-full bg-surface hover:bg-surface-muted border border-border text-text-muted hover:text-primary transition-colors shadow-sm"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Gentle Session Counter */}
                  {cycleCount > 0 && (
                    <div className="mt-3 text-center text-[10px] text-accent font-medium">
                      Completed {cycleCount} mindful breath {cycleCount === 1 ? 'cycle' : 'cycles'}
                    </div>
                  )}

                </div>
              </ThreeDTilt>

              {/* Floating 3D Ocean Badge */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-3d-elevated text-xs font-medium text-text-primary animate-float-3d">
                <Sun className="w-4 h-4 text-secondary" />
                <span>Santa Monica, California</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
