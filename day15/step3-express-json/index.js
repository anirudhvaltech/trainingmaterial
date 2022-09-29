const express = require("express");
const path = require("path");
// const extData = require("./data/heroes.json");
const fs = require('fs');
 
let app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
let userdata = null;
// app.use(express.static(__dirname+"/public"));
let tempData = fs.readFileSync("data/heroes.json","utf-8");
userdata = JSON.parse(tempData);
console.log(userdata);
 
app.post("/", function(req, res){
    userdata.data.push( req.body );
    fs.writeFileSync("data/heroes.json",JSON.stringify(userdata),"utf-8");
    res.redirect("/");
    res.end();
});
app.listen(6060,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("The server is now live on localhost:6060")
    }
})