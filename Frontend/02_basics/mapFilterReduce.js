// const arr = [5,1,3,2,6]
// // THIS IS REDUCE,
// // it loops through an array, it takes function with 2 parameters, one accumulator, which in this case is sum or max, 
// // another it takes current which is similar to arr[i] and then perform necessary operation, the another parameter after function, in
// // this case 0 is the initial value of accu, so its same as setting acc = 0; looping and stuff
// const output = arr.reduce(function(accu, curr){
//     if(curr > accu){
//         accu = curr;
//     }
//     return accu;
// },0)
// console.log(output);

// // This is filter,
// //  it takes a function and filters out the elements if it meeds the function requirements
// const filterOdd = arr.filter((x) => {
//     if (x%2 != 0){
//         return x;
//     }
// })
// console.log(filterOdd);

// const mapArr = arr.map((x) => {
//     return x = x*2;
// })

// console.log(mapArr);

// ++++++++++++++++++++++++++++ COMPLEX EXAMPLES +++++++++++++++++++++++++++++++++++++=

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

// list of full names
// ["akshay saini", "donald trump", ...]

const userArr = users.map(function(x){
    return x.firstName +" " + x.lastName;
})

console.log(userArr)

// LEts find the number of people of diff age

const ageGroup = users.reduce(function(accu,curr){
    if(accu[curr.age]){
        accu[curr.age] = accu[curr.age]++;
    }else{
        accu[curr.age] = 1;
    }
    return accu;
},{})

console.log(ageGroup)

