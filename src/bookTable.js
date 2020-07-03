import actions from './elements';
import bookForm from './bookForm';

const bookTable = (e) => {
  e.preventDefault();
  const { wrapper } = actions.elements();
  wrapper.innerHTML = '';

  const main = document.createElement('div');
  main.innerHTML = bookForm.form;
  wrapper.appendChild(main);
};

export default { bookTable };