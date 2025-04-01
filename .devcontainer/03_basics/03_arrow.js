// const user = {
//     username:"Anjani",
//     price:999,

//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`)
//         //console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "Hitesh"
// user.welcomeMessage()

//console.log(this)

// const chai = function(){
//     let username = "hitesh"
//     console.log(this)
// }


// Arrow function   // () => {}
const chai = () =>{
    let username = "Hitesh"
    console.log(this);
}

chai()


const addTwo = (num1,num2) => {
    return num1+num2
}

//const addTwo = (num1,num2) => (num1+num2)
// if { used} return dhould be written

console.log(addTwo(4,5))