import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors:{
        "primary-300": "#0D9B8A",
        "bg-300": "#82827C",
        "bg-200": "#63635E",
        "bg-100": "#21201C",
        "bg-1000": "#F1F0EF",
        "bg-1200": "#FDFDFC",

      },

      fontFamily: {
        sans: ['var(--font-k2d)'],
      },

    },
  },
  plugins: [],
};
export default config;
