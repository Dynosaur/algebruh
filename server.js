const express = require('express');

const app = express();

const port = 8080;
const htmlFile = __dirname + '/index.html';
const scriptFile = __dirname + '/src/index.js';
console.log(htmlFile);

app.get('*', (req, res) => {
    console.log('Requested: ' + req.url);
    switch(req.url) {
        case '/':
            res.sendFile(htmlFile);
            console.log('Response sent.');
            break;
        case '/src/index.js':
            res.sendFile(scriptFile);
            console.log('Response sent.');
            break;
        default:
            res.send('Not found.');
            console.log('Send 404 status');
    }
});

app.listen(port, () => {
    console.log('Server listening to port ' + port + '...');
});