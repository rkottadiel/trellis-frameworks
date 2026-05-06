/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        'brand-bg': '#FAFAF9',
        'brand-text': '#1C1917',
        'brand-muted': '#78716C',
        'brand-accent': '#2D6A4F',
        'brand-border': '#E7E5E4',
      }
    },
  },
  plugins: [],
};
