
console.log("JS script working!");

// *** counter to see how many numbers in a combo a player matchs for a win
let matchCounter = 0;

const winningCombinations = [['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6']];

// *** Holds player selections as the game is played to validate against the combos above
let choicesMadeByX = ['?','?','?','?','?','?','?','?','?'];
let choicesMadeByO = ['?','?','?','?','?','?','?','?','?'];

// *** variable to be populated for winner information and if a tie
let gameWinnerTie = "";

// *** tracks if all board selections have been made - used to determine if a tie
let totalSelectionsMade = 0;

let firstSelection = true;

let currentPlayer = null;

let playerXWins = 0;
let playerOWins = 0;
let playerTies  = 0;

let lastWinner = "";

let boardUnlock = 0;

// *** display fields on game board for total player wins
const getPlayerXWinsDisplay = document.querySelector('.playerX');
const getPlayerOWinsDisplay = document.querySelector('.playerO');


const getNewGameButton = document.querySelector('.gameRestartButton');

const getPlayer1StatElement = document.querySelector('#player1StatElement');
const getPlayer2StatElement = document.querySelector('#player2StatElement');

const getP1WinHolder = document.querySelector('#p1Win');
const getP1TieHolder = document.querySelector('#p1Tie');
const getP1LossHolder = document.querySelector('#p1Loss');

const getP2WinHolder = document.querySelector('#p2Win');
const getP2TieHolder = document.querySelector('#p2Tie');
const getP2LossHolder = document.querySelector('#p2Loss');


getNewGameButton.disabled = true;


let gameStatus = document.querySelector('.gameStatus');
let gameGrid = document.querySelector('.grid');
let boxStyleDivs = document.querySelectorAll('.boxStyle');

function removeListeners() {
    boxStyleDivs.forEach(box => {
        box.removeEventListener('click', boxCallBack)
    })
}

function updateScoreBoard() {

  getP1WinHolder.innerHTML = playerXWins
  getP1TieHolder.innerHTML = playerTies
  getP1LossHolder.innerHTML = playerOWins

  getP2WinHolder.innerHTML = playerOWins
  getP2TieHolder.innerHTML = playerTies
  getP2LossHolder.innerHTML = playerXWins
  
}

//  *** Game reinitializer for start of a new game
function startNewGame() {
     choicesMadeByX = ['?','?','?','?','?','?','?','?','?'];
     choicesMadeByO = ['?','?','?','?','?','?','?','?','?'];
     totalSelectionsMade = 0;
     matchCounter = 0;
     gameWinnerTie = "";

 //**** Remove if and uncomment 2 lines to revert *******************************

    //  firstSelection = true;
    //  currentPlayer = null;

      if (lastWinner !== "") {  
        if (lastWinner == player1Name) {
            currentPlayer = player2Name
        } else  {
          currentPlayer = player1Name;
        } 
    }else {
        currentPlayer = null;
    }

 //***********************************


    //  player1Name = "";
    //  player2Name = "";
    //  boardUnlock = 0;
    //  getPlayer1Input.hidden = false;
    //  getPlayer1Info.hidden = false;
    //  getPlayer2Input.hidden = false;
    //  getPlayer2Info.hidden = false;
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
    //  addPlayerNameListeners()

    if (lastWinner == "") {
    gameStatus.innerHTML = `New game - let's go!`;  
    }else {
    gameStatus.innerHTML = `New game - last Winner goes first - let's go!`;
    }

    };

function startNewGameAndPlayers() {
     choicesMadeByX = ['?','?','?','?','?','?','?','?','?'];
     choicesMadeByO = ['?','?','?','?','?','?','?','?','?'];
     totalSelectionsMade = 0;
     matchCounter = 0;
     gameWinnerTie = "";
     firstSelection = true;
     currentPlayer = null;
     player1Name = "";
     player2Name = "";
     boardUnlock = 0;
     playerXWins = 0;
     playerOWins = 0;
     lastWinner = "";
     getPlayer1Label.innerHTML = "";
     getPlayer2Label.innerHTML = "";
     getPlayer1Label.hidden = false;
     getPlayer2Label.hidden = false;
     getPlayer1Input.hidden = false;
     getPlayer1Info.hidden = false;
     getPlayer2Input.hidden = false;
     getPlayer2Info.hidden = false;
     getNewGameButton.disabled = true;
     getP1WinHolder.innerHTML = 0
     getP1TieHolder.innerHTML = 0
     getP1LossHolder.innerHTML = 0
     getP2WinHolder.innerHTML = 0
     getP2TieHolder.innerHTML = 0
     getP2LossHolder.innerHTML = 0
     getPlayer1StatElement.innerHTML = "Player1"
     getPlayer2StatElement.innerHTML = "Player2"
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
    //  addListeners()
     addPlayerNameListeners()
    gameStatus.innerHTML = 'New game, add players to start!';
};

