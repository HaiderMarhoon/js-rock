/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];


/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice; 
let msg;


/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('#result-display');
const rockBntElement = document.querySelector("#rock")
const paperBntElement = document.querySelector("#paper")
const scissorsBntElement = document.querySelector("#scissors")



/*-------------------------------- Functions --------------------------------*/
// play();

function getComputerChoice(){
    // generate a random choice 0 to 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    // select the item from the array
    return choices[randomIndex];
}



// initialize game state 
function play(event){
    computerChoice= getComputerChoice()
    playerChoice=event.target.id;
    commpare()

    // after update state , render to html
    render()
}

// updated our UI/html directly
function render (){
    resultDisplayEl.textContent = `Computer chose ${computerChoice} and the player chose ${playerChoice}. ${msg}`

}

function commpare(){

    if((playerChoice === "rock" &&  computerChoice ==="scissors") || (playerChoice === "papper" && computerChoice ==="rock") || (playerChoice === "scissors" && computerChoice ==="paper")) {
        msg = "Player Wins"
    }
    else if(playerChoice === computerChoice){
        msg = "Tie"
    }
    else {
        msg = "Computer win"
    }
}

/*----------------------------- Event Listeners -----------------------------*/
rockBntElement.addEventListener('click',play )
paperBntElement.addEventListener('click',play )
scissorsBntElement.addEventListener('click',play )