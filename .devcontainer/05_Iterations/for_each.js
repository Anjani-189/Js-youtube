const coding = ["JS" , "Cpp" , "Ruby" ,"Python" ,"Java"]

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//      console.log(item,index,arr);
// })


const myCoding = [
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    }
]

// myCoding.forEach((item) => {
//     console.log(item.languageName);
//     //For-each does not return any values
// })


const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num) => num>4)

// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const books = [
    { title : 'Book One' , gener : 'Fiction' , publish : 1981 , edition : 2004},
    { title : 'Book Two' , gener : 'Non-Fiction' , publish : 1992 , edition : 2000},
    { title : 'Book Three' , gener : 'History' , publish : 1984 , edition : 2008},
    { title : 'Book Four' , gener : 'Non-Fiction' , publish : 1996 , edition : 2009},
    { title : 'Book Five' , gener : 'Science' , publish : 2003 , edition : 2016},
    { title : 'Book Six' , gener : 'Fiction' , publish : 1999 , edition : 2010},
];

let userBooks = books.filter((bk) => bk.gener === 'History' )

userBooks = books.filter((bk) => {
    return bk.publish >= 2000
})
console.log(userBooks)