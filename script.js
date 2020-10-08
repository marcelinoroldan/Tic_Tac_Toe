console.log("JS script working!");

let matchCounter = 0;


const winningCombinations = [['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6']];

let choicesMadeByX = ['?','?','?','?','?','?','?','?','?'];
let choicesMadeByO = ['?','?','?','?','?','?','?','?','?'];

let gameWinnerTie = "";

let totalSelectionsMade = 0;

let firstSelection = true;

let currentPlayer = null;

const getNewGameButton = document.querySelector('.gameRestartButton');
let gameStatus = document.querySelector('.gameStatus');
let gameGrid = document.querySelector('.grid');

let boxStyleDivs = document.querySelectorAll('.boxStyle');

function removeListeners() {
    boxStyleDivs.forEach(box => {
        box.removeEventListener('click', boxCallBack)
    })
}

function startNewGame() {
    // let getForm = document.querySelector('.gridForm');
    // getForm.reload();
    // let gameStatus = document.querySelector('.gameStatus');
     choicesMadeByX = ['?','?','?','?','?','?','?','?','?'];
     choicesMadeByO = ['?','?','?','?','?','?','?','?','?'];
     totalSelectionsMade = 0;
     matchCounter = 0;
     gameWinnerTie = "";
     firstSelection = true;
     currentPlayer = null;
     getBox0.innerHTML = "";
     getBox1.innerHTML = "";
     getBox2.innerHTML = "";
     getBox3.innerHTML = "";
     getBox4.innerHTML = "";
     getBox5.innerHTML = "";
     getBox6.innerHTML = "";
     getBox7.innerHTML = "";
     getBox8.innerHTML = "";
     removeListeners()
     addListeners()
    gameStatus.innerHTML = 'New game has Started, make your first selection!';
};

