// import { Karla } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cormorant:["Cormorant Garamond"],
        Karla:["Karla"]
      },
      backgroundColor: {
        maincolor: "#EFEBE8",
      }
    },
  },
  plugins: [],
} satisfies Config;
