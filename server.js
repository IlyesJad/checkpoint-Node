var http = require("http");
http.createServer(function(request,resonse){
    Response.writeHead(200,{"content-type":"text/plain"});
    Response.end("<h1>Hello Node</h1>")
}).listen(3000)
console.log("server running at http://127.0.0.1:3000");