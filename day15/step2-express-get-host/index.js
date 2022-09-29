const express = require("express");

let app = express();
let herolist = [];
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("home.ejs", { 
        compname:"Valtech",
        herolist,
    })
})

app.post("/", (req,res)=>{
    herolist.push(req.body.nhero);
    res.redirect("/");
    res.end();
    // console.log(herolist);
})

app.listen(5050,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(`The server is now live on localhost:5050`)
    }
})