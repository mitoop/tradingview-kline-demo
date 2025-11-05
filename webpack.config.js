const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/assets', to: '' }
        ]
      })
    ],
    devServer: {
      static: 'src/assets',
      host: '0.0.0.0',
      port: 8080
    }
  }
};
