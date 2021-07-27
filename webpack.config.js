const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  // entry: {
  //   index: {
  //     import:'./src/index.js',
  //     dependOn: 'shared',
  //   },
  //   print: {
  //     import: './src/print.js',
  //     dependOn: 'shared',
  //   },
  //   shared: 'lodash'
  // },
  entry: './src/codeSplit.js',
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: '管理输出'
      }),
      new BundleAnalyzerPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      // chunks: 'all',
    }
  },
}
