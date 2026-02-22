/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0f172a',
        'accent-primary': '#FF6B35', // Bold coral-orange for youth energy
        'accent-soft': '#FFD23F', // Soft yellow accent
        'accent-purple': '#A45FFF', // Creative purple
        'neutral-cream': '#FFF8F0', // Warm neutral
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-editorial': 'linear-gradient(135deg, #FF6B35 0%, #A45FFF 100%)',
        'gradient-playful': 'linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%)',
      },
      fontSize: {
        'display': ['7rem', { lineHeight: '0.9', fontWeight: '800' }],
        'hero': ['5.5rem', { lineHeight: '0.95', fontWeight: '900' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '104': '26rem',
      },
    },
  },
  plugins: [],
}
