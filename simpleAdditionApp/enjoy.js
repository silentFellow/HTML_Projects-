let numOEl = document.getElementById('num1');
let numTEl = document.getElementById('num2');
let ansEl = document.getElementById('ans');
let btn = document.getElementById('add');

let check = () => {
  let num1 = Number(numOEl.value);
  let num2 = Number(numTEl.value);

  let ans = num1 + num2;

  ansEl.value = ans;
  event.preventDefault();
}

btn.addEventListener('click',check);