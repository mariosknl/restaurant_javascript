/* eslint-disable import/no-cycle */

import page from './bookTable';
import Site from './homePage';

const listeners = (actions) => {
  const {
    homeBtn, tableBtn, menuBtn,
  } = actions;

  homeBtn.addEventListener('click', Site.homePage);
  tableBtn.addEventListener('click', page.bookTable);
  menuBtn.addEventListener('click', page.menuPage);
};

export default { listeners };