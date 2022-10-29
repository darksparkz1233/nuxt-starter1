module.exports = {
  darkMode: 'class',

  theme: {

    fontFamily: {
      'pacifico': ['pacifico', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif']
    },

    screens: {
      xs: "300px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },

    extend: {

      colors: {
        
        'dark-gray' : '#0B0B0C',
        'light-brown' : '#A3845E',

        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
          1000: "#0B0B0C"
        },

        
      },

    },
  },

  plugins: [
    // require('@tailwindcss/forms'),
  ],

}