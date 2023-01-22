const path = require("path");
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("postcss-hexrgba"),
  require("autoprefixer"),
];

module.exports = {
  mode: "development",
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    // onBeforeSetupMiddleware: function (devServer) {
    //   devServer._watch("./app/**/*.html");
    // },
    watchFiles: ["./app/**/*.html"],
    // before: function (app, server) {
    //   server._watch("./app/**/*.html");
    // },

    // ContentBase: path.join(__dirname, "app"),
    static: {
      directory: path.join(__dirname, "app"),
    },
    hot: true,
    port: 3000,
    host: "0.0.0.0",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },
        ],
      },
    ],
  },
};
