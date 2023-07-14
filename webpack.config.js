const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization: {
    minify: true,
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = config;