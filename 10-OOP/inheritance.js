class people{
    constructor (name) {
        this.species = "home sapiens";
        console.log("creation  of obj")
        this.name = name;
    }
    sleep() {
        console.log("sleep");
    }
    eat() {
        console.log("eat");
    }
    work() {
        console.log("nowork")
    }
}
class engineer extends people{
    constructor(name) {
        console.log("execution  of obj");
        super(name); // helps to pass the name key to parent object
        // this.branch = branch;
        console.log("exit  of obj");
        
    }
    work() {
        super.eat(); // if no super then cant get into parent
        console.log("can design new idea into reality ");
    }
}
let Yuv = new engineer("Yuvaraj");
// super keyword is used to call the constructor of its parents class to access the parents properties and methods 
// super(arg) ->calls parents constructor .. super.parentMethod(args)
