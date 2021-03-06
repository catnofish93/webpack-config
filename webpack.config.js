const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import webpack from 'webpack'
const ASSET_PATH = process.env.ASSET_PATH || '/'
module.exports = {
  entry: './src/index.js',
  // entry: {
    // index: {
    //   import:'./src/index.js',
    //   dependOn: 'shared',
    // },
    // print: {
    //   import: './src/print.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash'
  // },
  // entry: './src/library.js',
  output: {
    // filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: ASSET_PATH
    // library: {
    //   name: 'webpackNumbers',
    //   type: 'umd'
    // }
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
      // new BundleAnalyzerPlugin(),
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
      })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_'
  //   }
  // },
  mode: "development",
  optimization: {
    // runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/node_modules[\\/]/,
    //       name: 'vendor',
    //       chunks: "all"
    //     }
    //   }
    // }
    usedExports: true
  },
}
