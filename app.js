let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const user_score_Para = document.querySelector("#user-score");
const comp_score_Para = document.querySelector("#computer-score");


const getcomputerChoice = () => {  /// Computer choice ///
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}



const drawGame=()=>{
    console.log("game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor ="#e1de1fff";
}


const showWinner=(userWin, userChoice, computerChoice)=>{
    if(userWin){
        userScore++;
        user_score_Para.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        computerScore++;
        comp_score_Para.innerText = computerScore;
        console.log("you lose");
        msg.innerText = `You lose ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}



const playGame = (userChoice) =>{   /// userChoice ///
    console.log("user-choice",userChoice);
    const computerChoice = getcomputerChoice();
    console.log("computer Choice = ",computerChoice);

    if (userChoice==computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor , paper // 
            userWin = computerChoice ==="paper" ? false : true; 
        }else if (userChoice === "paper"){
            // rock , scissor //
            userWin = computerChoice === "scissor" ? false : true;
        }else{
            // rock , paper // 
            userWin = computerChoice ==="rock" ? false : true;    
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
        
    });

});

