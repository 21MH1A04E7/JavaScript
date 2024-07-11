//three different way to add an event
//1st way
//we can add the event in html element
//2nd way
// const btn=document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("you click me!");
// }
//3rd way (best method to add event)
//for this we have a method addEventListener
// const btn=document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("you clicked me!!!!");
// }
// btn.addEventListener("click",function(){//we can directely define the funtion
//     console.log("normal function");
// });
// btn.addEventListener("click",()=>{//we can directely define the funtion
//     console.log("arrow function");
// });