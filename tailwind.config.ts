import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        astronaut: {
          "50": "#f1f6fd",
          "100": "#e0ebf9",
          "200": "#c8ddf5",
          "300": "#a3c7ed",
          "400": "#77a8e3",
          "500": "#578bda",
          "600": "#4270ce",
          "700": "#395dbc",
          "800": "#344c99",
          "900": "#283a6a",
          "950": "#202b4b",
        },
        "fuchsia-pink": {
          "50": "#fef4ff",
          "100": "#fde7ff",
          "200": "#fcceff",
          "300": "#fda8ff",
          "400": "#fc75fd",
          "500": "#f340f5",
          "600": "#d920d6",
          "700": "#c419be",
          "800": "#93158d",
          "900": "#781771",
          "950": "#51014c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
