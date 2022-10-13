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
function adder(num1:number, num2:number, num3?:number){
    return num1 + num2;
};

function init(){
    document.querySelector("#box")!.innerHTML += adder(5,6);
}
document.addEventListener("DOMContentLoaded", init);


/* 
class Person{
    name:string;
    constructor(hname:string){
        this.name = hname;
    }
    canWalk(){
        return "I can walk";
    }   
} 
*/
interface IPerson{
    name:string;
    canWalk():string;
}
class Person implements IPerson{
    constructor(public name:string){}
    canWalk(){
        return "I can walk";
    }  
}
interface IHero{
    title:string;
    firstname:string;
    lastname:string;
    fullname():string;
    sayname():string;
}
class Hero extends Person implements IHero{
    #mission = "my secret mission";
    static version = 1001;
    constructor(
        public title:string, 
        public firstname:string, 
        public lastname:string, 
        hname:string){
            
        super(hname);
    } 
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    static saypower(){
        return 7
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
    sayname(){
        return this.name;
    }
};