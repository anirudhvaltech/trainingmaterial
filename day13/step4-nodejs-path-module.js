var path=require("path");
// console.log(path.resolve('C:\anirudh\day13\step4-nodejs-path-module.js'))
var list = ["users","guest","admin"];
var files = ["index.html","profile.html","details.html"];
console.log(path.join(list[Math.floor(Math.random()*list.length)], files[Math.floor(Math.random()*list.length)]));
// console.log(path.join(list[(Math.round(Math.random())*(list.length-1))], files[(Math.round(Math.random())*(list.length-1))]));