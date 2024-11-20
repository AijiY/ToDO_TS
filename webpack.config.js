const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MinCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        loader: "babel-loader",
        options: {
          preset: [
            "@babel/preset-env",
          ]
        }
      }
    ]
  },
  target: ["web", "es5"],
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MinCssExtractPlugin(),
  ],
};