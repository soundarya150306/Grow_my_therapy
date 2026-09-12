export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
  modalities: string[];
  indicators: string[];
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WhoWeSupportItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  badge: string;
}

export const DOCTOR_PROFILE = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  title: "Licensed Clinical Psychologist",
  practiceName: "Dr. Maya Reynolds Psychological Services",
  location: "Santa Monica, California",
  address: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
    full: "123th Street 45 W, Santa Monica, CA 90401"
  },
  contact: {
    phone: "(310) 896-4120",
    email: "care@drmayareynolds.com",
    telehealthCoverage: "All California Residents (Statewide Telehealth)",
    officeHours: "Monday – Thursday: 9:00 AM – 6:00 PM | Friday: 9:00 AM – 2:00 PM"
  },
  
  hero: {
    eyebrow: "LICENSED CLINICAL PSYCHOLOGIST • SANTA MONICA & CALIFORNIA TELEHEALTH",
    h1: "Healing Anxiety & Trauma with Therapy in Santa Monica",
    subtitle: "A grounded, compassionate space to navigate anxiety, heal from trauma, and recover from burnout with evidence-based psychological care.",
    ctaPrimary: "Take the First Step",
    ctaSecondary: "Explore Services",
    reassuranceBadge: "In-Person in Santa Monica & Secure Telehealth Across CA",
    image: "/images/doctor.png"
  },

  empathyBanner: {
    eyebrow: "A SAFE SPACE TO SLOW DOWN",
    heading: "A place where you don't have to carry it all alone.",
    leadQuote: "“Therapy is a collaborative sanctuary where you don't have to pretend to have it all together.”",
    paragraphs: [
      "Life can often feel demanding, leaving little room to breathe, process, or simply be present with yourself.",
      "Therapy provides a warm, grounded environment to help you calm your nervous system, untangle complex emotions, and cultivate lasting resilience."
    ]
  },

  whoWeHelp: [
    {
      id: "anxiety-overthinking",
      title: "Anxiety & Overthinking",
      subtitle: "Finding your way back to calm",
      description: "When overthinking becomes overwhelming, therapy offers a safe space to understand what you’re feeling and regain grounded clarity.",
      points: [
        "Quiet chronic worry & racing thoughts",
        "Soothe physical tension and anxiety",
        "Develop gentle, practical coping skills"
      ],
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=900&q=80",
      badge: "Anxiety Relief"
    },
    {
      id: "trauma-healing",
      title: "Trauma & EMDR Therapy",
      subtitle: "Healing at your own pace",
      description: "Sometimes the hardest part is feeling safe enough to let your guard down. Trauma therapy provides a gentle, grounded space to heal at your own pace.",
      points: [
        "Gentle EMDR memory reprocessing",
        "Rebuild internal feelings of safety",
        "Resolve lingering past experiences"
      ],
      image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=900&q=80",
      badge: "Trauma & EMDR"
    },
    {
      id: "burnout-relief",
      title: "Burnout & Overwhelm",
      subtitle: "Building a healthier rhythm",
      description: "For those who are tired of always pushing through. Burnout therapy offers a space to slow down, reconnect with yourself, and build a healthier rhythm.",
      points: [
        "Recover from emotional & physical depletion",
        "Set kind, protective life boundaries",
        "Reconnect with what truly matters to you"
      ],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      badge: "Burnout Recovery"
    }
  ] as WhoWeSupportItem[],

  philosophyQuote: {
    quote: "Somewhere along the way, you might have lost the sound of your own voice in the noise of everyone else’s needs. That’s okay. We aren’t in a rush to find it. We are just creating a quiet enough space for that voice to feel safe enough to speak again.",
    author: "Dr. Maya Reynolds, PsyD",
    role: "Licensed Clinical Psychologist • Santa Monica, CA"
  },

  expertisePills: [
    "Anxiety & Stress Relief",
    "Trauma & EMDR Therapy",
    "Burnout Recovery",
    "Cognitive Behavioral Therapy (CBT)",
    "Somatic & Mindfulness Practices",
    "Santa Monica In-Person Office",
    "California Statewide Telehealth"
  ],

  about: {
    eyebrow: "ABOUT DR. MAYA REYNOLDS, PSYD",
    heading: "A gentle, grounded space to heal at your own pace.",
    bioLead: "I am a licensed clinical psychologist in Santa Monica, California, dedicated to helping individuals navigate anxiety, trauma, and burnout with warmth, empathy, and clinical expertise.",
    paragraphs: [
      "I believe therapy is a collaborative sanctuary where you don't have to carry everything alone or pretend to have it all together. Together, we work at a gentle pace that honors your personal journey.",
      "My approach integrates evidence-based Cognitive Behavioral Therapy (CBT), EMDR, and somatic mindfulness practices to help you cultivate lasting peace, resilience, and ease in your everyday life."
    ],
    credentials: [
      { label: "Degree & Title", value: "PsyD (Doctor of Psychology)" },
      { label: "License Status", value: "Licensed Clinical Psychologist" },
      { label: "Specializations", value: "Anxiety, Trauma & Burnout" },
      { label: "Location", value: "Santa Monica Office & CA Telehealth" }
    ],
    ctaText: "Take the First Step"
  },

  photoBreak: {
    statement: "“Creating a quiet, compassionate space where healing happens at your own pace.”",
    caption: "Santa Monica In-Person & California Telehealth"
  },

  // EXACT THREE SERVICES REQUESTED
  services: [
    {
      id: "anxiety-stress",
      title: "Anxiety & Stress Therapy in Santa Monica",
      tagline: "Understand what you’re feeling and find your way back to calm.",
      shortDesc: "When overthinking becomes overwhelming, you don’t have to face it alone. Anxiety therapy in Santa Monica offers a safe space to understand what you’re feeling and find your way back to calm.",
      fullDesc: "When overthinking becomes overwhelming, you don’t have to face it alone. Anxiety therapy in Santa Monica offers a safe space to understand what you’re feeling and find your way back to calm.",
      modalities: ["Cognitive Behavioral Therapy (CBT)", "Mindfulness Regulation", "Somatic Grounding"],
      indicators: ["Overwhelming overthinking & worry", "Difficulty sleeping or feeling relaxed", "Physical chest tension & racing mind"],
      icon: "ShieldCheck"
    },
    {
      id: "trauma-therapy",
      title: "Trauma Therapy in Santa Monica",
      tagline: "A gentle, grounded space to heal at your own pace.",
      shortDesc: "Sometimes the hardest part is feeling safe enough to let your guard down. Trauma therapy in Santa Monica provides a gentle, grounded space to heal at your own pace.",
      fullDesc: "Sometimes the hardest part is feeling safe enough to let your guard down. Trauma therapy in Santa Monica provides a gentle, grounded space to heal at your own pace.",
      modalities: ["EMDR Therapy", "Relational Safety", "Nervous System Stabilization"],
      indicators: ["Feeling hyper-vigilant or on edge", "Difficulty letting down your guard", "Lingering emotional weight from the past"],
      icon: "Sparkles"
    },
    {
      id: "burnout-therapy",
      title: "Burnout Therapy in Santa Monica",
      tagline: "Build a healthier rhythm without losing what matters to you.",
      shortDesc: "For those who are tired of always pushing through. Burnout therapy in Santa Monica offers a space to slow down, reconnect with yourself, and build a healthier rhythm without losing what matters to you.",
      fullDesc: "For those who are tired of always pushing through. Burnout therapy in Santa Monica offers a space to slow down, reconnect with yourself, and build a healthier rhythm without losing what matters to you.",
      modalities: ["Stress Recovery", "Boundary Realignment", "Sustainable Balance"],
      indicators: ["Chronic exhaustion from pushing through", "Feeling disconnected or depleted", "Loss of joy and everyday vitality"],
      icon: "Compass"
    }
  ] as ServiceItem[],

  office: {
    eyebrow: "OUR SANTA MONICA PRACTICE",
    title: "A Calm Space for Healing",
    subtitle: "A quiet, welcoming environment designed for your comfort and peace of mind.",
    description: "Located at 123th Street 45 W in Santa Monica, our office provides a private, serene space with natural light and calming aesthetics—helping you decompress the moment you arrive.",
    features: [
      {
        title: "Natural Light & Calm",
        desc: "A warm, sunlit space designed to feel soothing and comfortable."
      },
      {
        title: "Private & Confidential",
        desc: "Acoustic privacy ensuring a safe, quiet environment for reflection."
      },
      {
        title: "In-Person & Telehealth",
        desc: "Sessions available at our Santa Monica office and virtually across California."
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        alt: "Serene therapy seating area with comfortable sofa and natural light",
        caption: "Main consultation lounge with comfortable seating and natural sunlight"
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
        alt: "Therapy office armchair and calm reading corner",
        caption: "Quiet conversation corner designed for grounding and reflection"
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80",
        alt: "Office interior with curated bookshelf and soft lighting",
        caption: "Curated atmosphere fostering peace and privacy"
      }
    ]
  },

  faqs: [
    {
      id: "faq-1",
      question: "How do I know if therapy is the right step for me?",
      answer: "If you feel overwhelmed by anxiety, are recovering from trauma, or feel depleted by burnout, therapy provides a grounded, supportive space to work through these feelings. We begin with a free 15-minute consultation to make sure we're a good fit."
    },
    {
      id: "faq-2",
      question: "Do you offer in-person sessions or online therapy?",
      answer: "Both. We offer in-person sessions at our Santa Monica office (123th Street 45 W, Santa Monica, CA 90401) and secure, confidential telehealth for clients anywhere in California."
    },
    {
      id: "faq-3",
      question: "What therapies do you use?",
      answer: "Our approach integrates Cognitive Behavioral Therapy (CBT), EMDR therapy, somatic grounding, and mindfulness to help both your mind and body find lasting calm."
    },
    {
      id: "faq-4",
      question: "How can I schedule an appointment?",
      answer: "Click 'Take the First Step' anywhere on the page to request your free initial consultation. We'll connect for 15 minutes to discuss your goals and answer any questions."
    }
  ] as FAQItem[],

  bookingCta: {
    eyebrow: "TAKE THE FIRST STEP",
    heading: "Ready to find your way back to calm?",
    subheading: "You don’t have to navigate this alone. Reach out today for a complimentary 15-minute consultation in Santa Monica or via telehealth across California.",
    buttonText: "Take the First Step",
    officeNote: "In-Person in Santa Monica • Telehealth Across California"
  }
};
