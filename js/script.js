var fireballSize = 22
var wizardSpeed = 3
var wizardWidth = 100
var getWizardHeigth = function (wizardWidth) { 
    return 1.337 * wizardWidth
}; 

var getFireballSpeed = function (left) {
    var result = left ? 5 : 2
    return result
}