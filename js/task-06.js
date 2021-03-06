// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const mainPag = document.querySelector('a').href = './task-01.html';

const inputArea = document.getElementById('validation-input');
const numberLength = inputArea.dataset.length;

inputArea.addEventListener('blur', (event) => {
    const valid = event.currentTarget.value;

    inputArea.classList.remove('valid', 'invalid');

    if (valid.length === Number(numberLength)) {
        return inputArea.classList.add('valid');
    }
    return inputArea.classList.add('invalid');
})