let promise1 = new Promise((resolve,reject)=>{
    let number = Math.random();
    if(number < 0.5){
        reject("Rejected because less than 0.5")
    }else{
        resolve("Resolved because greater than 0.5")
    }
})

promise1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})