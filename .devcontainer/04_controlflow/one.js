// If
const isUserLoggedIn = true

if(isUserLoggedIn){

}

// <,>,<=,>=,==,!=,==,!==

const temp = 41

if(temp <= 50){
    console.log("Temperature less than equal to 50")
}
else{
    console.log("temperature greater than 50")
}

const balance=1000

//if(balance>500) console.log("test") , console.log("test2") ;

// if(balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("greater than 750")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}