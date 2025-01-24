
let humanScore = 0;
let computerScore = 0;
do {

let computerChoice = Math.random();
if (computerChoice <= 0.33){
    computerChoice = "rock"
   
} else if (computerChoice > 0.33 && computerChoice<= 0.67){
    computerChoice = "paper"
    
} else {
    computerChoice = "scissors"    
}
console.log("Computer chose " + computerChoice)
    

   
    let userChoice ;

    do {
        userChoice = prompt("Please choose rock, paper, scissor").toLowerCase()
        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
        }
    } while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors");
    

    console.log("You chose " + userChoice)
    
    
    let winner = ("");
    if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"){
        winner = "you"
        humanScore = ++humanScore;
        } else if (userChoice === "rock" && computerChoice === "rock" || userChoice === "paper" && computerChoice === "paper" || userChoice === "scissors" && computerChoice === "scissors"){
            winner = "nobody" 
        } else {
        winner = "computer"
        computerScore = ++computerScore;
        }

        console.log("Winner: " + winner + "!")
  

console.log("Score: Computer " + computerScore + " You: " + humanScore)

    } while (humanScore < 3 && computerScore < 3)
        
    if (humanScore === 3) {   
        console.log("YOU WON THE GAME")
    } else if (computerScore === 3) {
        console.log("YOU LOST THE GAME")
    }
    
    
    

        
    
// } else if pick > 0.33 && <= 0.67 {
//     pick.textContent = "paper"
// } else if pick >= 1 {
//     pick.textContent = "scissor"
// }






