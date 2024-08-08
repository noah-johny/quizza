import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#171717",
        white: "#ffffff",
        rose: "#F34F29",
        mustard: "#FFA000",
        blue: "#1D89D2",
        green: "#539E43",
        error: "#FF3333",
        success: "#33FF33",
      },
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
