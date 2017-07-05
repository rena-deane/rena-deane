const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssModules = 'css?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]';

module.exports = {
  devtool: null,
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: './',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=react',
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        exclude: /node_modules/,
        loader: 'file?name=images/[name].[ext]',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: `style!${cssModules}!postcss`,
        // loader: ExtractTextPlugin.extract(`${cssModules}!postcss`),
      },
      {
        test: /\.(html|xml)$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.(mp4)$/,
        exclude: /node_modules/,
        loader: 'file?name=media/[name].[ext]',
      },
    ],
  },
  resolve: {
    root: [path.resolve('./app')],
  },
  postcss() {
    return [
      require('postcss-cssnext'),
      require('precss'),
    ];
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new ExtractTextPlugin('styles.css'),
    new CleanWebpackPlugin(['dist'])
  ],
};
