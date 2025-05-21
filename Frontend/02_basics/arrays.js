const myArr = [1,2,3,4,5]

myArr.push(5)
myArr.pop()

myArr.unshift(2)
myArr.shift()
// console.log(myArr.includes(4))
// console.log(myArr.indexOf(5))

// const NewArr = myArr.join() // binds and converts into string
// console.log(NewArr)


// VERY IMPORTANT 
/*
    Slice cuts up the array but does not manipulate the original array. note: does not include the upper index [uses index range]
    Splice cuts up the array too and manipulates the original array. note: it takes number of characters to splice after index

    Example : If we want to slice and splice from index 5 to index 7  we do
    Myarr.slice(5,8) // 5,6,7 doesnt include 8
    Myarr.splice(5,3) // 5,6,7
*/
console.log("A", myArr)
const arr1 = myArr.slice(1,3);
console.log(arr1);

console.log("B", myArr)
const arr2 = myArr.splice(1,3)
console.log(arr2)
console.log(myArr)