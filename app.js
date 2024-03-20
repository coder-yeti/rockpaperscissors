let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');

const getComputerChoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const getWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'draw';
    } else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'computer';
        } else {
            return 'user';
        }
    } else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'computer';
        } else {
            return 'user';
        }
    } else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computer';
        } else {
            return 'user';
        }
    }

}

const playGame = (userChoice) => {
    console.log("user choice =>", userChoice);
    const computerChoice = getComputerChoice();
    console.log("computer choice =>", computerChoice);
    const result = getWinner(userChoice, computerChoice);
    if (result === 'draw'){
        console.log("result =>", result);
        msg.innerText = `It's a draw. You both chose ${userChoice}`;
        msg.style.backgroundColor = '#081b31';
    }
    else{
        console.log("result =>", result, 'wins');
        if (result === 'user'){
            userScore++;
            userScorePara.innerText = userScore;
            msg.style.backgroundColor = 'green';
            msg.innerText = `${result} wins. Your ${userChoice} has beaten computer's ${computerChoice}`;
        }
        else{
            msg.style.backgroundColor = 'red';
            computerScore++;
            computerScorePara.innerText = computerScore;
            msg.innerText = `${result} wins. Your ${userChoice} was beaten by computer's ${computerChoice}`;
        }
    }
    
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
  });
});