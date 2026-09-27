/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#10b981',
          hover: '#059669',
          light: '#34d399',
          dark: '#064e3b',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
      },
    },
  },
  plugins: [],
}
