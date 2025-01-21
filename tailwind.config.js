/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        screen: {
            "xs": "400px",
            "sm": "600px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        },

        extend: {
            colors: {
                brand: {
                    /* shades of lila / purple of colder hue */
                    DEFAULT: "#5D3FD3",
                    50: "#EDEBFF",
                    100: "#D1C5FF",
                    200: "#B39FFF",
                    300: "#9579FF",
                    400: "#7753FF",
                    500: "#5D3FD3",
                    600: "#462F9F",
                    700: "#2F1F6B",
                    800: "#190F37",
                    900: "#020007",
                },
                accent: {
                    /* shades of green (almost complimentary of lilac) */
                    DEFAULT: "#3FD3C7",
                    50: "#E3FFFD",
                    100: "#B6FFF9",
                    200: "#89FFF5",
                    300: "#5CFFF1",
                    400: "#2FFDED",
                    500: "#3FD3C7",
                    600: "#2FAA9E",
                    700: "#1F8175",
                    800: "#10484C",
                    900: "#001F23",
                },
                basic: {
                    /* shades of neutral colors from white to black, grey that goes well with cold lila and light blue */
                    DEFAULT: "#F5F5F5",
                    50: "#FFFFFF",
                    100: "#FAFAFA",
                    200: "#E5E5E5",
                    300: "#CCCCCC",
                    400: "#B2B2B2",
                    500: "#999999",
                    600: "#7F7F7F",
                    700: "#666666",
                    800: "#4C4C4C",
                    900: "#333333",
                },
                blacks: {
                    /* shades of dark greys and blacks with different undertones of warm and cold colors */
                    DEFAULT: "#303030",
                },
            },
        },
        fontFamily: {
            heading: ["Oswald", "sans-serif"],
            text: ["Source Sans 3", "sans-serif"],
        },
    },

    plugins: [],
};
