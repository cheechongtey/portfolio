/* eslint-disable */

const colors = require("tailwindcss")

module.exports = {
    purge: [
        "./src/**/*.html",
        "./src/**/*.tsx",
        "./src/**/*.jsx",
        "./src/**/*.ts",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "767px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.2em',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#000249',
        }),
        extend: {
            fontFamily: {
                montserrat: ["Montserrat"],
                firacode: ["Fira Code"],
            },
            colors: {
                primary: {
                    light: "#1DCED8",
                    dark: "#000249",
                },
                secondary: "#FAF9F0",
                tertiary: "#F6490D",
                button: "#1DCED8",
                footer: "#FBE8D3",
            },
        },
    },
    variants: {
        extend: {
            animation: ["motion-safe"],
        },
    },
    plugins: [],
}
