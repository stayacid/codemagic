var fireballSize = 22,
    wizardSpeed = 3,
    wizardWidth = 70

var getFireballSpeed = function(left) {
  if (left) {
    return 5;
  }
  return 2;
}

var getWizardHeight = function() {
  return 1.337 * wizardWidth;
}