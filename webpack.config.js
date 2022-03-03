const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'production';
const isDevelopment = nodeEnv === 'development';

const devtoolSetting = isDevelopment ? 'source-map' : false;
const babelPlugins = isDevelopment ? ['react-refresh/babel'] : [];

module.exports = {
  mode: nodeEnv,
  devtool: devtoolSetting,
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('public'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.ttf$/,
        include: path.resolve('src'),
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            plugins: babelPlugins,
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      shared: path.resolve('src', 'shared'),
    },
  },

  plugins: [
    new Dotenv({ systemvars: true }),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.png',
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: isDevelopment,
    clientLogLevel: 'none',
    historyApiFallback: true,
  },
};
