'use strict';

(function () {
  var setupPhone = document.querySelector('.form__input--tel');

  // var brickHelpHandler = function () {
  //
  //
  // };

  // setupPhone.addEventListener('click', brickHelpHandler);

  setupPhone.addEventListener('click', function () {
    setupPhone.value.textContent = '+7(';
  });





  // var focusBrickHelp = function () {
  //   setupPhone.addEventListener('focus', brickHelpHandler);
  // };

  // focusBrickHelp();

  // setupPhone.addEventListener('blur', function () {
  //   document.removeEventListener('focus', focusBrickHelp);
  // });
})();
