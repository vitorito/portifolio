import './projects.js';
import './skills.js';

const menu = document.querySelector('.menu');

const toggleMenu = () => menu.classList.toggle('open');


menu.addEventListener('click', toggleMenu);
