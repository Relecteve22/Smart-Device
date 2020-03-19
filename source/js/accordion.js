'use strict';

(function () {
  var accordionParents = document.querySelectorAll('.accordion-parent');

  var hidePane = function (button, pane) {
    button.classList.remove('accordion__toggle--inactive');
    pane.classList.add('accordion__pane--hidden');
  };

  var showPane = function (button, pane) {
    button.classList.add('accordion__toggle--inactive');
    pane.classList.remove('accordion__pane--hidden');
  };

  var toggleAccordion = function (evt) {
    Array.prototype.forEach.call(accordionParents, function (accordionParent) {
      var accordion = accordionParent.querySelector('.accordion');
      var accordionPane = accordionParent.querySelector('.accordion__pane');
      var accordionTitle = accordion.querySelector('.accordion__title');
      var button = accordionParent.closest('.accordion-parent').querySelector('.accordion__toggle');
      if ((accordionParent === evt.target || accordion === evt.target || button === evt.target || accordionTitle === evt.target) && button.classList.contains('accordion__toggle--inactive') || !(accordionParent === evt.target || accordion === evt.target || button === evt.target || accordionTitle === evt.target)) {
        hidePane(button, accordionPane);
      } else if (accordionParent === evt.target || accordion === evt.target || button === evt.target || accordionTitle === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  Array.prototype.forEach.call(accordionParents, function (accordionParent) {
    var accordionPane = accordionParent.querySelector('.accordion__pane');
    accordionPane.classList.add('accordion__pane--hidden');
    accordionParent.addEventListener('click', toggleAccordion);
  });
})();
