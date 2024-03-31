/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
 
  ],
  theme: {
    extend: {
      fontSize:{
        xxs:'10px',
      },
      fontFamily:{
        inter:['var(--inter)'],
        Koulen:['var(--koulen)'],
      },
      colors:{
        primary:"var(--color-primary)",
        secondary:"var(--color-secondary)",
        white:"var(--color-text-primary)",
        grey:"var(--color-text-secondary)",
        accent:"var(--color-accent)",
        border:"var(--color-border)",
      
      },
      backgroundImage:{
        "while_blue_gradient":"linear-gradient(108deg, rgba(255,255,255,1) var(--white-percentage), rgba(170,240,255,1) var(--blue-percentage));",
        "gradient-bg":"linear-gradient(276deg,#672b96,#ffffffff);"
      },
      animation:{
        "text-swap-animation":"text-animation 8s infinite",
        "background-shine-animation":"gradient-animation 3s infinite"
      },
      keyframes:{
        "text-animation": {
          "0%": {marginTop: 0},
          "10%": {marginTop: 0},
          "20%": {marginTop: "-5.62rem"},
          "30%": {marginTop:" -5.62rem"},
          "40%": {marginTop: "-11.24rem"},
          "60%": {marginTop: "-11.24rem"},
          "70%": {marginTop: "-5.62rem"},
          "80%": {marginTop: "-5.62rem"},
          "90%": {marginTop: 0},
          "100%": {marginTop: 0},
        },  
        "gradient-animation":{
           "0%":{backgroundPosition:"0% 0%"},
           "50%":{backgroundPosition: "50% 50%"},
           "100%":{backgroundPosition: "100% 50%"},
        }  
      }
    },
  },
  plugins: [],
}

