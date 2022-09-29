const express =require("express");
let app = express();
// routes
app.get("/", (req,res)=>{
    // res.write("hello from express");
    // res.end();
    res.send("hello from express")
})
app.listen(3030, "localhost", function(err){
    if(err) console.log("Error", err)
});
console.log("web server is now live");
