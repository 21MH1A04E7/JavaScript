const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");//avoid to use this method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//creating object
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)//it will take negative value
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

let str = "Hello ";
let repeatedStr = str.repeat(3);
console.log(repeatedStr);

let array = ["Hello", " ", "world", "!"];
let newstring = "hii ".concat(...array);
console.log(newstring);

/*
1 length
2 charAt('index')
3 indexOf('char')
4 toUpperCase()
5 toLowerCase()
6 split('separator')
7 includes('string')  ->true/false
8 repalce('origina','repace value')
9 trim()//remove leading whitespace
10 substring(startIndex,LastIndex)
11 concat(str1,str2,---)
*/