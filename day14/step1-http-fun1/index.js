const http = require("http");
const fs = require('fs');
let compname = "Valtech"
let server = http.createServer((req,res)=>{
    
    if(req.url == "/favicon.ico"){
        res.write("");
        res.end();
    }
    else if(req.url == '/'){
        let htmlcontent = fs.readFileSync("./index.html", "utf-8");
        res.writeHead(200,{
            "Content-Type":"text/html"
        })
        res.write(htmlcontent.replace("{valtech}", compname).replace("{valtech}", compname));
        res.end(); 
    }
    else{
        fs.readFile("./"+req.url, "utf-8" , function(error, data){
            if(error)
            {
                res.writeHead(404, {
                    "Content-Type":"text/html"
                });
                res.write("<h1> 404: No Donuts for you </h1>");
                res.end();
            }
            else{
                res.writeHead(200, {
                    "Content-Type":"text/html"
                });
                res.end(data.replace("{valtech}", compname).replace("{valtech}", compname));
            }
        })
    }

});

server.listen(2020, "localhost", function(error){
    if(error){

        console.log("Error ", error);
    }
    else{
        console.log("Success");

    }
})   