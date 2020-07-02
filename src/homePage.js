/* eslint-disable import/no-cycle */

import mainContainer from './container';
import navbarSection from './navbar';
import mainSection from './mainSection';
import infoStore from './info';
import elements from './elements';
import eListeners from './eventListeners';

const homePage = () => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const navbar = document.createElement('nav');
  const main = document.createElement('div');
  const info = document.createElement('div');

  mainContainer.innerHTML = mainContainer.container;
  navbar.innerHTML = navbarSection.navbar;
  main.innerHTML = mainSection.specialDishes;
  info.innerHTML = infoStore.storeDetails;

  content.appendChild(navbar);
  content.appendChild(container);
  container.appendChild(main);
  container.appendChild(info);

  eListeners.listeners(elements.elements());
  // }
};

export default { homePage };