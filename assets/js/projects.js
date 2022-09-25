const closeModal = () => {
  modalContainer.classList.remove(OPEN_MODAL_CLASS);
  const body = document.body;
  body.style.overflow = 'auto';
};

const openModal = () => {
  modalContainer.classList.add(OPEN_MODAL_CLASS);
  const body = document.body;
  body.style.overflow = 'hidden';
};

const showModal = ({ name, description, tags, src, alt }) => {
  modaltitle.textContent = name;
  modalDescription.textContent = description;
  modalTags.textContent = tags;
  modalImg.setAttribute('src', src);
  modalImg.setAttribute('alt', alt);

  openModal();
};

const openProjectModal = ({ currentTarget: projectCard }) => {
  const name = projectCard.querySelector('h3').textContent;
  const tags = projectCard.querySelector('.project-tags').textContent;
  const description = projectCard.querySelector(
    '.project-description'
  ).textContent;
  const { src, alt } = projectCard.querySelector('img');
  showModal({ name, description, tags, src, alt });
};

const showMoreProjects = () => {
  const hasShowMoreClass = projectsGrid.classList.toggle('show-more');
  showMoreBtn.textContent = hasShowMoreClass ? 'Ver Menos' : 'Ver Mais';
};

const projectsGrid = document.querySelector('.projects__grid');
const projectsGridCards = projectsGrid.querySelectorAll(
  '.projects__grid__card'
);
const showMoreBtn = document.querySelector('.show-more-btn');
showMoreBtn.addEventListener('click', showMoreProjects);

projectsGridCards.forEach((card) => {
  card.addEventListener('click', openProjectModal);
});

const OPEN_MODAL_CLASS = 'open-modal';
const modal = document.getElementById('projects-modal');
const modalContainer = modal.parentNode;
const modaltitle = modal.querySelector('.projects-modal__title');
const modalDescription = modal.querySelector('.projects-modal__description');
const modalTags = modal.querySelector('.projects-modal__tags');
const modalImg = modal.querySelector('.projects-modal__thumb');
const modalCloseBtn = modal.querySelector('.projects-modal__close-btn');

modalContainer.addEventListener('click', ({ target }) => {
  if (target === modalContainer || target === modalCloseBtn) {
    closeModal();
  }
});
