const fetch = require("fetch");
const fs = require("fs")

fetch.fetchUrl("http://www.valtech.com/",  function(error, meta, data){
    if(error){
        console.log("Error", error);
    }
    else{
        
        fs.writeFileSync("temp/tempv.html", data, "utf-8")
    }
})
