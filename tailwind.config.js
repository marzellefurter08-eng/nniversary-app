/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honda: {
          red: '#CC0000',
          silver: '#C0C0C0',
          black: '#1A1A1A',
          accent: '#FF6B35',
        },
        bmw: {
          blue: '#0066B1',
          white: '#FFFFFF',
          black: '#000000',
          m: '#009CDE',
        },
        kawasaki: {
          green: '#006400',
          black: '#1A1A1A',
          lime: '#32CD32',
        },
        automotive: {
          carbon: '#1C1C1C',
          asphalt: '#2D2D2D',
          chrome: '#E8E8E8',
            gold: '#FFD700',
          orange: '#FF4500',
          purple: '#9400D3',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.15)',
          dark: 'rgba(255, 255, 255, 0.05)',
        }
      },
      backgroundImage: {
        'racing-gradient': 'linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 50%, #1A1A1A 100%)',
        'honda-gradient': 'linear-gradient(90deg, #CC0000, #FF6B35)',
        'bmw-gradient': 'linear-gradient(90deg, #0066B1, #009CDE)',
        'kawasaki-gradient': 'linear-gradient(90deg, #006400, #32CD32)',
        'speed-gradient': 'linear-gradient(90deg, #FF4500, #FFD700, #9400D3)',
        'carbon-fiber': 'repeating-linear-gradient(45deg, #1C1C1C 0px, #1C1C1C 2px, #2D2D2D 2px, #2D2D2D 4px)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'speed-line': 'speedLine 1.5s linear infinite',
        'engine-rumble': 'engineRumble 0.1s ease-in-out infinite',
        'wheel-spin': 'wheelSpin 1s linear infinite',
        'nitro': 'nitro 0.5s ease-out',
        'particle': 'particle 15s linear infinite',
        'spark': 'spark 2s ease-out infinite',
        'drift': 'drift 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 69, 0, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' },
        },
        speedLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        engineRumble: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2px)' },
        },
        wheelSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        nitro: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
        },
        spark: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
        drift: {
          '0%, 100%': { transform: 'rotate(-5deg) translateX(0)' },
          '50%': { transform: 'rotate(5deg) translateX(10px)' },
        },
      },
      boxShadow: {
        'honda-red': '0 0 30px rgba(204, 0, 0, 0.6)',
        'bmw-blue': '0 0 30px rgba(0, 102, 177, 0.6)',
        'kawasaki-green': '0 0 30px rgba(0, 100, 0, 0.6)',
        'speed-orange': '0 0 40px rgba(255, 69, 0, 0.8)',
        'chrome': '0 0 20px rgba(232, 232, 232, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
