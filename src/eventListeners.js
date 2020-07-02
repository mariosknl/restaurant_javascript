/* eslint-disable import/no-cycle */
import page from './bookTable';
import Site from './homePage';
import mPage from './menuPage';

const listeners = (actions) => {
  const {
    homeBtn, tableBtn, menuBtn,
  } = actions;

  homeBtn.addEventListener('click', Site.homePage);
  tableBtn.addEventListener('click', page.bookTable);
  menuBtn.addEventListener('click', mPage.menuPage);
};

export default { listeners };