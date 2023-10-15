```
Project 1

const buttons = document.querySelectorAll('.button'),
const body = document.querySelector('body');

buttons.forEach( (buttonn) => {
  // console.log(buttonn)
  buttonn.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id      
      body.style.color = '#fff'     
    }else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id   
      body.style.color = '#000'     
    }else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id   
      body.style.color = 'yellow'      
    }else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id 
      body.style.color = 'blue'    
    }
  })

})


```
