'use strict';

// get random number
const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max - min);
  rand = Math.floor(rand);
  return rand;
};

// make counter
function makeCounter() {
  function counter() {
    return counter.currentCount++;
  };
  counter.currentCount = 0;
  return counter;
}

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
const changeFillColor = (count, item, arr) => {
  item.style.fill = arr[count];
};

const changeBgColor = (count, item, arr) => {
  item.style.background = arr[count];
};

// change coat color on click
const coatColor = setupModal.querySelector('.setup-wizard .wizard-coat');
// make counter for changing colors by order
const coatColorCounter = makeCounter();
coatColor.addEventListener('click', function() {
  coatColorCounter();
  // reset counter if it bigger than array
  if (coatColorCounter.currentCount >= coatColors.length) {
    coatColorCounter.currentCount = 0;
  }
  changeFillColor(coatColorCounter.currentCount, coatColor, coatColors);
});

// changing eyes color on click
const eyesColor = setupModal.querySelector('.setup-wizard .wizard-eyes');
// make counter for changing colors by order
const eyesColorCounter = makeCounter();
eyesColor.addEventListener('click', function() {
  eyesColorCounter();
  // reset counter if it bigger than array
  if (eyesColorCounter.currentCount >= eyesColors.length) {
    eyesColorCounter.currentCount = 0;
  }
  changeFillColor(eyesColorCounter.currentCount, eyesColor, eyesColors);
});

// changing fireball color on click
const fireballColor = setupModal.querySelector('.setup-fireball-wrap');
// make counter for changing colors by order
const fireballColorCounter = makeCounter();
fireballColor.addEventListener('click', function() {
  fireballColorCounter();
  // reset counter if it bigger than array
  if (fireballColorCounter.currentCount >= eyesColors.length) {
    fireballColorCounter.currentCount = 0;
  }
  changeBgColor(fireballColorCounter.currentCount, fireballColor, fireballColors);
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
