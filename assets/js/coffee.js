const coffee = document.getElementById('coffee');

const updateCoffeeLevel = (entries) => {
  const intersectionRatio = entries[0].intersectionRatio;
  const coffeeHeight = parseFloat(getComputedStyle(coffee).height);
  const coffeeLevel = (coffeeHeight - (coffeeHeight * intersectionRatio)) / 2;
  coffee.style.backgroundPositionY = coffeeLevel + 'px';
};

const generateTreshold = ({ start = 0, end = 1, step }) => {
  const threshold = [];
  for (let i = start; i <= end; i += step) {
    threshold.push(i);
  }
  return threshold;
};

const getRootMargin = () => {
  const isDesktop = window.innerWidth >= 1024;
  const marginTop = isDesktop ? '-30%' : '-60%';
  return `${marginTop} 0px 0px 0px`;
};

const observer = new IntersectionObserver(updateCoffeeLevel, {
  threshold: generateTreshold({ step: 0.2 }),
  rootMargin: getRootMargin()
});

observer.observe(coffee);

