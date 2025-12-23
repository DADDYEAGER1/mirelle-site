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
        // NEW COLOR SYSTEM (keep these)
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // OLD COLOR SYSTEM (keep until migration complete)
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
        // PRIMARY FONT SYSTEM
        heading: ['Larken', 'Georgia', 'serif'],        // Article titles, main headings
        body: ['Crimson Text', 'Georgia', 'serif'],     // Paragraphs, article content
        ui: ['General Sans', 'system-ui', 'sans-serif'], // Categories, labels, nav, header, footer
        
        // Keep brand for logo
        brand: ['Larken', 'Georgia', 'serif'],
        
        // OLD FONTS - keeping for backwards compatibility during migration
        playfair: ['Playfair Display', 'serif'],
        source: ['Source Serif 4', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};