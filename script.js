function getComputerChoice() {
    let choices = ['Rock','Paper','Scissors'];
    let choice = Math.floor(Math.random() * 3);
    let chosen = choices[choice];
    console.log(chosen);
}
function playerChoice(){
    let choice = prompt('1 = Rock, 2 = Paper, 3 = Scissors');
    let chosen = choice.val;
    console.log(chosen);
}
playerChoice();
//getComputerChoice();
