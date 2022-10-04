const express = require("express")
const mongoose = require("mongoose")
const session = require("client-sessions")
let app = express();

app.use(express.urlencoded({extended:true}));
app.use(session({
    cookieName: "valtech",
    secret: "u23hiwsp4hed8934iewjkli983uijwehw49yhfyowr94fhi3u89378skjfd",
    duration: 30*60*1000,
    activeDuration: 10*60*1000,
    cookie:{
        ephemeral: true
    }
    
}))
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id:ObjectId,
    firstname:String,
    lastname:String,
    email:{type:String, unique:true},
    password: String
}))
let dburl = "mongodb+srv://admin:2Sol9sO52o7bihnA@cluster0.ml8l66d.mongodb.net/valtechdb?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then(res=>console.log("db connected"))
.catch(error => console.log("Error ",error));

app.get("/",(req,res)=>{
    res.render("home.pug")
})
app.get("/login",(req,res)=>{
    res.render("login.pug")
})
app.post("/login",(req,res)=>{
    User.findOne({ email:req.body.email }, function(error, user){
        if(!user){
            res.render("login.pug", {
                error: "no users by those credentials"
            })
        }
        else{
            if(req.body.password === user.password){
                req.valtech.user = user;
                res.redirect("/profile");
            }
            else{
                res.render("login.pug", {
                    error: "invalid email or password"
                })
            }
        }
        
    })
})
app.get("/register",(req,res)=>{
    res.render("register.pug")
})
app.post("/register",(req,res)=>{
    var user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
    })

    user.save(function(error){
        let clienterror="";
        if(error){
            if(error.code == 11000){
                clienterror = "email id is already registered"
            }
            else{
                clienterror = "something went wrong"
            }
            res.render("register.pug", {clienterror})
        }
        else{
            res.redirect("/profile")
            console.log("user registered")
        }
    })
})
app.get("/profile",(req,res)=>{
    if(req.valtech && req.valtech.user){

        User.findOne({ email:req.valtech.user.email }, function(error, user){
            if(!user){
                req.valtech.reset();
                res.redirect("/login")
            }
            else{
                res.render("profile.pug")
            }  
        })
    }
    else{
        res.redirect("/login")
    } 
})
app.get("/logout",(req,res)=>{
    req.valtech.reset();
    res.redirect("/")
})

app.listen(2525, "localhost", function(error){
    if(error){
        console.log("Error", error);
    }   
    else{
        console.log("server is running on localhost:2525");
    };       
})