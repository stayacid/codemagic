'use strict';

window.util = (function () {

    var ESC_KEYCODE = 27,
        ENTER_KEYCODE = 13;

    return {
        //рандомное значение из массива
        rand: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },
        //действие по нажатиию enter
        isEnterEvent: function (evt, action) {
            if (evt.keyCode === ENTER_KEYCODE) {
                action();
            }
        },
        //действие по нажатию esc
        isEscEvent: function (evt, action) {
            if (evt.keyCode === ESC_KEYCODE) {
                action();
            }
        },
        isClosedPopup: function () {
            window.util.setup.style.top = '80px';
            window.util.setup.style.left = '50%';
        },
        setup: document.querySelector('.setup')
    };
}());