const getNewGameAndPlayersButton = document.querySelector(".gameRestartNewPlayersButton");
getNewGameAndPlayersButton.addEventListener('click', startNewGameAndPlayers);

getNewGameButton.addEventListener('click', startNewGame);

    function updateScore(currentPlayer, selection) {
        if (currentPlayer == player1Name) {
            choicesMadeByX[selection] = selection; 
        }else {choicesMadeByO[selection] = selection; 

        }
        console.log(`playerX array - ${choicesMadeByX}`)
        console.log(`playerO array - ${choicesMadeByO}`)
    };


    function determineWinnerTieNextTurn(){
        if (totalSelectionsMade === 9 && gameWinnerTie === "") {
            gameWinnerTie = 'The game has eneded in a TIE!';
            playerTies++
            updateScoreBoard()
            // getPlayerXWinsDisplay.innerHTML = `Number of wins for Player X = ${playerXWins}`;
            // getPlayerOWinsDisplay.innerHTML = `Number of wins for Player O = ${playerOWins}`;
            removeListeners()
            
        }

        if (gameWinnerTie !== "") {
            gameStatus.innerHTML = gameWinnerTie;
            // getPlayerXWinsDisplay.innerHTML = '1';
            // getPlayerOWinsDisplay.innerHTML = (`Number of wins for Player O = ${playerOWins}`);
            updateScoreBoard()
            removeListeners()
            lastWinner = currentPlayer;

        }else if (currentPlayer == player1Name) {
            gameStatus.innerHTML = `Your turn ${player2Name}`;
        }else {
            gameStatus.innerHTML = `Your turn ${player1Name}`;
        }
        console.log(`playerX wins = ${playerXWins}`);
        console.log(`playerO wins = ${playerOWins}`);
        console.log(`player Ties = ${playerTies}`);
    };


    function validationProcess(player) {
        console.log(`player is ${player}`)
        if (player == player1Name) {
        // console.log(`winning combos length = ${winningCombinations.length}`)
        // console.log(`winning choices length = ${choicesMadeByX.length}`)
        for (let i = 0; i < winningCombinations.length; i++) {
            // console.log('in first loop for X')
            for (j = 0; j < choicesMadeByX.length; j++) {
                // console.log('in second loop loop')
                // console.log(`i = ${i}`)
                // console.log(`j = ${j}`)
                // console.log(`winning combo value ${winningCombinations[i][0]}`)
                // console.log(`winning combo value ${winningCombinations[i][1]}`)
                // console.log(`winning combo value ${winningCombinations[i][2]}`)
                // console.log(`winning combo X has ${choicesMadeByX[j]}`)
                if (winningCombinations[i][0] == choicesMadeByX[j]) {
                    // console.log('in second loop passed first check')
                    // console.log(`winning combo value ${winningCombinations[i][0]}`)
                    // console.log(`winning combo X has ${choicesMadeByX[j]}`)
                    matchCounter = matchCounter +1
                }
                if (winningCombinations[i][1] == choicesMadeByX[j]) {
                    // console.log('in second loop passed second check')
                    // console.log(`winning combo value ${winningCombinations[i][1]}`)
                    // console.log(`winning combo X has ${choicesMadeByX[j]}`)
                    matchCounter = matchCounter +1
                }
                if(winningCombinations[i][2] == choicesMadeByX[j]) {
                    // console.log('in second loop passed third check')
                    // console.log(`winning combo value ${winningCombinations[i][2]}`)
                    // console.log(`winning combo X has ${choicesMadeByX[j]}`)
                    matchCounter = matchCounter +1
                }

            }
            // console.log('going to check counter')
           if (matchCounter == 3) {
            //    console.log('counter has 3')
               gameWinnerTie = `The game winner is ${currentPlayer}!!!!!`;
               playerXWins++ 
            //    alert('we have a winner!')
               matchCounter = 0;
           } else {
            //    console.log('counter has less than 3')
            //    console.log(`match counter did not reach 3 - here is the value ${matchCounter}`)
               matchCounter = 0;
           }
        }
        // console.log(`match counter for X = ${matchCounter}`)
    }
        if (player == player2Name) {
        // console.log(`winning combos length = ${winningCombinations.length}`)
        // console.log(`winning choices length = ${choicesMadeByX.length}`)
        for (let i = 0; i < winningCombinations.length; i++) {
            // console.log('in first loop O')
            for (j = 0; j < choicesMadeByO.length; j++) {
                // console.log('in second loop loop')
                // console.log(`i = ${i}`)
                // console.log(`j = ${j}`)
                // console.log(`winning combo value ${winningCombinations[i][0]}`)
                // console.log(`winning combo value ${winningCombinations[i][1]}`)
                // console.log(`winning combo value ${winningCombinations[i][2]}`)
                // console.log(`winning combo X has ${choicesMadeByX[j]}`)
                if (winningCombinations[i][0] == choicesMadeByO[j]) {
                    // console.log('in second loop passed first check')
                    // console.log(`winning combo value ${winningCombinations[i][0]}`)
                    // console.log(`winning combo X has ${choicesMadeByO[j]}`)
                    matchCounter = matchCounter +1
                }
                if (winningCombinations[i][1] == choicesMadeByO[j]) {
                    // console.log('in second loop passed second check')
                    // console.log(`winning combo value ${winningCombinations[i][1]}`)
                    // console.log(`winning combo X has ${choicesMadeByO[j]}`)
                    matchCounter = matchCounter +1
                }
                if(winningCombinations[i][2] == choicesMadeByO[j]) {
                    // console.log('in second loop passed third check')
                    // console.log(`winning combo value ${winningCombinations[i][2]}`)
                    // console.log(`winning combo X has ${choicesMadeByO[j]}`)
                    matchCounter = matchCounter +1
                }

            }
            // console.log('going to check counter')
           if (matchCounter == 3) {
            //    console.log('counter has 3')
               gameWinnerTie = `The game winner is ${currentPlayer}!!!!!`;
               playerOWins++
            //    alert('we have a winner!')
               matchCounter = 0;
           } else {
            //    console.log('counter has less than 3')
            //    console.log(`match counter did not reach 3 - here is the value ${matchCounter}`)
               matchCounter = 0;

           }
        }
        // console.log(`match counter for X = ${matchCounter}`)
        
    }
    }    


