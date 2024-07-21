const buttonsBtn = document.querySelectorAll("button");
const playerTwo = document.querySelector(".playerTwo");
const winnerMessage = document.querySelector("h2");
console.log(buttonsBtn);
console.log(playerTwo);



// random number function 
function machinePlay() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let machinePlays;
    if (randNum === 1) {
        machinePlays = "rock";
    } else if (randNum === 2) {
        machinePlays = "paper"
    } else if (randNum === 3) {
        machinePlays = "scissors"
    };
    return machinePlays;
}


function play(){
    playerTwo.innerHTML = machinePlay();
}
// machinePlay();

// function drawRandom(e) {
//     let randNum = Math.floor(Math.random() * 3) + 1;
//     let wordControl = "";
//     if (randNum === 1) {
//         playerTwo.innerHTML = "rock";
//         // winnerMessage.innerHTML = "that works"; 
//         wordControl = playerTwo.innerHTML;
//     } else if (randNum === 2) {
//         playerTwo.innerHTML = "paper";
//         // winnerMessage.innerHTML = "well"; 
//         wordControl = playerTwo.innerHTML;
//     } else if (randNum === 3) {
//         playerTwo.innerHTML = "scissors";
//         // winnerMessage.innerHTML = "it works"; 
//         wordControl = playerTwo.innerHTML;
//     };


    
//     if(e.target.innerHTML === playerTwo.innerHTML) {
//         winnerMessage.innerHTML = "its a Tie";
//         console.log(winnerMessage);
//         console.log("test");
//     }
    
//     // switch (wordControl) {
//     //     case "rock":
//     //         winnerMessage.innerHTML = "that should do it";
//     //         break;
//     //     case "paper":
//     //         winnerMessage.innerHTML = "water bottle";
//     //         break;
//     //     case "scissors":
//     //         winnerMessage.innerHTML = "break";
//     //         break;
//     // }

//     console.log("you: " + e.target.innerHTML);

//     console.log("Machine: " + playerTwo.innerHTML);
//     console.log(randNum);

// }


buttonsBtn.forEach(element => {
    element.addEventListener("click", play);
})


    // if statment for player one value and player two value 
    // rock vs rock
    // paper vs paper
    // scissors vs scissors 
    
    // next stage 
    // rock vs paper = paper wins 
    // rock vs scissors = rock wins 
    // paper vs scissors = scissors win 
    // paper vs rock = paper wins 
    // scissors vs rock = rock wins 
    // scissors vs paper = scissors wins 