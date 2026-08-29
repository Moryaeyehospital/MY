// Mobile navigation and small quality-of-life interactions.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuButton.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}"></i>`;
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

document.querySelector('#year').textContent = new Date().getFullYear();
