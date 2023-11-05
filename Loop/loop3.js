// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 8, 5]

//it will print the value of array
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps
//key value pair
//cons name =new Map()
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const num of map){
    // console.log(num)//value will be in the form of array [key,value]
}

// console.log(map);
//Destructuring of array
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for of loop is not valid for object

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }