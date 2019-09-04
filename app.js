/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var totalScore, roundScore, activePlayer, activeGame


newGame();

/////NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', newGame);

///////ROLL BUTTON
//set up Event listner
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (activeGame) {
    //get a random number
    var dice = Math.floor(Math.random()*6 + 1);

    //display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = ('dice-'+ dice + '.png');

    //update the round score IF the roll is not a 1
    if (dice >1 ) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
     nextPlayer()
    };
    };
});

///HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (activeGame) {
     //push current score to total score
     totalScore[activePlayer] += roundScore;
     //display total score
     document.querySelector('#score-' + activePlayer).textContent = totalScore[activePlayer];
    //check if player won the game
    if( totalScore[activePlayer] >= 50) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        activeGame = false;
    } else {
    nextPlayer();
    }
}
});

function nextPlayer() {
   //set round score to 0 and change active player
   roundScore = 0;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;
   activePlayer = 1- activePlayer;
   //remove active from Active player panel, change active player, and assign to new player
   document.querySelector('.player-1-panel').classList.toggle('active');
   document.querySelector('.player-0-panel').classList.toggle('active');

   //hide dice after player rolls a one
   setTimeout(function() {
       document.querySelector('.dice').style.display = 'none'
   }, 100) 
}

function newGame() {
    totalScore = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    activeGame = true;
    //hide the dice initially
    document.querySelector('.dice').style.display = 'none';
    
    //clear all score
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    //change player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    //remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //remove active classes
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    //add active to player 0
    document.querySelector('.player-0-panel').classList.add('active');
    };



































