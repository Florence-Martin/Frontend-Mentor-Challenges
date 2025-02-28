/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "#1C1A19",
          800: "#201E1D",
          700: "#34302D",
          600: "#4A4846",
          400: "#C0BFBF",
          300: "#DEDCDA",
          200: "#EFEDEB",
          100: "#FBF9F7",
          0: "#FFFFFF",
        },
        blue: {
          200: "#E1F1FE",
          500: "#93CEFC",
          700: "#75B0DE",
          800: "#5792C0",
          900: "#002BA4",
        },
        green: {
          200: "#E9F5EA",
          500: "#9DD3A9",
          700: "#008531",
          900: "#132A18",
        },
        yellow: {
          200: "#FFF5E1",
          500: "#FACC79",
          700: "#EA9806",
          900: "#4A3003",
        },
        red: {
          400: "#F04438",
          600: "#D92D20",
        },
        background: "var(--background)", // Liaison avec globals.css
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        mono: ["var(--font-fira-code)", "Fira Code", "monospace"],
      },
      fontSize: {
        "preset-1": [
          "40px",
          {
            lineHeight: "130%",
            letterSpacing: "-1px",
            fontWeight: "800",
          },
        ],
        "preset-2": [
          "32px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.5px",
            fontWeight: "800",
          },
        ],
        "preset-3": [
          "28px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.5px",
            fontWeight: "700",
          },
        ],
        "preset-4": [
          "24px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.5px",
            fontWeight: "600",
          },
        ],
        "preset-5": [
          "20px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.5px",
            fontWeight: "600",
          },
        ],
        "preset-6": [
          "18px",
          {
            lineHeight: "150%",
            letterSpacing: "-0.5px",
            fontWeight: "500",
          },
        ],
        "preset-7": [
          "18px",
          {
            lineHeight: "150%",
            letterSpacing: "-0.2px",
            fontWeight: "400",
          },
        ],
        "preset-8": [
          "16px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.2px",
            fontWeight: "400",
          },
        ],
        "preset-8-italic": [
          "16px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.2px",
            fontWeight: "400",
          },
        ],
        "preset-9": [
          "16px",
          {
            lineHeight: "146%",
            letterSpacing: "-0.4px",
            fontWeight: "400",
          },
        ],
      },
      spacing: {
        0: "0px",
        "025": "2px",
        "050": "4px",
        "075": "6px",
        100: "8px",
        150: "12px",
        200: "16px",
        250: "20px",
        300: "24px",
        400: "32px",
        500: "40px",
        600: "48px",
        800: "64px",
        1000: "80px",
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        full: "999px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
