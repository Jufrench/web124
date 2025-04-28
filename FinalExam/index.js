// Julian French
// 4/27/2025

function addition(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} + ${number} = ${i + +number}<br />`;
  }

  const strWrap = document.createElement('div');
  strWrap.innerHTML = str;
  document.getElementById("addition").insertAdjacentElement('afterend', strWrap);
}

function subtraction(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} - ${number} = ${i - number}<br />`;
  }

  const strWrap = document.createElement('div');
  strWrap.innerHTML = str;
  document.getElementById("subtraction").insertAdjacentElement('afterend', strWrap);
}

function multiplication(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${i * number}<br />`;
  }

  const strWrap = document.createElement('div');
  strWrap.innerHTML = str;
  document.getElementById("multiplication").insertAdjacentElement('afterend', strWrap);
}

function division(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} / ${number} = ${(i / number).toFixed(2)}<br />`;
  }

  const strWrap = document.createElement('div');
  strWrap.innerHTML = str;
  document.getElementById("division").insertAdjacentElement('afterend', strWrap);
}

function calculate(number) {
  addition(number);
  subtraction(number);
  multiplication(number);
  division(number);
}

const input = document.getElementById('num');

document.getElementById('calculate').addEventListener('click', () => {
  if (input.value) {
    calculate(input.value);
  } else {
    alert("Input cannot be empty!");
  }
});
