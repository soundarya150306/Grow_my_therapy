'use client';

import React from 'react';
import Link from 'next/link';
import { DOCTOR_PROFILE } from '@/data/profile';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-border">

          {/* Col 1: Brand & Philosophy Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-semibold">
                M
              </div>
              <span className="font-serif text-xl font-semibold text-primary-dark">
                {DOCTOR_PROFILE.name}
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed font-light max-w-md">
              A private, grounded clinical psychology practice providing thoughtful adults, high-achievers, and creatives with evidence-based therapy to heal trauma, calm overthinking, and overcome burnout.
            </p>

            <div className="text-xs text-text-muted">
              <span>{DOCTOR_PROFILE.title}</span> • <span>Santa Monica, California</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-primary-dark uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#about" className="hover:text-primary transition-colors">About Dr. Reynolds</a></li>
              <li><a href="#who-we-help" className="hover:text-primary transition-colors">Who I Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Clinical Services</a></li>
              <li><a href="#our-office" className="hover:text-primary transition-colors">Santa Monica Office</a></li>
              <li><a href="#faqs" className="hover:text-primary transition-colors">Client FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Modalities */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-primary-dark uppercase tracking-wider">
              Approaches
            </h4>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>Cognitive Behavioral (CBT)</li>
              <li>EMDR Therapy</li>
              <li>Somatic / Body-Oriented</li>
              <li>Mindfulness Practices</li>
              <li>Nervous System Regulation</li>
            </ul>
          </div>

          {/* Col 4: Office & Location Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-primary-dark uppercase tracking-wider">
              Santa Monica Practice
            </h4>
            <div className="space-y-2.5 text-xs text-text-secondary leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                <span>{DOCTOR_PROFILE.address.full}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                <span>{DOCTOR_PROFILE.contact.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                <span>{DOCTOR_PROFILE.contact.phone}</span>
              </div>
              <p className="pt-1 text-[11px] text-text-muted">
                Serving Santa Monica, West Los Angeles, Venice, Brentwood, and all California residents via telehealth.
              </p>
            </div>
          </div>

        </div>

        {/* Legal & Clinical Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-text-primary transition-colors">Good Faith Estimate</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
