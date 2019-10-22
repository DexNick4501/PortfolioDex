let http = require('http');
let port = 81;
let ip = '127.0.0.1';
let server = http.createServer(function (request, response) {
    console.log(`URL: ${request.url}`);
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    response.end('Hello world!');
});

server.listen(port, ip);
console.log(`server started on ${port}:${ip}`);