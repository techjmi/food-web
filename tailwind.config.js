
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    // require("flowbite-react/tailwind").plugin(),
  ],
};

