'use strict';

var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');

var userName = document.querySelector('.setup-user-name');

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var changeColor = function () {
  var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  if (this === wizardCoat) {
    var color = wizardCoatColors[(Math.random() * (wizardCoatColors.length - 1)).toFixed()];
    wizardCoat.style.fill = color;
  } else if (this === wizardEyes) {
    wizardEyes.style.fill = wizardEyesColors[(Math.random() * (wizardEyesColors.length - 1)).toFixed()];
  } else if (this === fireball) {
    fireball.style.background = fireballColors[(Math.random() * (fireballColors.length - 1)).toFixed()];
  }
};

wizardCoat.addEventListener('click', changeColor);
wizardEyes.addEventListener('click', changeColor);
fireball.addEventListener('click', changeColor);

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

