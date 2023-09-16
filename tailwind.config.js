/** @type {import('tailwindcss').Config} */
export default {
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
      },
      padding: {
        '60px':'60px',
      }
    },
  },
  plugins: [],
}

