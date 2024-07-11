//static list vs live list
const li=document.querySelectorAll(".todo-list li");
console.log(li);//Nodelist(6)
const list_7=document.createElement("li");
list_7.textContent="items 7";
const ul=document.querySelector(".todo-list");
ul.append(list_7);//static list because stil Nodelist is 6 only
// ul.append(list_7);
// console.log(ull);

//live list is document.getElementBYsomething
