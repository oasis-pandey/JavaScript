const car = {
    model : "toyota",
    year : 1980,
    color : "red",
    isFast : true
};

function Car(model, year, color, isFast){
    this.model = model;
    this.year = year;
    this.color = color;
    this.isFast = isFast;
    this.rave = function(){
        console.log("VROOOOMMMMM")
    }
}

let newCar1 = new Car("Honda", 1980, "red", true);
console.log(newCar1.rave());





// console.log(car.model);
// console.log(car["model"])

// car.year = 2000;

// console.log(car.year)

// // Object.freeze(car) // No changes will be applied after this line
// // check 
// car.model = "hero honda"

// console.log(car.model) // NO change prints "toyota"

// car.rave = function(){
//     console.log("VROOOMMMMM")
// }

// car.rave()