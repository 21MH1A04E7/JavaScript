//bubbling | capturing | delegation
const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
//event capturing 
child.addEventListener("click",()=>{
    console.log('capture !!! child');
},true);
parent.addEventListener(
    "click",()=>{
    console.log('capture !!! parent');
},true);
grandparent.addEventListener(
    "click",()=>{
    console.log('capture !!! grandparent');
},true);
document.body.addEventListener(
    "click",()=>{
    console.log('capture !!! body');
},true);
//this is called event bubbling
child.addEventListener("click",()=>{
    console.log('clicked on the child');
});
parent.addEventListener("click",()=>{
    console.log('clicked on the parent');
});
grandparent.addEventListener("click",()=>{
    console.log('clicked on the grandparent');
});
document.body.addEventListener("click",()=>{
    console.log('clicked on the body');
});
//this is called event bubbling