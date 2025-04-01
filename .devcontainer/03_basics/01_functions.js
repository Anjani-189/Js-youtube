function addTwoNumbers(num1,num2){
    return num1+num2
}

const sum = addTwoNumbers(5,3)
console.log(sum);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a Username .");
        return
    }
    return `${username} just logged in`
}

function loginUserMessage1(username="Ram"){
    return `${username} just logged in`
}

console.log(loginUserMessage());
console.log(loginUserMessage("Anjani"));
console.log(loginUserMessage1());


//Rest operator (...)
function calculateCartPrice(...num1){
    return num1
}

function calculateCartPriceTwo(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500));
console.log(calculateCartPriceTwo(200,300,400,500));


const user = {
    username:"Anjani",
    price : 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` )
}

handleObject(user)
handleObject({
    username:"Ansu",
    price:200
})


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))