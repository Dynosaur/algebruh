const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');
const express = require('express');

const server = express();
const port = 80;
const htmlFile = path.resolve(__dirname, './dist/index.html');

server.use(
    express.static(path.resolve(__dirname, './dist'))
);

server.get('*', (req, res) => {
    res.sendFile(htmlFile);
});

server.listen(port);
console.log(
    boxen(
        chalk.gray('Time: ' + new Date()) + '\n' +
        chalk.bold.rgb(0,225,0)(`Server is listening on port ${port} ...`)
    , {padding: 1, borderStyle: 'round', borderColor: '#27f'})
);