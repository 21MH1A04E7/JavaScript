//seclect element using get elemtn by id
console.log(document.getElementById('main-heading'))//return a object
const mainHeading=document.getElementById('main-heading')
console.log(mainHeading)
//query selector
// const heading1=document.querySelector('#main-heading');
// console.log(heading1)
const header1=document.querySelector('.header');
console.log(header1)
//nav-item
//it will give only first nav-item class
const nav_items1=document.querySelector('.nav-item')
console.log(nav_items1)
//querySelectorAll
//it will give the access of all class with nodelist
//
const nav_items2=document.querySelectorAll('.nav-item')
console.log(nav_items2)

