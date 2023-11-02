let num1=6;
let num2=num1;
num2=19;
console.log(num1);//6
console.log(num2); // 19


//primitive (Stack)(copy)   Non-primitive (Heap) (Reference)

//Non primitive
let obj={
    user:"user",
    id:6,
    email:"hk524569@gmail.com"
}

//by reference
let obj2=obj;

console.log(obj2.user);//user

obj2.user="Hariom"
//by feference
console.log(obj.user)//Hariom
console.log(obj2.user)//Hariom