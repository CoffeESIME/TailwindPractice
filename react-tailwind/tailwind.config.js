module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco' : "url('/src/img/sanFrancisco.jpg')",
      },
      backgroundColor: theme=>({
        ...theme('colors'),
        'primary':'#CC2D4A',
        'secondary':'#8FA206',
        'terciary':'#61AEC9'
      }),
      textColor:{
        'primary':'#CC2D4A',
        'secondary':'#8FA206',
        'terciary':'#61AEC9'
      },
      fontFamily:{
        Montserrat: ['Montserrat Alternates', 'sans-serif']
      }
    },
  },
  plugins: [],
}
