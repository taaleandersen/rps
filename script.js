// !v2.0
let playerSelect = "";
let playerWins = 0;
let computerWins = 0;
let round = 0;
let winner = '';
let player = false;
//!GAMEFUNCTONS
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let chosen = choices[choice];
    return chosen;
}

function playRound(playerSelect, computerSelect){
    round++;
    let player = "false";
    if(playerSelect == "Rock" && computerSelect == "Scissors"){
        playerWins++;
        return player = true;
        winner == 'Player';
        console.log("Round" + round + "Player wins the round");
    }else if(playerSelect == "Scissors" && computerSelect == "Paper"){
        playerWins++;
        return player = true;
        winner == 'Player';
        console.log("Round" + round + "Player wins the round");
    }else if(playerSelect == "Paper" && computerSelect == "Rock"){
        playerWins++;
        return player = true
        winner == 'Player';
        console.log("Round" + round + "Player wins the round");
    }else if(playerSelect === computerSelect){
        console.log("Round" + round + "Round draw");
        computerWins++;
        playerWins++;
        winner = 'DRAW';
    }else{
        computerWins++;
        winner == 'Computer';
    }
    console.log('player:'+playerSelect + " " +'computer: '+computerSelect);
    console.log("P "+playerWins +"C "+ computerWins);
}

////BUTTONS
const btnRock = document.querySelector('#rock'); 
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

////CONTAINERS
const container = document.querySelector('#container');
const options = container.querySelectorAll('button');

////UI
const ui = document.querySelector('.ui');
const result = document.createElement('div');
ui.appendChild(result);

////SCOREBOARD
const scoreboard = document.createElement('div');
const playerScoreHolder = document.createElement('span');
const computerScoreHolder = document.createElement('span');
const scoreSeparator = document.createElement('span');
scoreSeparator.style.cssText = 'margin-left:20px;margin-right:20px;';
scoreSeparator.innerText = '|';
playerScoreHolder.innerText = 'PlayerScore: '+playerWins;
computerScoreHolder.innerText = 'ComputerScore: '+computerWins;
scoreboard.classList.add('scoreboard');
scoreboard.appendChild(playerScoreHolder);
scoreboard.appendChild(scoreSeparator);
scoreboard.appendChild(computerScoreHolder);
container.insertBefore(scoreboard, container.firstChild);

options.forEach((button) =>{
    button.addEventListener('click', (e) => {
        let computerSelect = getComputerChoice();
        playerSelect = button["id"];
        playRound(playerSelect, computerSelect);
        if(player){
            playerWins++;
        }else{
            computerWins++;
        }
        playerSelect = playerSelect.charAt(0).toUpperCase()+playerSelect.substring(1);
        result.innerHTML = 'Player chose: '+playerSelect+'<br>';
        result.innerHTML += 'Computer chose: '+computerSelect+'<br>';
        result.innerHTML += '<center><span style="text-align:center;color: green;">!</span></center>';
                
    });
})
let choices = ['Rock','Paper','Scissors'];

// playRound(playerSelect, computerSelect);
function game(){
    
    console.log("Final result:\n Player has: " +playerWins+ " and computer has: " + computerWins);
    if(computerWins > playerWins){
        console.log("Computer wins the series");
    }else if(computerWins === playerWins){
        console.log("Series ended in draw");
    }else{
        console.log("Player wins the series");
    }
}

// game();