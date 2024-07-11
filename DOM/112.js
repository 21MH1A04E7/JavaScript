const rootNode=document.getRootNode();
console.log(rootNode.childNodes)
const htmlelement=rootNode.childNodes[1];
console.log(htmlelement.childNodes)//html child head text body
const  elementhead=htmlelement.childNodes[0];
const  elementText=htmlelement.childNodes[1];
const  elementBody=htmlelement.childNodes[2];
console.log(elementhead);
console.log(elementText);
console.log(elementBody);
//parent relationship
console.log(htmlelement.parentNode);//parent node
console.log(elementhead.parentNode);//parent node ->head
//sibling relationship
console.log(elementhead.nextSibling);//text
console.log(elementhead.nextSibling.nextSibling);//body
// console.log(htmlelement)
//prorety of nextElementSibling it will ignore all the text
console.log(elementhead.nextElementSibling);//it will ignore the text node
//task
const h1=document.querySelector('h1');
console.log(h1);
const div=h1.parentNode;
// console.log(div);
div.style.backgroundColor='#565';
div.style.color='white';
// const body=div.parentNode;
// console.log(body);
//we can apply querySlector on anycontent
const head=document.querySelector('head');
console.log(head);
const title=head.querySelector("title");
console.log(title);
//child node
//ignore the space
const container=document.querySelector('.container');
console.log(container);
console.log(container.childNodes);//text h1 text p text
//ignore
console.log(container.children)//h1 p
