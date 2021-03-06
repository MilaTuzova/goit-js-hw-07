// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const mainPag = document.querySelector('a').href = './task-01.html';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulElemIngredients = document.getElementById('ingredients');

const getLiIngrArray = ingredients.map((ingredient) => {
    const getLiElemForNewIngred = document.createElement('li');
    getLiElemForNewIngred.textContent = ingredient;

    return getLiElemForNewIngred;
})

ulElemIngredients.append(...getLiIngrArray);