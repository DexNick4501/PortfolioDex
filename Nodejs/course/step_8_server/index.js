let http = require('http');
let port = 81;
let ip = '127.0.0.1';
let server = http.createServer(function (req, res) {
    console.log(`URL: ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Привет мир!');
});

server.listen(port, ip);
console.log(`сайт запущен: ${ip}:${port}`);