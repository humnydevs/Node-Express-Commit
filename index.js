const express = require('express');
const http = require('http');

const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname+ '/public'))

app.use((req, res, next) => {
    // console.log(require.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});


const Server = http.createServer(app);
Server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});