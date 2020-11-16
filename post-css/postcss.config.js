const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};

// import tailwindcss from 'tailwindcss';
// export default {
//   plugins: [
//     tailwindcss('./tailwind.js'),
//     require('autoprefixer')
//   ]
// }
