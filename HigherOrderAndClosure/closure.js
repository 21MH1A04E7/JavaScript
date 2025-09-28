// A closure is the combination of a function bundled 
// together (enclosed) with references to its surrounding 
// state (the lexical environment). In other words, a 
// closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a 
// function is created, at function creation time.

// This is achieved because the inner function is lexically scoped, 
// meaning it inherits the scope chain of the outer function.

function init(){
    let name="hariom"//lexical scoping 
    function displayName(){
        console.log(name);
    }
    return displayName
}
const getname=init()
getname()//hariom

//Example of closure

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}

const getIncreamet=createCounter()
getIncreamet()//1
getIncreamet()//2

const getIncreamet2=createCounter();
getIncreamet2()//1

//Example 2 

function createPerson(name,age){
    return{
        getName:function(){
            return name;
        },
        getAge:function(){
            return age;
        }
    }
}
//every time it wil create a new closure 
const person1=createPerson("John",25)
console.log(person1.getName())//john
const person2=createPerson("hariom",13)
console.log(person2.getName())//hariom

