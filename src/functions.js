import el from './elements';

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  const { background } = el.elements();
  background.classList.add('open');
  const { nav } = el.elements();

  const dropdown = this.querySelector('.dropdown');

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left - 15}px, ${coords.top}px`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  const { background } = el.elements();
  background.classList.remove('open');
}

export default { handleEnter, handleLeave };