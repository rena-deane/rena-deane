import store from 'store/store';
import getLocation from 'services/getLocation';

function getPageUnlocked() {
  const completedPages = store.getState();
  return completedPages.indexOf(getLocation()) > -1;
}

export default getPageUnlocked;
