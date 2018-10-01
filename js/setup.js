'use strict';

(function () {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content, //для template обязательно обращаться к свойству content
        setupSimilarList = document.querySelector('.setup-similar-list'),
        names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
        surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
        coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        eyesColor = ['black', 'red', 'blue', 'yellow', 'green'],

        //Создаем волшебника. Рандомно меняем имя и фамилию местами, пихаем в массив
        wizardGenerate = function () {
            var i = [];
            //Если рандомное число равно 0, сперва добавляем имя, затем фамилию. Если нет - наоборот
            if (Math.round(Math.random()) === 0) {
                i.push(window.util.rand(names) + ' ' + window.util.rand(surnames));
            } else {
                i.push(window.util.rand(surnames) + ' ' + window.util.rand(names));
            }
            // То же самое через тернарный оператор, но он плохо читается
            // Math.round(Math.random()) === 0 ? i.push(rand(names) + ' ' + rand(surnames)) : i.push(rand(surnames) + ' ' + rand(names));

            //Добавляем цвет куртки и глаз
            i.push(window.util.rand(coatColor));
            i.push(window.util.rand(eyesColor));
            //Возвращаем массив готового волшебника
            return i;
        };

    //Заполняем фрагмент данными волшебника
    var wizardFragment = document.createDocumentFragment();
    for (var j = 4; j > 0; j--) {
        //создаем функцию генерации волшебника
        var wizardDraw = function () {
            var wizardGet = wizardGenerate(),
                wizardElement = similarWizardTemplate.cloneNode(true); //cloneNode чтобы копировать все вложенное в template
            wizardElement.querySelector('.setup-similar-label').textContent = wizardGet[0];
            wizardElement.querySelector('.wizard-coat').style.fill = wizardGet[1];
            wizardElement.querySelector('.wizard-eyes').style.fill = wizardGet[2];
            wizardFragment.appendChild(wizardElement);
        }
        wizardDraw(); //вызываем функцию генерации волшебника
    }

    setupSimilarList.appendChild(wizardFragment);

    document.querySelector('.setup-similar').classList.remove('hidden');

    //Открытие-закрытие окна настроек
    var setupOpen = document.querySelector('.setup-open'),
        //setup = document.querySelector('.setup'),
        setupClose = document.querySelector('.setup-close'),
        setupUserName = document.querySelector('.setup-user-name'),
        setupSubmit = document.querySelector('.setup-submit'),
        setupWizard = document.querySelector('.setup-wizard'),
        wizardCoat = setupWizard.querySelector('.wizard-coat'),
        wizardEyes = setupWizard.querySelector('.wizard-eyes'),
        wizardFireball = document.querySelector('.setup-fireball-wrap'),
        wizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    //обработчик, закрывающий окно при нажатии esc
    var onPopupEscClose = function (evt) {
        if (setupUserName === document.activeElement) { //если активно поле ввода имени, esc не работает
            return evt;
        } else {
            window.util.isEscEvent(evt, closePopup);
        }
    }

    //При открытом окне добавляем обработчики
    var openPopup = function () {
        window.util.setup.classList.toggle('hidden');
        document.addEventListener('keydown', onPopupEscClose);
        wizardCoat.addEventListener('click', setWizardCoat);
        wizardEyes.addEventListener('click', setWizardEyes);
        wizardFireball.addEventListener('click', setWizardFireball);
        setupSubmit.addEventListener('click', sendForm);
    }

    //При закрытом окне удаляем обработчики
    var closePopup = function () {
        window.util.setup.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscClose);
        wizardCoat.removeEventListener('click', setWizardCoat);
        wizardEyes.removeEventListener('click', setWizardEyes);
        wizardFireball.removeEventListener('click', setWizardFireball);
        setupSubmit.removeEventListener('click', sendForm);
    }

    //Открываем окно при клике
    setupOpen.addEventListener('click', function () {
        openPopup();
    });

    //Открываем окно при выделении кнопки и нажании Enter
    setupOpen.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, openPopup);
    })

    //То же самое, что с открытием
    setupClose.addEventListener('click', function () {
        closePopup();
        window.util.isClosedPopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, closePopup);
        window.util.isClosedPopup();
    })

    //Отправка формы
    setupSubmit.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, sendForm);
    })
    var sendForm = function () {
        setupSubmit.form.submit();
    }

    //Рандомный цвет мантии при клике
    var setWizardCoat = function () {
        wizardCoat.style.fill = window.util.rand(coatColor);
    }

    //Рандомный цвет глаз при клике
    var setWizardEyes = function () {
        wizardEyes.style.fill = window.util.rand(eyesColor);
    }

    //Рандомный цвет глаз при клике
    var setWizardFireball = function () {
        wizardFireball.style.background = window.util.rand(wizardFireballColor);
    }
})();