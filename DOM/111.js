//innerHTML
const headline=document.querySelector('.headline');
console.log(headline);
console.log(headline.textContent)
//whatare the present inside the headlineclass contaniner will come in innerHTML
console.log(headline.innerHTML)
headline.innerHTML="<h1>inner html changed</h1>";//changing the innerHTML
console.log(headline)
headline.innerHTML+="<button class=\"btb\">hello</button>";//giving the class of innerHTML
console.log(headline.innerHTML);