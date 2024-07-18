/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '60': 60,
      'auto': 'auto',
      'max': 9999,
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "6rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        home: "url('/public/img/home.jpg')",
        question: "url('/public/img/question.jpg')",
      },
      colors: {
        primary: "#262422",
        secondary: "#CBA061",
        secondary_ligth: "#F5D19C",
        primary_light: "#38342E",
        grey: "#AEAEAE",
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'], // Extend opacity variants to include group-hover
    },
  },
  plugins: [],
};
