const clock=document.getElementById('clock')
console.log(clock)


const start=document.querySelector('#start')
let Interval;
//function to get the current time
function fun1(){
  const data=new Date();
  const curr_time=data.toLocaleTimeString();
  clock.innerHTML=curr_time
}

start.addEventListener('click',function(){
  //setIntervla(funtion,delay)
  Interval=setInterval(fun1,100)
})

const stop=document.querySelector('#stop')
stop.addEventListener('click',()=>{
  //setTimeout(funntion,delay)
  setTimeout(()=>{
    clearInterval(Interval)
  },100)
})

