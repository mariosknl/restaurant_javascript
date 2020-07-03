/* eslint-disable import/no-cycle */

import navbarSection from './navbar';
import elements from './elements';
import eListeners from './eventListeners';
import home from './homeLayout';


const structure = () => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const navbar = document.createElement('nav');
  const wrapper = document.createElement('div');
  const main = document.createElement('div');
  const info = document.createElement('div');

  navbar.innerHTML = navbarSection.navbar;

  wrapper.id = 'wrapperId';


  content.appendChild(container);
  container.appendChild(navbar);
  container.appendChild(wrapper);

  home.home(main, info);
  wrapper.appendChild(main);
  wrapper.appendChild(info);
};


const homePage = () => {
  if (!document.getElementById('wrapperId')) {
    structure();
  } else {
    const wrapper = document.getElementById('wrapperId');
    const main = document.createElement('div');
    const info = document.createElement('div');
    wrapper.innerHTML = '';
    home.home(main, info);
    wrapper.appendChild(main);
    wrapper.appendChild(info);
  }

  eListeners.listeners(elements.elements());
};

export default { homePage, structure };