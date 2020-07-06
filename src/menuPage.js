import actions from './elements';
import menu from './menuLayout';

const menuPage = () => {
  const { wrapper } = actions.elements();
  wrapper.removeChild(wrapper.lastChild);

  const main = document.createElement('div');
  main.innerHTML = menu.showMenu;
  wrapper.appendChild(main);
};

export default { menuPage };