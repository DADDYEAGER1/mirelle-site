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
        'blog-primary': '#f8b4d9', // Soft pink
        'blog-secondary': '#fef3f7', // Light pink bg
        'blog-accent': '#e91e63', // Bright pink
        // Premium Mirelle color palette
        nude: {
          50: '#fdf7f0',
          100: '#fae8d6',
          200: '#f5d0ad',
          300: '#efb17a',
          400: '#e88c47',
          500: '#e16f1f',
          600: '#d25a15',
          700: '#ae4513',
          800: '#8b3717',
          900: '#702f16',
        },
        blush: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fbd5d5',
          300: '#f7b3b3',
          400: '#f18888',
          500: '#e85a5a',
          600: '#d63c3c',
          700: '#b32e2e',
          800: '#932a2a',
          900: '#7a2828',
        },
        purple: {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9dfff',
          300: '#d6c2ff',
          400: '#bc9aff',
          500: '#9d6bff',
          600: '#8b3dff',
          700: '#7c2ce8',
          800: '#6b25c4',
          900: '#5a1fa0',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
