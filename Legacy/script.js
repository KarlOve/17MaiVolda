document.addEventListener('click', function(event) {
  var dropdown = document.querySelector('.nav-dropdown');
  var toggle = document.querySelector('.dropdown-toggle');
  if (!dropdown || !toggle) return;
  if (dropdown.contains(event.target)) {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    dropdown.classList.toggle('open', !expanded);
  } else {
    toggle.setAttribute('aria-expanded', 'false');
    dropdown.classList.remove('open');
  }
});
