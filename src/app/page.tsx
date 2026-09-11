'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EmpathyIntro } from '@/components/EmpathyIntro';
import { WhoWeHelp } from '@/components/WhoWeHelp';
import { QuoteBanner } from '@/components/QuoteBanner';
import { ExpertiseCloud } from '@/components/ExpertiseCloud';
import { AboutPreview } from '@/components/AboutPreview';
import { PhotoBreak } from '@/components/PhotoBreak';
import { Services } from '@/components/Services';
import { OurOffice } from '@/components/OurOffice';
import { FAQ } from '@/components/FAQ';
import { BookingCTA } from '@/components/BookingCTA';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenConsultation={openConsultation} />

      {/* 2. Section 1: Hero */}
      <Hero onOpenConsultation={openConsultation} />

      {/* 3. Section 2: Empathy / Compassion Intro */}
      <EmpathyIntro />

      {/* 4. Section 3: Who I Support (3 Focus Populations) */}
      <WhoWeHelp onOpenConsultation={openConsultation} />

      {/* 5. Section 4: Soulful Philosophy Quote Banner */}
      <QuoteBanner />

      {/* 6. Section 5: Clinical Focus & Modality Tags */}
      <ExpertiseCloud />

      {/* 7. Section 6: About Dr. Maya Reynolds, PsyD */}
      <AboutPreview onOpenConsultation={openConsultation} />

      {/* 8. Section 7: Photographic Transition Break */}
      <PhotoBreak />

      {/* 9. Section 8: Core Clinical Services (Exactly 3) */}
      <Services onOpenConsultation={openConsultation} />

      {/* 10. NEW REQUIRED CUSTOM SECTION: Our Office ("A Calm Space for Healing") */}
      <OurOffice onOpenConsultation={openConsultation} />

      {/* 11. Interactive FAQ Accordion */}
      <FAQ />

      {/* 12. Section 10: Appointment Booking Call to Action */}
      <BookingCTA onOpenConsultation={openConsultation} />

      {/* 13. Comprehensive Editorial Footer */}
      <Footer />

      {/* Interactive Consultation Request Dialog */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={closeConsultation} 
      />
    </main>
  );
}
