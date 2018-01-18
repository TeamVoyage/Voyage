const webpack = require('webpack');

const path = require('path');

const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        // include: SRC_DIR,
        // loader: 'babel-loader',
        // query: {
        //   presets: ['react', 'es2015'],
        // },
        loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  node: {
  fs: 'empty',
  },
};

// const webpack = require('webpack');
//
// const path = require('path');
//
// const SRC_DIR = path.join(__dirname, '/react-client/src');
// const DIST_DIR = path.join(__dirname, '/react-client/dist');
//
// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR,
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
//         query: {
//           presets: ['es2015', 'react', 'stage-0'],
//         },
//       },
//       {
//         test: /\.png$/,
//         loader: 'url-loader?limit=100000',
//       },
//       {
//         test: /\.jpg$/,
//         loader: 'file-loader',
//       },
//     ],
//   },
// };
