//some old method to support poor IE
//appendChild;
//insertBefore;
//replaceChild;
//removeChild;
const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="new todo";
// ul.appendChild(li);//similar as a append
const referenceNode=document.querySelector(".todo-list li");
console.log(referenceNode);
// ul.insertBefore(li,referenceNode);//similar as prepend
// ul.replaceChild(li,referenceNode)// similar as replace
// ul.removeChild(referenceNode)