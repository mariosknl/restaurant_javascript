import el from './elements';


if (el.wrapper.childNodes.includes === document.getElementsByTagName('div')) {
  el.wrapper.innerHTML = '';
}

const homePage2 = () => {
  const wrapper = document.createElement('div');
  const main = document.createElement('div');
  const info = document.createElement('div');

  wrapper.id = 'wrapperId';

  // main.innerHTML = mainSection.specialDishes;
  // info.innerHTML = infoStore.storeDetails;
  // container.appendChild(wrapper);
  wrapper.appendChild(main);
  wrapper.appendChild(info);
};