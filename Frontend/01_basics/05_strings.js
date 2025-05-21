const name = "oasis-pandey"
const repoCount = 5

console.log(name + repoCount + " Value") // not nice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const me = new String("Oasis-Pandey")
console.log(me.length)
console.log(me.toLowerCase())

console.log(me[1]); // strings also have indexing but its not array. Its an object with key value pairs (index:value)

console.log(me.charAt(2)) 
console.log(me.indexOf("s"))

const newString = me.substring(0,4); // does not include index 4 //cannot pass negative index
console.log(newString)

const anotherString = me.slice(-5,10); //negative indexing
console.log(anotherString)

let StringWithSpaces = "    Oasis    "
StringWithSpaces = StringWithSpaces.trim()
console.log(StringWithSpaces)

console.log(me.includes("bhandari"))
console.log(me.includes("Pandey"))

console.log(me.replace('-'," "))

console.log(me.split("-"))