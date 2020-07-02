import el from './elements';

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
  const { background } = el.elements();
  background.classList.add('open');
  // const { nav } = el.elements();

  const dropdown = this.querySelector('.dropdown');

  const dropdownCoords = dropdown.getBoundingClientRect();
  // const navCoords = nav.getBoundingClientRect();
  // console.log(dropdownCoords);

  const coords = {
    height: dropdownCoords.height,
    // eslint-disable-next-line comma-dangle
    width: dropdownCoords.width
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  const { background } = el.elements();
  background.classList.remove('open');
}

export default { handleEnter, handleLeave };