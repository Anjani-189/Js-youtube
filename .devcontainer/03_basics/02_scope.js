// scope (Global && Local)

// Global scope
var a = 20
if(true){
    var a = 10
}
console.log(a)

//Local scope
const b = 10
let c = 30

if(true){
    const b = 40
    let c = 50
    console.log("Inner :",c)
}
// console.log(b)
console.log(c)

// ++++++++++++++++++++++++++Interesting++++++++++++++++++++++++

addone(5)
function addone(num){
    return num+1
}

//addTwo(6)    error
const addTwo=function(num){
    return num+2
}