// Randomly generates the computer's move
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);

    if (selection == 0) {
        return "Rock";
    } if (selection == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Plays one round of RPS
function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let results = []; // Format of [playerscore, computerscore, result string]
    
    if (playerSelection == computerSelection) {
        results[0] = 0;
        results[1] = 0;
        results[2] = "You tie! You and the computer both played " + playerSelection;
        return results;
    }
    if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            results[0] = 0;
            results[1] = 1;
            results[2] = "You Lose! " + playerSelection + " beats " + computerSelection;
            return results;
        } else {
            results[0] = 1;
            results[1] = 0;
            results[2] = "You Win! " + playerSelection + " beats " + computerSelection;
            return results;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            results[0] = 0;
            results[1] = 1;
            results[2] = "You Lose! " + playerSelection + " beats " + computerSelection;
            return results;
        } else {
            results[0] = 1;
            results[1] = 0;
            results[2] = "You Win! " + playerSelection + " beats " + computerSelection;
            return results;
        }
    } else {
        if (computerSelection == "Paper") {
            results[0] = 0;
            results[1] = 1;
            results[2] = "You Lose! " + playerSelection + " beats " + computerSelection;
            return results;
        } else {
            results[0] = 1;
            results[1] = 0;
            results[2] = "You Win! " + playerSelection + " beats " + computerSelection;
            return results;
        }
    }
}

// Plays a 5 round game
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let results;
    let round = 0;

    var roundDisplay = document.querySelector('#round');
    var btn = document.querySelector('btn');
    var resultsDisplay = document.querySelector('#results');
    
    roundDisplay.textContent = "Round: " + round;

    function updateGame(playerInput) {
        round++;
        results = playRound(playerInput);
        playerScore += results[0];
        computerScore += results[1];
        roundDisplay.textContent = "Round: " + round;
        resultsDisplay.textContent = results[2] + ". Score: " + playerScore + " - " + computerScore;

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore == 5) {
                alert("You win! Final score: " + playerScore + " - " + computerScore);
            } else {
                alert("You lose! Final score: " + playerScore + " - " + computerScore);
            }

            round = 0;
            playerScore = 0;
            computerScore = 0;
        }
    }
    
    btn.addEventListener('click', (e) => {
        updateGame(e.target.id);
    });

}

game(); // Load game