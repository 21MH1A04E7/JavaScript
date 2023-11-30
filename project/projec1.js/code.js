//first solution 
/*
const body = document.querySelector('body');
function print(num) {
  console.log(num);
}
print(body);
body.style.backgroundColor = 'brown';

const grey = document.getElementById('grey');
grey.addEventListener('click', () => {
  body.style.backgroundColor="grey"
});

const white = document.getElementById('white');
white.addEventListener('click',() => {
  body.style.backgroundColor="white"
})

const blue = document.querySelector('#blue');
blue.addEventListener('click',function(){
  body.style.backgroundColor="blue"
})

const yellow = document.querySelector('#yellow');
yellow.addEventListener('click',()=>{
  body.style.backgroundColor='yellow'
}) */

const body=document.querySelector('body');
function print(ele){
  console.log(ele)
}
print(body)

body.addEventListener('click',function(e){
  print(e.target.innerHTML)
  const btn=e.target;
  body.style.backgroundColor=btn.id
})


