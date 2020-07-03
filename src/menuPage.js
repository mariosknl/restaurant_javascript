import actions from './elements';
import menu from './menuLayout';

const menuPage = () => {
  const { test } = actions.elements();
  test.removeChild(test.lastChild);

  const main = document.createElement('div');
  main.innerHTML = menu.showMenu;
  test.appendChild(main);
};

export default { menuPage };