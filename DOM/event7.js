//keypress event
//mouseover event
// const body=document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })
const btn=document.querySelector(".btn-headline");
function clickMe(){
    console.log("you clicked me!!!!");
}
btn.addEventListener("mouseover",function(){//we can directely define the funtion
    console.log("mouseover event");
});
btn.addEventListener("mouseleave",()=>{
    console.log("mouseleave event ")
})