// Задание 7
// Напиши скрипт, который реагирует на изменение значения input# font - size - control(событие input) и изменяет инлайн - стиль span# text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// <
// input id = "font-size-control"
// type = "range" / >
//     <
//     br / >
//     <
//     span id = "text" > Абракадабра! < /span>

const mainPag = document.querySelector('a').href = './task-07.html';



const tumbler = document.getElementById('font-size-control');
const textJoke = document.getElementById('text');

// console.log(textJoke);
// console.log(textJoke.textContent);

const changedSizeTextFunction = () => {
    textJoke.style.fontSize = tumbler.value + 'px';
};

tumbler.addEventListener('mouseup', changedSizeTextFunction)