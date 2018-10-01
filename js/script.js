'use strict';

(function () { //IIFE для модуля
    var fireballSize = 22,
        wizardSpeed = 3,
        wizardWidth = 70;

    function getWizardHeigth(wizardWidth) {
        return 1.337 * wizardWidth;
    }

    function getFireballSpeed(left) {
        var result = left ? 5 : 2;
        return result;
    }

    function getWizardX(width) {
        return width / 2;
    }

    function getWizardY(height) {
        return height / 3 * 2;
    }
}());