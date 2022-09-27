const EventEmitter = require("events").EventEmitter;

// const event = require("events").EventEmitter;
let myEvent = new EventEmitter();

myEvent.addListener("valtech", function(){
    console.log("valtech event happened");
})
setTimeout(function(){
    myEvent.emit("valtech");
},2000)

// console.log(myEvent);