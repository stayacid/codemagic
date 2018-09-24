'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeigth = function (wizardWidth) {
    return 1.337 * wizardWidth;
};

var getFireballSpeed = function (left) {
    var result = left ? 5 : 2;
    return result;
};

var getWizardX = function (width) {
    return width / 2;
};

var getWizardY = function (height) {
    return height / 3 * 2;
};
