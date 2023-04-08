const menuIcon = document.querySelector('.header-menu-icon');
const menuItems = document.querySelector('.header-logo-menu-item');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  menuItems.classList.toggle('show');
});