import * as flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': { 'max': '700px' },
      'ms': { 'max': '1040px' },
    },
    extend: {
      colors: {
        root: {
          violet: {
            default: '#9605ca',
            hover: '#7f05ab'
          },
          bg: {
            dark: '#242424',
            light: '#efefef'
          },
          card: {
            dark: '#1a1a1a',
            dark_hover: '#1c1c1c',
            light: '#e3e3e3',
            light_hover: '#d9d9d9'
          },
        },
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', { fontFeatureSettings: 'kern' }],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

