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
      'neutral': "#a3a3a3"
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

