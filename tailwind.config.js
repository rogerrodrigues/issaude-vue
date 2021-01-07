const TailwindLinelay = require('tailwindcss-linelay')

module.exports = {
  important: true,

  purge: false,

  plugins: [
    // horiz, verti, weight
    TailwindLinelay(),
  ],

  theme: {
    extend: {
      weight: theme => ({
        '1': [1],
        '2': [2],
        '3': [3],
        '4': [4],
        '5': [5],
      }),
    },
  },

  variants: ['responsive', 'hover', 'active', 'focus'],
}

// const TailwindLinelay = require('tailwindcss-linelay');

// module.exports = {
//   important
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
  //   theme: {
    //     colors: {
      //       gray: colors.coolGray,
      //       blue: colors.lightBlue,
      //       red: colors.rose,
      //       pink: colors.fuchsia,
      //     },
      //     fontFamily: {
        //       sans: ['Graphik', 'sans-serif'],
        //       serif: ['Merriweather', 'serif'],
        //     },
//     extend: {
  //       spacing: {
    //         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   },
//   variants: {
//     extend: {
//       borderColor: ['focus-visible'],
//       opacity: ['disabled'],
//     }
//   }
// }
