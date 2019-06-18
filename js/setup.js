'use strict';

// close and open window
const setupBtn = document.querySelector('.setup-open');
const closeBtn = document.querySelector('.setup-close');
const enterKeyCode = 13;
const escKeyCode = 27;


// open modal
setupBtn.addEventListener('click', () => {
  toggleModal();
});

setupBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === enterKeyCode) {
    toggleModal();
  }
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

closeBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === enterKeyCode) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode === escKeyCode) {
    closeModal();
  }
});

const toggleModal = () => {
  document.querySelector('.overlay').classList.toggle('hidden');
};

const closeModal = () => {
  document.querySelector('.overlay').classList.add('hidden');
};



// clone and append template to similar list
document.querySelector('.setup-similar').classList.remove('hidden');
const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColors = ['black', 'blue', 'red', 'yellow', 'green'];

// get random number
const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max.length - min);
  rand = Math.floor(rand);
  return rand;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  // append random name and surname
  wizardElement.querySelector('.setup-similar-label').textContent = names[randomNumber(0, names)] + ' ' + surnames[randomNumber(0, surnames)];
  // add random coat color
  wizardElement.querySelector('.wizard-coat').style.fill = coatColors[randomNumber(0, coatColors)];
  // add random eyes color
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColors[randomNumber(0, eyesColors)];
  // append template
  fragment.appendChild(wizardElement);
};
similarListElement.appendChild(fragment);