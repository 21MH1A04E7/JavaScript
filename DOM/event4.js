//event object
const firstbutton=document.querySelector("#one");
firstbutton.addEventListener("click",function(e){
    console.log(e.currentTarget);//which button fired with particular event
})
//when we will add any event listerner in ayn element
//js engine-- will execute the code line by line
//browser contain js engine + extra features
//browser ---js engine + webApi
//When the browser will know that the user has performed event
//then browser will do two work 
//1.)callback function will give to javascript
//2.)it will give information with callback function
// function hello(a){
//     console.log(a);
// }
// hello({firstkey:"value1",secondkey:"value2"})

