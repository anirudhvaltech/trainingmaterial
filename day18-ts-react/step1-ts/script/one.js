"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Hero_mission;
/*
let message:string = "555";
alert(message);
*/
// let users:string[] = ["ironman"];
// let users:Array<string> = ["ironman"];
// let users:(string | Array<string | number>) = ["ironman",555];
/*
let users:any;
let val:boolean = true;
*/
/*
function adder(num1:number, num2:number):string{
    return "Total "+num1 + num2;
}
*/
function adder(num1, num2, num3) {
    return num1 + num2;
}
;
function init() {
    document.querySelector("#box").innerHTML += adder(5, 6);
}
document.addEventListener("DOMContentLoaded", init);
class Person {
    constructor(name) {
        this.name = name;
    }
    canWalk() {
        return "I can walk";
    }
}
class Hero extends Person {
    constructor(title, firstname, lastname, hname) {
        super(hname);
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        _Hero_mission.set(this, "my secret mission");
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    static saypower() {
        return 7;
    }
    get mission() {
        return __classPrivateFieldGet(this, _Hero_mission, "f");
    }
    set mission(nmission) {
        __classPrivateFieldSet(this, _Hero_mission, nmission, "f");
    }
    sayname() {
        return this.name;
    }
}
_Hero_mission = new WeakMap();
Hero.version = 1001;
;
