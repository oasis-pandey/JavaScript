
const h1 = document.querySelector("h1")

document.querySelector("h1").innerHTML = localStorage.getItem("value")

document.querySelector("#btn").addEventListener("click",()=>{
    // document.querySelector("h1").innerHTML= document.querySelector("#input").value;
    localStorage.setItem("value",document.querySelector("#input").value)
    document.querySelector("h1").innerHTML = localStorage.getItem("value")

})
