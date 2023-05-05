var http=require('http');
var dt=require('./module');
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Today date is: "+dt.myDateTime());
    res.end();
}).listen(8080);
console.log("Server running.....");