import type { Config } from "tailwindcss";


module.exports = {

darkMode: 'class',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",

  theme: {
    extend: {

      colors:{
        "primary-300": "#0D9B8A",
        "bg-300": "#82827C",
        "bg-200": "#63635E",
        "bg-100": "#21201C",
        "bg-1000": "#F1F0EF",
        "bg-1200": "#FDFDFC",


                // color generator colors 
                "bg-default": "var(--bg-default)",
                "bg-base": "var(--bg-base)",
                "bg-bg-subtle": "var(--bg-bg-subtle)",
                "bg-bg": "var(--bg-bg)",
                "bg-bg-hover": "var(--bg-bg-hover)",
                "bg-bg-active": "var(--bg-bg-active)",
                "fg-line": "var(--fg-line)",
                "fg-border": "var(--fg-border)",
                "fg-border-hover": "var(--fg-border-hover)",
                "fg-solid": "var(--fg-solid)",
                "fg-solid-hover": "var(--fg-solid-hover)",
                "fg-text": "var(--fg-text)",
                "fg-text-contrast": "var(--fg-text-contrast)",
                "fg-default": "var(--fg-default)",
              
              
                "primary-base": "var(--primary-base)",
                "primary-bg-subtle": "var(--primary-bg-subtle)",
                "primary-bg": "var(--primary-bg)",
                "primary-bg-hover": "var(--primary-bg-hover)",
                "primary-bg-active": "var(--primary-bg-active)",
                "primary-line": "var(--primary-line)",
                "primary-border": "var(--primary-border)",
                "primary-border-hover": "var(--primary-border-hover)",
                "primary-solid": "var(--primary-solid)",
                "primary-solid-hover": "var(--primary-solid-hover)",
                "primary-text": "var(--primary-text)",
                "primary-text-contrast": "var(--primary-text-contrast)",

      },

      fontFamily: {
        sans: ['var(--font-k2d)'],
      },
      

    },
  },
  plugins: [],
}satisfies Config;
// export default config;
