const webpack = require('webpack');
const path = require('path');

const cssModules = 'css?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]';

module.exports = {
  devtool: 'inline-sourcemap',
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
          ],
          plugins: [
            ['react-hot-loader/babel'],
          ],
        },
      },
      {
        test: /\.(html|xml)$/,
        exclude: /node_modules/,
        loader: 'file?name=[path][name].[ext]',
      },
      {
        test: /\.(mp4)$/,
        exclude: /node_modules/,
        loader: 'file?name=[path][name].[ext]',
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2|gif|jpg|jpeg|png|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: `style!${cssModules}!postcss`,
      },
    ],
  },
  resolve: {
    root: [path.resolve('./app')],
    // alias: {
    //   'TweenLite': 'services/gsap/TweenLite',
    //   'Draggable': 'services/gsap/Draggable',
    //   'CSSPlugin': 'services/gsap/CSSPlugin'
    // }
  },
  postcss() {
    return [
      require('postcss-cssnext'),
      require('precss'),
    ];
  }
};
