
let humanScore = 0;
let computerScore = 0;
let userChoice = ('');
let winner = ('');

let waitSound = new Audio('');
let robotSound = new Audio('rps-sounds/robot-get-it-on.mp3');
let chooseSound = new Audio('rps-sounds/choose.mp3');
let compChooseSound = new Audio('rps-sounds/comp-choose.mp3');
let winSound = new Audio('rps-sounds/win.mp3');
let tieSound = new Audio('rps-sounds/tie.mp3');
let loseSound = new Audio('rps-sounds/lose.mp3');
let explosionSound = new Audio('rps-sounds/explosion.mp3');
let resultSound = new Audio('');
let finalSound = new Audio('');
let gameOverSound = new Audio('');
let resetSound = new Audio('rps-sounds/reset.mp3');

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const standoffReveal = document.querySelector('.standoff');

const fighterDiv = document.querySelector('.fighter-div');

const humanWeapon = document.createElement('img');
    humanWeapon.src = ('');
    humanWeapon.classList.add('chad-animate');

const fightResult = document.createElement('img');
    fightResult.src = ('');

const explosionGif = document.createElement('img');
    explosionGif.src = ('rps-images/explosion.gif');
    

let calculating = document.querySelector('#calculating');
   

const compWeaponBox = document.querySelector('.comp-weapon-box');
const playerMiddle = document.querySelector('.middle');
const compWeapon = document.createElement('img');
    compWeapon.classList.add('opp-animate');
    compWeapon.src = ('');

const staticHuman = document.createElement('img');
    staticHuman.src = ('');
const staticComp = document.createElement('img');
    staticComp.src = ('');
const winnerFace = document.querySelector('.gameover-fighter');
    
   

const standoffMiddle = document.querySelector('.standoff-middle');

const fighterButtons = document.querySelectorAll('#fighter button');
    fighterButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
       
const chadButton = document.querySelector('.chad');
const stacyButton = document.querySelector('.stacy');
    
const player = document.querySelector('#player');
const choose = document.querySelector('#choose');
const fighter = document.createElement('img');
    fighter.classList.add('chad-animate');
    fighter.style.height = '180px';
    fighter.style.width = 'auto';
    fighter.src = ('');
const fighterDiv = document.querySelector('.fighter-div');
    
const fighterBox = document.querySelector('.fighter-box');
const chad = document.querySelector(".chad");
const stacy = document.querySelector(".stacy");

    chooseSound.play();

    if (event.target === chadButton) {
        console.log('chad');
        fighter.src = ('rps-images/fighterman.png');
        fighterBox.appendChild(fighter);
        winnerFace.src = ('rps-images/fighterman.png');
        
    } else if (event.target === stacyButton) {
        console.log('stacy');
        fighter.src = ('rps-images/stacy.png');
        fighterBox.appendChild(fighter);   
        winnerFace.src = ('rps-images/stacy-big.png'); 
    }

    fighterDiv.style.display = 'none';
    opponentReveal = document.querySelector('.opponent');
    opponentReveal.style.display = "block";   
    
    });
    
});

