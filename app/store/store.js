import { createStore } from 'redux';
import completedPages from 'reducers/completeTask';

const store = createStore(completedPages);

// store.subscribe(() => console.log('STORE :', store.getState()));

export default store;
