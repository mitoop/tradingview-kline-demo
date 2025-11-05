const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      index: path.resolve(__dirname, "src/index.js"),
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        publicPath: '/',
        inject: 'body',
      })
    ],
    devServer: {
      static: 'src/assets',
      host: '127.0.0.1',
      port: 8080
    }
  }
};
