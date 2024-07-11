//before and after property
const todoList=document.querySelector('.todo-list');
console.log(todoList);
const createElement=document.createElement('li');
console.log(createElement)
createElement.innerHTML="hello";
//it will append before todolist
// todoList.before(createElement)
//after
//it will append after todolist
// todoList.after(createElement)
//-------//
// elementBody.insertAdjacentHTML(where,html);
//beforebegin
//afterbegin
//beforeend
//afterend