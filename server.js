const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const print = (text, options) => {
    if (options.background) {
        text = chalk.bgHex(options.background)(text);
    }
    if (options.color) {
        text = chalk.hex(options.color)(text);
    }
    if (options.bold) {
        text = chalk.bold(text);
    }
    if (options.underline) {
        text = chalk.underline(text);
    }
    console.log(text);
};

const blue = '#2277ff';
const brightGreen = '#00e000';

const compile = () => {
    print('Compiling...', { color: blue, bold: true })

    const callback = (err, stats) => {
        if (err || stats.hasErrors()) {
            print('Failed!', { color: 'e00000', bold: true });
            if (err) {
                console.log(
                    boxen(err, { borderColor: 'red', borderStyle: 'round', padding: 1 })
                );
            }
            if (stats.hasErrors) {
                console.log(stats.toString({ assets: false, modules: false, children: false, chunks: false, colors: true }));
            }
            process.exit(1);
        } else {
            print('Success!', { color: brightGreen, bold: true });
            serve();
        }
    };

    webpack(webpackConfig, callback);
};

const serve = () => {
    const server = express();
    const port = 80;
    const htmlFile = path.resolve(__dirname, './dist/index.html');

    server.use(express.static('./dist'));

    server.get('*', (req, res) => { res.sendFile(htmlFile); });

    server.listen(port);
    console.log(
        boxen(
            chalk.gray('Time: ' + new Date()) + '\n' +
            chalk.bold.hex(brightGreen)(`Server is listening on port ${port} ...`),
            { padding: 1, borderStyle: 'round', borderColor: blue }
        )
    );
};

compile();