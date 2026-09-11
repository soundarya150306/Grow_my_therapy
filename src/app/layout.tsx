import type { Metadata } from 'next';
import './globals.css';
import { DOCTOR_PROFILE } from '@/data/profile';

export const metadata: Metadata = {
  title: `${DOCTOR_PROFILE.name} | ${DOCTOR_PROFILE.title} in ${DOCTOR_PROFILE.location}`,
  description: "Warm, evidence-based therapy in Santa Monica and statewide telehealth across California. Specializing in anxiety, overthinking, trauma (EMDR), and burnout for thoughtful adults and high-achievers.",
  keywords: [
    "Dr. Maya Reynolds PsyD",
    "Psychologist Santa Monica CA",
    "Anxiety therapist Santa Monica",
    "EMDR therapy California",
    "Burnout psychologist Los Angeles",
    "Trauma therapy Santa Monica",
    "Cognitive Behavioral Therapy Santa Monica",
    "California telehealth therapist"
  ],
  authors: [{ name: DOCTOR_PROFILE.name }],
  openGraph: {
    title: `${DOCTOR_PROFILE.name} | ${DOCTOR_PROFILE.title}`,
    description: "A calm, grounded sanctuary for adults navigating anxiety, trauma, and burnout in Santa Monica and across California.",
    url: "https://drmayareynolds.com",
    siteName: DOCTOR_PROFILE.practiceName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": DOCTOR_PROFILE.name,
    "description": "Licensed Clinical Psychologist providing therapy for adults dealing with anxiety, trauma, EMDR, and burnout.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": DOCTOR_PROFILE.address.street,
      "addressLocality": DOCTOR_PROFILE.address.city,
      "addressRegion": DOCTOR_PROFILE.address.state,
      "postalCode": DOCTOR_PROFILE.address.zip,
      "addressCountry": "US"
    },
    "telephone": DOCTOR_PROFILE.contact.phone,
    "email": DOCTOR_PROFILE.contact.email,
    "medicalSpecialty": "Psychology",
    "availableService": [
      { "@type": "MedicalTherapy", "name": "Cognitive Behavioral Therapy (CBT)" },
      { "@type": "MedicalTherapy", "name": "EMDR Therapy" },
      { "@type": "MedicalTherapy", "name": "Somatic and Mindfulness-Based Therapy" }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-text-primary antialiased selection:bg-primary-light selection:text-background">
        {children}
      </body>
    </html>
  );
}
