let fs = require('fs');
let http = require('http');
let port = 81;
let ip = "127.0.0.1";

let server = http.createServer(function(req, res) {
    console.log(`URL: ${req.url}`);
    if (req.url === "/index" || req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === "/about" ){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});
server.listen(port, ip);
console.log(`Server listed on: ${ip}:${port}`);