const express = require("express")
const server = express()

const serverPort = 80;

const htmlFile = __dirname + '/dist/index.html';

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