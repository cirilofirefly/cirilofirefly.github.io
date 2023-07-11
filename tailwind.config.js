/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './index.html',
    ],
    theme: {
        colors: {
            primary: '#E45826',
            secondary: '#E6D5B8',
            tertiary: '#F0A500',
            quaternary: '#1B1A17',
            white: '#f4f4f4'
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        extend: {
            fontFamily: {
                'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'text-shine': 'textShine 3s linear infinite',
                'slide-up-down' : 'slideUpDown 1s normal forwards'
            },
            keyframes: {
                textShine: {
                    '0%' : { backgroundPosition: '0% 50%' },
                    '100%' : { backgroundPosition: '100% 50%' }
                },
                slideUpDown: {
                    from : { top: '-1000px'},
                    top : { top: '0px'}
                }
            },
            sepia: {
                25: '.25',
                75: '.75',
            }
        },
    },
    plugins: [],
}
