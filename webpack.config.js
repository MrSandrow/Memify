const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('public'),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve('src'),
        use: { loader: 'babel-loader', options: { cacheDirectory: true } },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/img/favicon.png',
    }),
  ],

  devServer: {
    host: '127.0.0.1',
    port: 5500,
    hot: true,
    open: true,
    clientLogLevel: 'none',
  },
};
