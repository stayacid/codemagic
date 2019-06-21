'use strict';

// get random number
const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max - min);
  rand = Math.floor(rand);
  return rand;
};

// close and open window
const setupBtn = document.querySelector('.setup-open');
const closeBtn = document.querySelector('.setup-close');
const setupModal = document.querySelector('.setup');
const keyCodes = {
  enter: 13,
  esc: 27,
};

// open and close modal
setupBtn.addEventListener('click', () => {
  toggleModal();
});

setupBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === keyCodes.enter) {
    toggleModal();
  }
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

closeBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === keyCodes.enter) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode === keyCodes.esc) {
    closeModal();
  }
});

const toggleModal = () => {
  document.querySelector('.overlay').classList.toggle('hidden');
};

// prevent closing modal if input is active
const closeModal = () => {
  if (setupModal.querySelector('.setup-user-name') !== document.activeElement) {
    document.querySelector('.overlay').classList.add('hidden');
  } return false;
};

// changing colors on click on wizard
// change color of item by random number from array
let arrCounter = 0;
const changeFillColor = (item, arr) => {
  item.style.fill = arr[arrCounter];
  arrCounter++;
  arrCounter >= arr.length ? arrCounter = 0 : false;
};
const changeBgColor = (item, arr) => {
  item.style.background = arr[randomNumber(0, arr.length - 1)];
};

// change coat color on click
const coatColor = setupModal.querySelector('.setup-wizard .wizard-coat');
coatColor.addEventListener('click', function() {
  changeFillColor(coatColor, coatColors);
});

// changing eyes color on click
const eyesColor = setupModal.querySelector('.setup-wizard .wizard-eyes');
eyesColor.addEventListener('click', function() {
  changeFillColor(eyesColor, eyesColors);
});

// changing fireball color on click
const fireballColor = setupModal.querySelector('.setup-fireball-wrap');
fireballColor.addEventListener('click', function() {
  changeBgColor(fireballColor, fireballColors);
});


// clone and append template to similar list
document.querySelector('.setup-similar').classList.remove('hidden');
const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColors = ['black', 'blue', 'red', 'yellow', 'green'];
const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', ' #e848d5', '#e6e848'];

const fragment = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  // append random name and surname
  wizardElement.querySelector('.setup-similar-label').textContent = names[randomNumber(0, names.length)] + ' ' + surnames[randomNumber(0, surnames.length)];
  // add random coat color
  wizardElement.querySelector('.wizard-coat').style.fill = coatColors[randomNumber(0, coatColors.length)];
  // add random eyes color
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColors[randomNumber(0, eyesColors.length)];
  // append template
  fragment.appendChild(wizardElement);
};
similarListElement.appendChild(fragment);
