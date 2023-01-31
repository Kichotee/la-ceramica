/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      'sans': ['Coco Gothic', ],
      'default':'montserrat'
    },
    colors:{
      'primary':'#fad2a1',
      'complementary':'#00615f',
      'black':'#000'
    },
    extend: {},
  },
  plugins: [],
}
