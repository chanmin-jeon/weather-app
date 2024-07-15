const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    filename: 'bundle.js', // output bundle file
    path: path.resolve(__dirname, 'dist'), // output directory
    clean: true, // clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.css$/, // regex for CSS files
        use: ['style-loader', 'css-loader'], // loaders to handle CSS files
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // regex for image files
        use: ['file-loader'], // loader to handle image files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // template file
      filename: 'index.html', // output file name
    }),
  ],
  mode: 'development', // set mode to development
};