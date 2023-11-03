const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/index.tsx",
  mode: isDevelopment ? 'development' : 'production',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      }
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv(),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
    hot: true
  },
};
