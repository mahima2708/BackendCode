const http = require('http');

const route = require('./routes');
//const server = http.careteServer(route);


const server = http.createServer(route.handler);

server.listen(4001);