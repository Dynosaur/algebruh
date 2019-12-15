const express = require("express")
const server = express()

const serverPort = 8080;

const htmlFile = __dirname + '/dist/index.html';
const scriptFile = __dirname + '/dist/bundle.js';

server.get('*', (req, res) => {
    console.log('Request incoming: "' + req.url + '"');
    if (req.url == '/') {
        res.sendFile(htmlFile);
        console.log('Response sent.\n');
        return;
    }
    if (req.url.endsWith('.js')) {
        res.sendFile(scriptFile);
        console.log('JavaScript file requested.\nSent /dist/bundle.js.\n');
        return;
    } else {
        res.sendFile(htmlFile);
        console.log('Unknown request. Sent index.html.\n');
    }
});

server.listen(serverPort, () => {
    console.log('Server is listening on port ' + serverPort + ' ...');
});