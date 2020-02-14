const path = require('path');
const express = require('express');

const server = express();
const port = 80;
const htmlFile = path.resolve(__dirname, '/dist/index.html');

server.use(
    express.static(path.resolve(__dirname + '/dist'))
);

server.get('*', (req, res) => {
    res.sendFile(htmlFile);
});

server.listen(port);
console.log(`Server is listening on port ${port} ...`);