const opponentButtons = document.querySelectorAll('#opponent button');
opponentButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {

    const compOneButton = document.querySelector('.comp-one');
    const compTwoButton = document.querySelector('.comp-two');
    const compThreeButton = document.querySelector('.comp-three');
    
    const player = document.querySelector('#player');
    // const computerDivScore = document.querySelector('#computer');
    const chooseOpponent = document.querySelector('#opponent');
    const compSlide = document.createElement('img');
    compSlide.classList.add('opp-animate');
    compSlide.src = ('');
    
    
    compBox = document.querySelector('.comp-box');
    const compOne = document.querySelector(".comp-one");
    const compTwo = document.querySelector(".comp-two");
    const compThree = document.querySelector(".comp-three");

    
    robotSound.play();
      
    if (event.target === compOneButton) {
        console.log('comp-one');
        compSlide.src = ('rps-images/computer.png');        
       
    } else if (event.target === compTwoButton) {
        console.log('comp-two');
        
        compSlide.src = ('rps-images/comp-2.png');
                
    } else if (event.target === compThreeButton) {
            console.log('comp-three');
            compSlide.src = ('rps-images/comp-3.png');
            }
            compBox.appendChild(compSlide);
    
  
            opponentReveal.style.display = "none";
            weaponReveal = document.querySelector('.weapon-div');
            weaponReveal.style.display = "block";

});   
});
//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const weaponButtons = document.querySelectorAll('#choose button');
weaponButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {

        let computerChoice = Math.random();
        console.log(computerChoice);
        if (computerChoice <= 0.33){
            computerChoice = "rock";
            compWeapon.src = ('rps-images/rock.png');
            console.log('computerChoice rock');
            calculating.src = ('rps-images/calculating.gif');
            waitSound.src = ('rps-sounds/wait.mp3');
           
        } else if (computerChoice > 0.33 && computerChoice<= 0.67){
            computerChoice = "paper";
            compWeapon.src = ('rps-images/paper.png');
            console.log('computerChoice paper');
            calculating.src = ('rps-images/zack.gif');
            waitSound.src = ('rps-sounds/wait3.mp3');
            
        } else {
            computerChoice = "scissors"; 
            compWeapon.src = ('rps-images/scissors.png');
            compWeapon.classList.add('.scissors');
            calculating.src = ('rps-images/robot.gif');
            waitSound.src = ('rps-sounds/dot.mp3');
            console.log('computerChoice scissors'); 
        }
    
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
        
const weaponBox = document.querySelector('.weapon-box')
        
          
        
if (event.target === rockButton) {
            userChoice = 'rock';
            humanWeapon.src = ('rps-images/rock.png');
            console.log("userChoice " + userChoice);
            
} else if (event.target === paperButton) {
            userChoice = 'paper';
            humanWeapon.src = ('rps-images/paper.png');
            console.log("userChoice " + userChoice);

} else if (event.target === scissorsButton) {
    userChoice = 'scissors';
    humanWeapon.src = ('rps-images/scissors.png');
    humanWeapon.classList.add('.scissors');
             
    console.log("userChoice " + userChoice);
}

    weaponBox.appendChild(humanWeapon);

               
if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"){
    winner = ("you");
    humanScore = ++humanScore;
    fightResult.src = ('rps-images/you-win.gif');
    explosionSound.src = ('rps-sounds/explosion.mp3');
    staticHuman.src = ('rps-images/rock.png');
    resultSound.src = ('rps-sounds/win.mp3');
    explosionSound.src = ('rps-sounds/explosion.mp3');
    
    
 } if (userChoice === "rock" && computerChoice === "rock" || userChoice === "paper" && computerChoice === "paper" || userChoice === "scissors" && computerChoice === "scissors"){
        winner = ("tie");
        fightResult.src = ('rps-images/nope.gif');
        staticHuman.src = ('rps-images/paper.png');
        resultSound.src = ('rps-sounds/tie.mp3');
        explosionSound.src = ('rps-sounds/tie.mp3');

} if (userChoice === "rock" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "rock"){
    winner = "computer";
    computerScore = ++computerScore;
    fightResult.src = ('rps-images/lose.gif');
    explosionSound.src = ('rps-sounds/explosion.mp3');
    staticHuman.src = ('rps-images/scissors.png');
    staticHuman.classList.add('.scissors');
    resultSound.src = ('rps-sounds/lose.mp3');
    explosionSound.src = ('rps-sounds/explosion.mp3');    
}

    console.log("Winner: " + winner + "!")
  
    weaponReveal.style.display = 'none';

    compDiv = document.querySelector('.computer-div');
    compDiv.style.display = "block";
   
    waitSound.play();

    function stopSound(sound) {
        sound.pause();
        sound.currentTime = 0;
    }

