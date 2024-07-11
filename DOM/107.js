//get and set attributes
const link=document.querySelector("a");
console.log(link);
//getAttribute
//it will type and value  of that attribute  
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));//remove the fist cahracter #home=>home
//we can chage the attribute
//first argument type and second argument is source 
link.setAttribute("href","https://www.w3schools.com/");
console.log(link.getAttribute("href"));
//example 2 i select the input that is inside of form-todo
//and cheacking the type attribute
const form_todo=document.querySelector(".form-todo input");
//checking type attributes
console.log(form_todo.getAttribute("type"));
