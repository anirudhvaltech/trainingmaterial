const fr = require("fs");

// fr.writeFileSync("temp.txt", "welcome to your life", "utf-8");

// fr.writeFile("temp.txt", "welcome to your life", "utf-8", function(error, data){
//     if(error){
//         console.log("Error", error);
//     }
//     else{
//         console.log("The file was created");
//     }
// }
// );

// console.log(fr.readFileSync("temp.txt", "utf-8"))
// fr.readFile("temp.txt", "utf-8", function(error, data){
//     if(error){
//         console.log("Error ", error);
//     }
//     else{
//         console.log("The file has been read", data);
//     }
// })
    fr.watchFile("temp.txt", function(){
        console.log("file updated");
    })

setInterval(function(){
    

    fr.appendFile("temp.txt","\nhello","utf-8", function(error, data){
        if(error){
            console.log("Error ", error);
        }
        else{
            console.log("content is added");
        }
    }); 
},2000)