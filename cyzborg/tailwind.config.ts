/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        cyzborg: {
          black: '#000000',
          dark: '#0B0B0B',
          white: '#F5F5F5',
          blue: '#E0E0E0',
          orange: '#B87333',
          gray: '#8A8A8A',
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
      },
      keyframes: {
        scan: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(2px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        'led-stretch': {
          '0%': { 
            transform: 'scaleX(1)', 
            filter: 'drop-shadow(0 0 0px rgba(224,224,224,0))' 
          },
          '30%': { 
            transform: 'scaleX(1.04)', 
            filter: 'drop-shadow(-3px 0 0px rgba(224,224,224,0.8)) drop-shadow(3px 0 0px rgba(184,115,51,0.8))' 
          },
          '60%': { 
            transform: 'scaleX(1.02)', 
            filter: 'drop-shadow(2px 0 0px rgba(224,224,224,0.8)) drop-shadow(-2px 0 0px rgba(184,115,51,0.8))' 
          },
          '100%': { 
            transform: 'scaleX(1.06)', 
            filter: 'drop-shadow(0 0 12px rgba(224,224,224,0.9))' 
          }
        },
        'crackle-intro': {
          '0%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '30%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '32%': { filter: 'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #E0E0E0)', transform: 'translate(-1px, 1px) rotate(-1deg)' },
          '34%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '60%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '62%': { filter: 'drop-shadow(0 0 15px #fff) drop-shadow(0 0 30px #E0E0E0)', transform: 'translate(1px, -1px) rotate(1deg)' },
          '64%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '80%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '82%': { filter: 'drop-shadow(0 0 20px #fff) drop-shadow(0 0 40px #E0E0E0)', transform: 'translate(-2px, 0) rotate(0deg)' },
          '84%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '90%': { filter: 'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #E0E0E0)', transform: 'translate(1px, 1px) rotate(1deg)' },
          '92%': { filter: 'drop-shadow(0 0 2px #E0E0E0)', transform: 'translate(0, 0) rotate(0deg)' },
          '95%': { filter: 'drop-shadow(0 0 10px #B87333)', transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { filter: 'drop-shadow(0 0 5px #B87333)', transform: 'translate(0, 0) rotate(0deg)' },
        },
        'crackle': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 5px #B87333)', 
            transform: 'translate(0, 0) rotate(0deg)' 
          },
          '10%': { 
            filter: 'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #B87333)', 
            transform: 'translate(-1px, 1px) rotate(-1deg)' 
          },
          '20%': { 
            filter: 'drop-shadow(0 0 5px #B87333)', 
            transform: 'translate(1px, -1px) rotate(1deg)' 
          },
          '30%': { 
            filter: 'drop-shadow(0 0 15px #fff) drop-shadow(0 0 30px #B87333)', 
            transform: 'translate(-2px, 0) rotate(0deg)' 
          },
          '40%': { 
            filter: 'drop-shadow(0 0 8px #B87333)', 
            transform: 'translate(1px, 2px) rotate(1deg)' 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 25px #fff) drop-shadow(0 0 50px #B87333)', 
            transform: 'translate(-1px, -2px) rotate(-1deg)' 
          },
          '60%': { 
            filter: 'drop-shadow(0 0 5px #B87333)', 
            transform: 'translate(2px, 1px) rotate(0deg)' 
          },
          '70%': { 
            filter: 'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #B87333)', 
            transform: 'translate(-1px, -1px) rotate(-1deg)' 
          },
          '80%': { 
            filter: 'drop-shadow(0 0 6px #B87333)', 
            transform: 'translate(1px, 1px) rotate(1deg)' 
          },
          '90%': { 
            filter: 'drop-shadow(0 0 20px #fff) drop-shadow(0 0 40px #B87333)', 
            transform: 'translate(-2px, 1px) rotate(0deg)' 
          },
        }
      },
      animation: {
        'scan': 'scan 1.5s ease-in-out infinite',
        'glitch': 'glitch 0.2s ease-in-out infinite',
        'led-stretch': 'led-stretch 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'crackle': 'crackle 0.3s infinite',
        'crackle-build': 'crackle-intro 1.5s ease-in forwards, crackle 0.15s 1.5s infinite',
      }
    }
  },
  plugins: [],
}
