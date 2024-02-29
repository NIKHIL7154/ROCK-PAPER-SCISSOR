/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        screens: {
            'mox': {'max': '768px'},
            // => @media (max-width: 1535px) { ... }
            'xl':'1300px',
        }
    },
    
  },
  plugins: [],
}