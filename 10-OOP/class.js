// class is mostly used when to create bulk numbers of similar objects
// class is program template for creating the object 
class BmwCar {
    constructor(brand) {  // classes is used to inialiatilized the some work at first
        console.log("creating the objects"); 
        this.brand = brand;
    }
    start() {
        console.log("car is started");
    }
    stop() {
        console.log("car is stopped");
    }
    // SetBrand(brand) {
    //     this.BrandName = brand;
    // }
}
let Toyotacar = new BmwCar("fortuner");
console.log(Toyotacar);
// Toyotacar.SetBrand("foutuner");
