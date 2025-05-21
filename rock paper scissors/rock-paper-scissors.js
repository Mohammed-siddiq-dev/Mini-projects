
let score = JSON.parse(localStorage.getItem("score"))||{
  wins : 0,
  looses:0,
  ties : 0
};

displayscore();

function displayscore(){
  const scorebar = document.querySelector('.js-score')
scorebar.innerHTML = `wins: ${score.wins} looses: ${score.looses} ties: ${score.ties}`
}

let isnotplaying = false
let intervalId;

function autoplay(){
  if(!isnotplaying){
    intervalId = setInterval(function(){
      const playermove = computerMove();
      gamePlay(playermove)
    },1000);
    isnotplaying = true ;
  }else{
    clearInterval(intervalId);
    isnotplaying=false
  };
}
  


  document.querySelector('.js-rock-button')
  .addEventListener('click',() => {
    gamePlay('rock');
});

document.querySelector('.js-paper')
  .addEventListener('click', () => {
    gamePlay('paper');
});

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    gamePlay('scissors');
});

document.querySelector('.reset')
.addEventListener('click',()=>{
  resetscore()
})

let autoplaybutton = document.querySelector('.auto-play') 
autoplaybutton.addEventListener('click',()=>{
  if(autoplaybutton.innerHTML === 'Auto Play'){
    autoplaybutton.innerHTML = 'stop playing';
    autoplay();
  }else{
    autoplaybutton.innerHTML = 'Auto Play';
    autoplay();
  }
})

document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
    gamePlay('rock')
  }else if (event.key === 'p'){
    gamePlay('paper')
  }else if(event.key === 's'){
    gamePlay('scissors')
  }else if(event.key === 'a'){
    autoplay()
    
  }else if(event.key === 'Backspace'){
    resetscore()
  }
})

function resetscore(){
document.querySelector('.conformation')
.innerHTML = `<div>Are you sure you want to reset the score?</div><button class='yes-button'onclick='yes()'>Yes</button><button class='no-button'onclick="document.querySelector('.conformation')
.innerHTML = ''">no</button>`
}

function yes(){
  score.wins = 0
  score.looses = 0
  score.ties = 0
  localStorage.removeItem('score')
  displayscore()
document.querySelector('.conformation')
.innerHTML = ''
}

function gamePlay(playermove){
const computerChoise = computerMove ()
let result=''
if(playermove ==='scissors'){
if(computerChoise==='rock'){
result='You lose'
}else if(computerChoise==='paper'){
result='You win'
}else if(computerChoise==='scissors'){
result='Tie'
}
}else if (playermove==='paper'){
  if(computerChoise==='rock' ){
    result='You win'
  }else if(computerChoise=== 'paper'){
    result='Tie'
  }else if(computerChoise=== 'scissors'){
    result='You lose'
  }
}else if (playermove === 'rock'){
  if(computerChoise==='rock' ){
    result='Tie';
  }else if(computerChoise=== 'paper'){
    result='You lose';
  }else if(computerChoise=== 'scissors'){
    result='You win';
  }
  
}

if(result==='You win'){
  score.wins += 1;
}else if(result==='You lose'){
  score.looses += 1;
}else if(result === 'Tie'){
  score.ties += 1;
}
  let movebar = document.querySelector('.js-move')
  movebar.innerHTML = `you<img src="image/${playermove}-emoji.png"><img src="image/${computerChoise}-emoji.png">computer`
  
  const resultbar = document.querySelector('.js-result')
  resultbar.innerHTML = `${result}`

displayscore()

localStorage.setItem("score",JSON.stringify(score))

}

function computerMove() {
let num=Math.random();
let computerChoise='';
  if(num>=0 && num<1/3){
  computerChoise='rock';
  }else if(num>=1/3 && num<2/3){
  computerChoise='paper';
  }else if(num>=2/3 && num <1){
  computerChoise='scissors';
}
return computerChoise;
}
