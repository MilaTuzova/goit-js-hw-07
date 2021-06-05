// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


const btn = document.querySelectorAll('[data-action]');

btn[0].classList.add('button-decrement');
btn[1].classList.add('button-increment');
const btnDec = document.querySelector('.button-decrement');
const btnInc = document.querySelector('.button-increment');

const spanValue = document.getElementById('value');

let counterValue = 0;

const decrementFunction = () => spanValue.textContent = counterValue -= 1;
const incrementFunction = () => spanValue.textContent = counterValue += 1;

btnDec.addEventListener('click', decrementFunction);
btnInc.addEventListener('click', incrementFunction);


// -----------
// btnDec.addEventListener('click', () => spanValue.textContent = counterValue -= 1);
// btnInc.addEventListener('click', () => spanValue.textContent = counterValue += 1);