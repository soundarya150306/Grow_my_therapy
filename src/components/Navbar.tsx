'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DOCTOR_PROFILE } from '@/data/profile';
import { Menu, X, ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Who I Help', href: '#who-we-help' },
    { label: 'Services', href: '#services' },
    { label: 'Our Office', href: '#our-office' },
    { label: 'Approach', href: '#approach' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav py-3.5 shadow-subtle border-b border-border/60' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
              <span className="font-serif text-lg font-medium">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-primary-dark group-hover:text-primary transition-colors">
                {DOCTOR_PROFILE.name}
              </span>
              <span className="text-[11px] tracking-wider uppercase text-text-muted font-medium">
                {DOCTOR_PROFILE.title} • Santa Monica, CA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-background text-sm font-medium transition-all duration-300 shadow-subtle hover:shadow-elevated active:scale-[0.98] group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-primary hover:bg-surface-muted lg:hidden transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-background/98 backdrop-blur-xl border-b border-border shadow-elevated animate-fade-in">
          <div className="px-6 pt-4 pb-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-text-muted pb-2 border-b border-border/50">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>Santa Monica Office & California Telehealth</span>
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-text-primary hover:text-primary py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-background font-medium text-sm shadow-subtle hover:bg-primary-light transition-colors"
              >
                <span>Schedule a Free 15-Min Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
