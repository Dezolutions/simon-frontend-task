const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
  stats: 'minimal',
  entry: [path.resolve(__dirname, './src/main.js')],
  output: {
    path: path.resolve(__dirname, './assets/'),
    filename: '[name].bf.build.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@shopify-directory': path.resolve(__dirname, './'),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: '[name].bf.build.css',
        },
        use: [
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    // }),

    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['**/*', '!*static*'],
    // }),

    new FixStyleOnlyEntriesPlugin({ extensions: ['scss'] }),
  ],
};
