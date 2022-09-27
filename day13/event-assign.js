const { clearInterval } = require("timers");

const EventEmitter = require("events").EventEmitter;

// const event = require("events").EventEmitter;
let myEvent = new EventEmitter();

let valtechHandler =  function(){
    console.log("valtech event happened");
}
myEvent.addListener("valtech",valtechHandler);
var count=0;

// var ci = setInterval(function(){
//     myEvent.emit("valtech");
//     count=count+1;
//     if(count==5){
//         clearInterval(ci);
//     }
// },1000)
var si = setInterval(function(){
    myEvent.emit("valtech");
    count=count+1;
    console.log("event triggered")
    if(count==5){
        myEvent.removeListener("valtech", valtechHandler);
        clearInterval(si);
    }
},1000)

