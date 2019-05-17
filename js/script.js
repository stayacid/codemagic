const fireballSize = 22;
const wizardSpeed = 3;
const wizardWidth = 7;

const getFireballSpeed = function(left) {
  return (left) ? 5 : 2;
};

const getWizardHeight = function() {
  return 1.337 * wizardWidth;
};

const getWizardX = function(width) {
  return width / 2 - wizardWidth / 2;
};

const getWizardY = function(height) {
  return height * 2 / 3;
};