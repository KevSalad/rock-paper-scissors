function getComputerChoice() {
    // Generate a random number between 0 and 2 - 0 (rock), 1 (paper), 
    // or 2 (scissors) - and assign it to computerChoice
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

// Made it based off buttons in HTML File. 
/*
function getUserChoice() {
// Lowercase the user's choice and assign it to userInput
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
} else {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
}
*/

function determineWinner(userChoice, computerChoice) {
    if(userChoice == computerChoice) {
        return "The game is a tie!";
    }
    
     // if userChoice is rock, check if computerChoice is paper,
    if (userChoice === 'rock') {
        // if it is return 'Computer wins!', otherwise return 'You win!'
        return computerChoice === 'paper' ? 'Computer wins! Paper beats Rock.' : 'You win! Rock beats Scissors.';
    }
    
    // if userChoice is paper, check if computerChoice is scissors,
    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer wins! Scissor beats Paper' : 'You win! Paper beats Rock.';
    }
      
    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Computer wins! Rock beats Scissors' : 'You win! Scissors beats Paper.';
    }
}

let playerWins = 0;
let computerWins = 0;

function updateWinCounter() {
    const winCounter = document.getElementById("win-counter");
    winCounter.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
}

// Function to update the result on the webpage
function updateResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
    resultDiv.classList.add("show"); // Add the "show" class to trigger the animation
    setTimeout(() => {
        resultDiv.classList.remove("show"); // Remove the "show" class after the animation duration
    }, 1500); // Adjust the duration (in milliseconds) as needed

    if (result.includes("You win")) {
        playerWins++;
    } else if (result.includes("Computer wins")) {
        computerWins++;
    }

    updateWinCounter();

    if (playerWins == 5) {
        alert("You won the game!");
        playerWins = 0;
        computerWins = 0;
        updateWinCounter();
    }
    
    else if (computerWins == 5) {
        alert("You lost the game!");
        playerWins = 0;
        computerWins = 0;
        updateWinCounter();
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const roundResult = determineWinner(playerChoice, computerChoice);
        updateResult(roundResult);
    });
});