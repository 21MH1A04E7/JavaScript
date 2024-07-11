//get multiple elements using getElementsByClassName
//get multiple items using querySelectorAll
const navItems=document.getElementsByClassName("nav-item")
console.log(navItems);//we will get in array like object
//first navitem
console.log(navItems[0]);
//second navitem ...
console.log(navItems[1]);
console.log(typeof(navItems))
const navItems1=document.querySelectorAll('.nav-item');
console.log(navItems1);
//first 
console.log(navItems1[0]);
//second 
console.log(navItems1[1]);
console.log(typeof(navItems1[1]));