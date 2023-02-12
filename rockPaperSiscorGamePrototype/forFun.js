let userChoiceEl = document.querySelector('select');
let button = document.querySelector('#btn');

let content = document.querySelector('.content');
let disp = document.querySelector('.score');

let score = 0;

let computerChoice = () => {
  let opt = ['Rock','Paper','Siscor'];
  let randomNumber = Math.floor(Math.random()*3);

  return opt[randomNumber];
}

let click = () => {
  let userChoice = userChoiceEl.value;

  let cc = computerChoice();
  alert(cc+" "+userChoice);
  
  if(cc == userChoice) {
    content.innerText = 'its a draw, score += 0';
  }
  else if((cc == 'Rock' && userChoice == 'Paper') || (cc == 'Paper' && userChoice == 'Siscor') || (cc == 'Siscor' && userChoice == 'Rock')) {
    content.innerText = 'its a win, score += 1';
    score += 1;
    disp.innerText = score;
  }
  else {
    content.innerText = 'its a loss, score -= 1';
    score -= 1;
    disp.innerText = score;
  }

  event.preventDefault();

}

button.addEventListener('click',click);