const express = require("express")
const server = express()

const serverPort = 8080;

const htmlFile = __dirname + '/dist/index.html';
const scriptFile = __dirname + '/dist/bundle.js';
const iconFile = __dirname + '/dist/favicon.ico';
const styleFile = __dirname + '/dist/index.css';

server.use(
    express.static(__dirname + '/dist')
);

server.get('*', (req, res) => {
    console.log('Request incoming: "' + req.url + '"');
    res.sendFile(htmlFile);
});

server.listen(serverPort, () => {
    console.log('Server is listening on port ' + serverPort + ' ...');
});