getNewGameButton.addEventListener('click', startNewGame);

    function updateScore(currentPlayer, selection) {
        if (currentPlayer == 'X') {
            choicesMadeByX[selection] = selection; 
        }else {choicesMadeByO[selection] = selection; 

        }
        console.log(`playerX array - ${choicesMadeByX}`)
        console.log(`playerO array - ${choicesMadeByO}`)
    };


    function determineWinnerTieNextTurn(){


        if (totalSelectionsMade === 9 && gameWinnerTie === "") {
            gameWinnerTie = 'The game has eneded in a TIE!';
            removeListeners()
        }

        if (gameWinnerTie !== "") {
            gameStatus.innerHTML = gameWinnerTie;
            removeListeners()

        }else if (currentPlayer == 'X') {
            gameStatus.innerHTML = 'Your turn O!';
        }else {
            gameStatus.innerHTML = 'Your turn X!';
        }

    };


    function validationProcess(player) {
        if (player == "X") {
        // console.log(`winning combos length = ${winningCombinations.length}`)
        // console.log(`winning choices length = ${choicesMadeByX.length}`)
        for (let i = 0; i < winningCombinations.length; i++) {
            console.log('in first loop')
            for (j = 0; j < choicesMadeByX.length; j++) {
                console.log('in second loop loop')
                console.log(`i = ${i}`)
                console.log(`j = ${j}`)
                // console.log(`winning combo value ${winningCombinations[i][0]}`)
                // console.log(`winning combo value ${winningCombinations[i][1]}`)
                // console.log(`winning combo value ${winningCombinations[i][2]}`)
                // console.log(`winning combo X has ${choicesMadeByX[j]}`)
                if (winningCombinations[i][0] == choicesMadeByX[j]) {
                    console.log('in second loop passed first check')
                    console.log(`winning combo value ${winningCombinations[i][0]}`)
                    console.log(`winning combo X has ${choicesMadeByX[j]}`)
                    matchCounter = matchCounter +1
                }
                if (winningCombinations[i][1] == choicesMadeByX[j]) {
                    console.log('in second loop passed second check')
                    console.log(`winning combo value ${winningCombinations[i][1]}`)
                    console.log(`winning combo X has ${choicesMadeByX[j]}`)
                    matchCounter = matchCounter +1
                }
                if(winningCombinations[i][2] == choicesMadeByX[j]) {
                    console.log('in second loop passed third check')
                    console.log(`winning combo value ${winningCombinations[i][2]}`)
                    console.log(`winning combo X has ${choicesMadeByX[j]}`)
                    matchCounter = matchCounter +1
                }

            }
            console.log('going to check counter')
           if (matchCounter == 3) {
               console.log('counter has 3')
               gameWinnerTie = `The game winner is ${currentPlayer}`;
            //    alert('we have a winner!')
               matchCounter = 0;
           } else {
               console.log('counter has less than 3')
               console.log(`match counter did not reach 3 - here is the value ${matchCounter}`)
               matchCounter = 0;
           }
        }
        console.log(`match counter for X = ${matchCounter}`)
    }
        if (player == "O") {
        // console.log(`winning combos length = ${winningCombinations.length}`)
        // console.log(`winning choices length = ${choicesMadeByX.length}`)
        for (let i = 0; i < winningCombinations.length; i++) {
            console.log('in first loop')
            for (j = 0; j < choicesMadeByO.length; j++) {
                console.log('in second loop loop')
                console.log(`i = ${i}`)
                console.log(`j = ${j}`)
                // console.log(`winning combo value ${winningCombinations[i][0]}`)
                // console.log(`winning combo value ${winningCombinations[i][1]}`)
                // console.log(`winning combo value ${winningCombinations[i][2]}`)
                // console.log(`winning combo X has ${choicesMadeByX[j]}`)
                if (winningCombinations[i][0] == choicesMadeByO[j]) {
                    console.log('in second loop passed first check')
                    console.log(`winning combo value ${winningCombinations[i][0]}`)
                    console.log(`winning combo X has ${choicesMadeByO[j]}`)
                    matchCounter = matchCounter +1
                }
                if (winningCombinations[i][1] == choicesMadeByO[j]) {
                    console.log('in second loop passed second check')
                    console.log(`winning combo value ${winningCombinations[i][1]}`)
                    console.log(`winning combo X has ${choicesMadeByO[j]}`)
                    matchCounter = matchCounter +1
                }
                if(winningCombinations[i][2] == choicesMadeByO[j]) {
                    console.log('in second loop passed third check')
                    console.log(`winning combo value ${winningCombinations[i][2]}`)
                    console.log(`winning combo X has ${choicesMadeByO[j]}`)
                    matchCounter = matchCounter +1
                }

            }
            console.log('going to check counter')
           if (matchCounter == 3) {
               console.log('counter has 3')
               gameWinnerTie = `The game winner is ${currentPlayer}`;
            //    alert('we have a winner!')
               matchCounter = 0;
           } else {
               console.log('counter has less than 3')
               console.log(`match counter did not reach 3 - here is the value ${matchCounter}`)
               matchCounter = 0;

           }
        }
        console.log(`match counter for X = ${matchCounter}`)
        
    }
    }    


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
     
if (boxNum == '0') {
  getBox0.innerHTML = currentPlayer;
  }
if (boxNum == '1') {
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
 totalSelectionsMade = totalSelectionsMade + 1

 updateScore(currentPlayer, boxNum);

 validationProcess(currentPlayer);

 determineWinnerTieNextTurn();

};


const getBox0 = document.querySelector('#box0');
const getBox1 = document.querySelector('#box1');
const getBox2 = document.querySelector('#box2');
const getBox3 = document.querySelector('#box3');
const getBox4 = document.querySelector('#box4');
const getBox5 = document.querySelector('#box5');
const getBox6 = document.querySelector('#box6');
const getBox7 = document.querySelector('#box7');
const getBox8 = document.querySelector('#box8');

// *** {once: true} allows us to only have the click event happen one time
// *** and then it will not trigger again.  ONly triggers once.

function boxCallBack() {
    let id = this.id.substring(3);
    // console.log(id.substring(3));
    // console.log(id).substring(3,1));
processSelection(id);
} 

function addListeners() {
getBox0.addEventListener('click', boxCallBack,{once: true});

getBox1.addEventListener('click', boxCallBack,{once: true});
    //     event.preventDefault();
    //     processSelection('1');
    // },{once: true});

getBox2.addEventListener('click', boxCallBack,{once: true});

getBox3.addEventListener('click', boxCallBack,{once: true});

getBox4.addEventListener('click', boxCallBack,{once: true});

getBox5.addEventListener('click', boxCallBack,{once: true});

getBox6.addEventListener('click', boxCallBack,{once: true});

getBox7.addEventListener('click', boxCallBack,{once: true});

getBox8.addEventListener('click', boxCallBack,{once: true});
} 

addListeners();