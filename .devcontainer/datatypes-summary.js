// Primitive
// 7 types : String , Number , Boolean , null , undefined ,Symbol ,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 2341545638789n


// Refernce (Non primitive) 
// Array , Objects ,Functions

const heros = ["Shaktiman" , "Naagraj" , "Dogs"]

let myObj = {
    name:"Anjani",
    age:20
}

const myFunction = function(){
    console.log("Hello Anjani")
}

console.log(typeof outsideTemp)


//**********************************************************/

//Stack (Primitive) and Heap (Non-primitive)
let myyoutubename = "AnjaniKumardotcom"
let anotherName = myyoutubename
anotherName = "chaiaurcode"

console.log(myyoutubename)
console.log(anotherName)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "anjani@google.com"

console.log(userOne.email)
console.log(userTwo.email)