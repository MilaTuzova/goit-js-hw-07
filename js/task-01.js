// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const mainPag = document.querySelector('a').href = './task-01.html';


const ulElementWithId = document.getElementById('categories');

const liCount = ulElementWithId.children.length;
console.log(`В списке ${liCount} категории.`);

const ulElementsInLi = document.querySelectorAll('.item ul');

const liItem = document.querySelectorAll('.item');

const hElement = document.querySelectorAll('h2');

// ---------  forEach :  --------------

hElement.forEach(hElem => {
    console.log(`Категория: ${hElem.textContent}`);
});

ulElementsInLi.forEach(ulElem => {
    console.log(`Количество элементов: ${ulElem.children.length}`);
});


//  ------   for : -----------------

// for (let i = 0; i < liItem.length; i += 1) {
//     console.log(`Категория: ${liItem[i].firstElementChild.textContent}`);

//     for (let j = 0; j < ulElementsInLi.length; j += 1) {

//         if (j === i) {
//             console.log(`Количество элементов: ${ulElementsInLi[j].children.length}`)
//         }
//     }
// }