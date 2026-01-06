/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",
        foreground: "#252220",
        accent: {
          DEFAULT: '#E30088',
          light: '#FF1AA3',
          dark: '#B0006B',
        },
        'text-secondary': '#666666',
        'border-color': '#E0E0E0',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        heading: ['Larken', 'Georgia', 'serif'],
        body: ['Crimson Text', 'Georgia', 'serif'],
        ui: ['General Sans', 'system-ui', 'sans-serif'],
        brand: ['Larken', 'Georgia', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        source: ['Source Serif 4', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      // ✨ NEW: STANDARDIZED FONT SIZES
      fontSize: {
        // Headings
        'h1': ['42px', { lineHeight: '1.2' }],
        'h1-mobile': ['36px', { lineHeight: '1.2' }],
        
        'h2': ['32px', { lineHeight: '1.3' }],
        'h2-mobile': ['28px', { lineHeight: '1.3' }],
        
        'h3': ['24px', { lineHeight: '1.4' }],
        'h3-mobile': ['22px', { lineHeight: '1.4' }],
        
        'h4': ['20px', { lineHeight: '1.4' }],
        'h4-mobile': ['18px', { lineHeight: '1.4' }],
        
        // Body text
        'body-lg': ['20px', { lineHeight: '1.7' }],
        'body': ['20px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        
        // UI elements
        'ui': ['14px', { lineHeight: '1.4' }],
        'ui-xs': ['12px', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};