import actions from './elements';
import menu from './menuLayout';

const menuPage = (e) => {
  e.preventDefault();
  const { test } = actions.elements();
  test.removeChild(test.lastChild);

  const main = document.createElement('div');
  main.innerHTML = menu.showMenu;
  test.appendChild(main);
};

export default { menuPage };