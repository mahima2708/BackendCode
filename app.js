const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url==='/home'){
    res.setHeader('content-Type', 'text/plain');
    res.write('Welcome home');
    res.end();
}
else if(req.url==='/about'){
    res.setHeader('content-Type', 'text/plain');
    res.write('Welcome to about us page');
    res.end();
}
else if(req.url ==='/node'){
    res.setHeader('content-Type', 'text/plain');
    res.write('Welcome to my Node Js project');
    res.end();
}
else if(req.url==='/'){
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Server</title></head>');
    res.write('<body><h1>Hello From My First Server</h1></body>');
    res.write('</html>');
    res.end();
}


});

server.listen(4000);