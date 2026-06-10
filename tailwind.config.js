/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content:[
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      colors:{
        'lightviolet':'#805AFF',
        'lightorange':'#FFA04D',
        'nikblack': '#464646',
        // Support custom premium colors for cards
        zinc: {
          850: '#202024',
          950: '#09090b',
        }
      },
      padding: {
        '60px':'60px',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-slower': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 25s ease infinite',
        'drift-reverse': 'drift-reverse 30s ease infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.15)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) scale(0.9)' },
          '66%': { transform: 'translate(30px, -20px) scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}

