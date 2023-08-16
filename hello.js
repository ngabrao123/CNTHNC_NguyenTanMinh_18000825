const http = require('http');
http.createServer((request, Response) => {
    Response.writeHead(200, {
        'Content-Type' : 'text/plain'
    
    });
    Response.write('Hello, World!\n');
    Response.end();

}) .listen(1337);