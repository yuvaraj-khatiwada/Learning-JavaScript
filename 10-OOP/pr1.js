// You are Creating a website for yor college. create a class 
// user with 2 properites, name and email . it also has a 
// method called viewData() that allows user to view website data 
// create a new class called admin which inherits from user . 
// addd a new method called editData to Admin that allows it to edit website data 

let Data = "very sensative";
class user{
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Your Data =" , Data);
    }
}
class admin1 extends user{
    editData() {
        Data = "Editing the data";
        console.log(Data);
    }
}
let student1 = new user("Yuvaraj" , "abc@gmail.com");
let sutdent2 = new user("Khatiwada" , "xyz@gmail.com");
let admin = new admin1("admin" , "admin@gmail.com");