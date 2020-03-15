'use strict';

(function () {
  var KEYCODE = {
    esc: 27
  };
  var overlay = document.querySelector('.overlay');
  var popupOpen = document.querySelector('.menu-header__ordered-ring');
  var popup = document.querySelector('.popup');
  var popupClose = popup.querySelector('.popup__close');
  var form = popup.querySelector('.form-popup');
  var userName = popup.querySelector('#name-popup');
  var phone = popup.querySelector('#tel-popup');
  var message = popup.querySelector('#message-popup');
  var isStorageSupport = true;
  var storage = {};

  var openPopup = function () {
    popup.classList.add('popup-show');
    overlay.classList.add('overlay--show');
  };

  var closePopup = function () {
    popup.classList.remove('popup-show');
    overlay.classList.remove('overlay--show');
  };

  try {
    storage.name = localStorage.getItem('name-popup');
    storage.phone = localStorage.getItem('phone-popup');
    storage.message = localStorage.getItem('message-popup');
  } catch (err) {
    isStorageSupport = false;
  }

  popupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();

    if (storage.name) {
      userName.value = storage.name;
      phone.value = storage.phone;
      message.value = storage.message;
      message.focus();
    } else {
      userName.focus();
    }
  });

  popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });

  overlay.addEventListener('click', function () {
    closePopup();
  });

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('message', message.value);
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE.esc) {
      evt.preventDefault();
      if (popup.classList.contains('popup-show')) {
        closePopup();
      }
    }
  });
})();
