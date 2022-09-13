const closeModal = () => {
  modalContainer.classList.remove(OPEN_MODAL_CLASS);
};
const openModal = () => {
  modalContainer.classList.add(OPEN_MODAL_CLASS);
};

const showModal = ({ name, description, tags, src, alt }) => {
  modalTittle.textContent = name;
  modalDescription.textContent = description;
  modalTags.textContent = tags;
  modalImg.setAttribute('src', src);
  modalImg.setAttribute('alt', alt);

  openModal();
};

const openProjectModal = ({ target: projectCard }) => {
  console.log(132323);
  const name = projectCard.querySelector('h3').textContent;
  const tags = projectCard.querySelector('.project-tags').textContent;
  const description = projectCard.querySelector(
    '.project-description'
  ).textContent;
  const { src, alt } = projectCard.querySelector('img');
  showModal({ name, description, tags, src, alt });
};

const OPEN_MODAL_CLASS = 'open-modal';

const modal = document.getElementById('projects-modal');
const modalContainer = modal.parentNode;
const modalTittle = modal.querySelector('.projects-modal__title');
const modalDescription = modal.querySelector('.projects-modal__description');
const modalTags = modal.querySelector('.projects-modal__tags');
const modalImg = modal.querySelector('.projects-modal__thumb');
const modalCloseBtn = modal.querySelector('.projects-modal__close-btn');

modalContainer.addEventListener('click', ({ target }) => {
  if (target === modalContainer || target === modalCloseBtn) {
    closeModal();
  }
});

export default openProjectModal;
