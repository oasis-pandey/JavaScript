//PROMISE

//Promise is created to solve the problem of callback hell. It is a object. Promise has generally 3 stages, pending, resolved, rejected.
// resolve and reject are created by JS. In general programming we dont create promises. Others created promises and we follow it (eg in API calls)
//

// Create a new Promise
let p = new Promise((resolve, reject) => {
  // Some logic: add 1 + 1
  let a = 1 + 1;

  // Check if the result is 2
  if (a == 2) {
    // If true, resolve the promise
    resolve('Success');
  } else {
    // If false, reject the promise
    reject('Failed');
  }
});

// Handle the result of the promise
p.then((message) => {
  // This runs if the promise was resolved
  console.log('This is in the then ' + message);
}).catch((message) => {
  // This runs if the promise was rejected
  console.log('This is in the catch ' + message);
});


