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
  const wrapper = document.createElement('div');
  const main = document.createElement('div');
  const info = document.createElement('div');

  wrapper.id = 'wrapperId';

  if (wrapper.childElementCount !== 0) {
    wrapper.innerHTML = '';
  }
  main.innerHTML = mainContainer.container;
  navbar.innerHTML = navbarSection.navbar;
  main.innerHTML = mainSection.specialDishes;
  info.innerHTML = infoStore.storeDetails;

  container.classList.add('test');
  content.appendChild(container);
  container.appendChild(navbar);
  container.appendChild(wrapper);
  wrapper.appendChild(main);
  wrapper.appendChild(info);

  eListeners.listeners(elements.elements());
};

export default { homePage };