/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-muted': 'var(--surface-muted)',
        'surface-warm': 'var(--surface-warm)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          light: 'var(--secondary-light)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          soft: 'var(--accent-soft)',
        },
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.35rem',
        '3xl': '1.85rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'subtle': '0 2px 12px -2px rgba(30, 56, 43, 0.04), 0 1px 4px -1px rgba(30, 56, 43, 0.03)',
        'elevated': '0 16px 36px -8px rgba(30, 56, 43, 0.07), 0 4px 12px -2px rgba(30, 56, 43, 0.03)',
        'soft-glow': '0 0 45px -10px rgba(101, 125, 106, 0.12)',
      }
    },
  },
  plugins: [],
};
