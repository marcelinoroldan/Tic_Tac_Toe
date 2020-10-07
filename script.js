console.log("JS script working!");

// **** Code for the start game button ****
const getNewGameButton = document.querySelector('.gameRestartButton');

function startNewGame() {
    let gameStatus = document.querySelector('.gameStatus');
    gameStatus.innerHTML = 'Game has Started, make your first selection!';

}

getNewGameButton.addEventListener('click', startNewGame);

let firstSelection = true;

let currentPlayer = null;

// **** Add event listeners to all div boxes



function processSelection(boxNum) {

    if (firstSelection) { 
    currentPlayer = 'X';
    firstSelection = false;
  } else if (currentPlayer == 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
     
if (boxNum == '1') {
  if (getBox1 == 'X' || getBox1 == 'O'){

  }  
  getBox1.innerHTML = currentPlayer;
  
}
if (boxNum == '2') {
  getBox2.innerHTML = currentPlayer;
}
if (boxNum == '3') {
  getBox3.innerHTML = currentPlayer;
}
if (boxNum == '4') {
  getBox4.innerHTML = currentPlayer;
}
if (boxNum == '5') {
  getBox5.innerHTML = currentPlayer;
}
if (boxNum == '6') {
  getBox6.innerHTML = currentPlayer;
}
if (boxNum == '7') {
  getBox7.innerHTML = currentPlayer;
}
if (boxNum == '8') {
  getBox8.innerHTML = currentPlayer;
}
if (boxNum == '9') {
  getBox9.innerHTML = currentPlayer;
}

};


const getBox1 = document.querySelector('#box1');
const getBox2 = document.querySelector('#box2');
const getBox3 = document.querySelector('#box3');
const getBox4 = document.querySelector('#box4');
const getBox5 = document.querySelector('#box5');
const getBox6 = document.querySelector('#box6');
const getBox7 = document.querySelector('#box7');
const getBox8 = document.querySelector('#box8');
const getBox9 = document.querySelector('#box9');

// *** {once: true} allows us to only have the click event happen one time
// *** and then it will not trigger again.  ONly triggers once.

getBox1.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('1');
    },{once: true});

getBox2.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('2');
    },{once: true});

getBox3.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('3');
    },{once: true});

getBox4.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('4');
    },{once: true});

getBox5.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('5');
    },{once: true});

getBox6.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('6');
    },{once: true});

getBox7.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('7');
    },{once: true});

getBox8.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('8');
    },{once: true});

getBox9.addEventListener('click', (event) => {
        event.preventDefault();
        processSelection('9');
    },{once: true});



