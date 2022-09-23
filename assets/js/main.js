import './projects.js';
import './skills.js';

const closeMenu = () => menu.classList.remove('open');

const toggleMenu = () => {
  menu.classList.toggle('open');
}

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

menu.addEventListener('click', closeMenu);
