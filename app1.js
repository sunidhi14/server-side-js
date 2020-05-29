var http=require("http");
var server=http.createServer((req,res)=>{
    res.writeHead(200);
    res.write("Hello World!!");
    res.end();

});

server.listen(8080);
