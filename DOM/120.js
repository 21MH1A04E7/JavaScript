const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();//will prevent to referace the page
    const newtodoText=todoInput.value;//it return the value of input filed it will not clear the value
    // console.log(newtodoText);
    todoInput.value="";//cleared the value
    //creating new li
    const newlist=document.createElement("li");
    //inserting
    const newLiinnerhtml  = `
        <span class="text">${newtodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newlist.innerHTML=newLiinnerhtml;
  todoList.append(newlist);
  todoList.addEventListener("click",(e)=>{
    //check if user clicked on done button
    // console.log(e.target.classList);
    if(e.target.classList.contains("remove")){
        // console.log("you want to delete");
        const removed=e.target.parentNode.parentNode;
        removed.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("you want to done ");
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
  });
//   console.log(newlist);
})