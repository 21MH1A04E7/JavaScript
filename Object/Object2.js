//singletone object 
 // const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); if fullname not exits

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2, obj4)//new object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hk@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));//it will return all the keys value in array form

// console.log(Object.values(tinderUser));//it will return all the value in array form

console.log(Object.entries(tinderUser));//it will return key and value in the form  of array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//checking this property this there in this object or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hariom"
}

// course.courseInstructor

const {courseInstructor: instructor} = course//instructor is courseinstructor value

// console.log(courseInstructor);
console.log(instructor);

// {//json
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]