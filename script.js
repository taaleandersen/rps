// !v2.0
let playerSelect = "";
let computerSelect = "";
let playerWins = 0;
let computerWins = 0;
let round = 0;
let winner = '';
let choices = ['Rock','Paper','Scissors'];

////BUTTONS
const btnRock = document.querySelector('#Rock'); 
const btnPaper = document.querySelector('#Paper');
const btnScissors = document.querySelector('#Scissors');

////CONTAINERS
const container = document.querySelector('#container');
const options = container.querySelectorAll('button');

////UI
const ui = document.querySelector('.ui');
const result = document.createElement('div');
const gameMenu = document.querySelector('.game-menu');
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

//!GAMEFUNCTONS
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let chosen = choices[choice];
    return chosen;
}
function resetGame(){
    window.location = self.location;
}
function playRound(playerSelect, computerSelect){
    round++;
    console.log("PlayerSelect: " + playerSelect);
    console.log("computerSelect: " + computerSelect);
    console.log("PlayerWins: " + playerWins);
    console.log("computerWins: " + computerWins);
    console.log("Round: " + round);
    if(playerWins < 5 && computerWins < 5){
        if(playerSelect === "Rock" && computerSelect === "Scissors"){
            playerWins++;
            winner = 'Round winner is Player!';
        }else if(playerSelect === "Scissors" && computerSelect === "Paper"){
            playerWins++;
            winner = 'Round winner is Player!';
        }else if(playerSelect === "Paper" && computerSelect === "Rock"){
            playerWins++;
        }else if(playerSelect === computerSelect){
            computerWins++;
            playerWins++;
            winner = 'DRAW';
        }else{
            computerWins++;
            winner = 'Round winner is Computer!';
        }
        playerScoreHolder.innerText = 'PlayerScore: '+playerWins;
        computerScoreHolder.innerText = 'ComputerScore: '+computerWins;
        result.innerText = 'Winner is: ' + winner;
        console.log(winner);
    }else{
        gameMenu.innerHTML = "";
        let restartButton = document.createElement('button');
        restartButton.classList.add('button');
        restartButton.innerText = "RESTART";
        gameMenu.appendChild(restartButton);
        if(playerWins === 5 || computerWins === 5){
            if(playerWins > computerWins){
                result.innerText = 'Winner of 5 rounds is: Player!';
            }else{
                result.innerText = 'Winner of 5 rounds is: Computer!';
            }
        }
        restartButton.addEventListener('click', resetGame);
    }
    
}

options.forEach((button) =>{
    button.addEventListener('click', (e) => {
        computerSelect = getComputerChoice();
        playerSelect = button["id"];
        playRound(playerSelect, computerSelect);
        playerSelect = playerSelect.charAt(0).toUpperCase()+playerSelect.substring(1);
        result.innerHTML = 'Player chose: '+playerSelect+'<br>';
        result.innerHTML += 'Computer chose: '+computerSelect+'<br>';
        result.innerHTML += `<center><span style="text-align:center;color: green;">Winner is: ${winner}!</span></center>`;
                
    });
})