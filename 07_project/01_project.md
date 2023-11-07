Project 1

```

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

Project 2

```

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const heights = parseInt(document.querySelector('#height').value);
  const weights = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const score = document.querySelector('#score');

  if (heights === 0 || heights < 0 || isNaN(heights)) {
    results.innerHTML = `pls enter valid height ${heights}`;
  } else if (weights === 0 || weights < 0 || isNaN(weights)) {
    results.innerHTML = `pls enter valid weight ${weights}`;
  } else {
    const bmi = (weights / ((heights * heights) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

Project 3 

```

const clock = document.querySelector('#clock');

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)


```