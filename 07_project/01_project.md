# Project 1 Solution

```javascript

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

# Project 2 Solution

```javascript

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
    if (bmi >= 18.6) {
      score.innerHTML = `<p>Under Weight</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      score.innerHTML = `<p>Normal Range</p>`;
    } else {
      score.innerHTML = `<p>Overweight </p>`;
    }
  }
});


```

# Project 3 Solution

```javascript

const clock = document.querySelector('#clock');

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)


```

# Project 4 Solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
const p = document.createElement('p');
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
  } else if (guess < randomNumber) {
    displayMessage(`Number is low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```