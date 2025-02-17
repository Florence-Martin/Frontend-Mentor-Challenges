const config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-gray": "hsl(212, 45%, 89%)",
                "grayish-blue": "hsl(220, 15%, 55%)",
                "dark-blue": "hsl(218, 44%, 22%)",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
