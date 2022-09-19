import openProjectModal from './projectModal.js';
import './skills.js';

const menu = document.querySelector('.menu');
const projectsGrid = document.querySelector('.projects__grid');
const projectsGridCards = projectsGrid.querySelectorAll(
  '.projects__grid__card'
);
const showMoreBtn = document.querySelector('.show-more-btn');

const toggleMenu = () => menu.classList.toggle('open');

const showMoreProjects = () => {
  const hasShowMoreClass = projectsGrid.classList.toggle('show-more');
  showMoreBtn.textContent = hasShowMoreClass ? 'Ver Menos' : 'Ver Mais';
};

menu.addEventListener('click', toggleMenu);
showMoreBtn.addEventListener('click', showMoreProjects);

projectsGridCards.forEach((card) => {
  card.addEventListener('click', openProjectModal);
});
