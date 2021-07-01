const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require('./package.json').dependencies;
const path = require("path");
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9003,
  },
  output: {
    publicPath: "http://localhost:9003/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "features",
      library: { type: "var", name: "features" },
      filename: "features.js",
      exposes: {
        "./FeaturesApp": "./src/FeaturesApp",
      },
      shared: {
        react: "react",
        "react-dom": "react-dom",
        "styled-components": "styled-components"
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};