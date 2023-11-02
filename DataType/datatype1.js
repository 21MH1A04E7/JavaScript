//Primitive Data Types:
/*
these all are call by value
1. String ->""
2. Number ->Represents numeric data, including integers and floating-point numbers.
3. Bigint
4. Boolean->True/false
5. Undefined
6. Null
7. Symbol-> unique()
*/
let numberVariable = 42;
let stringVariable = "Hello, world!";
let booleanVariable = true;
let undefinedVariable = undefined;
let nullVariable = null;
let n=12n;//Bigint
console.log(typeof n)

console.log("hariom");

console.log(typeof null)//object

console.log(typeof numberVariable)//number
/*
Non-Primitive (Object) Data Types: (Reference)
call by references

Object: Represents a collection of key-value pairs.
Array: Represents an ordered list of values.
Function: Represents a reusable set of statements
*/
//object
let objectVariable = { key: "value" };
//array
let arrayVariable = [1, 2, 3, 4, 5];

console.log(typeof objectVariable);//object

//symbol
const id=Symbol('123')
const anotherid=Symbol('123');
console.log(id===anotherid);//false  (both are unique)

const myfunction=function(){
    console.log("hello");
}

/*
note method 
typeof name_   (is to find the datatype)
*/

/*
Primitive Data Type (Call by Value) => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt. 
1) The data type of null is an object.
2) The data type of String is a string.
3) The data type of Boolean is Boolean.
4) The data type of Undefined is undefined.
5) The data type of Symbol is a symbol.
6) The data type of Number is number.
7) The data type of BigInt is BigInt.  
*/