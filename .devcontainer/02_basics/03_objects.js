// singleton
//object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name:"Anjani",
    age:20,
    [mySym]:"mykey1",
    "full name":"Anjani Kumar Sahoo",
    location:"Bhubaneswar",
    email:"anjani@gmail.com",
    isLoggedIn:false,
    lastLogindays:["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// JsUser.email="anjani@google.com"
// Object.freeze(JsUser)
// JsUser.email="anjani@gift.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser , ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())