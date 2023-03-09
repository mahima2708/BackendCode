const http = require('http');
const fil =require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
if(url==='/'){
  fil.readFile( "message.txt",{encoding: "utf-8"}, (err,data)=>{
    if(err){
      console.log(err);
    }
    console.log("$$$$" +url);
 
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body>${data}</body>`);
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  });
    
}
 else if(url=== '/message' && method ==='POST'){
    
    const body= [];
    req.on('data', (chunk)=> {
       body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fil.writeFile('message.txt', message, (err)=>{
        if(err){
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
    
    
  }
  else{
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Server</title></head>');
    res.write('<body><h1>Hello From My First Server</h1></body>');
    res.write('</html>');
    res.end();
  }  
});

server.listen(4000);