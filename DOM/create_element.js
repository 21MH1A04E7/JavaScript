//document.createElement()
//append
//prepend
//remove
const newtodoItem=document.createElement("li");
console.log(newtodoItem);
//use to create a newElement
// const newtodotext=document.createTextNode("teach students");
//we can use textContent
newtodoItem.textContent="teach students";
// console.log(newtodotext);
const todoList=document.querySelector(".todo-list");
console.log(todoList);
// newtodoItem.append(newtodotext);
console.log(newtodoItem.innerHTML);
todoList.append(newtodoItem);//it will add from last
//---prepend---
// todoList.prepend(newtodoItem);//it will add from 1st
// const s=todoList.querySelectorAll("li");
// s[1].remove();

