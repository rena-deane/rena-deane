import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

// import Routes from './routes';
import Routes from 'config/routes';

require('./styles/animate.css');
require('./styles/global.css');
// touch our index.html for bundle
require('./index.html');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#container')
);

if (module && module.hot) module.hot.accept();
