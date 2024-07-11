//this keyword
const btn=document.querySelector(".btn-headline");
// console.log(this);
// btn.addEventListener("click",()=>{//arrow funtion give the above valid funtion line
//     console.log("you click me!!!!");
//     console.log(this);
// })
function clickMe(){
         console.log("you clicked me!!!!");
         console.log(this);//current object
    }
btn.addEventListener("click",clickMe);