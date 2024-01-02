const input=document.querySelector('#input-field')
const output=document.querySelector('#output-field')
const btn=document.querySelector('.btns-container')

btn.addEventListener('click',function(e){
  let text=input.value;
  if(e.target.className==='btn uppercase'){
    output.innerHTML=text.toUpperCase();
  }else if(e.target.className==='btn lowercase'){
    output.innerHTML=text.toLowerCase();
  }else if(e.target.className==='btn capitalize'){
    function capitalizeSentence(sentence) {
      // Split the sentence into an array of words
      let words = sentence.split(" ");
      // Capitalize the first letter of each word
      let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      // Join the capitalized words back into a sentence
      let capitalizedSentence = capitalizedWords.join(" ");
      return capitalizedSentence;
  }
  let capitalizedSentence = capitalizeSentence(text);
    output.innerHTML=capitalizedSentence;
  }else if(e.target.className==='btn bold'){
    output.innerHTML=`<b>${text}</b>`
  }else if(e.target.className==='btn italic'){
    output.innerHTML=`<i>${text}</i>`
  }else if(e.target.className==='btn underline'){
    output.innerHTML=`<u>${text}</u>`
  }
})