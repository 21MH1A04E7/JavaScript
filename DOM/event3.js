// const firstbutton=document.getElementById("one");
// firstbutton.addEventListener("click",function(){
//     console.log("hii you clicked me!!")
// })
const allbutton=document.querySelectorAll(".my-button button");
console.log(allbutton);
// for(let button of allbutton){
//     button.addEventListener("click",function(){
//         console.log("you clicked");
//     })
// }
//print button value
// for(let button of allbutton){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }
//using simple loop
// for(let i=0;i<allbutton.length;i++){
//     allbutton[i].addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }


// using forEach loop

allbutton.forEach(function(button){
    button.addEventListener("click",function(){
            console.log(this.textContent);
        })
})