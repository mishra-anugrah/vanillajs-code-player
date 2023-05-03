const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

// const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require("webpack");

// module.exports = {
//   entry: {
//     index: path.join(__dirname, "/src/index.js"),
//   },
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: "[name].js",
//     chunkFilename: "[name].js",
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "./index.css",
//       chunkFilename: "index.css",
//     }),
//     new HtmlWebPackPlugin({
//       template: "./src/index.html",
//       filename: "./index.html",
//       chunks: ["index"],
//     }),
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//     ],
//   },
//   devServer: {
//     static: "./dist",
//   },
// };
