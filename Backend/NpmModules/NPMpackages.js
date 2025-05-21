let slugify = require('./NpmModules/node_modules/slugify/slugify') //importing slugify

let a = slugify('some string')
console.log(a)

let b = slugify("some string","_")
console.log(b)