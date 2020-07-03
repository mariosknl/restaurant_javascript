/* eslint-disable import/no-cycle */
import Site from './homePage';
import page from './bookTable';
import mPage from './menuPage';
import el from './elements';
import functions from './functions';

const listeners = (actions) => {
  const {
    homeBtn, tableBtn, menuBtn,
  } = actions;

  homeBtn.addEventListener('click', Site.homePage);
  tableBtn.addEventListener('click', page.bookTable);
  menuBtn.addEventListener('click', mPage.menuPage);

  const { triggers } = el.elements();

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', functions.handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', functions.handleLeave));
};

export default { listeners };