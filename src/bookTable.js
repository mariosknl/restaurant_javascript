import actions from './elements';
import bookForm from './bookForm';

const bookTable = (e) => {
  e.preventDefault();
  const { test } = actions.elements();
  test.removeChild(test.lastChild);

  const main = document.createElement('div');
  main.innerHTML = bookForm.form;
  test.appendChild(main);
};

export default { bookTable };