import elements from './elements';
import bookForm from './bookForm';

const bookTable = (e) => {
  e.preventDefault();
  const { content } = elements.elements();
  content.removeChild(content.children[1]);

  const main = document.createElement('div');
  main.innerHTML = bookForm.form;
  content.appendChild(main);
};

export default { bookTable };