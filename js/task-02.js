// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulElemIngredients = document.getElementById('ingredients');
// console.log(ulElem);

const getLiIngrArray = ingredients.map((ingredient) => {
    const getLiElemForNewIngred = document.createElement('li');
    getLiElemForNewIngred.textContent = ingredient;
    console.log(getLiElemForNewIngred)
    return getLiElemForNewIngred;
})

ulElemIngredients.append(...getLiIngrArray);