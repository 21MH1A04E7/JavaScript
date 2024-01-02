const start=document.getElementById('start');
const stop=document.getElementById('stop');
const b=document.getElementById('body');

let hex='0123456789ABCDEF';

let interval_start;
start.addEventListener('click',(e)=>{
  if(!interval_start){
    interval_start=setInterval(function(){
      let color='#'
      for(let i=1;i<=6;i++){
        color+=hex[Math.floor(Math.random()*16)];
      }
      console.log(color)
      b.style.backgroundColor=color;
    },1000)
  }
})
stop.addEventListener('click',(e)=>{
  clearInterval(interval_start)
  interval_start=null;
})