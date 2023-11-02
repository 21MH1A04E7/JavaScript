//constant (means we can't change this value)
const accountId=3;
//block -scoped
let accountEmail="hk524569@gmail.com";
//funtional-scoped
var accountpass="12345";

//declearation of  a varible
let val;
console.log(accountId);
console.log(accountEmail);
console.log(accountpass);
console.log(val)//undefine


/*
var
Variables declared with var are function-scoped. This means they are accessible throughout the function in which they are declared, regardless of block scope.
let
Variables declared with let are block-scoped. They are limited in scope to the block, statement, or expression in which they are used.
*/

// Variable names must begin with a letter, the dollar sign ($), or an underscore (_). They cannot begin with a number.
// After the initial character, variable names can contain letters, numbers, dollar signs, or underscores.
// JavaScript variable names are case-sensitive. This means that myVariable, MyVariable, and myvariable would be considered different variables.
// Variable names cannot be the same as reserved keywords or predefined names in JavaScript, such as if, else, for, while, and so on.