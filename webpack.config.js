const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  devtool: 'inline-source-map', // error의 위치를 정확하게 보기 위해서 
  devServer: {
    static: './build'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Output Management'
      title: "Development"
    })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/', 
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
  },
  optimization: {
    runtimeChunk: 'single'
  }
}