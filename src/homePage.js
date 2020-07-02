import mainContainer from './container';
import navbarSection from './navbar';
import mainSection from './mainSection';

const homePage = () => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  mainContainer.innerHTML = mainContainer.container;
  content.appendChild(container);
  const navbar = document.createElement('nav');
  navbar.innerHTML = navbarSection.navbar;
  container.appendChild(navbar);
  const main = document.createElement('div');
  main.innerHTML = mainSection.specialDishes;
  content.appendChild(main);
};

export default { homePage };