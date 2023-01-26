/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      'sans': ['Coco Gothic', ]
    },
    colors:{
      'primary':'#FFE4C4',
      'complementary':'#00615f',
      'black':'#000'
    },
    extend: {},
  },
  plugins: [],
}
