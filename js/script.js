var fireballSize = 22,
    wizardSpeed = 3,
    wizardWidth = 70

var getFireballSpeed = function (left) {
  return (left) ? 5 : 2;
}

var getWizardHeight = function() {
  return 1.337 * wizardWidth;
}