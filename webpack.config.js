const path = require('path');
const miniCSS = require('mini-css-extract-plugin');

const srcDir = path.resolve(__dirname, './src');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        include: srcDir,
        loader: 'babel-loader'
      },
      {
        test: /\.s(a|c)ss$/,
        include: srcDir,
        use: [miniCSS.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: srcDir,
        loader: 'file-loader'
      },
      {
        test: /\.tsx?$/,
        include: srcDir,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.ts', '.tsx']
  },
  plugins: [new miniCSS(
      { filename: 'index.css', chunkFilename: 'index.css' }
  )],
  devtool: "source-map",
  stats: 'errors-warnings'
};