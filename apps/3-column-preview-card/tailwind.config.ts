import type { Config } from "tailwindcss";
// import sharedConfig from "../../packages/tailwind-config/tailwind-config";

const config: Config = {
  //   ...sharedConfig, // On récupère la base
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "very-light-gray": "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        bigShoulders: ["Big Shoulders Display", "sans-serif"],
      },
    },
  },
};

export default config;
