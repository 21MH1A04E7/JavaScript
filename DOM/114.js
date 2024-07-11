const todoList=document.querySelector(".todo-list");
console.log(todoList);
console.log(todoList.innerHTML);
 todoList.innerHTML+="<li>adding todo</li>";//avoid to use 
//if we have to change all HTML then we will use innerHTML
//don't use to add new element
console.log(todoList.innerHTML);
