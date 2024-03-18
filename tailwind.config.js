/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      boxShadow: {
        'custom': '0 0 2px 3px rgba(0, 0, 0, 0.1);',
        'card-shadow': '2px 3px 6px 0 rgba(0, 0, 0, 0.17)'
      }
    },
    screens:{
      'md': {'max':'1208px'},
      'sm': {'max':'612px'},
      'lg': {"min":"1208px"}
    },
    colors:{
      'primary': '#756aee',
      'secondary': '#ffffff',
      'neutral': "#a3a3a3",
      'neutral-transparent': "#11111180",
      'footer-bg': '#1b1929',
      'footer-icon': '#333144'
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

