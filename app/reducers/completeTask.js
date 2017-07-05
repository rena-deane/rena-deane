// import store from 'store/store';
import getLocation from 'services/getLocation';

const completeTask = (state = [], { type, data }) => {
  if (type === 'UPDATE') {
    return data;
  }
  return state;
};

const unlock = state => ({
  unlocked: state.indexOf(getLocation()) > -1
});

export default completeTask;
export {
  unlock
};
