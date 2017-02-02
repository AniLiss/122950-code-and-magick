'use strict';

var setupOpenButton = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupCloseButton = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('#wizard-coat');
var wizardEyes = setup.querySelector('#wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

var changeWizardAppearance = function (e) {
  var wizardCoatColors =
    ['rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'];

  var wizardEyesColors =
    ['black',
      'red',
      'blue',
      'yellow',
      'green'];

  var fireballColors =
    ['#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'];

  if (e.currentTarget === wizardCoat) {
    wizardCoat.style.fill = wizardCoatColors[indexOf(wizardCoatColors)];
  } else if (e.currentTarget === wizardEyes) {
    wizardEyes.style.fill = wizardEyesColors[indexOf(wizardEyesColors)];
  } else if (e.currentTarget === fireball) {
    fireball.style.background = fireballColors[indexOf(fireballColors)];
  }
};

function indexOf(wizardUnit) {
  return ~~(Math.random() * (wizardUnit.length - 1));
}

wizardCoat.addEventListener('click', changeWizardAppearance);
wizardEyes.addEventListener('click', changeWizardAppearance);
fireball.addEventListener('click', changeWizardAppearance);

setupOpenButton.onclick = function () {
  setup.classList.remove('invisible');
};

setupCloseButton.onclick = function () {
  setup.classList.add('invisible');
};

function requireInputField(input) {
  input.required = true;
  input.maxLength = 50;
}

requireInputField(userName);
