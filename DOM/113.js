const sectionTodo=document.querySelector(".section-todo");
console.log(sectionTodo);
//total class 
console.log(sectionTodo.classList);//two classes are there section-todo,container
//we add the class with javascript
sectionTodo.classList.add("bg-dark");
console.log(sectionTodo.classList);//now classes are three section-todo,container,bg-dark
//we can remove the class with javascript
sectionTodo.classList.remove("bg-dark");
//checking the class is exiting or not
const ans=sectionTodo.classList.contains("container");
console.log(ans);//it will return true
//toggle if class is already present then it will remove otherwise it will add the class
