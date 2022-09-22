import Person from "./person.js";

class Hero extends Person{
    title = "default title";
    firstname="default firstname";
    lastname="default lastname";
    #mission = "my secret mission";//agreement that we'll treat it as private if _ and # is actually private now
    static version = 1001;
    constructor(title, hfname, hlname, hname){
        super(hname);
        this.title = title;
        this.firstname = hfname;
        this.lastname = hlname;
    }
    fullname() {
        return this.firstname + " " + this.lastname;
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
};

export default Hero;