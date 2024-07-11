//script star
const allbutton=document.querySelectorAll(".my-button button");
console.log(allbutton);
allbutton.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num=0;
        console.log(e.currentTarget.textContent);
        e.currentTarget.style.color="black";
    })
})