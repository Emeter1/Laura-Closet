/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'custom-bg': "url('./public/img/bg1.png')",
    },
    pinkLady: {
      'landing-lady': "url('./public/img/pink.png')",
    },
    extend: {},
  },
  plugins: [],
}

