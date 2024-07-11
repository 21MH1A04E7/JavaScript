//clone
const ul=document.querySelector(".todo-list");
console.log(ul);
const li=document.createElement("li");
console.log(li);
// li.innerHTML="colne"
li.textContent="colne";
ul.append(li);
// ul.before(li)
// const li2=document.createElement("li");
// li2.textContent="colne";
//cloneNode
// simple clone
// li2=li.cloneNode();
li2=li.cloneNode(true);
ul.prepend(li2);