const express = require("express");

let app = express();
//$env:PORT=5000-powershell
//set PORT=5000-cmd
// export PORT=5000-bash
//settings
// app.set("view engine","ejs")--//no need to add .ejs extension
app.set("views","templates");//searches for templates folder instead of the default views folder
var port = process.env.PORT || 6000;

console.log(port);
app.get("/", (req,res) =>{
    // res.sendFile(__dirname+"/public/index.html");
    // res.render("index.ejs",{
    //     compname: "Valtech",
    //     message: "Welcome to your life"
    // });
    res.render("index.pug",{
        compname: "Valtech",
        message: "Welcome to your life"
    });
})
app.get("/about", (req,res) => {
    // res.render("about.ejs",{
    //     compname:"Valtech"
    // });
    res.render("about.pug",{
        // compname:"Valtech"
    });
    // res.sendFile(__dirname+"/public/about.html");  
});
app.get("/contact", (req,res) => {
    // res.render("contact.ejs",{
    //     compname: "Valtech"
    // });
    res.render("contact.pug",{
        // compname: "Valtech"
    });
    // res.sendFile(__dirname+"/public/contact.html");
})

app.listen(port, "localhost", function(error){
    if(error){
        console.log("Error ", error);
    }
    else{
        // console.log("server is now live on localhost: ", server.address().port);
        console.log(`The server is now live on localhost:${port}`);
    }
});
