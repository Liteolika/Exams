const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(3gp|flv|mp4|ogv|webm|mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // limit: 8000, // Convert images < 8kb to base64 strings
              name: "media/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [{ from: "src/media/**/*", to: "media", flatten: true }]
    ),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/1/html.html",
      filename: "./1/html.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/1/html5.html",
      filename: "./1/html5.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/1/html5api.html",
      filename: "./1/html5api.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/1/videoandaudio.html",
      filename: "./1/videoandaudio.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/1/canvas.html",
      filename: "./1/canvas.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/1/svg.html",
      filename: "./1/svg.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/2/csspos.html",
      filename: "./2/csspos.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/2/flex.html",
      filename: "./2/flex.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
