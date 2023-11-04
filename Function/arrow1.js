const user = {
    username: "hariom",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//this is refer current object
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//empty object

// function chai(){//undefined
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const fun1 = function () {//undefined
//     let username = "hitesh"
//     console.log(this.username);
// }

const fun1 =  () => {//empty object
    let username = "hitesh"
    console.log(this);
}


fun1()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})//wrap


console.log(addTwo(3, 4))