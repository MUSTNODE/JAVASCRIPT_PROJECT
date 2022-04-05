// Grab each sound
const snare = document.querySelector('.snare');
const closeHighHat = document.querySelector('.closedHighHat');
const openHighHat = document.querySelector('.openHighHat');
const rightBassPedal = document.querySelector('.rightBassPedal');
const firstTom = document.querySelector('.firstTom');
const secondTom = document.querySelector('.secondTom');
const cymbal = document.querySelector('.cymbal');
const ride = document.querySelector('.ride');
const leftBassPedal = document.querySelector('.leftBassPedal');


// Listen for user key presses
document.addEventListener('keydown', (e) => {
  if(e.key === 'a'){
    snare.play();
  } else if(e.key === 's'){
    closeHighHat.play();
  } else if(e.key === 'd'){
    openHighHat.play();
  } else if(e.key === 'f'){
    rightBassPedal.play();  
  } else if(e.key === 'x'){
    firstTom.play();
  } else if(e.key === 'c'){
    secondTom.play();
  } else if(e.key === 'z'){
    cymbal.play();
  } else if(e.key === 'q'){
    ride.play();
  } else if(e.key === 'g'){
    leftBassPedal.play();
  }          
})