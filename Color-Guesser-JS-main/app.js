// Grab HTML Elements
const colorsArr = ['black', 'blue', 'cyan', 'green', 'pink', 'purple', 'red', 'white', 'yellow'];
const userGuess = document.querySelector('.guess');
const submitBtn = document.querySelector('.submit-btn');
const winMessage = document.querySelector('.win-message');
const lossMessage = document.querySelector('.loss-message');
const numOfGuesses = document.querySelector('.guesses');
const closeness = document.querySelector('.closeness');
const includes = document.querySelector('.includes');

// Initialize Guesses Count
let guesses = 0;

// Random Color
const randomNumber = Math.floor(Math.random() * 9);
const randomColor = colorsArr[randomNumber];


// Listen for guess
submitBtn.addEventListener('click', () => {
  // Count Guesses
  guesses += 1;
  numOfGuesses.innerHTML = `<h1>Guesses: ${guesses}</h1>`; 
  
  // Function calls
  rightOrWrong();

  checkGuess();

  isOption();

  // Clears Guess
  userGuess.value = '';
});


// Check Guess Function
const checkGuess = () => {
  if(randomNumber < colorsArr.indexOf(userGuess.value)) {
    closeness.innerHTML = 'Guess is Alphbetically too high'
  } else if (randomNumber > colorsArr.indexOf(userGuess.value)) {
    closeness.innerHTML = 'Guess is Alphbetically too low'
  } else {
    closeness.innerHTML = '';
  }
}

// Is user input a valid guess
const isOption = () => {
  if(colorsArr.includes(userGuess.value)){
    includes.innerHTML = ''
  } else {
    includes.innerHTML = 'That is not a valid guess...';
    lossMessage.innerHTML = '';
    winMessage.innerHTML = '';
  }
}

// Is user input right or wrong
const rightOrWrong = () => {
  if(randomColor === userGuess.value){
    winMessage.innerHTML = '<h1>You Win!</h1>';
    lossMessage.innerHTML = '';
    document.body.style.background = randomColor;
  } else if(colorsArr.includes(userGuess.value) && randomColor !== userGuess.value) {
    lossMessage.innerHTML = '<h1>Try Again.</h1>';
    winMessage.innerHTML = '';
  } 
}
