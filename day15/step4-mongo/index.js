const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");

let app = express();

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let url = "mongodb+srv://admin:rWaCRaBYG6pFMLJv@cluster0.ml8l66d.mongodb.net/valtechdb?retryWrites=true&w=majority"

let Hero = mongoose.model("Hero", Schema({
    id:ObjectId,
    title:String,
    firstname:String,
    lastname:String
}));

mongoose.connect(url)
.then(function(){
    console.log("db connected");
})
.catch(function(error){
    console.log("Error", err);
})

app.get("/", function(req,res){
    Hero.find().then(dbres=>{
        res.json(dbres);
    })
})


app.listen(6137, "localhost", function(error){
    if(error){
        console.log("Error ",error);
    }
    else{
        console.log("The server is running live on localhost:6137")
    }
})
