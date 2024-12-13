const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const isProduction = process.env.NODE_ENV === "production";
const styleLoaderHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

module.exports = {
  // entry: path.resolve(__dirname, 'src', 'index.js'),
  entry: path.resolve(__dirname, 'typescript', 'index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name][contenthash].js',
    clean: true,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      '.js': ['.js', '.ts'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    },
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    host: 'localhost',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [styleLoaderHandler, "css-loader", "sass-loader"],
        use: ["style-loader", "css-loader", "sass-loader"],
        use: [styleLoaderHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
      filename: 'index.html',
      title: 'Крестики-нолики',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash].css',
   }),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      fix: true,
    }),
  ],
};
