const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // entry: './src/index.js',
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      { // stylesheet
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // can be chanined, but order is important
      },
      { // assets
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      { // fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  }
}