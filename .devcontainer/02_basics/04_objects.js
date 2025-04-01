//const tinderUser = new Object()  //singleton object
const tinderUser = {}   //non-singleton

tinderUser.id="123abc"
tinderUser.name="Ansu"
tinderUser.isLoggedIn=true

//console.log(tinderUser)

 const regularUser={
    email:"anjani@google.com",
    fullname:{
        userfullname:{
            firstname:"Anjani",
            midlename:"Kumar",
            lastname:"Sahoo"
        }
    }
 }

 //console.log(regularUser.fullname.userfullname.firstname)

 const obj1 = {1:"a",2:"b"}
 const obj2={3:"c",4:"d"}

 //const obj3 = Object.assign({},obj1,obj2)
 
 const obj3 = {...obj1,...obj2}
 console.log(obj3)

 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))
 console.og(Object.entries(tinderUser))

 console.log(tinderUser.hasProperty('isLoggedIn'))

 // Destructuring
 const course={
    coursename:"Js in hindi",
    courseInstructor:"Anjani"
 }

const {courseInstructor:instructor}=course

//console.log(courseInstructor)
console.log(instructor)

// {
//     "name":"Anjani",
//     "coursename":"Js in hindi"
//     "price":"free"
// }