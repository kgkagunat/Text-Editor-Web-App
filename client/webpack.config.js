const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new InjectManifest({
        swSrc: './src/src-sw.js',
      }),
      new WebpackPwaManifest({
        name: 'The Text Editor App',
        short_name: 'TE App',
        description: 'Here is the text editor app',
        background_color: '#ffffff',
        crossorigin: 'use-credentials',
        icons: [{
          src: path.resolve(__dirname,'src/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        }]
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
