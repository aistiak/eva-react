// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-1': "url('http://localhost:3000/assets/imgs/Shape_01.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  fontFamily : {
    'poppins-bold' : ['PoppinsBold'] , 
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
