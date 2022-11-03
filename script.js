let choices = ['Rock','Paper','Scissors'];
let playerWins = 0;
let computerWins = 0;
let round = 0;
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let chosen = choices[choice];
    return chosen;
}
function playerChoice(){
    let choice = parseInt(prompt('1 = Rock, 2 = Paper, 3 = Scissors'));
    let chosen = choices[choice-1];
    return chosen;
}

// let playerSelect = playerChoice();//Commented out for running series
// let computerSelect = getComputerChoice();


function playRound(playerSelect, computerSelect){
    round++;
    if(playerSelect == "Rock" && computerSelect == "Scissors"){
        playerWins++;
        console.log("Round" + round + "Player wins the round");
    }else if(playerSelect == "Scissors" && computerSelect == "Paper"){
        playerWins++;
        console.log("Round" + round + "Player wins the round");
    }else if(playerSelect == "Paper" && computerSelect == "Rock"){
        playerWins++;
        console.log("Round" + round + "Player wins the round");
    }else if(playerSelect === computerSelect){
        console.log("Round" + round + "Round draw");
        computerWins++;
        playerWins++;
    }else{
        computerWins++;
        console.log("Round" + round + "Computer wins the round");
    }
    console.log(playerSelect + " " + computerSelect);
    console.log("P "+playerWins +"C "+ computerWins);
}
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

game();