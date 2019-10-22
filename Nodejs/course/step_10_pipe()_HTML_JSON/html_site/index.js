let fs = require('fs');

let http = require('http');
let port = 81;
let ip = '127.0.0.1';

let server = http.createServer(function(req, res) {
    console.log(`URL page: ${req.url}`);
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    let myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadShort.pipe(res);
});

server.listen(port, ip);
console.log(`Server begin on ${ip}:${port}`);