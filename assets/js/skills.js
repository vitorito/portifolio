const getSkillDescription = (skill) => {
    return skill.querySelector('.skill-description').textContent;
};

const animateTextChange = () => {
    activeSkillDescription.classList.remove('text-change');
    setTimeout(() => {
        activeSkillDescription.classList.add('text-change');
    }, 10);
};

const changeActiveSkill = ({ currentTarget: skill }) => {
    skill.classList.add('active-skill');
    activeSkillDescription.textContent = getSkillDescription(skill);

    skills.forEach(s => {
        if (s !== skill) s.classList.remove('active-skill');
    });

    animateTextChange();
};

const skills = document.querySelectorAll('.skill');
const activeSkillDescription = document.querySelector('.active-skill-description');

skills.forEach(skill => {
    skill.addEventListener('click', changeActiveSkill);
});

changeActiveSkill({ currentTarget: skills[ 0 ] });
