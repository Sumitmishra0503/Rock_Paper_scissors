const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissor = document.getElementById('Scissor');
const reset = document.getElementById('Reset');
const ScoreOnPage = document.querySelector('.ScoreOnPage');
const result1 = document.querySelector(`.result`);
const picks = document.querySelector(`.picks`);

let computerPick = '';

let result = '';

function ComputerCall(){
    let randomNumber = Math.random();
    if(randomNumber < 1/3){
        computerPick =  'Rock';
    }
    else if(randomNumber > 1/3 && randomNumber < 2/3){
        computerPick =  'Paper';
    }
    else computerPick =  'Scissors';
}

const score = JSON.parse(localStorage.getItem('score')) || 
{
    Ties : 0,
    loses : 0,
    wins : 0,
};
console.log(JSON.parse(localStorage.getItem('score')));

rock.onclick = function(){
    ComputerCall();
    if(computerPick === 'Rock'){
        score.Ties++;
        result = 'Tie';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
    else if(computerPick === 'Paper'){
        score.loses++;
        result = 'lose';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
    else if(computerPick === 'Scissors'){
        score.wins++;
        result = 'win';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }

}
paper.onclick = function(){
    ComputerCall();
    if(computerPick === 'Paper'){
        score.Ties++;
        result = 'Tie';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
    else if(computerPick === 'Scissors'){
        score.loses++;
        result = 'lose';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
    else if(computerPick === 'Rock'){
        score.wins++;
        result = 'win';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
}
scissor.onclick = function(){

    ComputerCall();
    if(computerPick === 'Scissors'){
        score.Ties++;
        result = 'Tie';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
    else if(computerPick === 'Rock'){
        score.loses++;
        result = 'lose';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
    else if(computerPick === 'Paper'){
        score.wins++;
        result = 'win';
        updateScore();
        localStorage.setItem('score',JSON.stringify(score));
    }
}
// updateScore();
reset.onclick = function(){
    score.wins = 0;
    score.loses = 0;
    score.Ties = 0;
    result1.innerHTML = '';
    picks.innerHTML = '';
    ScoreOnPage.innerHTML = `Score Reset. wins: ${score.wins}, Loses:${score.loses},Ties: ${score.Ties}`;
    localStorage.setItem('score',JSON.stringify(score));
}
function updateScore(){
    if(result === 'Tie'){
        result1.innerHTML = `${result}.`;
    }
    else{
        result1.innerHTML = `you ${result}.`;
    }
    
    picks.innerHTML = `I picked <img src="${computerPick}-emoji.png" class="moveImage"> `;
    ScoreOnPage.innerHTML = `wins: ${score.wins}, Loses:${score.loses},Ties: ${score.Ties}`;
}
localStorage.setItem('name','Sumit');
