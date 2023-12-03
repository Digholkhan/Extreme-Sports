/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container':'1320px',
      },
      colors: {
        'Orange':'#FB9600',
        'color-body':'#0C3543',
        'secondary':'#0F4152',
      },
      fontFamily:{
        'IBM':['IBM Plex Sans', 'sans-serif'],
        'Yellowtail':['Yellowtail', 'cursive'],
        'Arizonia':['Arizonia', 'cursive']
      },
      backgroundImage:{
        'BannerImg':"url('/src/assets/banner.png')",
        'StarBg':"url('/src/assets/stat-bg-1.png')",
        'StarBg2':"url('/src/assets/star-bg-2.png')",
      }
    },
  },
  plugins: [],
}
