//get multiple elements using getElementsByClassName
//get multiple items using querySelectorAll
const navItems=document.getElementsByClassName("nav-item");
console.log(navItems);
const tag=document.getElementsByTagName("a");
console.log(tag)
//simple for loop
//for of loop
//forEach
// for(let i=0;i<tag.length;i++){
//     // console.log(navItems[i]);
//     //chaning the background color into red
//     // console.log(tag[i]);
//     const tags1=tag[i];
//     tags1.style.backgroundColor="red";
//     tags1.style.fontWeight="bold";
// }
for(let tag2 of tag){
    // console.log(tag2)
    tag2.style.backgroundColor="blue";
    tag2.style.color="red";
    tag2.style.fontStyle="italic";
}
// tag=Array.from(tag);//we need to change in let of tag
// tag.forEach((tag2)=>{
//     tag2.style.backgroundColor="blue";
//     tag2.style.color="red";
//     tag2.style.fontStyle="italic";
// })
