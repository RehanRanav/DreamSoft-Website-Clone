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
      'md': {'max':'990px'}
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

