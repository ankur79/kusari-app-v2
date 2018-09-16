const path = require("path");
const resolve = require("path").resolve;
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
module.exports = {
  target: "node",
  mode: "production",
  entry: "./server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      },
      __CLIENT__: false
    })
  ],
  externals: [webpackNodeExternals()]
};
