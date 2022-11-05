module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx", "./src/**/*.ts"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "520px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
