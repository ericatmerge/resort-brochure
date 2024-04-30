/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
            earth: {
                light: '#D8C3A5',
                dark: '#645143',
            },
            sky: {
                light: '#BCE7FD',
                dark: '#417A9E',
            },
            grass: {
                light: '#CFF0D2',
                dark: '#3D8B3F',
            },
            sand: {
                light: '#F5E4CC',
                dark: '#A67C4D',
            },
            },
            fontFamily: {
                body: ['"Open Sans"', 'sans-serif'],
                heading: ['"Montserrat"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}