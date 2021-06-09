// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const mainPag = document.querySelector('a').href = './task-04.html';

// const btn = document.querySelectorAll('[data-action]');

const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

// console.log(btnDec);
// console.log(btnInc)

const spanValue = document.getElementById('value');

let counterValue = 0;

const decrementFunction = () => spanValue.textContent = counterValue -= 1;
const incrementFunction = () => spanValue.textContent = counterValue += 1;

btnDec.addEventListener('click', decrementFunction);
btnInc.addEventListener('click', incrementFunction);


// -----------
// btnDec.addEventListener('click', () => spanValue.textContent = counterValue -= 1);
// btnInc.addEventListener('click', () => spanValue.textContent = counterValue += 1);