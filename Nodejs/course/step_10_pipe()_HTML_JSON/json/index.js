let fs = require('fs');

let http = require('http');
let port = 81;
let ip = '127.0.0.1';

let server = http.createServer(function(req, res) {
    console.log(`URL page: ${req.url}`);
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    let obj = {
        model: 'Audi',
        speed: '234.2',
        wheels: 4
    };
    res.end(JSON.stringify(obj));
});

server.listen(port, ip);
console.log(`Server begin on ${ip}:${port}`);