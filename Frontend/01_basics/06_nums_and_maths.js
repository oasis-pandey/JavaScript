
// +++++++++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++++++++
const score = 400;
console.log(score);

const balance = new Number(100);
// console.log(balance) // outputs: [Number: 100] since its explicitly defined using object "Number"

// console.log(balance.toString().length); // converts to stringg , .length gives length of string
// console.log(balance.toFixed(2)) // setprecision

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3)) // rounds off upto n, so if we have otherNumber.toPrecision(2) we get 1.2e+2

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// +++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));

console.log(Math.random());

// Random between a and b
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))