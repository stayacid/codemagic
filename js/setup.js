'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    //рандомное значение из массива
    rand = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }; 

//Рандомно меняем имя и фамилию местами, пихаем в массив
var i = 4,
    wizardName = [];

while (i > 0) {
    switch (Math.round(Math.random())) {
    case 0:
        wizardName.push(rand(names) + ' ' + rand(surnames));
        break;
    default:
        wizardName.push(rand(surnames) + ' ' + rand(names));
    }
    i--;
}
