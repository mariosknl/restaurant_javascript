// import elements from './elements';
import navbarSection from './navbar';

const homePage = () => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.innerHTML = `<div class="container-fluid h-100 pt-5 w-100 bg-light">
  <div class="container mt-3 shadow-lg content">
  </div>
  </div>`;
  content.appendChild(container);
  const navbar = document.createElement('nav');
  navbar.innerHTML = navbarSection.navbar;
  container.appendChild(navbar);
  // content.innerHTML = `<div class="container-fluid h-100 pt-5 w-100 bg-light">
  // <div class="container mt-3 shadow-lg content">
  // </div>
  // </div>`;
  // content.appendChild(navbarSection);
};

export default { homePage };