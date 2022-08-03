import { Hum } from "./human.js";

class Hero extends Hum{
    title = "default title";
    firstname = "default first name";
    lastname = "default last name";
    #mission = "my secret mission";
    static version = 1001;
    constructor(htitle, hfname, hlname, hct){
        super(hct);
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
};

export { Hero }