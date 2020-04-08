const path = require('path');
const miniCSSPlugin = require('mini-css-extract-plugin');

const srcDir = path.resolve(__dirname, './src');
const publicDir = path.resolve(__dirname, './dist');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: publicDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: srcDir,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                include: srcDir,
                loader: 'ts-loader'
            },
            {
                test: /\.sass$/,
                include: srcDir,
                use: [miniCSSPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png)$/,
                include: srcDir,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.sass', '.ts', '.tsx']
    },
    plugins: [ new miniCSSPlugin({ filename: 'index.css', chunkFilename: 'index.css' }) ],
    devtool: 'source-map',
    stats: 'errors-warnings'
}