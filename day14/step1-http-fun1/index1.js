const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type' : "text/html"
    });
    res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
    `);
    res.write(`<h2> ${message} </h2>`);
    res.end();
})

.listen(2020, "localhost", function(error){
    if(error){
        console.log("Error", error);
    }
    else{
        console.log("server is now live on localhost:2020");
        // console.log(process.env.PORT);
    }
}
)