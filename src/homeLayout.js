import mainSection from './mainSection';
import infoStore from './info';

const home = (main, info) => {
  main.innerHTML = mainSection.specialDishes;
  info.innerHTML = infoStore.storeDetails;
};

export default { home };