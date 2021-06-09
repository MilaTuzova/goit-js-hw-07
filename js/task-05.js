// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const mainPag = document.querySelector('a').href = './task-05.html';

const inputName = document.querySelector('input');

const nameUserHi = document.getElementById('name-output');

const nameUserHiFunction = () => {
    if (inputName.value === '') {
        nameUserHi.textContent = 'незнакомец';
    }
    nameUserHi.textContent = inputName.value;
}

inputName.addEventListener('input', nameUserHiFunction);