console.log("JS script working!");

// **** Code for the start game button ****

const winningCombinations = ['111000000','000111000','000000111','100100100','010010010','001001001','100010001','001010100'];

let choicesMadeByX = '000000000';
let choicesMadeByO = '000000000';
let matchCounter = 0;


// const winningCombinations = [['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','9'],['0','4','8'];

// let choicesMadeByX = ['','','','','','','','',''];
// let choicesMadeByO = ['','','','','','','','',''];

const getNewGameButton = document.querySelector('.gameRestartButton');

function startNewGame() {
    // let getForm = document.querySelector('.gridForm');
    // getForm.reload();
    let gameStatus = document.querySelector('.gameStatus');
    gameStatus.innerHTML = 'Game has Started, make your first selection!';
}

function updateScore(currentPlayer, selection) {
    console.log(currentPlayer);
    console.log(selection);
    if (currentPlayer == 'X') {
        switch (selection){
            case '1':
                console.log('got an X1');
                choicesMadeByX = ('1' + choicesMadeByX.substring(1)); 
                // choicesMadeByX = choicesMadeByX.replaceMatch("0", "1","1"); 
                // choicesMadeByX = '111111111';
              break;
            case '2':
                choicesMadeByX = (choicesMadeByX.substring(0,1) + '1' + choicesMadeByX.substring(2)); 
                console.log('got an X2')
                // choicesMadeByX[1] = 1; 
                break;
            case '3':
                choicesMadeByX = (choicesMadeByX.substring(0,2) + '1' + choicesMadeByX.substring(3)); 
                // choicesMadeByX[2] = 1; 
                break;
            case '4':
                choicesMadeByX = (choicesMadeByX.substring(0,3) + '1' + choicesMadeByX.substring(4)); 
                // choicesMadeByX[3] = 1; 
                break;
            case '5':
                choicesMadeByX = (choicesMadeByX.substring(0,4) + '1' + choicesMadeByX.substring(5)); 
                // choicesMadeByX[4] = 1; 
                break;
            case '6':
                choicesMadeByX = (choicesMadeByX.substring(0,5) + '1' + choicesMadeByX.substring(6)); 
                // choicesMadeByX[5] = 1; 
                break;
            case '7':
                choicesMadeByX = (choicesMadeByX.substring(0,6) + '1' + choicesMadeByX.substring(7)); 
                // choicesMadeByX[6] = 1; 
                break;
            case '8':
                choicesMadeByX = (choicesMadeByX.substring(0,7) + '1' + choicesMadeByX.substring(8)); 
                // choicesMadeByX[7] = 1; 
                break;
            case '9':
                choicesMadeByX = (choicesMadeByX.substring(0,8) + '1'); 
                // choicesMadeByX[8] = 1; 
                break;
                default:
        }

    } else {
        switch (selection){
            case '1':
                choicesMadeByO[0] = 1; 
            case '2':
                choicesMadeByO[1] = 1; 
            case '3':
                choicesMadeByO[2] = 1; 
            case '4':
                choicesMadeByO[3] = 1; 
            case '5':
                choicesMadeByO[4] = 1; 
            case '6':
                choicesMadeByO[5] = 1; 
            case '7':
                choicesMadeByO[6] = 1; 
            case '8':
                choicesMadeByO[7] = 1; 
            case '9':
                choicesMadeByO[8] = 1; 
        }

    }
    console.log(`in update score ${choicesMadeByX}`);
    console.log(`in update score ${choicesMadeByO}`);
};

 function validationProcess() {

    for (let i = 0; i < winningCombinations.length; i++) {
        console.log(`matchCounter = ${matchCounter}`)
        for (let j = 0; j < choicesMadeByX.length; j++) {
            console.log(`Value of i = ${i}`)
            console.log(`Value of j = ${j}`)
            console.log(`Substring of X is ${choicesMadeByX.substring(j,1)}`)
            console.log(`Substring of winning combo is ${winningCombinations[i].substring(j,1)}`)
            if (choicesMadeByX.substring(j,1) === winningCombinations[i].substring(j,1)) {
                matchCounter = matchCounter +1
                console.log(`matchCounter = ${matchCounter}`)
            } 
            
        }
        if (matchCounter === 3) {
            console.log('We have a winner');
        }else {
            matchCounter = 0; 
        }
    }
    matchCounter = 0; 
 };

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
//   if (getBox1 == 'X' || getBox1 == 'O'){

//   }  
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

updateScore(currentPlayer, boxNum);

validationProcess();

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



