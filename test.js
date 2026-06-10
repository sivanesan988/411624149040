console.log("Hello welcome")

const a=20;
const b=30;
console.log(a+b)

const str="sivanesan"
console.log(str)

const arr=["arun", "niranjan", "muzaffar", "parathap","yokesh"]
console.log(arr)

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}            

arr[0]="sivanesan"
console.log(arr[0])

arr.push("arun")
console.log(arr)

arr.pop()
console.log(arr)

function eg(){
    console.log("I am playing cricket")
}
eg()

const ptag=document.getElementById("pt")
ptag.innerHTML=" Hello Sivanesan"

const input=document.getElementById("inputField")
const ouput=document.getElementById("input")

input.addEventListener("input", ()=>{
    ouput.textContent=input.value
})

//const first=document.createElement("p")
const first=document.createElement("h1")        //element create
first.textContent= "Hello"
document.body.appendChild(first)

first.remove()                              //element remove