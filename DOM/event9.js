//event 2
//event delegation
const parent=document.querySelector(".parent");

// parent.addEventListener("click",()=>{
//     console.log('event delegation');
// });
parent.addEventListener("click",(e)=>{
    console.log(e.target)
})