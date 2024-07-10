/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        saira:["Saira", "sans-serif"],
      },
      colors:{
        textRed:"#EC1F24",
        textBlue:"#0065B3"
        
      },
      screens: {
        'xs': { 'min':'320px','max':'639px'},
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

