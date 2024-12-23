let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw ";
    msg.style.backgroundColor = "#902424"
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("You win");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("you loose");
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});