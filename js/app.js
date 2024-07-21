const buttonsBtn = document.querySelectorAll("button");
const playerTwo = document.querySelector(".playerTwo");
// const winnerMessage = document.querySelector("h2");
const displayPlayerOne = document.querySelector(".playerone");
const displayPlayerTwo = document.querySelector(".playertwodisplay");
const playerOneScore = document.querySelector(".playerone_score");
const playerTwoScore = document.querySelector(".playertwo_score");
// console.log(buttonsBtn);
// console.log(playerTwo);
let score = 0;
let aIScore = 0;


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

displayPlayerOne.style.display = "none";
displayPlayerTwo.style.display = "none";


// create a function that returns the innerHTMl of buttonbtn 
function returnValue() {
    let idObtained = [];
    buttonsBtn.forEach(element => {
        idObtained.push(element.id);
    })
    console.log(idObtained);
}



function play(e) {
    playerTwo.innerHTML = machinePlay();
    playerTwoItemId = playerTwo.innerHTML;
    const idObtained = e.target.id;
    console.log(idObtained);
    displayPlayerOne.style.display = "";
    displayPlayerTwo.style.display = "";


    if (playerTwoItemId === idObtained) {
        winnerMessage.innerHTML = "its a tie";
    }

    switch (idObtained) {
        case "rock":
            displayPlayerOne.src = "img/rock.PNG";
            if (playerTwoItemId === "scissors") {
                score++;
                playerOneScore.innerHTML = score;
            }
            break;
        case "paper":
            displayPlayerOne.src = "img/paper.PNG";
            if (playerTwoItemId === "rock") {
                // winnerMessage.innerHTML = "You Win";
                score++;
                playerOneScore.innerHTML = score;
            }
            break;
        case "scissors":
            displayPlayerOne.src = "img/scissors.PNG";
            if (playerTwoItemId === "paper") {
                // winnerMessage.innerHTML = "You Win";
                score++;
                playerOneScore.innerHTML = score;
            }
            break;
    }

    switch (playerTwoItemId) {
        case "rock":
            displayPlayerTwo.src = "img/rock.PNG";
            if (idObtained === "scissors") {
                // winnerMessage.innerHTML = "AI get's the W";
                aIScore++;
                playerTwoScore.innerHTML = aIScore;
            }
            break;
        case "paper":
            displayPlayerTwo.src = "img/paper.PNG";
            if (idObtained === "rock") {
                // winnerMessage.innerHTML = aIScore";
                aIScore++;
                playerTwoScore.innerHTML = aIScore;
            }
            break;
        case "scissors":
            displayPlayerTwo.src = "img/scissors.PNG";
            if (idObtained === "paper") {
                // winnerMessage.innerHTML = aIScore";
                aIScore++;
                playerTwoScore.innerHTML = aIScore;
            }
            break;
    }

    if (aIScore === 3) {
        playerTwoScore.innerHTML = "Win";
        displayPlayerOne.style.display = "none";
        displayPlayerTwo.style.display = "none";
        aIScore = 0;
        score = 0;
        setTimeout(() => {
            playerTwoScore.innerHTML = aIScore;
            playerOneScore.innerHTML = score;
        }, 5000)
        // playerTwoScore.innerHTML = aIScore;
        // playerOneScore.innerHTML = score;
    } else if (score === 3) {
        playerOneScore.innerHTML = "Win";
        displayPlayerOne.style.display = "none";
        displayPlayerTwo.style.display = "none";
        score = 0;
        aIScore = 0;
        // playerTwoScore.innerHTML = aIScore;
        // playerOneScore.innerHTML = score;
        setTimeout(() => {
            playerTwoScore.innerHTML = aIScore;
            playerOneScore.innerHTML = score;
        }, 1000)
    }
}




buttonsBtn.forEach(element => {
    element.onclick = play;
})
