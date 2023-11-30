const form=document.querySelector('form')

const result=document.getElementById('results')

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height1=parseInt(document.getElementById('height').value)

  const weight1=parseInt(document.getElementById('weight').value)

  if(height1===''||isNaN(height1)||height1<=0){
    result.innerHTML='please inter a valid height1'
  }else if(weight1===''||isNaN(weight1)||weight1<=0){
    result.innerHTML='please inter a valid weight1'
  }else{
    const Bmi=(weight1/((height1*height1)/10000)).toFixed(2)
    let text
    if(Bmi<18.6){
      text='Under Weight'
    }else if(Bmi>=18.6&&Bmi<=24.9){
      text='Normal Range'
    }else{
      text='Overweight'
    }
    result.innerHTML=`<span>${Bmi}</span></br><span>${text}</span>`
  }

})