/* eslint-disable import/no-cycle */
import actions from './elements';
import page from './bookTable';
import Site from './homePage';

const listeners = () => {
  const {
    homeBtn, tableBtn,
  } = actions;

  homeBtn.addEventListener('click', Site.homePage);
  tableBtn.addEventListener('click', page.bookTable);
  // menuBtn.addEventListener('click', mPage.menuPage);
};

export default { listeners };