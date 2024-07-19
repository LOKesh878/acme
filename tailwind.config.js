/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
    boxShadow:{
      neon:"0 0 5px theme('colors.purple.200'),0 0 20px theme('colors.purple.700')"
    },
    screens:{
      'widescreen':{
        raw:'(min-aspect-ratio:3/2)'
      },
      'tallscreen':{
        raw:'(min-aspect-ratio:13/20)'
      },
    },
    keyframes:{
      'open-menu':{
        '0%':{transform:'scaleY(0)'},
        '80%':{transform:'scaleY(1.2)'},
        '100%':{transform:'scaleY(1)'}
      }
    },
    animation:{
      'open-menu': 'open-menu 0.5s ease-in-out forwards',

    }
    },
  },
  plugins: [],
}

