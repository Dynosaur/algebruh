const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: __dirname + "/src/index.jsx",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.module\.s(a|c)ss$/,
            loader: [
              isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: isDevelopment
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: isDevelopment
                }
              }
            ]
          }, {
            test: /\.s(a|c)ss$/,
            exclude: /\.module.(s(a|c)ss)$/,
            loader: [
              isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: isDevelopment
                }
              }
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
            ]
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'css', '.ts']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
        chunkFilename: 'index.css'
      })
    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: "source-map"
};