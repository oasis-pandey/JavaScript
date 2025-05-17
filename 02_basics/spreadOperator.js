
//++++++++++++++++++++++++++++++++++++++++++++ SPREAD ++++++++++++++++++++++++++++++++++++++++++++++++++=
let numbers = [1,2,3,4,5]
// console.log(numbers)

let max = Math.max(...numbers); // Math.max dont take array , ... unpacks all numbers in the array and passes to the .max function.
                                // Its like opening a box and extracting numbers
// console.log(max);  

let username = "oasis"
let letters = [...username]

// console.log(letters)

let fruits = ["apple","orange","banana"]
let vegetables = ["squash","zuccini"]

let food = [...fruits, ...vegetables]

// console.log(food)

// console.log(Math.max(1,6,5,3))

//++++++++++++++++++++++++++++++++++++++++++++ REST ++++++++++=====+++++++===++==+=+==+=+====+===+++++++++++++

// Same like templates for C++

// used to pass any number of arguments

function openFridge(...foods){
    console.log(...foods)
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1,food2,food3);
console.log(foods);

// +++++++++++++++ SUM NUMBERS ++++++++++++++
function sum (...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(5,4,3,2,1))

