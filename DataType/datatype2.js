//convertion of datatype

// Number convertion
let name="44";//string
name=Number(name)//number
console.log(name);

let num="56r";//string
num=Number(num);//NaN
console.log(num)

let num2=null;
num2=Number(num2);
console.log(num2)
/*
string to number
"34" ->33(Number)
"45d" ->NaN
true->1 /false->0
null ->0
undefined -> NaN
*/

//Boolean conversion
let boolVal = 1;
boolVal = Boolean(boolVal); // true
let nullValue = null;
boolVal = Boolean(nullValue); // false
let undefinedVar;
boolVal = Boolean(undefinedVar); // false
let first=""
boolVal = Boolean(first); // false
let second="hariom"//true
/*
"" =>false
"ha" =>true
*/


//string convertion
let strNum =45;
strNum = String(strNum);
console.log(strNum)
console.log(typeof strNum)

//
str1="hariom "
str2="kumar"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);//first is string so it will treat as a string 12
console.log(1 + "2");//string 12

// console.log("1" + 2 + 2);//o/p 122
// console.log(1 + 2 + "2");//   32 string