// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div# boxes.

// Каждый созданный div:

//     Имеет случайный rgb цвет фона
// Размеры самого первого div - 30 px на 30 px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10 px
// Создай функцию destroyBoxes(), которая очищает div# boxes.

// <
// div id = "controls" >
//     <
//     input type = "number"
// min = "0"
// max = "100"
// step = "1" / >
//     <
//     button type = "button"
// data - action = "render" > Создать < /button> <
//     button type = "button"
// data - action = "destroy" > Очистить < /button> <
//     /div>

// <
// div id = "boxes" > < /div>
const mainPag = document.querySelector('a').href = './task-01.html';

const INITIAL_ITEM_SIZE = 30;

const boxDiv = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

const itemSize = {
    value: INITIAL_ITEM_SIZE,
    increment() {
        this.value += 10;
    },
    reset() {
        this.value = INITIAL_ITEM_SIZE;
    },
};

function createBoxes() {
    const amount = input.value;
    const items = [];

    for (let i = 0; i < amount; i++) {
        const divItem = document.createElement('div');
        divItem.style.backgroundColor = getRandomColor();
        divItem.style.width = `${itemSize.value}px`;
        divItem.style.height = `${itemSize.value}px`;
        itemSize.increment();
        items.push(divItem);
    }

    boxDiv.append(...items);
}

function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function destroyBoxes() {
    boxDiv.innerHTML = '';
    itemSize.reset();
}

function getRandomColor() {
    const red = getRandom(0, 255);
    const green = getRandom(0, 255);
    const blue = getRandom(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}