(function () {
  'use strict';

  // Toggle "More" chevron expanded state for accessibility
  var moreItem = document.querySelector('.menu-item--more');
  if (moreItem) {
    var toggle = function () {
      var expanded = moreItem.getAttribute('aria-expanded') === 'true';
      moreItem.setAttribute('aria-expanded', (!expanded).toString());
      // rotate chevron when expanded
      var chev = moreItem.querySelector('.menu-item__chev');
      if (chev) {
        chev.style.transform = (!expanded) ? 'rotate(-135deg)' : 'rotate(45deg)';
      }
    };
    moreItem.addEventListener('click', toggle);
    moreItem.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  }

  // Dropdowns - only cosmetic toggles
  function initDropdown(sel) {
    var el = document.querySelector(sel);
    if (!el) return;
    el.addEventListener('click', function () {
      var expanded = el.getAttribute('aria-expanded') === 'true';
      el.setAttribute('aria-expanded', (!expanded).toString());
      var chev = el.querySelector('.dropdown__chev');
      if (chev) {
        chev.style.transform = (!expanded) ? 'rotate(-135deg)' : 'rotate(45deg)';
      }
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  }

  initDropdown('.dropdown--partners');
  initDropdown('.dropdown--properties');

  // No-op search field placeholder interaction
  var searchField = document.querySelector('.field--search');
  if (searchField) {
    searchField.setAttribute('role', 'search');
  }
})();
