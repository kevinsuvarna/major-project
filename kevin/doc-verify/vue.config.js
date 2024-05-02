const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

module.exports = {
  pages: {
    'index': {
      // entry for the page
      entry: "./src/pages/Home/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Home",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    'add': {
      // entry for the page
      entry: "./src/pages/AddDoc/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Add Certificate",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    'verify': {
      // entry for the page
      entry: "./src/pages/Verify/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Verify Certificate",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    }
  }
};

module.exports = {
  devServer: {
    port: 8085, // your desired port number
  },
};
