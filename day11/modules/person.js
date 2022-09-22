class Person{
    constructor(hname){
        this.name = hname;
    }
    canWalk(){
        return "I can walk"
    }
    sayName(){
        return this.name; 
    }
}

export default Person;