const animatedElement = document.querySelector('.typewriter-gif');
animatedElement.addEventListener('animationend', function() {
  console.log('The animation has ended.');

  stopSound(waitSound);
        playerMiddle.appendChild(humanWeapon);
        playerMiddle.appendChild(compWeapon);

  compChooseSound.play();
  
  });


  compChooseSound.addEventListener('ended', function() {
  console.log('end comp choice sound');

  compDiv.style.display = 'none';

  standoffReveal.style.display = 'flex';
 
  if (winner === 'you'){
    
    playerMiddle.replaceChild(explosionGif, compWeapon);
  } if (winner === 'computer') {
    playerMiddle.replaceChild(explosionGif, humanWeapon);  
  } 
   
    if (winner === 'tie'){
        resultSound.play();
    } else {
        explosionSound.play();
    }
        explosionSound.addEventListener('ended', function() {
        console.log('end sound');

if (winner === 'tie'){
    // do nothing
} else {
    resultSound.play();
}

    const crownOne = document.querySelector('.left-one');
    const crownTwo = document.querySelector('.left-two');
    const crownThree = document.querySelector('.left-three');
    const crownFour = document.querySelector('.left-four');
    const crownFive = document.querySelector('.left-five');
   
    if (humanScore > 0){
    crownOne.style.display = ('block');
    crownOne.classList.add('chad-animate');
    }
    if (humanScore > 1){
        crownTwo.style.display = ('block');
        crownTwo.classList.add('chad-animate');
    }
    if (humanScore > 2){
        crownThree.style.display = ('block');
        crownThree.classList.add('chad-animate');
    }
    if (humanScore > 3){
        crownFour.style.display = ('block');
        crownFour.classList.add('chad-animate');
    }
    if (humanScore > 4){
        crownFive.style.display = ('block');
        crownFive.classList.add('chad-animate');
    }
    const termOne = document.querySelector('.right-one');
    const termTwo = document.querySelector('.right-two');
    const termThree = document.querySelector('.right-three');
    const termFour = document.querySelector('.right-four');
    const termFive = document.querySelector('.right-five');
    
    if (computerScore > 0){   
        termOne.style.display = ('block');
        termOne.classList.add('opp-animate'); 
    }
    if (computerScore > 1){
        termTwo.classList.add('opp-animate');
        termTwo.style.display = ('block');
    }
    if (computerScore > 2){
        termThree.classList.add('opp-animate');
        termThree.style.display = ('block');
    }
    if (computerScore > 3){
        termFour.classList.add('opp-animate');
        termFour.style.display = ('block');
    }
    if (computerScore > 4){
        // termFive.classList.add('opp-animate');
        termFive.style.display = ('block');
    }
    
  });      

    standoffMiddle.appendChild(fightResult);  
       
     console.log("human " + humanScore + 'computer ' + computerScore);

resultSound.addEventListener('ended', function() {
    console.log('end sound');  
    let body = document.querySelector('.body');
            let gameOver = document.querySelector('.game-over-div');
            let gameOverCrown = document.querySelector('#gameover-crown');

 if (humanScore >= 5){ 
    body.style.display = 'none';
    gameOver.style.display = 'flex';
    gameOverSound.src = ('rps-sounds/win-game.mp3');
    gameOverSound.play();

    let resetButton = document.querySelector('.reset');
    let resetImg = document.querySelector('.reset img');
    
    resetButton.addEventListener('click', function() {
        resetImg.src = ('rps-images/reset.gif');
        resetSound.play();
        
        resetSound.addEventListener('play', function(){
            setTimeout(function(){
                location.reload();
            }, 1000);
        });
    });
}

if (computerScore >= 5){
    winnerFace.src = ('rps-images/term.png');
   
    body.style.display = 'none';
    gameOver.style.display = 'flex';
    gameOverSound.src = ('rps-sounds/comp-wins.mp3');
    gameOverSound.play();

    let resetButton = document.querySelector('.reset');
    let resetImg = document.querySelector('.reset img');
    
    resetButton.addEventListener('click', function() {
        resetImg.src = ('rps-images/reset.gif');
        resetSound.play();
        
        resetSound.addEventListener('play', function(){
            setTimeout(function(){
                location.reload();
            }, 1000);

        });
            
      

       

    });
}        
        standoffReveal.style.display = 'none';
     weaponReveal.style.display = 'block';

    if (winner === 'tie'){
        playerMiddle.removeChild(humanWeapon);
        playerMiddle.removeChild(compWeapon);
        }
        if (winner === 'you'){
            playerMiddle.removeChild(humanWeapon);
            playerMiddle.removeChild(explosionGif);
            }
            if (winner === 'computer'){
                playerMiddle.removeChild(explosionGif);
                playerMiddle.removeChild(compWeapon);
                }
});

  })

});
    

});







  











  



  
  

   
  




    
    


        
        
      
      

    
      
  

    
    


        
    


