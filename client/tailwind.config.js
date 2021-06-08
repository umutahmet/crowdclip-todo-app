const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = {
    ...defaultTheme.fontFamily,
    sans: ['Montserrat', 'system-ui', 'sans-serif']
}

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily,
        extend: {
            colors: {
                primary: '#8D11C8',
                secondary: '#0D0D0D',
                grey: '#FAFAFA'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
