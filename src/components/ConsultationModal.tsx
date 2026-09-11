'use client';

import React, { useState } from 'react';
import { DOCTOR_PROFILE } from '@/data/profile';
import { X, CheckCircle2, ShieldCheck, Send, MapPin, Video } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionFormat: 'Santa Monica In-Person',
    focusArea: 'Anxiety & Overthinking',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-surface border border-border shadow-elevated overflow-hidden p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center text-accent mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-primary-dark font-medium">
              Consultation Request Received
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm mx-auto font-light">
              Thank you, {formData.name || 'there'}. Dr. Maya Reynolds or our practice coordinator will reach out within 24–48 business hours to schedule your free 15-minute call.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-primary text-background text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                FREE 15-MINUTE INTRODUCTORY CALL
              </span>
              <h3 className="font-serif text-2xl text-primary-dark font-medium mt-1">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-text-secondary font-light">
                Take the first step toward quiet clarity. All inquiries are strictly confidential.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-text-primary block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Chen"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-primary text-text-primary text-xs outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-medium text-text-primary block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-primary text-text-primary text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-text-primary block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(310) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-primary text-text-primary text-xs outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-medium text-text-primary block mb-1">Preferred Format</label>
                  <select
                    value={formData.sessionFormat}
                    onChange={(e) => setFormData({ ...formData, sessionFormat: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-background border border-border focus:border-primary text-text-primary text-xs outline-none transition-colors"
                  >
                    <option>Santa Monica In-Person</option>
                    <option>California Telehealth</option>
                    <option>Open to Either</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-medium text-text-primary block mb-1">Primary Focus Area</label>
                <select
                  value={formData.focusArea}
                  onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-background border border-border focus:border-primary text-text-primary text-xs outline-none transition-colors"
                >
                  <option>Anxiety, Panic & Overthinking</option>
                  <option>Trauma & EMDR Reprocessing</option>
                  <option>Burnout, Perfectionism & Pressure</option>
                  <option>General Therapy Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-medium text-text-primary block mb-1">Brief Note (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share anything you would like Dr. Reynolds to know before the call..."
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border focus:border-primary text-text-primary text-xs outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary hover:bg-primary-light text-background font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-subtle active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Free 15-Minute Consultation</span>
                </button>
              </div>

              <p className="text-[10px] text-text-muted text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>100% Confidential & HIPAA Compliant Communication</span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
