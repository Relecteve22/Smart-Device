/*eslint-disable*/

'use strict';

(function () {
  var setupPhone = document.querySelector('.js__input--tel');
  setupPhone.addEventListener('focus', function () {
    if (setupPhone.value === '') {
      setupPhone.value = '+7(';
    }

  });

  window.setInterval(function () {
    if (setupPhone.value.length === 6) {
      setupPhone.value = setupPhone.value + ')';
    }
    if (setupPhone.value.length === 10) {
      setupPhone.value = setupPhone.value + '-';
    }
    if (setupPhone.value.length === 13) {
      setupPhone.value = setupPhone.value + '-';
    }
  }, 100);

  var maskedInputs = document.querySelectorAll('input[data-inputmask]');

  var applyMask = function () {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      var maskOption = {
        mask: input.getAttribute('data-inputmask')
      };
      IMask(input, maskOption);
    });
  };

  applyMask();
})();
