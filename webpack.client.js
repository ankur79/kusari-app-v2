const path = require("path");
const resolve = require("path").resolve;
const webpack = require("webpack");
module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/client.js",
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "client_bundle.js"
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
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
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
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        WEBPACK: true
      },
      __CLIENT__: true
    })
  ]
};
