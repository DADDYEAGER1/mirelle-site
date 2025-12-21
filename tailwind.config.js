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
        heading: ['Jeremiah', 'Georgia', 'serif'],
        product: ['Boriboon', 'system-ui', 'sans-serif'],
        body: ['Crimson Text', 'Georgia', 'serif'],
        // OLD FONTS (keep until migration complete)
        playfair: ['Playfair Display', 'serif'],
        source: ['Source Serif 4', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};