var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    console.log("Opened")
    if(req.url === "/"){
        fs.readFile("./index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
        if(req.url === "/button.html"){
            fs.readFile("./button.html", "UTF-8", function(err, html){
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(html);
            });
        }
    }else{
        fs.readFile("./nopage.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

}).listen(process.env.PORT || 4501);