//singleton(it will create by constructor)

//object literals

const mySym = Symbol("key1")//Symbol datatype


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hk524569@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])//string 
// console.log(JsUser[mySym])//Symbol

// Object.freeze(JsUser)//it will not allow to update this object futher
// JsUser.email="mahi1342@gmail.com"
// console.log(JsUser.email)//not updated 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greeting)//can't acess


