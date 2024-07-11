const score = 400
// console.log(score);

//created object of Number data type
const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance)//object


// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//it will show one number after decimal value

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));//123.8

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));  //5
// console.log(Math.ceil(4.2));   //5(higer number)
// console.log(Math.floor(4.9));  //4 (lower number)
// console.log(Math.min(4, 3, 6, 8));  //3
// console.log(Math.max(4, 3, 6, 8));  //8

// console.log(Math.random()); //random number 0 to 1
// console.log((Math.random()*10) + 1); //1 to 10
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let num=10
console.log(Math.sqrt(num))

//january 1,1970,UTC(the apoch)
