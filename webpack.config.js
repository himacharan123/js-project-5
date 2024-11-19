const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', 
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
    port: 3000,
  },
  mode: 'development',
};