// **** Add event listeners to all div boxes

function processSelection(boxNum) {

    if (firstSelection) { 
    // currentPlayer = 'X';
    currentPlayer = player1Name;
    firstSelection = false;
//   } else if (currentPlayer == 'X') {
  } else if (currentPlayer == player1Name) {
    currentPlayer = player2Name;
  } else {
    currentPlayer = player1Name;
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


// addListeners();

let player1Name = "";
let player2Name = "";

const getPlayer1Input = document.querySelector('#player1Submit');
const getPlayer2Input = document.querySelector('#player2Submit');

const getPlayer1Info = document.querySelector('#player1');
const getPlayer2Info = document.querySelector('#player2');

const getPlayer1Label = document.querySelector('#player1Label');
const getPlayer2Label = document.querySelector('#player2Label');

function checkBoardUnlock() {
    if (boardUnlock == 2) {
        addListeners();
        getNewGameButton.disabled = false;
    }
};

function processPlayerName(id, playerValue) {
    let playerId = id
    let idValue  = playerValue
    console.log(`Player ID is ${playerId}`)
    console.log(`Player Value is ${idValue}`)
}

// **** New player listeners

function playerListeners() {

    let id = this.id
    console.log(`player id is ${id}`)

    if (id == 'player1Submit') {
    // const getPlayer1Info = document.querySelector('#player1');
    console.log(`Player 1 value is ${getPlayer1Info.value}`)
    if (getPlayer1Info.value == "") {
        // alert('Player name needs to be input before you can add player');
        // console.log('Player name needs to be input before you can add player');
        getPlayer1Label.innerHTML = 'Add name to create player';
    }else {
    player1Name = getPlayer1Info.value;
    getPlayer1Info.value = "";
    getPlayer1Input.hidden = true;
    getPlayer1Info.hidden = true;
    getPlayer1Label.hidden = true;
    // getPlayer1Label.innerHTML = `Welcome to the game ${player1Name}`
    getPlayer1StatElement.innerHTML = `Player1: ${player1Name}`
    boardUnlock++ 
    checkBoardUnlock();
    console.log(`Player1 is ${player1Name}`);
        }}
    
    if (id == 'player2Submit') { 
    // const getPlayer2Info = document.querySelector('#player2');
    console.log(`Player 2 value is ${getPlayer2Info.value}`)
    if (getPlayer2Info.value == "") {
        // alert('Player name needs to be input before you can add player');
        // console.log('Player name needs to be input before you can add player');
        getPlayer2Label.innerHTML = 'Add name to create player';
    }else {
    player2Name = getPlayer2Info.value;
    getPlayer2Info.value = "";
    getPlayer2Input.hidden = true;
    getPlayer2Info.hidden = true;
    getPlayer2Label.hidden = true;
    // getPlayer2Label.innerHTML = `Welcome to the game ${player2Name}`
    getPlayer2StatElement.innerHTML = `Player2: ${player2Name}`
    boardUnlock++
    checkBoardUnlock();
    console.log(`Player2 is ${player2Name}`);
    }
    };
    console.log(`unlock board count is ${boardUnlock}`);
};

function addPlayerNameListeners() {
getPlayer1Input.addEventListener('click', playerListeners); 
getPlayer2Input.addEventListener('click', playerListeners); 
};


addPlayerNameListeners();