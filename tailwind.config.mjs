/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50:  "#fdf2eb", // Lighter brown shades
          100: "#f5e6dd",
          200: "#e6cdb9",
          300: "#d4a890",
          400: "#ba7e59",
          500: "#a46236", // Main brown shade
          600: "#844e2d",
          700: "#663c24",
          800: "#4a2c1c",
          900: "#2e1b10", // Darker brown shades
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        coffeeShop: { // Custom theme definition
          primary: "#a46236",
          secondary: "#ba7e59",
          accent: "#d4a890",
          neutral: "#4a2c1c",
          "base-100": "#fdf2eb", // Background color
          info: "#dcf5f5",
          success: "#77c1b9",
          warning: "#f7e21d",
          error: "#e74747",
        }
      },
      "cupcake",
      "dark",
      "cmyk",
      "autumn",
    ],
  }
};
