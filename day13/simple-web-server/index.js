const http = require("http");
let server = http.createServer(function(req, res){
    res.write("hello from ani's web server");
    res.end();

})

server.listen(1010, "localhost", function(error){
    if(error){
        console.log("Error", error);
    }
    else{
        console.log("server is now live on localhost:1010");
    }
})