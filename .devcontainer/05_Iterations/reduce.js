const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc+currval
},0)

// const myTotal = myNums.reduce((acc , curr) => acc+curr , 0)

console.log(myTotal);


const shoppingcart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "Data science",
        price : 5999
    },
    {
        itemName : "Python",
        price : 4999
    },
    {
        itemName : "Web development",
        price : 3999
    },
]

const priceToPay = shoppingcart.reduce((acc,item) => acc + item.price , 0) 
console.log(priceToPay);